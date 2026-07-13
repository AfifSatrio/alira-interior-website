"use client"

import { useEffect, useRef } from "react"
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Underline,
} from "lucide-react"

type PortableChild = {
  _type: "span"
  text: string
  marks?: string[]
}

type PortableBlock = {
  _type: "block"
  style?: string
  listItem?: "bullet" | "number"
  level?: number
  children: PortableChild[]
}

const emptyContent = JSON.stringify([
  {
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text: "" }],
  },
])

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

const markTags: Record<string, (text: string) => string> = {
  strong: (text) => `<strong>${text}</strong>`,
  em: (text) => `<em>${text}</em>`,
  underline: (text) => `<u>${text}</u>`,
  "font-small": (text) => `<span style="font-size: 0.875rem">${text}</span>`,
  "font-large": (text) => `<span style="font-size: 1.25rem">${text}</span>`,
}

const headingStyles = ["h1", "h2", "h3", "h4", "h5", "h6"]

function portableTextToHtml(value: string) {
  try {
    const blocks = JSON.parse(value) as PortableBlock[]
    if (!Array.isArray(blocks)) return ""

    const html: string[] = []
    let listType: "bullet" | "number" | null = null
    let listItems: string[] = []

    const flushList = () => {
      if (!listType || listItems.length === 0) return
      const tag = listType === "bullet" ? "ul" : "ol"
      html.push(`<${tag}>${listItems.join("")}</${tag}>`)
      listType = null
      listItems = []
    }

    blocks.forEach((block) => {
        const content = (block.children || [])
          .map((child) => {
            const text = escapeHtml(child.text || "")
            return (child.marks || []).reduce((acc, mark) => {
              return markTags[mark] ? markTags[mark](acc) : acc
            }, text)
          })
          .join("")

        if (block.listItem) {
          if (listType !== block.listItem) flushList()
          listType = block.listItem
          listItems.push(`<li>${content || "<br>"}</li>`)
          return
        }

        flushList()

        const tag = headingStyles.includes(block.style || "")
          ? block.style
          : block.style === "blockquote"
            ? "blockquote"
            : "p"

        html.push(`<${tag}>${content || "<br>"}</${tag}>`)
      })

    flushList()

    return html.join("")
  } catch {
    return ""
  }
}

function styleFromElement(element: Element) {
  const tag = element.tagName.toLowerCase()
  if (headingStyles.includes(tag)) return tag
  if (tag === "blockquote") return "blockquote"
  return "normal"
}

function collectChildren(node: Node, activeMarks: string[] = []): PortableChild[] {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent
      ? [{ _type: "span", text: node.textContent, marks: activeMarks }]
      : []
  }

  if (!(node instanceof HTMLElement)) return []

  const tag = node.tagName.toLowerCase()
  const marks = [...activeMarks]
  const fontSize = node.getAttribute("size")
  const textDecoration = node.style.textDecoration || node.style.textDecorationLine

  if ((tag === "strong" || tag === "b") && !marks.includes("strong")) marks.push("strong")
  if ((tag === "em" || tag === "i") && !marks.includes("em")) marks.push("em")
  if ((tag === "u" || textDecoration.includes("underline")) && !marks.includes("underline")) {
    marks.push("underline")
  }
  if (tag === "font" && fontSize === "2" && !marks.includes("font-small")) marks.push("font-small")
  if (tag === "font" && fontSize === "5" && !marks.includes("font-large")) marks.push("font-large")

  const children = Array.from(node.childNodes).flatMap((child) => collectChildren(child, marks))
  return children.length ? children : [{ _type: "span", text: "", marks }]
}

function elementToBlock(element: HTMLElement, listItem?: "bullet" | "number"): PortableBlock {
  const children = collectChildren(element)

  return {
    _type: "block",
    style: styleFromElement(element),
    ...(listItem ? { listItem, level: 1 } : {}),
    children: children.length ? children : [{ _type: "span", text: "" }],
  }
}

function editorHtmlToPortableText(html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html")
  const root = doc.body.firstElementChild
  if (!root) return emptyContent

  const blocks = Array.from(root.childNodes).flatMap((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim()
      return text
        ? [
            {
              _type: "block",
              style: "normal",
              children: [{ _type: "span", text }],
            } satisfies PortableBlock,
          ]
        : []
    }

    if (!(node instanceof HTMLElement)) return []

    const tag = node.tagName.toLowerCase()
    if (tag === "ul" || tag === "ol") {
      return Array.from(node.children)
        .filter((child): child is HTMLElement => child instanceof HTMLElement && child.tagName.toLowerCase() === "li")
        .map((item) => elementToBlock(item, tag === "ul" ? "bullet" : "number"))
    }

    return [elementToBlock(node)]
  })

  return JSON.stringify(blocks.length ? blocks : JSON.parse(emptyContent))
}

const toolbarButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D8CABB] bg-white text-[#5F4D3D] shadow-sm transition-colors hover:border-[#B8946A] hover:bg-[#F1E8DE] hover:text-[#2C1F0E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8946A]/30"

export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  const editorRef = useRef<HTMLDivElement>(null)
  const lastSyncedValueRef = useRef("")

  useEffect(() => {
    const editor = editorRef.current
    if (!editor) return
    if (value === lastSyncedValueRef.current) return
    editor.innerHTML = portableTextToHtml(value)
  }, [value])

  const syncValue = () => {
    const editor = editorRef.current
    if (!editor) return
    const nextValue = editorHtmlToPortableText(editor.innerHTML)
    lastSyncedValueRef.current = nextValue
    onChange(nextValue)
  }

  const runCommand = (command: string, commandValue?: string) => {
    document.execCommand(command, false, commandValue)
    editorRef.current?.focus()
    syncValue()
  }

  const blockCommand = (tag: string) => runCommand("formatBlock", tag)

  return (
    <div className="overflow-hidden rounded-xl border border-[#e2dcd5] bg-white">
      <input type="hidden" name="content" value={value || emptyContent} readOnly />
      <div className="flex flex-wrap items-center gap-2.5 border-b border-[#ede8e2] bg-[#FFFCF8] p-3.5">
        <select
          className="h-10 rounded-lg border border-[#D8CABB] bg-white px-3 text-[13px] font-medium text-[#5F4D3D] shadow-sm outline-none transition-colors hover:border-[#B8946A] focus:border-[#B8946A] focus:ring-2 focus:ring-[#B8946A]/20"
          defaultValue="p"
          onChange={(event) => blockCommand(event.target.value)}
          title="Text style"
        >
          <option value="p">Normal</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </select>
        <span className="mx-0.5 h-8 w-px bg-[#e2dcd5]" />
        <button type="button" className={toolbarButton} onClick={() => runCommand("bold")} title="Bold">
          <Bold size={17} />
        </button>
        <button type="button" className={toolbarButton} onClick={() => runCommand("italic")} title="Italic">
          <Italic size={17} />
        </button>
        <button type="button" className={toolbarButton} onClick={() => runCommand("underline")} title="Underline">
          <Underline size={17} />
        </button>
        <span className="mx-0.5 h-8 w-px bg-[#e2dcd5]" />
        <button type="button" className={toolbarButton} onClick={() => blockCommand("blockquote")} title="Quote">
          <Quote size={17} />
        </button>
        <button type="button" className={toolbarButton} onClick={() => runCommand("insertUnorderedList")} title="Bullet list">
          <List size={17} />
        </button>
        <button type="button" className={toolbarButton} onClick={() => runCommand("insertOrderedList")} title="Numbered list">
          <ListOrdered size={17} />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={syncValue}
        onBlur={syncValue}
        className="min-h-[500px] w-full bg-[#F9F6F1] px-5 py-5 text-[15px] leading-7 text-[#2C1F0E] outline-none prose prose-neutral max-w-none prose-headings:font-poppins prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base prose-blockquote:border-[#B8946A] prose-blockquote:text-[#5F4D3D]"
      />
    </div>
  )
}

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ReqBody = {
  name?: string
  email?: string
  message?: string
  phone?: string
}

const RATE_LIMIT_WINDOW = 1000 * 60 
const RATE_LIMIT_MAX = 6
const rateMap = new Map<string, { count: number; resetAt: number }>()

function getIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return "unknown"
}

function sanitize(input: string) {
  return String(input || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req)
    const now = Date.now()
    const prev = rateMap.get(ip)

    if (prev && now < prev.resetAt && prev.count >= RATE_LIMIT_MAX) {
      return NextResponse.json({ error: "Terlalu banyak permintaan. Coba lagi nanti." }, { status: 429 })
    }

    if (!prev || now >= (prev.resetAt || 0)) {
      rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      rateMap.set(ip, { count: prev.count + 1, resetAt: prev.resetAt })
    }

    const body = await req.json() as ReqBody
    const { name, email, message, phone } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Semua field wajib diisi." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 })
    }

    const host = process.env.EMAIL_HOST
    const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 465
    const secure = (process.env.EMAIL_SECURE ?? "true") === "true"

    if (!host || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email env vars")
      return NextResponse.json({ error: "Server email tidak dikonfigurasi." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const to = process.env.EMAIL_TO || process.env.EMAIL_USER

    const brandColor = "#CEAB93";
    const brandDark  = "#3d2f1e";
    const siteName   = "Alira Interior";

    const html = `
    <!doctype html>
    <html lang="id">
    <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>Pesan Baru - ${siteName}</title>
    <style>
    html,body{margin:0;padding:0;background:#f0ebe5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
    img{border:0;display:block;line-height:100%;outline:none;text-decoration:none;}
    a{color:inherit;text-decoration:none;}
    table{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}
    td{border-collapse:collapse;}
    @media only screen and (max-width:600px){
        .inner-card{border-radius:16px !important;}
        .body-pad{padding:24px 20px !important;}
        .footer-pad{padding:16px 20px !important;}
        .meta-col{display:block !important;width:100% !important;padding:0 0 12px 0 !important;}
    }
    </style>
    </head>
    <body style="margin:0;padding:40px 0;background:#f0ebe5;font-family:'DM Serif Display',Georgia,serif;color:#1a1208;">

    <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center" style="padding:0 20px;">
        <table class="inner-card" role="presentation" width="620" cellpadding="0" cellspacing="0"
            style="max-width:620px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;
                box-shadow:0 2px 4px rgba(60,40,10,.06),0 20px 60px rgba(60,40,10,.12);">

            <!-- ══ HEADER ══ -->
            <tr>
            <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="background-image:url('https://cdn.sanity.io/images/k6bxd983/alira-studio/aea772261cd4a4c72dc8d0fcc4a72c755df8e6cc-1280x720.jpg');
                            background-position:center;background-size:cover;background-repeat:no-repeat;">
                    <div style="background:linear-gradient(160deg,rgba(15,10,5,.72) 0%,rgba(30,20,8,.48) 60%,rgba(206,171,147,.18) 100%);
                                padding:40px 36px 36px;">

                        <!-- Brand -->
                        <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding-right:14px;">
                            <div style="width:3px;height:40px;background:${brandColor};border-radius:2px;"></div>
                            </td>
                            <td style="vertical-align:middle;">
                            <div style="font-family:'DM Serif Display',Georgia,serif;font-size:22px;font-weight:700;color:#fff;letter-spacing:1.5px;line-height:1.1;">ALIRA</div>
                            <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:400;color:rgba(255,255,255,.65);letter-spacing:4px;text-transform:uppercase;margin-top:3px;">Interior Studio</div>
                            </td>
                        </tr>
                        </table>

                        <!-- Badge + subtitle -->
                        <div style="margin-top:28px;">
                        <div style="display:inline-block;background:rgba(206,171,147,.22);border:1px solid rgba(206,171,147,.5);border-radius:999px;padding:5px 14px;">
                            <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#e8d4c4;">Pesan Baru Diterima</span>
                        </div>
                        <div style="margin-top:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:rgba(255,255,255,.6);letter-spacing:.3px;">
                            Seseorang menghubungi melalui formulir kontak website
                        </div>
                        </div>

                    </div>
                    </td>
                </tr>
                </table>
            </td>
            </tr>

            <!-- Accent bar -->
            <tr><td><div style="height:3px;background:linear-gradient(90deg,${brandColor} 0%,#e8d0bc 50%,#f3ece7 100%);"></div></td></tr>

            <!-- ══ META INFO ══ -->
            <tr>
            <td class="body-pad" style="padding:32px 36px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="meta-col" style="width:50%;vertical-align:top;padding-right:10px;padding-bottom:14px;">
                    <div style="background:#faf8f6;border:1px solid #ede8e2;border-radius:12px;padding:16px 18px;">
                        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${brandColor};margin-bottom:8px;">Nama</div>
                        <div style="font-family:'DM Serif Display',Georgia,serif;font-size:15px;color:#1a1208;">${sanitize(name)}</div>
                    </div>
                    </td>
                    <td class="meta-col" style="width:50%;vertical-align:top;padding-left:10px;padding-bottom:14px;">
                    <div style="background:#faf8f6;border:1px solid #ede8e2;border-radius:12px;padding:16px 18px;">
                        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${brandColor};margin-bottom:8px;">Email</div>
                        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#3d2f1e;">
                        <a href="mailto:${sanitize(email)}" style="color:#3d2f1e;border-bottom:1px solid ${brandColor};">${sanitize(email)}</a>
                        </div>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding-bottom:4px;">
                    <div style="background:#faf8f6;border:1px solid #ede8e2;border-radius:12px;padding:14px 18px;">
                        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${brandColor};margin-bottom:5px;">Waktu Dikirim</div>
                        <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#6b5c4a;">
                        ${new Date().toLocaleString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit' })}
                        </div>
                    </div>
                    </td>
                </tr>
                </table>
            </td>
            </tr>

            <!-- Divider -->
            <tr>
            <td style="padding:24px 36px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="border-top:1px solid #ede8e2;font-size:0;line-height:0;">&nbsp;</td></tr>
                </table>
            </td>
            </tr>

            <!-- ══ MESSAGE ══ -->
            <tr>
            <td style="padding:24px 36px 36px;">
                <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${brandColor};margin-bottom:16px;">Isi Pesan</div>
                <div style="border-left:3px solid ${brandColor};background:#fdfcfb;border-radius:0 12px 12px 0;padding:20px 22px;">
                <div style="font-family:'DM Serif Display',Georgia,serif;font-size:15px;line-height:1.75;color:#2c1f0f;white-space:pre-wrap;">${sanitize(message)}</div>
                </div>
            </td>
            </tr>

            <!-- ══ FOOTER ══ -->
            <tr>
            <td><div style="height:1px;background:#ede8e2;margin:0 36px;"></div></td>
            </tr>
            <tr>
            <td class="footer-pad" style="padding:22px 36px 28px;background:#fdfcfb;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="vertical-align:middle;">
                    <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;color:#b8a898;letter-spacing:.3px;">
                        Dikirim via formulir kontak &bull; ${siteName}
                    </div>
                    </td>
                    <td style="text-align:right;vertical-align:middle;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-table;">
                        <tr>
                        <td style="background:${brandColor};border-radius:999px;box-shadow:0 4px 14px rgba(206,171,147,.45);">
                            <a href="mailto:${sanitize(email)}"
                            style="display:inline-block;padding:11px 24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
                                    font-size:13px;font-weight:700;letter-spacing:.8px;color:#ffffff;text-decoration:none;
                                    border-radius:999px;white-space:nowrap;">
                            Balas Email &rarr;
                            </a>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </td>
            </tr>

            <!-- Bottom strip -->
            <tr>
            <td>
                <div style="height:5px;background:linear-gradient(90deg,${brandDark} 0%,${brandColor} 50%,${brandDark} 100%);border-radius:0 0 20px 20px;"></div>
            </td>
            </tr>

        </table>

        <!-- Below-card note -->
        <div style="margin-top:20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#b8a898;text-align:center;letter-spacing:.3px;">
            &copy; Alira Interior Studio &bull; Email otomatis, tidak perlu dibalas langsung ke alamat ini
        </div>
        </td>
    </tr>
    </table>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to,
      subject: `Pesan Dari ${sanitize(name)} — ${sanitize(email)}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Gagal mengirim pesan. Silakan coba lagi nanti." }, { status: 500 })
  }
}
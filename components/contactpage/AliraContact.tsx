interface Contact {
    whatsappNumber: string
    email: string
    address: string
}

const AliraContact = ({ contact }: { contact: Contact }) => {
  return (
    <div className="flex flex-col gap-4 mt-5">
        <span className="text-sm">Phone <br /><p className="text-lg font-semibold">{contact?.whatsappNumber}</p></span>
        <span className="text-sm">Email <br /><p className="text-lg font-semibold">{contact?.email}</p></span>
        <span className="text-sm">Address <br /><p className="text-lg font-semibold">{contact?.address}</p></span>
    </div>
  )
}

export default AliraContact
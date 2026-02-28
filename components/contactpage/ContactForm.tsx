const ContactForm = () => {
  return (
    <form className="flex flex-col w-full gap-3 transition-all font-poppins">
      <label htmlFor="name" className="font-semibold text-sm">Nama Anda</label>
        <input type="text" className=" p-4 rounded-md border-2 border-alira" required/>
      <label htmlFor="email" className="font-semibold text-sm">Email</label>
        <input type="text" className="p-4 rounded-md border-2 border-alira" required/>
      <label htmlFor="message" className="font-semibold text-sm" >Pesan</label>
      <textarea 
        cols={30}
        rows={5}
        className=" p-4 rounded-md border-2 border-alira">
      </textarea>
      <button className="w-fit bg-alira px-6 py-2.5 rounded-md mt-4 transition-all cursor-pointer hover:bg-white hover:border-2 hover:border-alira">
        <span className="text-sm font-semibold">Kirim Pesan</span>
      </button>
    </form>
  )
}

export default ContactForm
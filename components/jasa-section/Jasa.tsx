const Jasa = () => {
  return (
    <div className="my-20 mx-auto max-w-6xl">
      <div className="grid grid-cols-2">
        <h1 className="text-4xl font-poppins font-black ml-20">
          Merancang Pengalaman, Bukan Sekadar Ruang
        </h1>
        <span className="block text-lg font-poppins font-light mx-20">
          Kami menghadirkan solusi interior secara menyeluruh, bukan sekadar membangun ruang, tetapi menciptakan pengalaman dan identitas di dalamnya.
        </span>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-8 mt-10">
        <div className="relative bg-[url('/bg/bg-1.webp')] h-130 w-full rounded-md bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 rounded-md"/>
          <div className="absolute bg-white/10 backdrop-blur-xl rounded-md p-6 mx-5 bottom-5 flex flex-col gap-2 border border-white/30">
            <span className="text-white font-bold">Kebutuhan Interior</span>
            <p className="text-white font-light leading-5">Melayani berbagai kebutuhan interior untuk kantor, apartemen, toko, mall, institusi pendidikan, rumah sakit, rumah, villa, cafe, dan berbagai kebutuhan lainnya.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative bg-[url('/bg/bg-1.webp')] h-62 rounded-md bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 rounded-md"/>
            <div className="absolute bg-white/10 backdrop-blur-xl rounded-md py-3 px-8 mx-5 bottom-5 flex flex-col gap-2 w-56 border border-white/30">
              <span className="text-white font-bold text-center">Renovasi dan Rehabilitasi Interior</span>
            </div>
          </div>
          <div className="relative bg-[url('/bg/bg-1.webp')] h-62 rounded-md bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 rounded-md"/>
            <div className="absolute bg-white/10 backdrop-blur-xl rounded-md py-6 px-8 mx-5 bottom-5 flex flex-col gap-2 w-56 border border-white/30">
              <span className="text-white font-bold text-center">Jasa Desain Interior </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jasa
const Jasa = () => {
  return (
    <div className="my-20 mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
        <h1 className="lg:text-4xl text-3xl font-poppins font-black lg:ml-20 ml:0 mx-10 lg:mx-0">
          Merancang Pengalaman, Bukan Sekadar Ruang
        </h1>
        <span className="block lg:text-lg text-sm font-poppins font-light lg:mx-20 mx-10">
          Kami menghadirkan solusi interior secara menyeluruh, bukan sekadar membangun ruang, tetapi menciptakan pengalaman dan identitas di dalamnya.
        </span>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-8 mt-10 mx-10">
        <div className="relative bg-[url('/bg/bg-1.webp')] md:h-130 h-80 w-full rounded-md bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 rounded-md"/>
          <div className="absolute bg-white/10 backdrop-blur-xl rounded-md p-6 mx-5 bottom-5 flex flex-col gap-2 border border-white/30">
            <span className="text-white font-bold text-sm md:text-base">Kebutuhan Interior</span>
            <p className="text-white font-light leading-5 text-xs md:text-base">Melayani berbagai kebutuhan interior untuk kantor, apartemen, toko, mall, institusi pendidikan, rumah sakit, rumah, villa, cafe, dan berbagai kebutuhan lainnya.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative bg-[url('/bg/bg-1.webp')] h-62 rounded-md bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 rounded-md"/>
            <div className="absolute bg-white/10 backdrop-blur-xl rounded-md py-3 px-8 mx-5 bottom-5 flex flex-col gap-2 lg:w-56 w-fit border border-white/30">
              <span className="text-white font-bold text-center md:text-sm">Renovasi dan Rehabilitasi Interior</span>
            </div>
          </div>
          <div className="relative bg-[url('/bg/bg-1.webp')] h-62 rounded-md bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 rounded-md"/>
            <div className="absolute bg-white/10 backdrop-blur-xl rounded-md py-6 px-8 mx-5 bottom-5 flex flex-col gap-2 lg:w-56 w-fit border border-white/30">
              <span className="text-white font-bold text-center md:text-sm">Jasa Desain Interior </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jasa

export default function HeroSection() {
  return (
    <section className="relative w-full justify-center min-[1201px]:h-[100vh] min-[1201px]:min-h-[100vh] min-[1201px]:py-5 flex">
        <video autoPlay loop playsInline src="../src/assets/hero-landing.mp4" className="w-full h-full top-0 left-0 object-cover absolute z-0"></video>
        <div className="z-1 relative flex max-md:flex-col max-md:items-center justify-between max-w-[1250px] min-[1201px]: min-[1201px]:w-auto min-[1201px]:max-w-[1440px]">
            <div className="w-[50%] text-white p-15 max-md:w-full max-md:text-center ">
                <h1 className="text-4xl font-bold text-left max-md:text-xl max-md:text-center max-md:leading-8 min-[1201px]:leading-15 min-[1201px]:text-5xl">
                    Transform Your Vision into Digital Success
                    <br />
                    <span className="inline-flex items-center mt-[-60px] text-4xl max-md:text-xl min-[1201px]:text-5xl">
                        With
                        <img src="../src/assets/logo.png" className="w-41 h-51 min-[1201px]:w-51 min-[1201px]:h-61 max-md:w-35 max-md:h-25 breathe mt-2 pl-2" alt="logo" />
                    </span>
                </h1>
                <p className="text-lg max-md:text-sm min-[1201px]:text-2xl">Let us help you navigate the digital landscape with creativity and expertise!</p>
                <button className="px-4 py-1.5 min-[1201px]:px-6 min-[1201px]:py-2.5 min-[1201px]:mt-8 mt-5 ml-5 text-md min-[1201px]:text-lg bg-linear-to-r from-[#ef1372] to-[#2f0042] border-none rounded-xl cursor-pointer ">Contact Us</button>
            </div>
            <div className="w-[50%] max-md:w-full flex items-center justify-center relative">
                <img src="../src/assets/topright.png" alt="" className="rotate absolute min-[1201px]:top-22 min-[1201px]:right-30 w-6 h-6 min-[1201px]:h-10 min-[1201px]:w-10 invert opacity-50 right-15 top-17" />
                <div className="relative flex items-center">
                    <img src="../src/assets/star_circle.png" className="absolute rotate w-[310px] max-[1200px]:w-[210px] drop-shadow-[0px_0px_10px_#ffff33] top-[15%] left-[27%] min-[1201px]:top-[16%] min-[1201px]:left-[28%] z-[-1]" alt="" />
                    <img src="../src/assets/pink_circle.png" className="absolute w-[380px] max-[1200px]:w-[260px] drop-shadow-[0px_0px_10px_#f31aa0] top-[10%] left-[21%] min-[1201px]:top-[12%] min-[1201px]:left-[23%] z-[-1]" alt="" />
                    <img src="../src/assets/purple_circle.png" className="absolute rotateReverse w-[430px] max-[1200px]:w-[290px] drop-shadow-[0px_0px_10px_#622cf7] top-[6%] left-[17%] min-[1201px]:top-[8%] min-[1201px]:left-[19%] z-[-1]" alt="" />
                    <img src="../src/assets/hero_img.png" className="w-100 h-auto min-[1201px]:w-fit min-[1201px]:h-fit" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}


export default function HeroSection() {
  return (
    <section className="relative w-full justify-center min-[1201px]:h-[100vh] min-[1201px]:min-h-[100vh] min-[1201px]:py-5 flex">
        <video autoPlay loop playsInline src="../src/assets/hero-landing.mp4" className="w-full h-full top-0 left-0 object-cover  absolute z-0"></video>
        <div className="z-1 relative flex justify-between max-w-[1250px] px-40 min-[1201px]:px-0 min-[1201px]:w-auto min-[1201px]:max-w-[1440px]">
            <div className="w-[50%] text-white p-20">
                <h1 className="text-6xl font-bold text-left">
                    Transform Your Vision into Digital Success
                    <span className="inline-flex items-center mt-[-50px]">
                        With
                        <img src="../src/assets/logo.png" className="w-51 h-61 breathe pt-5 pl-2" alt="logo" />
                    </span>
                </h1>
                <p className="text-2xl">Let us help you navigate the digital landscape with creativity and expertise!</p>
                <button className="px-6 py-2.5 mt-8 ml-5 text-lg bg-linear-to-r from-[#ef1372] to-[#2f0042] border-none rounded-xl cursor-pointer ">Contact Us</button>
            </div>
            <div className="w-[50%] p-20 flex items-center justify-center box-border">
                <img src="../src/assets/topright.png" alt="" className="rotate absolute min-[1201px]:top-30 min-[1201px]:right-50 h-10 w-10 invert opacity-50 right-11 top-9" />
                <div className="relative flex items-center">
                    <img src="../src/assets/star_circle.png" className="absolute rotate w-[320px] drop-shadow-[0px_0px_10px_#ffff33] top-[18%] left-[22%] z-[-1]" alt="" />
                    <img src="../src/assets/pink_circle.png" className="absolute w-[400px] drop-shadow-[0px_0px_10px_#f31aa0] top-[12%] left-[15%] z-[-1]" alt="" />
                    <img src="../src/assets/purple_circle.png" className="absolute rotateReverse w-[480px] drop-shadow-[0px_0px_10px_#622cf7] top-[6%] left-[9%] z-[-1]" alt="" />
                    <img src="../src/assets/hero_img.png" className="" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

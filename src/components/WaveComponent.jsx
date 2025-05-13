import HTMLIcon from "../assets/HTML.png"

const WaveComponent = () => {
  return (
    <div className='relative'>

      <div className="absolute grid grid-cols-8 grid-rows-10 w-full h-full max-md:hidden ">
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-9 2xl:mt-6 self-center justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-8 col-start-2 self-end justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-8 col-start-3 2xl:mt-8 self-center justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-8 col-start-4 2xl:mt-8 justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-7 col-start-5 self-end justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-7 col-start-6 2xl:mt-7 self-center justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-7 col-start-7 2xl:mt-8 justify-self-center max-xl:w-16 max-xl:h-12"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-2 row-start-6 col-start-8 2xl:mt-12 justify-self-center self-center max-xl:w-16 max-xl:h-12"/>
        {/* <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20"/> */}
      </div>

      <svg
        className='wave-top w-full' // Changed to w-full to make the SVG full width
        viewBox='0 0 1440 500'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
      >
        <path
          fill='#ffffff' // Ensure this is set to white
          d='M0,500 C400,400 1200,400 1440,320 L1440,500 L0,510 Z'
        />
        <path
          fill='#b6b0b8' // Light gray
          d='M0,500 C400,420 1000,420 1440,340 L1440,500 L0,500 Z'
        />
        <path
          fill='#5e5b5f' // Medium gray
          d='M0,500 C400,440 1000,440 1440,360 L1440,500 L0,500 Z'
        />
        <path
          fill='#2c2a2d' // Dark gray
          d='M0,500 C400,460 1000,460 1440,380 L1440,500 L0,500 Z'
        />
        <path
          fill='#1a1a1a' // Modified bottom black wave to a slightly lighter shade
          d='M0,500 C400,480 1000,480 1440,400 L1440,500 L0,500 Z'
        />
      </svg>
    </div>
  );
};

export default WaveComponent;
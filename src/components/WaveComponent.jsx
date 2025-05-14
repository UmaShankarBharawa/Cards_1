import HTMLIcon from "../assets/HTML.png"

const WaveComponent = () => {
  return (
    <div className='relative'>

      <div className="absolute grid grid-cols-8 grid-rows-40 w-full h-full max-md:hidden ">
        <img src={HTMLIcon} alt="HTML Icon" className="w-25 h-20 row-span-6 row-start-35 max-2xl:row-start-32 justify-self-center max-xl:w-20 max-xl:h-16 max-lg:w-16 max-lg:h-12 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-24 h-19 row-span-6 row-start-33 max-2xl:row-start-31 col-start-2 justify-self-center max-xl:w-19 max-xl:h-15 max-lg:w-15 max-lg:h-11 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-23 h-18 row-span-6 row-start-29 col-start-3 2xl:mt-8 justify-self-center max-xl:w-18 max-xl:h-14 max-lg:w-14 max-lg:h-10 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-22 h-17 row-span-6 row-start-27 col-start-4 2xl:mt-8 justify-self-center self-center max-xl:w-17 max-xl:h-13 max-lg:w-13 max-lg:h-9 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-21 h-16 row-span-6 row-start-27 max-2xl:row-start-25 col-start-5 justify-self-center max-xl:w-16 max-xl:h-12 max-lg:w-12 max-lg:h-8 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-20 h-15 row-span-6 row-start-23 col-start-6 2xl:mt-7 justify-self-center max-xl:w-15 max-xl:h-11 max-lg:w-11 max-lg:h-7 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-19 h-14 row-span-6 row-start-22 col-start-7 2xl:mt-8 justify-self-center max-xl:w-14 max-xl:h-10 max-lg:w-10 max-lg:h-6 animate-pulse"/>
        <img src={HTMLIcon} alt="HTML Icon" className="w-18 h-13 row-span-6 row-start-21 max-2xl:row-start-22 col-start-8 2xl:mt-12 justify-self-center max-xl:w-13 max-xl:h-9 max-lg:w-9 max-lg:h-5 animate-pulse"/>
      </div>

      <svg
        className='wave-top w-full bg-purple-200' // Changed to w-full to make the SVG full width
        viewBox='0 0 1440 500'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
      >
        {/* <path
          fill='#ffffff' // Ensure this is set to white
          d='M0,490 C500,500 1200,280 1440,340 L1440,500 L0,510 Z'
        /> */}
        <path
          fill='#b6b0b8' // Light gray
          d='M0,500 C450,490 1000,300 1440,360 L1440,500 L0,500 Z'
        />
        <path
          fill='#5e5b5f' // Medium gray
          d='M0,500 C450,510 1000,320 1440,380 L1440,500 L0,500 Z'
        />
        <path
          fill='#2c2a2d' // Dark gray
          d='M0,500 C450,530 1000,340 1440,400 L1440,500 L0,500 Z'
        />
        <path
          fill='#1a1a1a' // Modified bottom black wave to a slightly lighter shade
          d='M0,500 C450,550 1000,360 1440,420 L1440,500 L0,500 Z'
        />
      </svg>
    </div>
  );
};

export default WaveComponent;
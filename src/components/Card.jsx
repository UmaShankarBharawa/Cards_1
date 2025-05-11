import ServicesImg from '../assets/services.jpg'
import WaveComponent from './WaveComponent'

export default function Card() {

    const cardsData = [
        {
            id: 1,
            title: "Digital Marketing",
            description: "From social media strategies to search engine optimization, I'll craft a tailored approach that captures your brand's success and engages your taget audience effectively.",
            styleClass: " rounded-lg border-neutral-500 border row-span-2 row-start-4 p-4 w-fit max-2xl:text-sm max-lg:row-span-1 max-lg:col-span-4"
        },
        {
            id: 2,
            title: "Web Development",
            description: "By working closely with you, I intigrate your ideas and goals into every aspect of the site, ensuring we craft a digital experience that resonates with your audience.",
            styleClass: " rounded-lg border-neutral-500 border col-start-2 row-span-2 row-start-3 p-4 w-fit max-2xl:text-sm max-lg:row-span-1 max-lg:col-span-4 max-lg:col-start-5"
        },
        {
            id: 3,
            title: "App Development",
            description: "We specialize in App Development. Let's collaborate to turn your vision into a reality and ensure that your application stands out in the crowded app marketplace",
            styleClass: " rounded-lg border-neutral-500 border col-start-3 row-span-2 row-start-2 p-4 w-fit max-2xl:text-sm max-lg:col-start-3 max-lg:row-start-2 max-lg:row-span-1 max-lg:col-span-4"
        },
        {
            id: 4,
            title: "Branding",
            description: "We're here to elevate your brand's presence through innovative strategies that not only highlight what makes you special but also drive engagement and loyalty.",
            styleClass: " rounded-lg border-neutral-500 border col-start-4 row-span-2 row-start-3 p-4 w-fit max-2xl:text-sm max-lg:row-start-3 max-lg:col-start-1 max-lg:row-span-1 max-lg:col-span-4"
        },
        {
            id: 5,
            title: "Analytics",
            description: "By collaborating with clients like you, I will craft an exceptional strategy that leverages detailed analytics, allowing your business to thrive in today's competition.",
            styleClass: "rounded-lg border-neutral-500 border col-start-5 row-span-2 row-start-4 p-4 w-fit max-2xl:text-sm max-lg:row-span-5 max-lg:row-start-3 max-lg:col-start-5 max-lg:row-span-1 max-lg:col-span-4"
        },
    ]


    return (
        <div>
            <div>
                <WaveComponent />
            </div>
            <div className='border-t-stone-500 border bg-gradient-to-t from-neutral-900 via-purple-800 to-neutral-900'>
                <div className='grid grid-cols-5 grid-rows-[repeat(6,125px)] max-lg:grid-rows-3 max-lg:grid-cols-8 place-items-center gap-2 px-2'>
                    <div className='text-4xl max-lg:text-2xl font-bold text-white row-span-1 row-start-1 max-lg:row-span-none max-lg:col-span-1 max-lg:row-start-2 max-lg:-rotate-90'>Services</div>
                    <div className='text-4xl max-lg:text-2xl text-nowrap font-bold text-white row-span-1 col-start-5 row-start-1 max-lg:col-start-8 max-lg:row-span-none max-lg:row-start-2 max-lg:-rotate-90'>We Provide</div>
                    {cardsData.map((card) => (
                        <div key={card.id} className={card.styleClass}>
                            <img src={ServicesImg} className='rounded-full w-15' alt="img" />
                            <h2 className="text-lg text-white font-semibold mb-1">{card.title}</h2>
                            <p className="text-white">{card.description}</p>
                            <button className="mt-4 bg-gradient-to-r from-red-600 to-orange-400 shadow-[0px_0px_20px_2px_#ff8040] text-white py-2 px-4 max-2xl:px-3 max-2xl:py-1 max-2xl:mt-2 rounded-full hover:bg-gradient-to-l hover:to-red-700 hover:from-orange-500 cursor-pointer">Know More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

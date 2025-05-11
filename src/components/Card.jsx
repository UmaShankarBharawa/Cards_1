import ServicesImg from '../assets/services.jpg'

export default function Card() {

    const cardsData = [
        {
            id: 1,
            title: "Digital Marketing",
            description: "Digital marketing encompasses all marketing efforts that use the internet and digital technologies to promote products or services. It includes strategies like search engine optimization (SEO), social media marketing, email marketing, and online advertising, aiming to increase brand awareness, drive traffic to websites, and ultimately, achieve marketing goals.",
            styleClass: "shadow-xl rounded-lg p-6 w-fit lg:mt-50 bg-white max-lg:row-span-5"
        },
        {
            id: 2,
            title: "Web Development",
            description: "Web development is the process of creating, building, and maintaining websites and web applications. It involves various aspects, including web design, programming, and database management. Web development is generally categorized into frontend development (the user-facing part of the website), backend development (the server-side logic), and full-stack development.",
            styleClass: "shadow-xl rounded-lg p-6 w-fit bg-white max-lg:row-span-5 max-lg:col-start-3"
        },
        {
            id: 3,
            title: "Mobile App Development",
            description: "Mobile app development is the process of creating software applications that run on mobile devices, such as smartphones and tablets. It involves designing, coding, testing, and deploying apps for various platforms, including iOS and Android. Mobile app development can be done using native programming languages or cross-platform frameworks, allowing developers to reach a wider audience.",
            styleClass: "shadow-xl rounded-lg p-6 w-fit lg:mb-50 bg-white max-lg:row-span-5 max-lg:row-start-6 max-lg:col-start-2"
        },
        {
            id: 4,
            title: "Graphic Design",
            description: "Graphic design is the art and practice of creating visual content to communicate messages and ideas. It involves combining typography, images, colors, and layout to produce visually appealing designs for various mediums advertising. Graphic designers use software tools to create logos, websites, and other visual materials that effectively convey information and evoke emotions.",
            styleClass: "shadow-xl rounded-lg p-6 w-fit bg-white max-lg:row-span-5 max-lg:row-start-11"
        },
        {
            id: 5,
            title: "Content Writing",
            description: "Content writing is the process of planning, creating, and editing written material for various platforms, including websites, blogs, social media, and marketing materials. It involves researching topics, understanding target audiences, and crafting engaging and informative content that meets specific goals. Content writers often focus on SEO to improve online visibility and drive traffic to websites.",
            styleClass: "shadow-xl rounded-lg p-6 w-fit lg:mt-50 bg-white max-lg:row-span-5 max-lg:col-start-3 max-lg:row-start-11"
        },
    ]


    return (
        <div>
            <svg className='rotate-180' viewBox="0 0 1910 245" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path fill="rgba(10, 93, 252, 0.8)" d="M 0 189 C 582.6 189 388.4 110 971 110 L 971 110 L 971 0 L 0 0 Z" strokeWidth="0"></path> <path fill="rgba(10, 93, 252, 0.8)" d="M 970 110 C 1534 110 1346 0 1910 0 L 1910 0 L 1910 0 L 970 0 Z" strokeWidth="0"></path> </svg>
            <div className='bg-linear-to-r from-blue-400 to-blue-600'>
                <h1 className='text-center text-3xl font-bold'>Cards</h1>
                <div className='grid grid-cols-5 max-lg:grid-row-15 max-lg:grid-cols-3 place-items-center gap-4 p-10'>
                    {cardsData.map((card) => (
                        <div key={card.id} className={card.styleClass}>
                            <img src={ServicesImg} className='rounded-full' alt="img" />
                            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                            <p className="text-gray-700">{card.description}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Know More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

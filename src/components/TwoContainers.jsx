import itImg from '../assets/it-img.jpg';
import Logo from '../assets/logo.jpg';

export default function TwoContainers() {
  return (
    <section className="grid grid-cols-2 bg-purple-200">
        <div className='col-span-1 flex flex-col justify-center items-center'>
            <img src={Logo} className='w-35 breathe' alt="logo" />
            <h1 className='text-xl mt-3 font-bold text-gray-700 bg-purple-400 px-3 hover:-skew-3 transform ease-in-out duration-500'>Developers</h1>
            <h2 className='mt-2 text-gray-500'>We’re not just a company, we’re your team</h2>
        </div>
        <div className='col-span-1 p-10 shadow-lg'>
            <img src={itImg} alt="it-img" className='shadow-lg' />
        </div>
    </section>
  )
}

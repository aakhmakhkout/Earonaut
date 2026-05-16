import {ChevronLeft, ChevronRight} from "lucide-react"

const Hero = ({data, CI}) => {
    console.log(data, CI)
  return (
    <div className='bg-red-800 flex w-full justify-between h-200'> 
        <div className='w-[40%] flex flex-col mt-30 gap-10 items-center'>
        <div className='bg-white/20 w-[80%] flex flex-col gap-20 justify-around p-5'>
            <div className='text-6xl font-extrabold text-white'>
                <h1>{data[CI].name}</h1>
            </div>
            <div className='w-[70%] flex flex-col gap-5'>
                <h1 className='text-4xl font-bold text-white'>{data[CI].brand}</h1>
                <p className='text-sm text-white'>{data[CI].description}</p>
            </div>
        </div>

        <div className='flex items-center gap-3'>
            <h1 className='text-white text-xl font-bold'>Colors Available: </h1>
                <p className='w-5 h-5 bg-[#2a2a2c] rounded-full'></p>
                <p className='w-5 h-5 bg-[#9113cc] rounded-full'></p>
                <p className='w-5 h-5 bg-[#f0bb0e] rounded-full'></p>
                <p className='w-5 h-5 bg-[#6742ac] rounded-full'></p>
            
        </div>

        <div className="flex gap-15 text-white">
            <div className="bg-black/20 rounded-full border border-whtie/20"><ChevronLeft size={56} strokeWidth={2.5} /></div>
            <div className="bg-black/20 rounded-full border border-whtie/20"><ChevronRight size={56} strokeWidth={2.5} /></div>
        </div>
        </div>

        <div className='w-[50%] flex justify-center bg-black/20'>
            <div className='heroimg relative flex h-[80%] items-center justify-center'>
            <h1 className='text-9xl font-bold text-white'>EARONAUT</h1>
            <img src={data[CI].img} alt="" className="w-180 absolute top-10 z-20"/>
            </div>
            <div className='w-80 h-80 bg-[#a764649c] absolute blur-3xl top-[50%]'></div>
        </div>
    </div>
  )
}

export default Hero
import {ChevronLeft, ChevronRight} from "lucide-react"
import {motion, AnimatePresence} from "motion/react"
import { div } from "motion/react-client"


const Hero = ({data, CI}) => {
    console.log(data, CI)
  return (
    <div className="flex flex-col justify-center items-center relative">

    <AnimatePresence mode="wait">

    <motion.div className='flex w-full justify-between h-200 ' key={CI}> 
        <div className='w-[50%] flex flex-col mt-30 gap-10 items-center'>
        <div className='w-[80%] flex flex-col gap-20 justify-around p-5'>
            <motion.div className='text-6xl font-extrabold text-white'
                initial={{
                    opacity:0,
                    y:-50
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                exit={{
                    opacity:0,
                    y:-50
                }}
                transition={{
                    duration:0.5,
                    delay:0.5
                }}
                >
                <h1 className="headphoneName">{data[CI].name}</h1>
            </motion.div>
            <motion.div className='w-[70%] flex flex-col gap-5 brandanddesc'
            initial={{
                opacity:0,
                y:50
            }}
            animate={{
                opacity:1,
                y:0
            }}
            exit={{
                opacity:0,
                y:50
            }}
            transition={{
                duration:0.5,
                delay:0.5
            }}
            >
                <h1 className='text-4xl font-bold text-white'>{data[CI].brand}</h1>
                <p className='text-sm text-white'>{data[CI].description}</p>
            </motion.div>
        </div>

        <motion.div className='flex items-center gap-3' 
            initial={{
                opacity:0,
                y:100
            }}
            animate={{
                opacity:1,
                y:0
            }}
            exit={{
                opacity:0,
                y:100
            }}
            transition={{
                duration:0.5,
                delay:0.5
            }}
            >
            <h1 className='text-white text-xl font-bold'>Colors Available: </h1>
                <p className='w-5 h-5 bg-[#2a2a2c] rounded-full'></p>
                <p className='w-5 h-5 bg-[#9113cc] rounded-full'></p>
                <p className='w-5 h-5 bg-[#f0bb0e] rounded-full'></p>
                <p className='w-5 h-5 bg-[#6742ac] rounded-full'></p>
            
        </motion.div>

      
        </div>

        <div className='w-[50%] flex justify-center'>
            <div className='heroimg relative flex h-full items-center justify-center overflow-hidden'>
            <h1 className='text-9xl font-bold text-white'>EARONAUT</h1>
            <motion.img src={data[CI].img} alt="" className="w-full  absolute top-10 z-20"
            initial={{
                opacity:0,
                x:100,
                rotate:10
            }}
            whileInView={{
                opacity:1,
                x:0,
                rotate:0
            }}
         
            exit={{
                opacity:0,
                x:-100
            }}
            
            transition={{
                duration:0.5,
                delay:0.5
            }}
            
            />
            </div>
          
        </div>
    </motion.div>
        </AnimatePresence>
        <motion.div className=" absolute bottom-20 flex gap-15 text-white"
         initial={{
             opacity:0,
             y:100
            }}
            animate={{
                opacity:1,
                y:0
            }}
            transition={{
                duration:0.5,
                delay:1.1
            }}
            >
                <button className="bg-black/20 rounded-full border border-whtie/20">
                <ChevronLeft size={56} strokeWidth={2.5} />
                </button>
                <button className="bg-black/20 rounded-full border border-whtie/20">
                <ChevronRight size={56} strokeWidth={2.5} />
                </button>

        </motion.div>
</div>
  )
}

export default Hero
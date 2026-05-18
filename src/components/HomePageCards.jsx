import wired from "../assets/wired.png"
import wireless from "../assets/headphone10.png"
import gaming from "../assets/gaming.png"
import iem from "../assets/iem.png"
import {motion} from "motion/react"

const HomePageCards = () => {
    const hpcData = [
        {
            id:1,
            heading: "Gaming Headphones",
            description: "Engineered for immersive gameplay with precise directional audio, deep bass, and a noise-isolating microphone for crystal-clear communication during competitive and story-driven gaming sessions.",
            img: gaming
        },
        {
            id:2,
            heading: "Wired Headphones",
            description: "Delivers lossless, low-latency audio through a stable cable connection, producing accurate sound reproduction with rich detail, balanced mids, and powerful bass.",
            img: wired
        },
        {
            id:3,
            heading: "Wireless Headphones",
            description: "Features advanced Bluetooth connectivity, long battery life, and tuned drivers that provide clear vocals, dynamic bass, and immersive high-resolution sound.",
            img: wireless
        },
        {
            id:4,
            heading: "IEM",
            description: "Compact in-ear monitors with precision drivers that offer exceptional clarity, detailed instrument separation, tight bass, and studio-grade audio performance.",
            img: iem
        },
    ]

  return (
    <div className="relative w-full h-70">
        <div className="flex w-full justify-evenly absolute -top-10">
        {
            hpcData.map(({id, heading, description, img})=> {
                return <motion.div key={id} className="w-[300px] h-[300px] flex justify-center ">
                    <motion.div className="w-70 h-60 rounded-3xl bg-[#af0e0ed8] backdrop-blur-md flex flex-col items-center justify-between relative border border-white/20 hcpCards"
                    initial={{
                        opacity:0,
                        y:200
                    }}
                    whileHover={{
                        height: "320px",
                        y:-100,
                        transition:{
                            duration:0,
                            delay:0
                        }
                    }}
                    whileInView ={{
                        opacity:1,
                        y:0,
                       
                    }}
                   
                    >
                    <div className="w-40 rounded-4xl">
                        <img src={img} alt="hcpcardimgs"  className="w-30"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-bold text-xl hcpheading">{heading}</h1>
                    <div>
                        <button className="bg-red-800 px-10 py-2 rounded-md text-white font-bold">View</button>
                    </div>
                    </div>
                    <div className="absolute bottom-20 bg-black/10 p-2 mx-2 rounded-[10px] backdrop-blur-sm shadow-md   overflow-y-scroll hcpCardsDes h-30">
                        <p className="text-sm text-white">{description}</p>
                    </div>
                </motion.div>
                </motion.div>
            })
        }
        </div>
    </div>
  )
}

export default HomePageCards
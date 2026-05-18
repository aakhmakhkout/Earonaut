import nr1 from "../assets/nr1.png"
import nr2 from "../assets/nr2.png"
import nr3 from "../assets/nr3.png"
import {motion} from "motion/react"

const NewReleases = () => {
    const newreleasesdata = [
        {
            id:1,
            img: nr1,
            name: "Earonaut Epic Max",
            title: "Wireless Over-Ear",
            specs: ["Hi-Res Audio", "70H Playtime", "ANC"],
            price: "RS. 14,999"
        },
        {
            id:2,
            img: nr2,
            name: "Earonaut Pro X",
            title: "Premium Over-Ear",
            specs: ["Hi-Res Audio", "60H Playtime", "ANC"],
            price: "RS. 12,999"
        },
        {
            id:3,
            img: nr3,
            name: "Earonaut Intra Pro",
            title: "Professional IEMs",
            specs: ["Dual Drivers", "Detachable Cable", "Hi-Res Audio"],
            price: "RS. 7,999"
        },

    ]
  return (
    <div className='w-full h-full flex justify-center items-center overflow-hidden'>
        <div className='w-[90%] h-[90%]  flex flex-col items-center mt-20 gap-5'>
        <div className=' flex flex-col items-center newreleasestop gap-10'>
            <motion.h1 className="text-[#e49f9f] text-4xl font bold "
            initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:0.5,
                delay:0.3
            }}

            viewport={{
                amount: "all"
            }}
            
            >New Releases</motion.h1>
            <motion.h2 className="text-8xl text-white font-extrabold"
                initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:0.5,
                delay:0.5
            }}

            viewport={{
                amount: "all"
            }}
            
            
            >Fresh Drops. <span className="text-[#dda485]">Superior Sound</span></motion.h2>
            <motion.p
                initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                opacity:1,
                y:0
            }}

            transition={{
                duration:0.5,
                delay:0.7
            }}

            viewport={{
                amount: "all"
            }}
            
            
            >Explore our latest headphones engineered for performance, comfort and pure immersion</motion.p>
        </div>
        <div className="flex gap-10">
            {newreleasesdata.map(({id, name,img, title, specs, price})=> {
                return <motion.div key={id} className="text-white w-80 rounded-2xl relative newrcards"
                    initial={{
                y:200,
                opacity:0
            }}
            whileInView={{
                opacity:1,
                y:0,
                 transition:{
                duration:0.5,
                delay:1
            }

            }}

           
            viewport={{
                amount: "some"
            }}

            whileHover={{
                scale:1.1,
                transition:{
                    duration:0.3
                }
            }}
            
                >
                    <div className="">
                    <img src={img} alt="newreleaseimgs" className="w-full h-110 rounded-2xl"/>
                    </div>
                    <div className="absolute w-80 -bottom-15 text-white flex flex-col bg-black/70 backdrop-blur-[2px] h-30 p-3 rounded-2xl gap-2">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <h2 className="text-[#8d725a] font-bold">{title}</h2>
                    <p className="flex text-sm justify-between text-white/70">{specs.map((values)=> {
                        return <span>{values}</span>
                    })}</p>
                    <p className="font-bold text-2xl">{price}</p>
                    </div>
                    
                </motion.div>
            })}
        </div>
        <button className="text-[#fbe3c2] mt-20 mb-10 border border-[#ffb54f] py-3 px-20 rounded-full">VIEW ALL RELEASES</button>
        </div>
    </div>
  )
}

export default NewReleases
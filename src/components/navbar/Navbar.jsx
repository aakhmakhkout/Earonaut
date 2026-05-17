import {motion} from "motion/react"
import logo from "../../assets/earonautlogo.png"
import {CircleUser, ShoppingCart} from "lucide-react"

const Navbar = () => {
    const navLinks =[
        {
            id:1,
            nav: "Home",
            address: "#"
        },
        {
            id:1,
            nav: "New Releases",
            address: "#"
        },
        {
            id:1,
            nav: "Brands",
            address: "#"
        },
        {
            id:1,
            nav: "Explore",
            address: "#"
        },

    ]
  return (
    <motion.div className="flex justify-between items-center h-20"
     
    >
        <motion.div className="w-[20%]"
            initial={{
            opacity:0,
            x:-100
        }}
        animate={{
            opacity:1,
            x:0
        }}
        transition={{
            duration:0.5,
            delay:0.1
        }}
        >
            <img src={logo} alt="earonaut logo" className="w-40"/>
        </motion.div>
        <motion.div className="w-[40%] flex items-center text-2xl font-bold text-white/70 navlinks"
        initial={{
            opacity:0,
            y:-100
        }}
        animate={{
            opacity:1,
            y:0
        }}
        transition={{
            duration:0.5,
            delay:0.3
        }}
        >
            <ul className="flex w-full justify-evenly items-center">
                {navLinks.map((values)=> {
                    return <motion.li className="cursor-pointer" key={values.id}
                    whileHover={{
                        scale:1.1,
                        opacity:1,
                        color:"white"
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeIn"
                    }}
                    >{values.nav}</motion.li>
                })}
            </ul>
        </motion.div>

        <motion.div className="w-[20%] flex justify-center gap-5 text-white"
          initial={{
            opacity:0,
            x:100
        }}
        animate={{
            opacity:1,
            x:0
        }}
        transition={{
            duration:0.5,
            delay:0.5
        }}
        >
            <div><CircleUser size={30} strokeWidth={1.5} /></div>
            <div><ShoppingCart size={30} strokeWidth={1.5} /></div>
        </motion.div>
    </motion.div>
  )
}

export default Navbar
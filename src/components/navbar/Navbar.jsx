import {motion} from "motion/react"
import logo from "../../assets/earonautlogo.png"
import {CircleUser, ShoppingCart} from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 bg-red-700">
        <div className="w-[20%]">
            <img src={logo} alt="earonaut logo" className="w-40"/>
        </div>
        <div className="w-[40%] flex justify-evenly text-2xl font-bold text-white/70">
            <a href="#">Home</a>
            <a href="#">New Releases</a>
            <a href="#">Brands</a>
            <a href="#">Explore</a>
        </div>

        <div className="w-[20%] flex justify-center gap-5 text-white">
            <div><CircleUser size={40} strokeWidth={1.5} /></div>
            <div><ShoppingCart size={40} strokeWidth={1.5} /></div>
        </div>
    </div>
  )
}

export default Navbar
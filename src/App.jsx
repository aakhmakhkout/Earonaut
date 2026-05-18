import hdp1 from "./assets/headphone1.png"
import hdp2 from "./assets/headphone2.png"
import hdp3 from "./assets/headphone3.png"
import hdp4 from "./assets/headphone4.png"
import hdp5 from "./assets/headphone5.png"
import hdp6 from "./assets/headphone6.png"
import hdp7 from "./assets/headphone7.png"
import hdp8 from "./assets/headphone8.png"
import hdp9 from "./assets/headphone9.png"
import hdp10 from "./assets/headphone10.png"
import {motion} from "motion/react"
import { useEffect, useState } from "react"
import Navbar from "./components/navbar/Navbar.jsx"
import Hero from "./components/hero/Hero.jsx"
import HomePageCards from "./components/HomePageCards.jsx"
import NewReleases from "./components/NewReleases.jsx"


const App = () => {
  const [currentIdx, setcurrentIdx] = useState(0)
  const headphoneData = [
  {
    id: 1,
    name: "Phantom Beats Pro",
    brand: "Earonaut",
    colors: "Matte Black, Graphite Gray, Midnight Silver",
    description:
      "Phantom Beats Pro is designed for listeners who prefer a clean and premium look with powerful sound performance. The over-ear cushions provide excellent comfort during long listening sessions, while the balanced drivers deliver deep bass, crisp vocals, and detailed highs. Active noise cancellation helps block unwanted distractions, making these headphones perfect for travel, work, and focused music sessions. The sleek matte finish and minimal design give them a modern appearance that fits both professional and casual lifestyles.",
    img: hdp1,
  },
  {
    id: 2,
    name: "Sky Pulse 500",
    brand: "Bassquatch",
    colors: "Electric Blue, Navy Blue, Arctic White",
    description:
      "Sky Pulse 500 combines vibrant styling with immersive wireless audio for everyday listening. Its lightweight frame and padded headband offer a comfortable fit, while Bluetooth connectivity ensures seamless pairing with phones, tablets, and laptops. The tuned drivers deliver energetic bass and clear mids, making songs, movies, and podcasts sound lively and engaging. With long battery life and intuitive onboard controls, Sky Pulse 500 is an excellent companion for commuting, studying, and relaxing with your favorite playlists.",
    img: hdp2,
  },
  {
    id: 3,
    name: "Quantum Luxe",
    brand: "VibeGoblin",
    colors: "Charcoal Black, Gold Accent, Slate Gray",
    description:
      "Quantum Luxe offers a refined listening experience with rich sound and elegant detailing. The premium ear cushions create a snug and comfortable seal, enhancing both comfort and noise isolation. Custom-tuned audio drivers provide warm bass, smooth mids, and sparkling treble for a cinematic soundstage. Gold accents add a sophisticated touch, making these headphones stand out visually. Whether you're listening to jazz, pop, or orchestral music, Quantum Luxe delivers consistent clarity and depth in every track.",
    img: hdp3,
  },
  {
    id: 4,
    name: "WaveRush Mini",
    brand: "WubWub",
    colors: "Ocean Blue, Aqua, Frost White",
    description:
      "WaveRush Mini is compact, colorful, and built for users who want dependable wireless sound in a lightweight design. The soft ear pads and adjustable headband ensure a secure fit for all-day comfort. Despite its smaller profile, the drivers produce punchy bass and surprisingly clear vocals. Quick-access buttons allow easy control over music and calls, while the durable construction makes it ideal for students and travelers. Its bright blue finish adds a playful and energetic personality.",
    img: hdp4,
  },
  {
    id: 5,
    name: "Cyber Command X",
    brand: "Noiseyeti",
    colors: "Black, Neon Cyan, Electric Blue",
    description:
      "Cyber Command X is engineered for gamers and streamers who demand comfort and immersive audio. The integrated boom microphone captures clear voice communication, while the powerful stereo drivers highlight footsteps, explosions, and ambient details. Thick ear cushions reduce fatigue during extended gaming sessions. The bold neon accents and futuristic design create a strong gaming aesthetic. Whether you're competing online or enjoying story-driven adventures, Cyber Command X delivers focused sound and reliable communication.",
    img: hdp5,
  },
  {
    id: 6,
    name: "Inferno Bass HD",
    brand: "Thumpkin",
    colors: "Red, Black, Metallic Silver",
    description:
      "Inferno Bass HD is made for listeners who love bold design and energetic low-end performance. Large drivers deliver deep, resonant bass while maintaining clean vocals and sharp treble. The padded ear cups provide a secure and comfortable fit for long sessions. Touch controls and wireless connectivity make daily use simple and intuitive. The striking red-and-black finish gives these headphones a powerful visual identity that matches their punchy and dynamic sound signature.",
    img: hdp6,
  },
  {
    id: 7,
    name: "Silent Orbit",
    brand: "Earonaut",
    colors: "Black, Carbon Gray, Shadow Silver",
    description:
      "Silent Orbit focuses on comfort, portability, and effective noise cancellation. Its minimalist construction and plush ear cushions create a comfortable listening experience, while the foldable design makes it easy to carry in a backpack or travel case. The tuned audio profile emphasizes balanced sound with controlled bass and crisp highs. Long battery life supports uninterrupted listening for work, flights, and study sessions. Silent Orbit is a versatile option for users who value both performance and simplicity.",
    img: hdp7,
  },
  {
    id: 8,
    name: "Ocean Drift",
    brand: "SonicMoose",
    colors: "Blue, Cyan, Glacier White",
    description:
      "Ocean Drift brings refreshing style and vibrant sound to your everyday music routine. The lightweight frame and soft padding provide excellent comfort, while the wireless connection remains stable across devices. Its audio tuning favors energetic bass and bright vocals, creating an engaging listening experience for pop, EDM, and podcasts. The cool blue finish gives it a youthful, modern look. Ocean Drift is ideal for students, travelers, and anyone seeking dependable performance with standout aesthetics.",
    img: hdp8,
  },
  {
    id: 9,
    name: "NightCore Elite",
    brand: "Earzilla",
    colors: "Black, Matte Graphite, Steel Gray",
    description:
      "NightCore Elite delivers a premium combination of understated design and rich wireless audio. The dense ear cushions provide superior comfort and passive noise isolation, while high-efficiency drivers reproduce detailed sound with strong bass and clear vocals. Touch-sensitive controls make playback and calls effortless. The sophisticated matte-black finish gives the headphones a timeless appearance suitable for both professional and personal use. NightCore Elite is built for listeners who want reliable performance with a luxurious feel.",
    img: hdp9,
  },
  {
    id: 10,
    name: "Purple Nebula",
    brand: "Lobetron",
    colors: "Royal Purple, Silver, Pearl White",
    description:
      "Purple Nebula combines a striking futuristic design with warm, immersive sound quality. The plush ear cushions and lightweight construction make extended listening sessions exceptionally comfortable. Precision-tuned drivers deliver balanced bass, natural mids, and smooth highs for an enjoyable audio experience across all genres. The distinctive purple finish and metallic silver details create a bold visual statement. Purple Nebula is perfect for users who want their headphones to stand out while delivering dependable wireless performance.",
    img: hdp10,
  },
];
  useEffect(() => {
    
   const timerId = setTimeout(() => {
      setcurrentIdx(prev => prev = (prev+1) % headphoneData.length)
    }, 3000);
  
    return () => {
      clearTimeout(timerId)
    }
  }, [currentIdx])
  


  console.log(currentIdx)

  
  return (
    <div>
      <div className="homepage">
      <div className="navbar">
        <Navbar />
      </div>
      <div>
        <Hero data={headphoneData} CI = {currentIdx}/>
      </div>
      </div>
      <div className="hcp ">
        <HomePageCards />
      </div>

      <div className="min-h-screen bg-[#000000] newreleases">
        <NewReleases />
      </div>

    </div>
  )
}

export default App
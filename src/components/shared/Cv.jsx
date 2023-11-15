import Image from "next/image";
import Link from "next/link";
import arrow from "@/../public/icons/arrow.png";
import download from "@/../public/icons/download.png"
import { motion } from "framer-motion";


const Cv = () => {
  return (
    <motion.div 
      initial={{opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{
        delay: 0.1,
      }}
      className='flex flex-col sm:flex-row justify-between items-center gap-12 w-full'>
      <Link href="/contact" className="bg-white  text-black px-7 py-3 flex items-center gap-2 rounded-full font-medium text-lg outline-none focus:scale-110 hover:scale-110 transition" >
        Contact me 
      <Image src={arrow} alt="arrow icong" width={28} height={28} className="opcity-70 group-hover:translate-x-1 transition"/>
      </Link>

      <Link href="/Cv.pdf" className="bg-transparent border px-7 py-3 flex items-center gap-2 rounded-full font-medium text-lg outline-none focus:scale-110 hover:scale-110 transition" download>
        Download cv
      <Image src={download} alt="arrow icong" width={28} height={28}/>
      </Link>
    </motion.div>
  )
}

export default Cv
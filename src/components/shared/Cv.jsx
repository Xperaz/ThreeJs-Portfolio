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
        delay: 0.3,
        duration: 0.5
      }}
      className='flex flex-col justify-end sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-12 w-full'>
      <Link href="/contact"
        className="bg-white  text-black lg:px-7 sm:px-3 px-2 sm:py-3 py-2 flex items-center gap-2 rounded-full font-medium lg:text-lg text-md outline-none focus:scale-110 hover:scale-110 transition"
      >
        Contact me 
      <Image src={arrow} alt="arrow icong" width={28} height={28} className="opcity-70 group-hover:translate-x-1 transition"/>
      </Link>

      <Link href="/Cv.pdf" className="bg-transparent border lg:px-7 sm:px-3 px-2 sm:py-3 py-2 flex items-center gap-2 rounded-full font-medium lg:text-lg text-md outline-none focus:scale-110 hover:scale-110 transition" download>
        Download cv
      <Image src={download} alt="arrow icong" width={28} height={28} />
      </Link>
    </motion.div>
  )
}

export default Cv
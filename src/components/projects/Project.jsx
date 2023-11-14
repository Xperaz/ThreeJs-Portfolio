import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import glob from "@/../public/icons/globe.png";

const Card = ({
  index,
  title,
  url,
  image,
  projectLocation,
  technologiesUsed,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
      className="cursor-pointer"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#6c6c6f]/50 rounded-2xl w-[250px] h-[150px] md:w-[230px]"
      >
        <div className="relative h-full w-full">
          <Image
            className="rounded-2xl"
            src={image}
            alt={title + " image"}
            width={0}
            height={0}
            layout="fill"
            objectFit="cover"
            // sizes="100vw"
            // style={{ width: "250px", height: "150px" } }
          />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = ({
  index,
  title,
  url,
  image,
  projectLocation,
  technologiesUsed,
}) => {
  const props = {
    index,
    title,
    url,
    image,
    projectLocation,
    technologiesUsed,
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <Card {...props} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute bg-black/75 overlay-fadeIn inset-0 z-[997]" />
        <Dialog.Content
          className="flex flex-col items-start gap-3 modal-fadeIn fixed top-[42%] left-[50%] max-h-[85vh] w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] 
         focus:outline-none z-[998]"
        >
          <div className="relative h-full w-full">
            <Image
              src={image}
              className="rounded-2xl overflow-hidden"
              alt={title + " image"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "30vh" }}
              priority={false}
            />
          </div>
          <div className="mt-2 mx-4">
            <h3 className="text-white font-bold text-[22px]">{title}</h3>
          </div>

          <div
            className="flex gap-2 w-full items-center mx-4"
            onClick={() => window.open(url, "_blank")}
          >
            <Image
              src={glob}
              className="rounded-2xl overflow-hidden cursor-pointer"
              alt="glob icon"
              width={28}
              height={28}
            />
            <p className="cursor-pointer text-[#ddd]">{projectLocation}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1 mx-4">
            {technologiesUsed.map((technology, index) => (
              <div
                key={technology.name + "-" + index}
                className="w-12 h-12 rounded-full flex justify-center"
              >
                <Image
                  src={technology.icon}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "80%", height: "80%" }}
                  alt={technology.name + " image"}
                />
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Project;

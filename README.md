This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


const Project = ({
  index,
  title,
  url,
  image,
  description,
  technologies_used,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -50,
        translateY: 50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.5 }}
      className="cursor-pointer"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#6c6c6f]/50 rounded-2xl sm:w-[230px] max-h-[150px]"
      >
        <div className="relative h-full w-full">
          <Image
            className="rounded-2xl"
            src={image}
            alt={title + " image"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "230px", height: "150px" }}
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(url, "_blank")}
            className="black-gradient w-8 h-8 rounded-full cursor-pointer flex justify-center items-center"
          >
            <Image
              src={github}
              alt={"github icon"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "50%", height: "50%" }}
            />
          </div>
        </div>

        {/* <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-[#ffffffd0] text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies_used.map((technology, index) => (
            <p
              key={technology + index}
              className={`${technology.color} text-[14px]`}
            >
              {technology.name}
            </p>
          ))}
        </div> */}
      </Tilt>
    </motion.div>
  );
};
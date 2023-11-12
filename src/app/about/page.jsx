import About from "@/components/about/About";
import Scroller from "@/components/shared/Scroller";

const page = () => {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient">
      <About />
      <Scroller />
    </main>
  );
};

export default page;

import Skills from "@/components/Skills/Skills";
import Scroller from "@/components/shared/Scroller";

const page = () => {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center backgroundGradient">
      <Skills />
      <Scroller />
    </main>
  );
};

export default page;

import Projects from "@/components/projects/Projects";
import Scroller from "@/components/shared/Scroller";

const page = () => {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient-2">
      <Projects />
      <Scroller />
    </main>
  );
};

export default page;

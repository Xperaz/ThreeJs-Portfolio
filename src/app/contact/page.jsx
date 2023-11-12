import Contact from "@/components/contact/Contact";
import Scroller from "@/components/shared/Scroller";

const page = () => {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient">
      <Contact />
      <Scroller />
    </main>
  );
};

export default page;

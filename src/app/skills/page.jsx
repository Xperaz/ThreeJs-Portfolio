import Header from "@/components/Header";
import Skills from "@/components/Skills/Skills";

const page = () => {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient">
      <Header />
      <Skills />
    </main>
  );
};

export default page;
import Header from "@/components/Header";
import ThreeModle from "@/components/Home/ThreeModle";

export default function Home() {
  return (
    <div className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient">
      <Header />
      <ThreeModle />
    </div>
  );
}

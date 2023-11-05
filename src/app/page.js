import Header from "@/components/Header";
import ThreeModle from "@/components/Home/ThreeModle";
import Introduction from "@/components/Home/Introduction";

export default function Home() {
  return (
    <div className="text-white w-full min-h-[100vh] flex flex-col align-center justify-between gap-2 backgroundGradient">
      <Header />
      <ThreeModle />
      <Introduction />
    </div>
  );
}

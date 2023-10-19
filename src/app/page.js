import Header from "@/components/Header";

export default function Home({ children }) {
  return (
    <main className="text-white w-full min-h-[100vh] flex flex-col align-center gap-2 backgroundGradient">
      <Header />
      <section>{children}</section>
    </main>
  );
}

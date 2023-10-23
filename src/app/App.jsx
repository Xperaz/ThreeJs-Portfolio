import Header from "@/components/Header";

const Dashboard = ({children}) => {
    console.log(children);
  return (
    <>
        {/* <Header /> */}
        <main className="">{children}</main>
    </>
  );
};

export default App;
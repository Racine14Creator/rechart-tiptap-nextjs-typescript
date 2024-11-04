import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <main className='flex-grow ml-64 relative'>
          <Navbar />
          <Charts />
        </main>
      </div>
    </>
  );
}

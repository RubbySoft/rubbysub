import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <div className="w-full h-[400px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
   <Navbar/>
    <Hero/>
  </div>
  );
}

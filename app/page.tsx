import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
  //   <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
  //   <div className="text-center bg-white p-10 rounded-lg shadow-lg">
  //     <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
  //     <p className="text-gray-600 mb-6">
  //       We're glad to have you here. Let's explore some amazing things together.
  //     </p>
  //     <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
  //       Get Started
  //     </button>
  //   </div>
  // </div>
  <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>

  </>
  );
}

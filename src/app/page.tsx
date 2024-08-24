import HomeHeader from "@/components/Home/HomeHeader";
import HomeSearch from "@/components/Home/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomeHeader />
    <div className="flex flex-col items-center mt-24">
      <Image
      alt="Google logo"
      src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" 
      width="300"
      height="100"
      />
      <HomeSearch />
    </div>
    </>
  )
}

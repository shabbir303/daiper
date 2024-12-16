import Common from "@/components/Common";
import OrderForm from "@/components/OrderForm";
import Que from "@/components/Que";
import Variation from "@/components/Variation";
import Video from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Video/>
      <div className="container">
      <Que/>
      <Variation/>
      <Common/>
      <OrderForm/>
      </div>
    </div>
  );
}

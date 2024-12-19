import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
   <>
     <div className="mt-[100px]">
            <div className="h-[2px] bg-slate-300"/>
            <div className="flex items-center justify-center gap-5 text-[14px] text-[#566376] font-semibold mt-[30px] mb-[50px]">
                <h1>Refund Policy</h1>
                <h1>Privacy Policy</h1>
                <h1>Terms & Conditions</h1>
            </div>
     </div>
   </>
  );
};

export default Footer;
import React from "react";
import Image from "next/image";
interface FooterProps {
  // Define the props for your component here
}

const Footer: React.FC<FooterProps> = (props) => {
  // Add your component logic here

  return (
    <div>
      {/* footer */}
      <div className="bg-[#222222] h-[400px] text-white flex justify-between px-10 pt-20">
        <div className="flex flex-col gap-2">
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
          <span>联系地址：xxxx</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src={"/QR.png"} // 图片路径相对于 public 文件夹
            alt="logo"
            width={280}
            height={280}
          />
          <span>扫码关注熊猫系统微信公众号</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="flex bg-gradient h-16 items-center justify-center gap-2">
        <span className="text-white">
          限时
          <span className="text-[#F9B260]">10000个</span>
          名额，领取中诺家政系统全新产品试用
        </span>
        <button className="bg-[#7AA2FF] px-4 py-2 rounded text-white">
          立即领取 {">"}
        </button>
      </div>
      {/* menu */}
      <div className="flex items-center justify-between pt-5 px-10">
        <span className="flex items-center">
          <Image
            src={"/logo.png"} // 图片路径相对于 public 文件夹
            alt="logo"
            width={40}
            height={40}
          />
          <span>中诺家政</span>
        </span>
        <span>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                首页{" "}
                <Image
                  src={"/arrow_down.svg"} // 图片路径相对于 public 文件夹
                  alt="arrow"
                  width={12}
                  height={12}
                ></Image>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">关于我们</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
        <span className="flex gap-4 text-white">
          <button className="bg-gradientR px-4 py-1.5 rounded">免费试用</button>
          <button className="bg-gradientR px-4 py-1.5 rounded">登录</button>
        </span>
      </div>
    </>
  );
}

export default Header;

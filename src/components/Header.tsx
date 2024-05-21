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
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const targetRouter = "/form"; // specify the target router here
  const currentRouter = usePathname();
  console.log(currentRouter, router);
  return (
    <>
      {currentRouter !== targetRouter && (
        <div className="flex bg-gradient h-16 items-center justify-center gap-2">
          <span className="text-white">
            限时
            <span className="text-[#F9B260]">10000个</span>
            名额，领取中诺家政系统全新产品试用
          </span>
          <button
            className="bg-[#7AA2FF] px-4 py-2 rounded text-white"
            onClick={() => router.push("/form")}
          >
            立即领取 {">"}
          </button>
        </div>
      )}
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
        <span className="flex gap-4 text-white">
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
              <DropdownItem
                key="new"
                isDisabled={currentRouter === "/"}
                onClick={() => router.push("/")}
              >
                首页
              </DropdownItem>
              <DropdownItem
                key="new"
                isDisabled={currentRouter === "/about"}
                onClick={() => router.push("/about")}
              >
                关于我们
              </DropdownItem>
              <DropdownItem
                key="new"
                isDisabled={currentRouter === "/form"}
                onClick={() => router.push("/form")}
              >
                免费试用
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {currentRouter !== "/form" && (
            <button
              className="bg-gradientR px-4 py-1.5 rounded"
              onClick={() => router.push("/form")}
            >
              免费试用
            </button>
          )}
          <button className="bg-gradientR px-4 py-1.5 rounded">登录</button>
        </span>
      </div>
    </>
  );
}

export default Header;

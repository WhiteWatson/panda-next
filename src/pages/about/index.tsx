import Layout from "@/components/Layout";
import { Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export default function About(): React.ReactElement {
  return (
    <Layout>
      <div className="pl-5">
        <div className="bg-gradientAbout rounded-xl flex justify-between">
          <div className="flex flex-col p-10 gap-10">
            <span className="text-3xl">关于我们</span>
            <span className="text-xl">服务家政，助力营收</span>
            <span>
              <Button
                variant="bordered"
                radius="none"
                className="border border-black"
              >
                免费试用
              </Button>
            </span>
          </div>
          <span className="rounded-full w-40 h-40 overflow-hidden mt-10 mr-10">
            <Image
              src="/about.png" // 图片路径相对于 public 文件夹
              alt="about"
              width={400}
              height={400}
            />
          </span>
        </div>
        <div>
          <div className="text-5xl text-center text-[#25327A] mb-10">
            公司介绍
          </div>
          <Card>
            <CardBody>
              服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收
              服务家政，助力营收营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收
              营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收服务家政，助力营收
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Avatar } from "@nextui-org/react";
import { getInformation } from "@/services";

export default function Home(): React.ReactElement {
  const [resumeInformation, setResumeInformation] = useState<any>(null);
  const [activeKey, setActiveKey] = useState(1);

  useEffect(() => {
    const fetchResumeInformation = async () => {
      const info = await getInformation("FIRST_TOP1_RESUME");
      setResumeInformation(info);
      console.log(info);
    };

    fetchResumeInformation();
  }, []);

  // Extract the required information from resumeInformation
  const { moudleConfigBase, detailInfoEntityList } =
    resumeInformation?.data || {};

  // Function to get the correct index for circular rotation
  const getCircularIndex = (index: number) => {
    return ((index - 1 + 3) % 3) + 1;
  };

  // Function to handle slide change
  const handleSlideChange = (index: number) => {
    setActiveKey(index);
  };

  return (
    <Layout>
      <>
        {/* description */}
        <div className="flex mt-4 items-center px-10">
          <div className="flex flex-col gap-4 text-2xl text-[#25327A]">
            <h1 className="text-7xl">{moudleConfigBase?.headTitle}</h1>
            <span>
              {moudleConfigBase?.subTitle.split("\\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </span>
            <button className=" text-white bg-gradientR px-8 py-4 w-52">
              免费试用
            </button>
          </div>
          <Image src="/logo.png" alt="logo" width={585} height={585} />
        </div>
        {/* content */}
        <div className="text-[#25327A] text-4xl flex justify-center flex-col gap-10">
          <span className="text-center">先进企业协作与管理平台</span>
          <div className="flex justify-around">
            <span className="w-[30%] rounded-2xl shadow-2xl h-80 flex justify-center flex-col gap-4 items-center">
              <Avatar
                name="Junior"
                size="lg"
                classNames={{ base: "w-36 h-36" }}
              />
              <span className="text-2xl text-center">
                家政服务管理系统 {">"}
              </span>
            </span>
            <span className="w-[30%] rounded-2xl shadow-2xl h-80 flex justify-center flex-col gap-4 items-center">
              <Avatar
                name="Junior"
                size="lg"
                classNames={{ base: "w-36 h-36" }}
              />
              <span className="text-2xl text-center">
                家政服务管理系统 {">"}
              </span>
            </span>
            <span className="w-[30%] rounded-2xl shadow-2xl h-80 flex justify-center flex-col gap-4 items-center">
              <Avatar
                name="Junior"
                size="lg"
                classNames={{ base: "w-36 h-36" }}
              />
              <span className="text-2xl text-center">
                家政服务管理系统 {">"}
              </span>
            </span>
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col gap-10 mt-10">
          <span className="text-center">{moudleConfigBase?.headTitle}</span>
          <span className="flex flex-col items-center text-2xl">
            {moudleConfigBase?.subTitle.split("\\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </span>
        </div>
        {/* Carousel */}
        <div className="relative w-full mt-10 z-10 px-10">
          <div className="relative w-full min-h-[200px] h-full overflow-hidden">
            {detailInfoEntityList?.slice(0, 3).map((item, index) => {
              const position = getCircularIndex(activeKey - index);
              const className =
                position === 2
                  ? "relative top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-auto z-20 transition-all duration-500 ease-in-out"
                  : position === 1
                  ? "absolute top-[15%] left-0 w-[30%] h-auto z-10 transition-all duration-500 ease-in-out"
                  : "absolute top-[15%] right-0 w-[30%] h-auto z-10 transition-all duration-500 ease-in-out";

              return (
                <div key={index} className={className}>
                  <img
                    src={item.headImageUrl}
                    alt={item.headTitle}
                    className="w-full min-h-[200px] object-cover mx-auto"
                  />
                </div>
              );
            })}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-4">
            {detailInfoEntityList?.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index + 1)}
                className={`w-16 h-2 mx-1 rounded-full transition-all duration-300 ${
                  activeKey === index + 1 ? "bg-[#CCCCCC]" : "bg-[#e8e8e8]"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-10 pt=[200px]">
          <div
            className="absolute top-[-200px] inset-0 bg-cover bg-center z-0 h-[600px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">
            帮助合作家政公司减少客户流失、提升客户满意度
          </span>
          <span className="flex flex-col items-center text-2xl">
            营销获客、客户跟进、维护客户关系从拓客到售后围绕客户全方位立体服务
          </span>
          <div className="flex justify-around z-10">
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[600px] flex justify-center flex-col gap-4 px-3">
              <span className="flex justify-between gap-4">
                <Avatar
                  name="Junior"
                  size="lg"
                  classNames={{ base: "w-20 h-20 min-w-20" }}
                />
                <span className="text-2xl">三款营销工具，0成本拉新获客</span>
              </span>
              <span className="text-2xl">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[600px] flex justify-center flex-col gap-4 px-3">
              <span className="flex justify-between gap-4">
                <Avatar
                  name="Junior"
                  size="lg"
                  classNames={{ base: "w-20 h-20 min-w-20" }}
                />
                <span className="text-2xl">
                  客户管理按需跟进客户、给客户更好的服务
                </span>
              </span>
              <span className="text-2xl">
                客户管理不错过客户任何一个可能成单的机会
                快速匹配阿姨，精准匹配客户需求 在线签署合同给客户更专业的体验
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[600px] flex justify-center flex-col gap-4 px-3">
              <span className="flex justify-between gap-4">
                <Avatar
                  name="Junior"
                  size="lg"
                  classNames={{ base: "w-20 h-20 min-w-20" }}
                />
                <span className="text-2xl">
                  日常关怀、客户数据分析帮助你维护客户关系
                </span>
              </span>
              <span className="text-2xl">
                生日、节日短信日常关怀让客户感受你无微不至的爱
                客户数据分析让你更了解用户的需求，可以精准推荐，提高转化率
              </span>
            </span>
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-20 pt=[200px]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-[600px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">SaaS赋能平台，功能丰富易用</span>
          <span className="flex flex-col items-center text-2xl">
            熊猫系统的功能全面而易用，能够满足几乎所有家政公司的日常需求，
            提效率，降成本，就是这么简单
          </span>
          <div className="flex justify-around z-10 bg-white w-full">
            <Image
              src="/functions.png" // 图片路径相对于 public 文件夹
              alt="functions"
              layout="responsive"
              width={100}
              height={40}
            />
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-10 pt=[200px] ">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-[600px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">增值服务</span>
          <div className="flex justify-around z-10 flex-wrap gap-6">
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
            <span className="w-[30%] bg-white rounded-2xl shadow-2xl h-[300px] flex justify-center flex-col gap-4">
              <span></span>
              <span className="text-center">保险</span>
              <span className="text-2xl text-center">
                微网站、热文推广、宣传海报三款营销工具帮助家政公司品牌宣传，低成本获取客户线索
              </span>
            </span>
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-20 pt=[200px] mb-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-[600px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">合作客户</span>
          <span className="flex flex-col items-center text-2xl">
            截止2022年1月，合作家政门店超过40000家
          </span>
        </div>
      </>
    </Layout>
  );
}

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Avatar } from "@nextui-org/react";
import { getInformation } from "@/services";

export default function Home(): React.ReactElement {
  const [resumeInformation, setResumeInformation] = useState<any>(null);
  const [helpInformation, setHelpInformation] = useState<any>(null);
  const [functionInformation, setFunctionInformation] = useState<any>(null);
  const [serviceAddInformation, setServiceAddInformation] = useState<any>(null);
  const [cooperativeUserInformation, setCooperativeUserInformation] =
    useState<any>(null);
  const [cooperativePartnerInformation, setCooperativePartnerInformation] =
    useState<any>(null);
  const [activeKey, setActiveKey] = useState(1);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const [
          resumeInfo,
          helpInfo,
          functionInfo,
          serviceAddInfo,
          cooperativeUserInfo,
          cooperativePartnerInfo,
        ] = await Promise.all([
          getInformation("FIRST_TOP1_RESUME"),
          getInformation("FIRST_TOP2_HELP"),
          getInformation("FIRST_TOP3_FUNCTION"),
          getInformation("FIRST_TOP4_SERVICE_ADD"),
          getInformation("FIRST_TOP5_COOPRATIVE_USER"),
          getInformation("FIRST_TOP6_COOPRATIVE_PARTNER"),
        ]);

        setResumeInformation(resumeInfo);
        setHelpInformation(helpInfo);
        setFunctionInformation(functionInfo);
        setServiceAddInformation(serviceAddInfo);
        setCooperativeUserInformation(cooperativeUserInfo);
        setCooperativePartnerInformation(cooperativePartnerInfo);
      } catch (error) {
        console.error("Failed to fetch information", error);
      }
    };

    fetchInformation();
  }, []);

  // Extract the required information from the state
  const {
    moudleConfigBase: resumeConfig,
    detailInfoEntityList: resumeDetails,
  } = resumeInformation?.data || {};
  const { moudleConfigBase: helpConfig } = helpInformation?.data || {};
  const { moudleConfigBase: functionConfig } = functionInformation?.data || {};
  const { moudleConfigBase: serviceAddConfig } =
    serviceAddInformation?.data || {};
  const { moudleConfigBase: cooperativeUserConfig } =
    cooperativeUserInformation?.data || {};
  const { moudleConfigBase: cooperativePartnerConfig } =
    cooperativePartnerInformation?.data || {};

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
            <h1 className="text-7xl">中诺金管家</h1>
            <span>4000+家政公司的选择</span>
            <span>
              阿姨电子简历、北京调查、家政保险众多功能简单易用，是能提升家政公司管理、盈利能力的互联网家政管理软件。
            </span>
            <button className=" text-white bg-gradientR px-8 py-4 w-52">
              免费试用
            </button>
          </div>
          <Image src="/logo.png" alt="logo" width={585} height={585} />
        </div>
        {/* content */}
        {/* <div className="text-[#25327A] text-4xl flex justify-center flex-col gap-10">
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
        </div> */}
        <div className="text-[#25327A] text-4xl flex flex-col gap-10 mt-10">
          <span className="text-center">{resumeConfig?.headTitle}</span>
          <span className="flex flex-col items-center text-2xl">
            {resumeConfig?.subTitle.split("\\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </span>
        </div>
        {/* Carousel */}
        <div className="relative w-full mt-10 z-10 px-10">
          <div className="relative w-full min-h-[200px] h-full overflow-hidden">
            {resumeDetails?.slice(0, 3).map((item, index) => {
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
            {resumeDetails?.slice(0, 3).map((_, index) => (
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
            style={{ backgroundImage: `url(${helpConfig?.headImageUrl})` }}
          ></div>
          <span className="text-center">{helpConfig?.headTitle}</span>
          <span className="flex flex-col items-center text-2xl">
            {helpConfig?.subTitle.split("\\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </span>
          <div className="flex justify-around z-10">
            {helpInformation?.data?.detailInfoEntityList.map((item, index) => (
              <span
                key={index}
                // className="w-[30%] bg-white rounded-2xl shadow-2xl h-[600px] flex justify-center flex-col gap-4 px-3"
                className="w-[30%] rounded-2xl flex justify-center flex-col gap-4 px-3"
              >
                {/* <span className="flex justify-between gap-4">
                  <Avatar
                    name="Junior"
                    size="lg"
                    classNames={{ base: "w-20 h-20 min-w-20" }}
                  />
                  <span className="text-2xl">{item.headTitle}</span>
                </span> */}
                <span className="text-2xl">
                  <img
                    src={item.headImageUrl}
                    alt={item.headTitle}
                    className="w-full h-auto"
                  />
                </span>
              </span>
            ))}
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 pt-20 pt=[200px] relative">
          <div
            className="absolute inset-0 bg-cover bg-top z-0 h-[600px] top-[-10px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">{functionConfig?.headTitle}</span>
          <span className="flex flex-col items-center text-2xl">
            {functionConfig?.subTitle.split("\\n").map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </span>
          <div className="flex justify-around z-10 bg-white w-full flex-wrap">
            {functionInformation?.data?.detailInfoEntityList.map(
              (item, index) => (
                <div key={index} className="w-[25%] flex flex-col items-center">
                  <img
                    src={item.headImageUrl}
                    alt={item.headTitle}
                    className="h-1/2 h-auto"
                  />
                  <span className="text-center text-2xl">{item.headTitle}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-10 pt=[200px] relative">
          {/* <div
            className="absolute inset-0 bg-cover bg-center z-0 h-[600px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div> */}
          <span className="text-center">{serviceAddConfig?.headTitle}</span>
          <div className="flex justify-around z-10 flex-wrap gap-6">
            {serviceAddInformation?.data?.detailInfoEntityList.map(
              (item, index) => (
                <span
                  key={index}
                  className="w-[30%] bg-white rounded-2xl shadow-2xl flex justify-center flex-col gap-4"
                >
                  {/* <span></span>
                  <span className="text-center">{item.headTitle}</span> */}
                  <span className="text-2xl text-center overflow-hidden">
                    <img
                      src={item.headImageUrl}
                      alt={item.headTitle}
                      className="w-full h-auto"
                    />
                  </span>
                </span>
              )
            )}
          </div>
        </div>
        <div className="text-[#25327A] text-4xl flex flex-col relative gap-10 mt-20 pt=[200px] mb-[600px] relative">
          <div
            className="absolute inset-0 bg-cover bg-top z-0 h-[700px] top-[-150px]"
            style={{ backgroundImage: "url('bg.png')" }}
          ></div>
          <span className="text-center">
            {cooperativeUserConfig?.headTitle}
          </span>
          <span className="flex flex-col items-center text-2xl">
            {cooperativeUserConfig?.subTitle}
          </span>
          <div className="flex justify-around z-10 flex-wrap gap-6">
            {cooperativeUserInformation?.data?.detailInfoEntityList.map(
              (item, index) => (
                <span
                  key={index}
                  className="w-[30%] bg-white rounded-2xl shadow-2xl flex justify-center flex-col gap-4"
                >
                  <span className="text-2xl text-center overflow-hidden">
                    <img
                      src={item.headImageUrl}
                      alt={item.headTitle}
                      className="w-full h-auto"
                    />
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </>
    </Layout>
  );
}

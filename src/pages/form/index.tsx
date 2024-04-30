import React from "react";
import {
  Input,
  RadioGroup,
  Radio,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import Layout from "@/components/Layout";
export default function App() {
  return (
    <Layout>
      <>
        <div className="px-10 mt-6">
          <Card className="bg-gradient">
            <CardBody>
              <div className="text-2xl text-white flex flex-col gap-4 text-center">
                <span>熊猫系统</span>
                <span>免费体验（每天前100名）</span>
                <p className="text-lg">
                  阿姨管理、被调、保险、体验、证书、培训、帮助100000+家政公司在线盈利
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col gap-6 px-10 mt-10">
          <Input
            isRequired
            labelPlacement="outside"
            label="家政公司名称"
            className="w-full "
            placeholder="请输入您所在的家政公司名称"
          />
          <Input
            isRequired
            labelPlacement="outside"
            type="phone"
            label="手机号"
            className="w-full "
            placeholder="请输入手机号"
          />
          <RadioGroup label="你在公司的职位">
            <Radio value="buenos-aires">老板</Radio>
            <Radio value="sydney">阿姨</Radio>
            <Radio value="san-francisco">员工</Radio>
          </RadioGroup>
          <RadioGroup label="是否是熊猫系合作客户？">
            <Radio value="yes">是</Radio>
            <Radio value="no">否</Radio>
          </RadioGroup>
          <div className="flex items-center justify-center">
            <Button className="bg-gradient w-[150px] py-6 text-white text-lg">
              提交
            </Button>
          </div>
        </div>
      </>
    </Layout>
  );
}

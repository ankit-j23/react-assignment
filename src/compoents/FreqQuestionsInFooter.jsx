import React, { useContext } from "react";
import { Collapse } from "antd";
import MyContext from "../context/MyContext";


const FreqQuestionsInFooter = () => {

    const {Panel} = Collapse
    const context = useContext(MyContext)
    const {items} = context;
  return (
    <div className="flex flex-col gap-8   w-10/12 md:w-9/12 lg:8/12 xl:w-7/11 mx-auto mt-40 mb-20">
        <div className="font-semibold text-blue-500 border border-blue-500 px-3 py-2 place-self-center">Frequentry Asked Questions &#94;</div>
      <Collapse items={items} defaultActiveKey={["1"]} bordered={false} />

      {/* <Collapse defaultActiveKey={["1"]}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse> */}
    </div>
  );
};

export default FreqQuestionsInFooter;

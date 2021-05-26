import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const RegistrationTabs = ({ infoItems }) => {
  return (
    <div>
      <Tabs className="tabs" defaultActiveKey="rules" id="tab">
        {infoItems.map((item) => (
          <Tab key={item.title.toLowerCase()} eventKey={item.title.toLowerCase()} title={item.title}>
            <p className="tab-content">{item.content}</p>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default RegistrationTabs;

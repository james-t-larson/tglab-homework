import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { ImPlus, ImMinus } from "react-icons/im";

const RegisterAccordion = ({ infoItems }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [selected, setSelected] = useState(-1);

  return (
    <div>
      <Accordion>
        {infoItems.map((item, index) => (
          <Card>
            <Accordion.Toggle
              key={item.title}
              id={index}
              as={Card.Header}
              eventKey={item.title}
              onClick={(e) => {
                selected === index
                  ? setSelected(-1)
                  : setSelected(Number(e.target.id));
                handleShow();
              }}
              className={selected === index && "open"}
            >
              {item.title}
              {selected === index ? (
                <ImMinus className="icon icon-open" />
              ) : (
                <ImPlus className="icon icon-closed" />
              )}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={item.title}>
              <Card.Body>{item.content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default RegisterAccordion;

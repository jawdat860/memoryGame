import { Fragment } from "react";
import Styless from "./StartPage.module.css";
import { createPortal } from "react-dom";
const Start = (props) => {
  return (
    <div className={!props.start ? Styless["control-buttons"] :""}>
      <span onClick={props.startHandler}>{!props.start ? "Start Game" : ""}</span>
    </div>
  );
};
const StartPage = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Start start={props.start} startHandler={props.startHandler} />,
        document.getElementById("over")
      )}
    </Fragment>
  );
};
export default StartPage;

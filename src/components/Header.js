import { Fragment, useContext, useState } from "react";
import styless from "./Header.module.css";
import StartPage from "./UI/StartPage";
import Context from "./data/Context";
const Header = () => {
  const [start, setStart] = useState(false);
  const [name, setName] = useState("");

  const startHandler = () => {
    let name = prompt("Please Enter Your Name !");
    setName(name);
    setStart((pre) => !pre);
  };
 const ctx =useContext(Context)
  return (
    <Fragment>
      <StartPage start={start} startHandler={startHandler} />
      <div className={styless["info-container"]}>
        <div className={styless.name}>
          Hello: <span>{name}</span>
        </div>
        <div className={styless.tries}>
          Wrong Tries: <span>{ctx.wrong}</span>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;

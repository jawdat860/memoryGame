import { createContext } from "react";

const Context = createContext({
  items: [],
  wrong:0,
  check: (current) => {},
  handleClick: (id) => {},
 
});
export default Context;

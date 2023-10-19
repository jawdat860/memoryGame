import Context from "./Context";
import { useState } from "react";
const Provider = (props) => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "", index: 1, ok: 0 },
      { id: 1, img: "/img/html.png", stat: "", index: 2, ok: 0 },
      { id: 2, img: "/img/css.png", stat: "", index: 3, ok: 0 },
      { id: 2, img: "/img/css.png", stat: "", index: 4, ok: 0 },
      { id: 3, img: "/img/js.png", stat: "", index: 5, ok: 0 },
      { id: 3, img: "/img/js.png", stat: "", index: 6, ok: 0 },
      { id: 4, img: "/img/scss.png", stat: "", index: 7, ok: 0 },
      { id: 4, img: "/img/scss.png", stat: "", index: 8, ok: 0 },
      { id: 5, img: "/img/react.png", stat: "", index: 9, ok: 0 },
      { id: 5, img: "/img/react.png", stat: "", index: 10, ok: 0 },
      { id: 6, img: "/img/vue.png", stat: "", index: 11, ok: 0 },
      { id: 6, img: "/img/vue.png", stat: "", index: 12, ok: 0 },
      { id: 7, img: "/img/angular.png", stat: "", index: 13, ok: 0 },
      { id: 7, img: "/img/angular.png", stat: "", index: 14, ok: 0 },
      { id: 8, img: "/img/nodejs.png", stat: "", index: 15, ok: 0 },
      { id: 8, img: "/img/nodejs.png", stat: "", index: 16, ok: 0 },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [wrongs, setWrong] = useState(0);

  function check(current) {
    if (
      items[current].id === items[prev].id &&
      items[current].index !== items[prev].index
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      items[current].ok = 1;
      items[prev].ok = 1;

      setItems([...items]);
      setPrev(-1);
    }

    if (items[current].index === items[prev].index) {
      items[current].stat = "";
      items[prev].stat = "";
      setItems([...items]);
      setPrev(-1);
    }
    if (items[current].id !== items[prev].id) {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);

      setWrong((per) => per + 1);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 300);
    }
  }

  function handleClick(id) {
    if (items[id].ok === 1) {
      return;
    }
    if (prev === -1) {
      items[id].stat = "active";

      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }
  const context = {
    items: items,
    wrong: wrongs,
    check: check,
    handleClick: handleClick,
    win: win,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
export default Provider;

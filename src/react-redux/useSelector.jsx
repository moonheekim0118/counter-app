import { useStore } from "react-redux";
import { useState, useEffect } from "react";
const useSelector = (selector) => {
  const store = useStore();
  const [state, setState] = useState(selector(store.getState()));

  console.log(store.getState());
  console.log(selector);

  console.log(selector(store.getState()));

  useEffect(() => {
    const callback = () => {
      // const state = store.getState();
      const state = selector(store.getState());

      setState(state);
    };
    store.subscribe(callback);
  }, []);

  return state;
};

export default useSelector;

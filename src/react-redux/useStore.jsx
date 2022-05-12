import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

const useStore = () => {
  return useContext(ReactReduxContext).store;
};

export default useStore;

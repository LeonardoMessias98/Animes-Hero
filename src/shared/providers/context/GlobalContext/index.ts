import React, { createContext } from "react";
import GlobalType from "./type";
import InitialState from "./initialState";

export type GlobalContextProps = {
  state: GlobalType;
  setState: React.Dispatch<React.SetStateAction<GlobalType>>;
};

const GlobalContext = createContext<GlobalContextProps>(InitialState);

export default GlobalContext;

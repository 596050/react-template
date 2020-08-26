import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

const GlobalContext = createContext<any>(undefined);
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState();

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

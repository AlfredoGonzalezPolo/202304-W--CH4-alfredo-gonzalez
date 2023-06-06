import { usePhone } from "../hooks/use.phone";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    phoneContext: usePhone(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

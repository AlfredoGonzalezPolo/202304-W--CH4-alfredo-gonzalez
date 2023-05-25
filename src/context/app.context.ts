import { createContext } from "react";
import { usePhone } from "../hooks/use.phone";

export type ContextStructure = {
  sample: string;
  notesContext: ReturnType<typeof usePhone>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Rootstate } from "../store";

//TypedUseSelectorHook ferremante ja utilizada pra possibilitar esse tipo de tipagem
export const useApp: TypedUseSelectorHook<Rootstate> = useSelector;

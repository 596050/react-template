import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeType } from "../../utils";

const useTheme = (): ThemeType => {
  const theme = useContext<ThemeType>(ThemeContext);
  return theme || {};
};

export default useTheme;

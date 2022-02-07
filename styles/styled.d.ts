import "styled-components";
import { DefaultTheme as AppTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

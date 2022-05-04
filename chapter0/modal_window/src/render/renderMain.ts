import { RenderMainProps } from "../parameter/parameter";
import { renderDescription } from "./renderDescription";
import { renderPageController } from "./common/renderPageController";
/**
 * 
 * @param mainBody 
 * @todo 
 */
export const renderMain = (mainBody: RenderMainProps) => {
  renderDescription(mainBody);
  renderPageController(mainBody);
};

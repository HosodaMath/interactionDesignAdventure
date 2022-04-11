import {
  createImageButton,
  createDivision,
} from "../../component/component";
import { RenderButtonProps } from "../../parameter/parameter";
import OpenButton from "../../assets/open_dark.svg";
import CloseButton from "../../assets/close_dark.svg";
export const renderButton = (props: RenderButtonProps) => {
  const buttonDivision = createDivision({ classList: ["planeButtonDivision"] });

  const openButton = createImageButton({
    classList: ["imageButton"],
    imageProps: { classList: ["image"], imageURL: OpenButton },
  });

  const closeButton = createImageButton({
    classList: ["imageButton"],
    imageProps: { classList: ["image"], imageURL: CloseButton },
  });

  props.mainBody.appendChild(buttonDivision);
  buttonDivision.appendChild(openButton);

  const menuOpenButton = () => {
    buttonDivision.removeChild(openButton);
    buttonDivision.appendChild(closeButton);
  };

  const menuCloseButton = () => {
    buttonDivision.removeChild(closeButton);
    buttonDivision.appendChild(openButton);
  };

  openButton.addEventListener("click", menuOpenButton);

  closeButton.addEventListener("click", menuCloseButton);
};

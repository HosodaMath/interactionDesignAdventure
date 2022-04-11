import { createPlaneButton, createDivision } from "../../component/component";
import { RenderButtonProps } from "../../parameter/parameter";
export const renderButton = (props: RenderButtonProps) => {
  const buttonDivision = createDivision({ classList: ["planeButtonDivision"] });

  const button1 = createPlaneButton({
    classList: ["planeButton"],
    textContents: "Click Me",
  });

  const button2 = createPlaneButton({
    classList: ["planeButton"],
    textContents: "Change Me",
  });

  props.mainBody.appendChild(buttonDivision);
  buttonDivision.appendChild(button1);

  const clickButton1 = () => {
    buttonDivision.removeChild(button1);
    buttonDivision.appendChild(button2);
  };

  const clickButton2 = () => {
    buttonDivision.removeChild(button2);
    buttonDivision.appendChild(button1);
  };

  button1.addEventListener("click", clickButton1);

  button2.addEventListener("click", clickButton2);
};

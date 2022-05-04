// import { createPlaneButton, createDivision } from "../component/component";
import { RenderButtonProps } from "../parameter/parameter";
/**
 * @description 機能はボタンの入れ替えのみ
 * @param props 
 */
export const renderDescription = (props: RenderButtonProps) => {
  const mainBody = props.mainBody;

  mainBody.innerHTML = `
  <section class = wrapper>
    <p class = description>右下にある?ボタンを押してください。</p>
  </section>
  `;

  /*
  const buttonDivision = createDivision({ classList: ["planeButtonDivision"] });
  const openButton = createPlaneButton({
    classList: ["planeButton"],
    textContents: "open",
  });

  const closeButton = createPlaneButton({
    classList: ["planeButton"],
    textContents: "close",
  });

  mainBody.appendChild(buttonDivision);
  buttonDivision.appendChild(openButton);

  openButton.addEventListener("click", () => {
    buttonDivision.removeChild(openButton);
    buttonDivision.appendChild(closeButton);
  });

  closeButton.addEventListener("click", () => {
    buttonDivision.removeChild(closeButton);
    buttonDivision.appendChild(openButton);
  });
  */
};

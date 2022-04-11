import { PlaneButtonProps } from "../../parameter/parameter";

export class ButtonComponent {
  /**
   * @description plane buttonの作成
   * @static createPlaneButton
   * @param props
   * @returns HTMLButtonElementを返す
   */
  static createPlaneButton = (props: PlaneButtonProps): HTMLButtonElement => {
    const button = document.createElement("button");
    button.classList.add(...props.classList);
    button.textContent = props.textContents;

    return button;
  };
}

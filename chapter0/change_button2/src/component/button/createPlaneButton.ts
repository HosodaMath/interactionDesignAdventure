import { PlaneButtonProps } from "../../parameter/parameter";
/**
 * @description plane buttonの作成
 * @param props 配列で定義したクラス名とボタンテキスト
 * @returns HTMLButtonElementを返す
 */
export const createPlaneButton = (
  props: PlaneButtonProps
): HTMLButtonElement => {
  const button = document.createElement("button");
  button.classList.add(...props.classList);
  button.textContent = props.textContents;

  return button;
};

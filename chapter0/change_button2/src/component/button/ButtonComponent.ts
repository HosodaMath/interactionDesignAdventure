import { PlaneButtonProps, ImageButtonProps } from "../../parameter/parameter";

export class Button {
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

  /**
   * @description 画像ボタンの作成
   * @static createImageButton
   * @param props ボタンタグのクラス名 + 画像タグのクラス名と画像URL
   * @returns 画像タグを入れ子にしたHTMLButtonElementを返す
   */
  static createImageButton = (props: ImageButtonProps) => {
    // ボタンを作成
    const button = document.createElement("button");
    button.classList.add(...props.classList);

    // 画像を作成
    const image = document.createElement("img");
    image.classList.add(...props.imageProps.classList);
    image.src = props.imageProps.imageURL;

    // ボタンタグに画像タグを入れ子にする。
    button.appendChild(image);

    return button;
  };
}

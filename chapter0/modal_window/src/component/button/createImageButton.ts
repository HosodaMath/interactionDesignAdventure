import { ImageButtonProps } from "../../parameter/parameter";
/**
 * @description 画像ボタンの作成
 * @param props ボタンタグのクラス名 + 画像タグのクラス名と画像URL
 * @returns 画像タグを入れ子にしたHTMLButtonElementを返す
 */
export const createImageButton = (props: ImageButtonProps) => {
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

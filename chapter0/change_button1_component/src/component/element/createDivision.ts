import { DivisionProps } from "../../parameter/parameter";
/**
 * @description divタグの作成
 * @param props 配列で定義したクラス名
 * @returns HTMLDivElementを返す
 */
export const createDivision = (props: DivisionProps): HTMLDivElement => {
  const division = document.createElement("div");
  division.classList.add(...props.classList);

  return division;
};

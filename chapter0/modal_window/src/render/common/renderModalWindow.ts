import { createSection, createDivision } from "../../component/component";
import { ModalButtonProps } from "../../parameter/parameter";
/**
 * @description modalWindowの描画
 * @param props
 * @todo モーダルウィンドウの中身を追加する
 */
export const renderModalWindow = (props: ModalButtonProps) => {
  const pageControllerProps = props.pageControllerProps;
  const modalWindow = createSection({ classList: ["modalWindow"] });
  const modalMainWindow = createDivision({ classList: ["modalMainWindow"] });
  const modalOpenButton = props.modalOpenButton;
  const modalCloseButton = props.modalCloseButton;

  modalOpenButton.addEventListener("click", () => {
    // モーダルウィンドウを追加する
    pageControllerProps.mainBody.appendChild(modalWindow);

    // メインのモーダルウィンドウを追加する。
    modalWindow.appendChild(modalMainWindow);

    modalMainWindow.innerHTML = `
    <h2>モーダルウィンドウとはなにか？</h2>
    <p>メインページとは独立している。closeボタンを押さない限り閉じない。</p>
    <p>メインページの詳細情報や注意喚起などに使われる</p>
    `;

    // モーダルウィンドウを閉じるボタンを追加する
    modalMainWindow.appendChild(modalCloseButton);
  });

  modalCloseButton.addEventListener("click", () => {
    pageControllerProps.mainBody.removeChild(modalWindow);
  });
};

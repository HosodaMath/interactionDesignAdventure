import { renderButton } from "./render/render";
import "sanitize.css";
import "./style.scss";

/**
 * ボタンをクリックしたらボタンが入れ替わる
 * changeButton1には問題点があります。
 * それはズバリ使い回しができていないというこです。
 * それは一体どこでしょうか？
 */
const main = () => {
  const mainBody = document.body;
  mainBody.classList.add(...["darkMode"]);

  renderButton({ mainBody: mainBody });
};

window.addEventListener("DOMContentLoaded", main);

import { renderMain } from "./render/renderMain";
import "sanitize.css";
import "./style.scss";

/**
 * モーダルウィンドウの開閉
 *
 */
const main = () => {
  const mainBody = document.body;
  mainBody.classList.add(...["darkMode"]);

  renderMain({ mainBody: mainBody });
};

window.addEventListener("DOMContentLoaded", main);

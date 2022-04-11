import "sanitize.css";
import "./style.scss";

/**
 * ボタンをクリックしたらボタンが入れ替わる
 */
const main = () => {
  // body要素を取得
  // body要素はHTML1ページに付きかならず1つなのでかなり重要な要素であると言っても過言ではないと思います。
  const mainBody = document.body;
  mainBody.classList.add(...["darkMode"]);

  // ここでbutton要素の親要素であるdivタグを作成
  const buttonDivision = document.createElement("div");
  buttonDivision.classList.add(...["planeButtonDivision"]);

  // button1を作成
  // button1のテキスト要素はClick Meです
  const button1 = document.createElement("button");
  button1.classList.add(...["planeButton"]);
  button1.textContent = "Click Me";

  // button2を作成
  // button2のテキスト要素はChange Meです
  const button2 = document.createElement("button");
  button2.classList.add(...["planeButton"]);
  button2.textContent = "Change Me";

  // ここでdivisionに挿入するのはbutton1のみです
  // ここでレンダリングするとbutton1が表示されます。
  // buttonとしての機能はまだありません。
  mainBody.appendChild(buttonDivision);
  buttonDivision.appendChild(button1);

  // ここでbutton1に機能を追加してみましょう。
  // 機能はシンプルにbutton1をクリックしたらbutton1を削除して代わりにbutton2を表示するというものです。
  // 以下のコードをエディターに書いたら再度実行してbuttonをクリックしてみましょう。
  button1.addEventListener("click", () => {
    buttonDivision.removeChild(button1);
    buttonDivision.appendChild(button2);
  });

  // どうですか？ボタンが入れ替わっているのがわかるでしょう。
  // それでは逆にbutton2を削除してbutton1を表示してみよう。
  // ただしbutton1のイベント処理はそのままです。
  // さてどう変わるでしょうか？予想を立ててみてください。
  // コードは以下のようになります。
  button2.addEventListener("click", () => {
    buttonDivision.removeChild(button2);
    buttonDivision.appendChild(button1);
  });

  /**
   * これは以下のように書けます
   * 1. button1をbuttonDivisionに挿入
   * 2. button1をクリック
   * 3. button1が削除されbutton2が挿入される
   * 4. button2をクリック
   * 5. button2が削除されbutton1が挿入される
   * 6. 2に戻るそして以降はこれを繰り返しているわけです
   *
   * 大事なのは親要素であるbuttonDivisionはそのまま
   * にしておくことです。
   * そしてHTMLElementの挿入場所を間違えないことです。
   */
};

window.addEventListener("DOMContentLoaded", main);

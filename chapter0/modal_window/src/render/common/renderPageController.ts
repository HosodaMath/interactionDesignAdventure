import { RenderControllerProps } from "../../parameter/parameter";
import {
  createDivision,
  createImageButton,
  createSection,
} from "../../component/component";
import BackPageDarkModeButton from "../../assets/icon/linkButton/pageTransition/backPageDarkModeCircle.svg";
import NextPageDarkModeButton from "../../assets/icon/linkButton/pageTransition/nextPageDarkModeCircle.svg";
import HintOpenDarkModeButton from "../../assets/icon/button/hintOpenDarkModeButton.svg";
import HintCloseDarkModeButton from "../../assets/icon/button/hintCloseDarkModeButton.svg";
import GitHubLinkDarkModeButton from "../../assets/icon/linkButton/GitHubLinkDarkModeButton.svg";
import { renderModalWindow } from "./renderModalWindow";
/**
 * @description pageControllerの描画
 * @todo nextPageButtonとbackPageButtonはリンクボタンに移動する -> 済み
 * @todo imageにalt属性を追加
 * @todo sectionComponentの作成
 * @param pageControllerProps
 */
export const renderPageController = (pageControllerProps: RenderControllerProps) => {
  const pageController = createSection({
    classList: ["pageController"],
  });

  const pageControllerButtonDiv = createDivision({
    classList: ["pageControllerDiv"],
  });

  const backPageButton = createImageButton({
    classList: ["backPageButton"],
    imageProps: {
      classList: ["buttonImage"],
      imageURL: BackPageDarkModeButton,
    },
  });

  const nextPageButton = createImageButton({
    classList: ["nextPageButton"],
    imageProps: {
      classList: ["buttonImage"],
      imageURL: NextPageDarkModeButton,
    },
  });

  const descriptionOpenButton = createImageButton({
    classList: ["descriptionOpenButton"],
    imageProps: {
      classList: ["buttonImage"],
      imageURL: HintOpenDarkModeButton,
    },
  });

  const descriptionCloseButton = createImageButton({
    classList: ["descriptionCloseButton"],
    imageProps: {
      classList: ["buttonImage"],
      imageURL: HintCloseDarkModeButton,
    },
  });

  const linkGitHubButton = createImageButton({
    classList: ["linkGitHubButton"],
    imageProps: {
      classList: ["buttonImage"],
      imageURL: GitHubLinkDarkModeButton,
    },
  });

  pageControllerProps.mainBody.appendChild(pageController);
  pageController.appendChild(pageControllerButtonDiv);
  pageControllerButtonDiv.appendChild(backPageButton);
  pageControllerButtonDiv.appendChild(nextPageButton);
  pageControllerButtonDiv.appendChild(descriptionOpenButton);
  pageControllerButtonDiv.appendChild(linkGitHubButton);

  renderModalWindow({
    pageControllerProps: pageControllerProps,
    modalOpenButton: descriptionOpenButton,
    modalCloseButton: descriptionCloseButton,
  });
};

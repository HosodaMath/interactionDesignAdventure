import { sectionProps } from "../../parameter/parameter";
/**
 * 
 * @param props 
 * @returns HTMLElementを返す
 */
export const createSection = (props: sectionProps) => {
  const section = document.createElement("section");
  section.classList.add(...props.classList);

  return section;
};

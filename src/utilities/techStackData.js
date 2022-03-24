import { v4 as uuidv4 } from "uuid";
import react from "../assets/images/react-js.png";
import redux from "../assets/images/redux.png";
import sass from "../assets/images/sass.png";

/*TECH STACK DATA (FOR THE ABOUT SECTION) */

export const techStackData = [
  {
    id: uuidv4,
    src: react,
    alt: "react-icon",
    link: "https://it.reactjs.org/",
  },
  {
    id: uuidv4,
    src: redux,
    alt: "redux-icon",
    link: "https://redux-toolkit.js.org/",
  },
  {
    id: uuidv4,
    src: sass,
    alt: "sass-icon",
    link: "https://sass-lang.com/",
  },
];

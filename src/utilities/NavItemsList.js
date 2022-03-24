import { v4 as uuidv4 } from "uuid";

/*NAV ITEMS DATA */

export const navItemsList = [
  {
    id: uuidv4(),
    label: "SEARCH JOBS",
    link: "/search",
  },
  {
    id: uuidv4(),
    label: "YOUR SKILLS",
    link: "/skills",
  },
  {
    id: uuidv4(),
    label: "YOUR LIST",
    link: "/favourites",
  },
  {
    id: uuidv4(),
    label: "ABOUT",
    link: "/about",
  },
];

import { v4 as uuidv4 } from "uuid";
import jobHunt from "../assets/images/job-hunt.png";
import skills from "../assets/images/skills.png";
import favourites from "../assets/images/favourites.png";

/*HOME SECTIONS DATA AND STYLES */

export const style = {
  container: {
    light: {
      backgroundColor: "#fff0e8f8",
      textAlign: "right",
    },
    dark: {
      backgroundColor: "#222",
      textAlign: "left",
    },
  },
  title: {
    light: {
      color: "#fff0e8f8",
    },
    dark: {
      color: "#222",
    },
  },
  paragraph: {
    light: {
      color: "lightgrey",
    },
    dark: {
      color: "#666",
    },
  },
};

export const homeSectionsData = [
  {
    id: uuidv4(),
    title: "SEARCH JOBS",
    desc: [
      `You can search job offers based on work categories or keyword.`,
      `Offers contains important info as the company name, salary,
    publication date, work location and work category.`,
      `  By clicking on the "view" button you can discover more details about
    your dream job!`,
    ],
    img: { src: jobHunt, alt: "search-jobs-illustration" },
    link: "/search",
    order: "textFirst",
    theme: "dark",
  },
  {
    id: uuidv4(),
    title: "YOUR SKILLS",
    desc: [
      `Find and report your skills among our work categories list.`,
      `Jobs that match your profile will be marked with the icon ✅.`,
      `Enjoy a more personalized job-hunting!`,
    ],
    img: { src: skills, alt: "skills-illustration" },
    link: "/skills",
    order: "imgFirst",
    theme: "light",
  },
  {
    id: uuidv4(),
    title: "YOUR LIST",
    desc: [
      `Save your favourite jobs.`,
      `New offers are posted every day.`,
      `Make it easier to review the offer that impressed you the most!`,
    ],
    img: { src: favourites, alt: "favourites-illustration" },
    link: "/favourites",
    order: "textFirst",
    theme: "dark",
  },
];

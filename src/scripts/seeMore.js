import initTiltAnimation from "./tiltAnimation";
import initScrollReveal from "./scrollReveal";
import { defaultProps } from "../data/scrollRevealConfig";
import rows from "./hiddenRows";

const seeMoreBtn = document.querySelector(".see-more-btn");
const hiddenProjects = document.getElementsByClassName("projects-hidden");

export default function seeMoreButtonListener() {
  document.addEventListener("DOMContentLoaded", (e) => {
    for (let i = 0; i < rows.length; i++) {
      hiddenProjects[i].style.marginBottom = "0";
    }
  });

  seeMoreBtn.addEventListener("click", (e) => {
    if (seeMoreBtn.innerHTML === "See more") {
      seeMoreBtn.innerHTML = "See less";

      for (let i = 0; i < rows.length; i++) {
        hiddenProjects[i].innerHTML = rows[i];
        hiddenProjects[i].style.marginBottom = "8rem";
      }

      initTiltAnimation();
      initScrollReveal(
        [
          {
            element: ".project-wrapper__text__hidden",
            animation: {
              delay: 500,
              origin: window.innerWidth > 768 ? "left" : "bottom",
            },
          },
          {
            element: ".project-wrapper__image__hidden",
            animation: {
              delay: 1000,
              origin: window.innerWidth > 768 ? "right" : "bottom",
            },
          },
        ],
        defaultProps
      );
    } else {
      seeMoreBtn.innerHTML = "See more";

      for (let i = 0; i < rows.length; i++) {
        hiddenProjects[i].innerHTML = "";
        hiddenProjects[i].style.marginBottom = "0";
      }
    }
  });
}

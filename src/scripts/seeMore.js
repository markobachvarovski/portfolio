import initTiltAnimation from "./tiltAnimation";
import initScrollReveal from "./scrollReveal";
import { defaultProps } from "../data/scrollRevealConfig";

const seeMoreBtn = document.querySelector(".see-more-btn");
const hiddenProjects = document.getElementsByClassName("projects-hidden");

export default function seeMoreButtonListener() {
  seeMoreBtn.addEventListener("click", (e) => {
    if (seeMoreBtn.innerHTML === "See more") {
      seeMoreBtn.innerHTML = "See less";
      hiddenProjects[0].innerHTML = robofriendsRow;

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
      hiddenProjects[0].innerHTML = "";
    }
  });
}

const robofriendsRow =
  '            <div class="col-lg-4 col-sm-12">\n' +
  '              <div class="project-wrapper__text project-wrapper__text__hidden">\n' +
  '                <h3 class="project-wrapper__text-title">Robofriends</h3>\n' +
  "                <div>\n" +
  '                  <p class="mb-4">\n' +
  "                    This project was my first attempt at using React and connecting\n" +
  "                    a project to an API. The users are fetched from a JSON\n" +
  "                    placeholder website online\n" +
  "                    and passed through an API that assigns each user to a random\n" +
  "                    image of a robot based on their name. The user is able to\n" +
  "                    search and scroll through the robots to find a specific one.\n" +
  "                  </p>\n" +
  "                </div>\n" +
  "                <a\n" +
  '                  rel="noreferrer"\n' +
  '                  target="_blank"\n' +
  '                  class="cta-btn cta-btn--hero"\n' +
  '                  href="https://markobachvarovski.github.io/robofriends/"\n' +
  "                >\n" +
  "                  See Live\n" +
  "                </a>\n" +
  "                <a\n" +
  '                  rel="noreferrer"\n' +
  '                  target="_blank"\n' +
  '                  class="cta-btn text-color-main"\n' +
  '                  href="https://github.com/markobachvarovski/robofriends"\n' +
  "                >\n" +
  "                  Source Code\n" +
  "                </a>\n" +
  "              </div>\n" +
  "            </div>\n" +
  '            <div class="col-lg-8 col-sm-12">\n' +
  '              <div class="project-wrapper__image project-wrapper__image__hidden">\n' +
  '                <a rel="noreferrer" href="#!" target="_blank">\n' +
  "                  <div\n" +
  '                    id="img-robofriends"' +
  "                    data-tilt\n" +
  '                    data-tilt-max="4"\n' +
  '                    data-tilt-glare="true"\n' +
  '                    data-tilt-max-glare="0.5"\n' +
  '                    class="thumbnail rounded js-tilt"\n' +
  "                  >\n" +
  '                    <img alt="Robofriends Image" class="img-fluid" src="https://i.imgur.com/4V2KQw8.png"/> ' +
  "                  </div>\n" +
  "                </a>\n" +
  "              </div>\n" +
  "            </div>\n";

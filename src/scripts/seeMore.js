import initTiltAnimation from "./tiltAnimation";
import initScrollReveal from "./scrollReveal";
import { defaultProps } from "../data/scrollRevealConfig";

const seeMoreBtn = document.querySelector(".see-more-btn");
const hiddenProjects = document.getElementsByClassName("projects-hidden");
const passwordCheckerImg = document.getElementById("password-img");

export default function seeMoreButtonListener() {
  seeMoreBtn.addEventListener("click", (e) => {
    if (seeMoreBtn.innerHTML === "See more") {
      seeMoreBtn.innerHTML = "See less";
      // hiddenProjects[0].innerHTML = passwordCheckerRow;
      //
      // initTiltAnimation();
      // initScrollReveal(
      //   [
      //     {
      //       element: ".project-wrapper__text__hidden",
      //       animation: {
      //         delay: 500,
      //         origin: window.innerWidth > 768 ? "left" : "bottom",
      //       },
      //     },
      //     {
      //       element: ".project-wrapper__image__hidden",
      //       animation: {
      //         delay: 1000,
      //         origin: window.innerWidth > 768 ? "right" : "bottom",
      //       },
      //     },
      //   ],
      //   defaultProps
      // );
    } else {
      seeMoreBtn.innerHTML = "See more";
      // hiddenProjects[0].innerHTML = "";
    }
  });
}

const passwordCheckerRow =
  '            <div class="col-lg-4 col-sm-12">\n' +
  '              <div class="project-wrapper__text project-wrapper__text__hidden">\n' +
  '                <h3 class="project-wrapper__text-title">Password checker</h3>\n' +
  "                <div>\n" +
  '                  <p class="mb-4">\n' +
  "                    This project was made in Python. The user enters a password\n" +
  "                    which gets hashed using the SHA1 algorithm and the hash is split\n" +
  "                    into the first 5 characters and the remainder of the hash. An\n" +
  '                    API from "Have I been pwned?" is used to compare the\n' +
  "                    passwords to their databases. Since the API implements k-anonimity,\n" +
  "                    only the first 5 characters of the hash are compared using\n" +
  "                    the API and the rest of the hash is compared locally to\n" +
  "                    maintain security.\n" +
  "                  </p>\n" +
  "                </div>\n" +
  "<!--                <a-->\n" +
  '<!--                  rel="noreferrer"-->\n' +
  '<!--                  target="_blank"-->\n' +
  '<!--                  class="cta-btn cta-btn--hero"-->\n' +
  '<!--                  href="#!"-->\n' +
  "<!--                >-->\n" +
  "<!--                  See Live-->\n" +
  "<!--                </a>-->\n" +
  "                <a\n" +
  '                  rel="noreferrer"\n' +
  '                  target="_blank"\n' +
  '                  class="cta-btn text-color-main pass-btn"\n' +
  '                  href="https://github.com/markobachvarovski/passwordchecker"\n' +
  "                >\n" +
  "                  Source Code\n" +
  "                </a>\n" +
  "              </div>\n" +
  "            </div>\n" +
  '            <div class="col-lg-8 col-sm-12">\n' +
  '              <div class="project-wrapper__image project-wrapper__image__hidden">\n' +
  '                <a rel="noreferrer" href="#!" target="_blank">\n' +
  "                  <div\n" +
  "                    data-tilt\n" +
  '                    data-tilt-max="4"\n' +
  '                    data-tilt-glare="true"\n' +
  '                    data-tilt-max-glare="0.5"\n' +
  '                    class="thumbnail rounded js-tilt"\n' +
  "                  >\n" +
  '                    <img alt="Project Image" class="img-fluid" src=' +
  passwordCheckerImg.src +
  " /> " +
  "                  </div>\n" +
  "                </a>\n" +
  "              </div>\n" +
  "            </div>\n";

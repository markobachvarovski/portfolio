import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import createCloud from "./data/tagCloud";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import seeMoreButtonListener from "./scripts/seeMore";
import mouseShadowHandler from "./scripts/mouseShadow";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
seeMoreButtonListener();
// mouseShadowHandler();
// alert("Hi")

if (screen.width > 750) {
  createCloud(350);
} else {
  createCloud(150);
}

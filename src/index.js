import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import createCloud from "./data/tagCloud";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

if(screen.width > 850){
    createCloud(350);
} else{
    createCloud(100);
}


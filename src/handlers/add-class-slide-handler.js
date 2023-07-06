import { dom } from "../data.js";

export const addClassSlide = () => {
    if (!dom.btn.classList.contains("slide")) {
        dom.btn.classList.add("slide");
        dom.video.pause();
      } else {
        dom.btn.classList.remove("slide");
        dom.video.play();
      }
};

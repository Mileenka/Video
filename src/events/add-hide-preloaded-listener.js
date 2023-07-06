import { addHidePreloader } from "../handlers/add-hide-preloader.js";

export const addHidePreloadedListener = window.addEventListener("load", addHidePreloader);

import  { dom } from '../data.js';
import { addClassSlide } from '../handlers/add-class-slide-handler.js'; 

export const addSlide = dom.btn.addEventListener("click", addClassSlide);
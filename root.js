import { modalClose } from "./ui.js";
import { firstfetchData, search } from "./api.js";
import { } from "./localstorage.js";

document.querySelector(".modal-btn").addEventListener('click', modalClose);

firstfetchData();

document.querySelector("#searchbar").addEventListener('input', search);

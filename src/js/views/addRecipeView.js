import View from "./View";

import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    super();

    this._addHandlerShowWindow();
  }

  _toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this._toggleWindow.bind(this));
  }
}

export default new AddRecipeView();

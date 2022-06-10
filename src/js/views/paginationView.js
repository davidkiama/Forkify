import View from "./View";

import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      console.log(btn);
      handler();
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // last page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href=${icons}#icon-arrow-left></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
          `;
    }
    // in between pages
    if (currentPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>

      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href=${icons}#icon-arrow-left></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
    `;
    }
    // page 1 and there are NO other pages
    return "";
  }
}

export default new PaginationView();

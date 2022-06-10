import View from "./View";

import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline"); //event delegation
      if (!btn) return;

      const goToPage = +btn.dataset.goto; //convert the dataAttr to a number

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) return this._nextMarkup(currentPage);

    // last page
    if (currentPage === numPages && numPages > 1) return this._prevMarkup(currentPage);

    // in between pages
    if (currentPage < numPages) return `${this._prevMarkup(currentPage)} ${this._nextMarkup(currentPage)}`;

    // page 1 and there are NO other pages
    return "";
  }

  _prevMarkup(currentPage) {
    return `
    <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href=${icons}#icon-arrow-left></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    `;
  }

  _nextMarkup(currentPage) {
    return `
    <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
  }
}

export default new PaginationView();

import View from "./View";

import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return "page 1 and other pages";
    }

    // last page
    if (this._data.page === numPages && numPages > 1) {
      return "last page";
    }
    // in between pages
    if (this._data.page < numPages) {
      return "other pages";
    }
    // page 1 and there are NO other pages
    return "only 1 page";
  }
}

export default new PaginationView();

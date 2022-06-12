import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0)) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();
    this._clear(); // clear the initial text
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length == 0)) return this.renderError();

    this._data = data;

    const newMarkup = this._generateMarkup();

    //convert markup string to DOM object
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = newDOM.querySelectorAll("*");
    const curElements = this._parentElement.querySelectorAll("*");

    //compare current DOM and virtual DOM
    newElements.forEach((newEl, i) => {
      const currEl = curElements[i];

      //update the DOM only where it changed

      //Updates the TEXT
      if (!newEl.isEqualNode(currEl) && newEl.firstChild.nodeValue.trim() !== "") {
        currEl.textContent = newEl.textContent;
      }

      //Updates the ATTRIBUTES
      if (!newEl.isEqualNode(currEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          currEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
          <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterBegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterBegin", markup);
  }

  renderSuccess(message = this._successMessage) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
      `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterBegin", markup);
  }
}

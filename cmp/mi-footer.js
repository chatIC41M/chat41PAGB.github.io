class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Gonzalez Rosales Briant Gustavo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

class FooterCopy extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p tabindex="0">Copyright &copy;2022 - Restofav<br>R009X0063</p>
    </footer>
    `;
  }
}

customElements.define('footer-copy', FooterCopy);

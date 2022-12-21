class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<a href="#mainContent" class="skip-content">Skip to content</a>';
  }
}

customElements.define('skip-to-content', SkipToContent);

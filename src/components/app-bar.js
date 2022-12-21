class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>Restofav</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorites</a></li>
            <li><a href="https://github.com/hagadigi">About</a></li>
          </ul>
        </nav>
      </header>
  `;
  }
}

customElements.define('app-bar', AppBar);

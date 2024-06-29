class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>
        <header class="header">
            <div class="header__inner">
                <h1 class="header__title">Lezattt</h1>
                <button id="menu" class="header__menu">☰</button>
      
            </div>
            <nav id="drawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="#/home">Home</a></li>
                <li class="nav__item"><a href="#/like">Favorite</a></li>
                <li class="nav__item"><a href="https://www.linkedin.com/in/melinda-oktaviani/" target="_blank">About Us</a></li>
            </ul>
            </nav>
        </header>`;
  }
}

// eslint-disable-next-line quotes
customElements.define("header-bar", HeaderBar);

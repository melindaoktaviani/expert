class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
           <p>&copy; 2024 Lezattt. All rights reserved.</p>
        </footer>`;
  }
}

// eslint-disable-next-line quotes
customElements.define("footer-bar", FooterBar);

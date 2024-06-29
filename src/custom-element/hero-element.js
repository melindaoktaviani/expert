class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
            <h1 class="hero__title">find deliciousness in every food</h1>
            
            </div>
        </div>`;
  }
}

// eslint-disable-next-line quotes
customElements.define("hero-element", HeroElement);

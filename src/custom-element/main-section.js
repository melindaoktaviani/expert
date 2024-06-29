/* eslint-disable quotes */
class MainSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent" tabindex="0">
            <section class="content">
                <article class="headline">
                    <figure class="headline__figure">
                        <picture>
                            <source srcset="./images/heros/hero-small.jpg" media="(max-width: 600px)">
                            <source srcset="./images/heros/hero-large.jpg" media="(min-width: 601px)">
                            <img src="./images/heros/hero-large.jpg" width="450" alt="Hero Image" loading="lazy">
                        </picture>
                        <figcaption>Masak</figcaption>
                    </figure>

                    <div class="headline__content">
                        <h1 class="headline__title">Find the best restaurant</h1>
                        <p class="headline__description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus incidunt aliquam nisi sint quidem expedita libero fugiat, amet atque ad dicta quos odio facilis temporibus, esse vitae quis dignissimos iste.
                            Accusamus porro ex quo itaque repellendus consequuntur quas officiis. Iusto reiciendis ipsa a nemo vel minus consectetur, adipisci tempora dolorem natus ex dignissimos, non quasi sapiente quam provident earum veniam.
                        </p>
                        <button class="headline__button">Order</button>
                    </div>
                </article>

                <div class="latest">
                    <h1 class="latest__label">Find the best restaurant</h1>
                    <div class="restaurant-list">
                        <img src="./images/restaurants/restaurant1.jpg" alt="Restaurant 1" loading="lazy">
                        <img src="./images/restaurants/restaurant2.jpg" alt="Restaurant 2" loading="lazy">
                        <img src="./images/restaurants/restaurant3.jpg" alt="Restaurant 3" loading="lazy">
                        <!-- Tambahkan lebih banyak gambar restoran sesuai kebutuhan -->
                    </div>
                </div>
            </section>
        </main>`;
  }
}

customElements.define("main-section", MainSection);

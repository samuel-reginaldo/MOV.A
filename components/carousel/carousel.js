const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./carousel.css', import.meta.url).href}">
  <div class="carousel-container">
    <button class="carousel-button prev" aria-label="Previous slide">&#10094;</button>
    <div class="carousel-track-container">
      <ul class="carousel-track">
        <slot></slot>
      </ul>
    </div>
    <button class="carousel-button next" aria-label="Next slide">&#10095;</button>
    <div class="carousel-nav">
      <!-- Indicators will be generated here -->
    </div>
  </div>
`;

class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.track = this.shadowRoot.querySelector('.carousel-track');
    this.nextButton = this.shadowRoot.querySelector('.next');
    this.prevButton = this.shadowRoot.querySelector('.prev');
    this.nav = this.shadowRoot.querySelector('.carousel-nav');
    
    this.currentIndex = 0;
    this.slides = [];
    
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  connectedCallback() {
    this.nextButton.addEventListener('click', this.handleNextClick);
    this.prevButton.addEventListener('click', this.handlePrevClick);
    
    const slot = this.shadowRoot.querySelector('slot');
    slot.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    this.nextButton.removeEventListener('click', this.handleNextClick);
    this.prevButton.removeEventListener('click', this.handlePrevClick);
    
    const slot = this.shadowRoot.querySelector('slot');
    slot.removeEventListener('slotchange', this.handleSlotChange);
  }

  handleSlotChange(e) {
    const nodes = e.target.assignedNodes({ flatten: true });
    // Filter out text nodes (whitespace)
    this.slides = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE);
    
    this.slides.forEach((slide, index) => {
      slide.style.width = '100%';
      slide.style.flexShrink = '0';
    });
    
    this.setupIndicators();
    this.updateCarousel();
  }

  setupIndicators() {
    this.nav.innerHTML = '';
    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-indicator');
      if (index === 0) dot.classList.add('current-slide');
      
      dot.addEventListener('click', () => {
        this.currentIndex = index;
        this.updateCarousel();
      });
      
      this.nav.appendChild(dot);
    });
  }

  handleNextClick() {
    if (this.slides.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  handlePrevClick() {
    if (this.slides.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const amountToMove = this.currentIndex * 100;
    this.track.style.transform = `translateX(-${amountToMove}%)`;
    
    // Update indicators
    const dots = this.nav.querySelectorAll('.carousel-indicator');
    dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.classList.add('current-slide');
      } else {
        dot.classList.remove('current-slide');
      }
    });
  }
}

export { CarouselComponent };

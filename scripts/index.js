import { Header } from '../components/header/index.js';
import { Footer } from '../components/footer/index.js';
import { Card } from '../components/card/index.js';
import { Carousel } from '../components/carousel/index.js';
import { Article } from '../components/article/index.js';
import { Home } from '../pages/Home/index.js';

// Central Registration of Web Components
customElements.define('app-header', Header);
customElements.define('app-footer', Footer);
customElements.define('app-card', Card);
customElements.define('app-carousel', Carousel);
customElements.define('app-article', Article);

// Pages
customElements.define('page-home', Home);

console.log('App initialized and components registered.');

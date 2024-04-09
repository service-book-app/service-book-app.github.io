import page from './lib/page.mjs';
import { decorateContext } from './middlewares/render.js';
import { homeView } from './views/home.js';

page(decorateContext);

page('index.html', '/');
page('/', homeView);

page.start();
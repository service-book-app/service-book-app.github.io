import page from './lib/page.mjs';
import { decorateContext } from './middlewares/render.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

page(decorateContext);

page('index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);

page.start();
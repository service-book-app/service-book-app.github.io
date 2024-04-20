import page from './lib/page.mjs';
import { decorateContext } from './middlewares/render.js';
import { logout } from './service/auth.js';
import { addDriverView } from './views/addDriver.js';
import { addVehicleView } from './views/addVehicle.js';
import { homeView } from './views/home.js';
import { infoView } from './views/info.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

page(decorateContext);

page('index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/add', addVehicleView);
page('/info', infoView);
page('/driver', addDriverView);

page.start();
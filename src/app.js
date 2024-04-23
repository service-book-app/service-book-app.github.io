import page from './lib/page.mjs';
import {} from '../node_modules/parse/dist/parse.js';

import { decorateContext } from './middlewares/render.js';
import { logout } from './service/auth.js';
import { addVehicleView } from './views/addVehicle.js';
import { allVehiclesView } from './views/allVehicles.js';
import { homeView } from './views/home.js';
import { infoView } from './views/info.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

Parse.initialize("WSZLGjYI2skvfJRM5LNgilswzx0uJaE59wgo01R1", "DTt5dWFPmHt4PIAmkaHzVJwVQxiTm1L1mxAAmrvF");
Parse.serverURL = 'http://127.0.0.1:5500/parse'

page(decorateContext);

page('index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/add', addVehicleView);
page('/info', infoView);
page('/all', allVehiclesView);

page.start();
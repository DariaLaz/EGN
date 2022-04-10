import { page } from './lib.js'
import { decorateContext } from './decorateMiddleware.js';
import { homePage } from './pages/home.js';
import { generatorPage } from './pages/generator.js';
import { validatorPage } from './pages/validator.js';

page(decorateContext);
page('/', homePage)
page('/generator', generatorPage)
page('/validator', validatorPage)

page.start();
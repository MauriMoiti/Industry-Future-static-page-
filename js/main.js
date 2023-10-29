import '../src/assets/css/main.scss';
import '../src/assets/css/normalize.scss';
import '../src/assets/css/responsive.scss';
import '../src/assets/css/responsive_ipad.scss';
import '../src/components/applications/applications.scss';
import '../src/components/applications/applications-responsive.scss';
import '../src/components/sustainability/sustainability.scss';
import '../src/components/sustainability/sustainability-responsive.scss';
import '../src/components/technology/technology.scss';
import '../src/components/technology/technology-responsive.scss';
import '../src/components/about-us/about-us.scss';
import '../src/components/about-us/aboutUs-responsive.scss';

import 'jquery'
import { header} from '../src/components/header/header.js';
import { footer } from '../src/components/footer/footer.js';
import { hideContent } from "../src/components/hideContent/hideContent.js"
import { applications } from "../src/components/applications/applications.js";
// helpers
import { handleClickNavBar } from './helpers/handleClickNavbar.js';
import { footerFacadeYoutube } from './helpers/footerFacadeYoutube.js';
import { footerButtonContactMe } from './helpers/footerButtonContactMe.js';

// load for default
header();
hideContent();
applications();
footer();

($(() => {

    // handleclick in navbar
    handleClickNavBar();
    
    // footer
    footerFacadeYoutube();
    footerButtonContactMe();
    
    }))
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

import $ from 'jquery';
import { header} from '../src/components/header/header.js';
import { footer } from '../src/components/footer/footer.js';
import { hideContent } from "../src/components/hideContent/hideContent.js"
import { applications } from "../src/components/applications/applications.js";
import { aboutUs } from "../src/components/about-us/about-us.js";
import { technology } from "../src/components/technology/technology.js";
import { sustainability } from "../src/components/sustainability/sustainability.js";

// load for default
header();
hideContent();
applications();
footer();

($(() => {

    //Handleclick in navbar 
    
        $("body").on("click", "[data-index='1']", function() {
            hideContent()
            applications();
        });
        $("body").on("click", "[data-index='2']", function() {
            hideContent();
            aboutUs();
        });
        $("body").on("click", "[data-index='3']", function() {
            hideContent();
            technology();
        });
        $("body").on("click","[data-index='4']", function() {
            hideContent();
            sustainability();  
        });
        
        $("footer").on('click', '.youtube-facade', function() {
            var $this = $(this);
            var videoId = $this.data('video-id');
            var iframeSrc = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    
            // img hidden 
            $this.find('.youtube-thumbnail').hide();
    
            // Set the src of iframe and display it
            $this.find('iframe').attr('src', iframeSrc).show();
        });
    }))
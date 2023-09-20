import '/src/components/about-us/about-us.css';
const aboutUs = () => {
    $("main").load("../src/components/about-us/about-us.html").show()
    $(".container-main-contact").load("/src/components/contact/formContact.html").show()
    }

export {aboutUs}; 
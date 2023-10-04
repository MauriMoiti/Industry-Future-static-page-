import $ from 'jquery';

const header = () => {
    $(".container-header").load("../src/components/header/header.html").show();
};

export { header };

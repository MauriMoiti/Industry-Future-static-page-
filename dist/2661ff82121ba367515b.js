import{hideContent}from"../src/components/hideContent/hideContent.js";import{aboutUs}from"../src/components/about-us/about-us.js";import{applications}from"../src/components/applications/applications.js";import{technology}from"../src/components/technology/technology.js";import{sustainability}from"../src/components/sustainability/sustainability.js";hideContent(),applications(),$((function(){var t=$("[data-index='1']"),n=$("[data-index='2']"),o=$("[data-index='3']"),i=$("[data-index='4']");$(t).on("click",(function(t){t.preventDefault(),hideContent(),applications()})),$(n).on("click",(function(t){t.preventDefault(),hideContent(),aboutUs()})),$(o).on("click",(function(t){t.preventDefault(),hideContent(),technology()})),$(i).on("click",(function(t){t.preventDefault(),hideContent(),sustainability()}))}));
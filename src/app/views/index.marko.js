// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/interaction-networks$1.0.0/src/app/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Página Inicial</title><link rel=stylesheet href=../../libs/css/bootstrap.min.css></head><body><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=navbar-brand href=#>Navbar</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=nav-link href=#>Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=nav-link href=#>Link</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=# id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Dropdown</a><div class=dropdown-menu aria-labelledby=navbarDropdown><a class=dropdown-item href=#>Action</a><a class=dropdown-item href=#>Another action</a><div class=dropdown-divider></div><a class=dropdown-item href=#>Something else here</a></div></li><li class=nav-item><a class=\"nav-link disabled\" href=# tabindex=-1 aria-disabled=true>Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=search placeholder=Search aria-label=Search><button class=\"btn btn-outline-success my-2 my-sm-0\" type=submit>Search</button></form></div></nav> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/interaction-networks$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

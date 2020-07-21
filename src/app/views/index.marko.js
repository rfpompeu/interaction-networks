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

  out.w("<!DOCTYPE html><html><head><title>Interaction Networks</title><link rel=stylesheet href=../../libs/css/bootstrap.min.css><link rel=icon href=../../public/images/logo.png type=image/x-icon></head><body><nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\"><a class=navbar-brand href=/ ><img src=../../public/images/logo.png width=25 height=25></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=nav-link href=/ >Home</a></li><li class=\"nav-item active\"><a class=nav-link href=/ >Help</a></li></ul></div></nav><main><div class=\"container text-center mt-5\"><h1>Interaction Networks</h1><p class=\"lead text-muted\">It is a web tool for simple control of interaction networks of the most diverse types.</p><a href=/network class=\"btn btn-primary my-5\">Create Network</a></div></main><script src=../../libs/js/jquery-3.5.1.slim.min.js></script><script src=../../libs/js/popper.min.js></script><script src=../../libs/js/bootstrap.min.js></script><script src=../../libs/js/d3.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "22");

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

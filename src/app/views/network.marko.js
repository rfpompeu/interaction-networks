// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/interaction-networks$1.0.0/src/app/views/network.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Interaction Networks</title><link rel=stylesheet href=../../libs/css/bootstrap.min.css><link rel=icon href=../../public/images/logo.png type=image/x-icon></head><body><nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\"><a class=navbar-brand href=/ ><img src=../../public/images/logo.png width=25 height=25></a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><div class=\"collapse navbar-collapse\" id=navbarSupportedContent><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=nav-link href=/ >Home</a></li><li class=\"nav-item active\"><a class=nav-link href=/ >Help</a></li></ul></div></nav><main><div class=\"container mt-5\"><div class=row><div class=col-4><form><div class=\"custom-control custom-radio mb-2\"><input value=text type=radio id=textRadio name=inputOption class=custom-control-input checked><label class=custom-control-label for=textRadio>Text</label></div><div id=textField class=form-group></div><div class=\"custom-control custom-radio mb-2\"><input value=file type=radio id=fileRadio name=inputOption class=custom-control-input><label class=custom-control-label for=fileRadio>File</label></div><div class=form-group><div id=fileField class=custom-file></div></div><div class=text-center><button onclick=networkController.inputOpt() type=button class=\"btn btn-primary\">Start</button></div></form></div><div id=network style=width:400px;height:400px; class=\"col text-center border\"></div></div></div></main><script src=../../libs/js/jquery-3.5.1.slim.min.js></script><script src=../../libs/js/popper.min.js></script><script src=../../libs/js/bootstrap.min.js></script><script src=../../libs/js/d3.min.js></script><script src=../../app/models/Network.js></script><script src=../../app/controllers/NetworkController.js></script><script src=../../app/views/NetworkView.js></script><script>\n            let networkController = new NetworkController();\n            networkController.radioCheck(\"text\")\n            networkController.networkExample()\n            document.getElementsByName(\"inputOption\").forEach(function(e) {\n                e.addEventListener(\"click\", function() {\n                    networkController.radioCheck(e.value)\n                });\n            });\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "34");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/interaction-networks$1.0.0/src/app/views/network.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

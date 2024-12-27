var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/_utils/lazy.ts
var lazy_exports = {};
__export(lazy_exports, {
  observeInit: () => observeInit
});
module.exports = __toCommonJS(lazy_exports);
var import_intersection_observer = require("intersection-observer");
var loaded = false;
function observeInit() {
  if (loaded)
    return;
  loaded = true;
  console.log("lazyload");
  const lazyImages = document.querySelectorAll("img[data-src]");
  const loadImage = (image) => {
    const src = image.getAttribute("data-src");
    if (!src)
      return;
    image.src = src;
    image.removeAttribute("data-src");
  };
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  lazyImages.forEach((image) => {
    intersectionObserver.observe(image);
  });
  const mutationObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement && node.hasAttribute("data-src")) {
            intersectionObserver.observe(node);
          }
        });
      }
    }
  });
  const config = { childList: true, subtree: true };
  mutationObserver.observe(document.body, config);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  observeInit
});

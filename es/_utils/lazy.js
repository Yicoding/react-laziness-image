function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import 'intersection-observer';
var loaded = false;
export function observeInit() {
  if (loaded) return;
  loaded = true;
  console.log('lazyload');
  var lazyImages = document.querySelectorAll('img[data-src]');
  var loadImage = function loadImage(image) {
    var src = image.getAttribute('data-src');
    if (!src) return;
    image.src = src;
    image.removeAttribute('data-src');
  };
  var intersectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  lazyImages.forEach(function (image) {
    intersectionObserver.observe(image);
  });

  // MutationObserver 部分，用于动态加载新的图片元素
  var mutationObserver = new MutationObserver(function (mutationsList) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function (node) {
            if (node instanceof HTMLImageElement && node.hasAttribute('data-src')) {
              intersectionObserver.observe(node);
            }
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  var config = {
    childList: true,
    subtree: true
  };
  mutationObserver.observe(document.body, config);
}
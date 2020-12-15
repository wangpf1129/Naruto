// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"2IwU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #ff8b60;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n#naruto {\n  position: relative;\n  width: 350px;\n  height: 350px;\n  border: 15px solid #a55b41;\n  border-radius: 50%;\n  top:0;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n}\n\n.hair {\n  height: 90px;\n  background-color: #dcd768;\n  border-bottom: 3px solid #cec968;\n}\n\n.hiddenleaf {\n  height: 60px;\n  background-color: #4d4747;\n  position: relative;\n}\n\n.hiddenleaf .plate {\n  width: 150px;\n  height: 45px;\n  background-color: #cecece;\n  border-radius: 10px;\n  position: absolute;\n  top: 7px;\n  left: 50%;\n  transform: translateX(-50%);\n  overflow: hidden;\n}\n\n.hiddenleaf .plate::before {\n  content: '';\n  width: 85px;\n  height: 60px;\n  position: absolute;\n  right: -30px;\n  background-color: #b5b9c3;\n  transform: skew(-45deg);\n}\n\n.face {\n  height: 200px;\n  background-color: #f2c9be;\n  border: 5px solid #DFAB9D;\n\n  z-index: -1;\n}\n\n.eye {\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  top: 180px;\n  border-radius: 50%;\n  border: 5px solid #638aaa;\n  background-color: #fff;\n}\n\n.eye.left {\n  left: 23%;\n}\n\n.eye.right {\n  right: 23%;\n}\n\n.mouth {\n  position: absolute;\n  width: 80px;\n  height: 65px;\n  top: 215px;\n  left: 50%;\n  background-color: #e89e8a;\n  transform: translateX(-50%);\n  border-radius: 0 0 50% 50%;\n}\n\n.mouth::before {\n  content: '';\n  display: block;\n  width: 80px;\n  height: 27px;\n  background-color: #f2c9be;\n}\n\n\n.whiskers .whisker {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-right: 12px solid transparent;\n  border-left: 70px solid #917972;\n  border-top: 14px solid transparent;\n  transform: rotate(-35deg);\n}\n\n.whisker:first-child {\n  top: 70%\n}\n\n.whisker:nth-child(2) {\n  top: 80%\n}\n\n.whisker:nth-child(3) {\n  top: 87%\n}\n\n/*  Right Whiskers */\n.whisker:nth-child(4) {\n  top: 70%;\n  right: 0;\n  transform: rotate(205deg);\n}\n\n.whisker:nth-child(5) {\n  top: 80%;\n  right: 0;\n  transform: rotate(205deg);\n}\n\n.whisker:nth-child(6) {\n  top: 87%;\n  right: 0;\n  transform: rotate(205deg);\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  // 定义定时器
  step: undefined,
  // 每次写一个字符
  n: 1,
  // 速度快慢
  speed: 50,
  //初始化
  init: function init() {
    // 这俩行代码是实现这个项目的核心
    player.ui.version.innerText = _style.default.substring(0, player.n);
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  ui: {
    version: document.querySelector('#version'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _style.default.length) {
      window.clearInterval(player.step);
      return;
    }

    player.ui.version.innerText = _style.default.substring(0, player.n);
    player.ui.style.innerHTML = _style.default.substring(0, player.n);
    player.ui.version.scrollTop = player.ui.version.scrollHeight;
  },
  // 播放
  play: function play() {
    player.step = setInterval(player.run, player.speed);
  },
  // 暂停
  pause: function pause() {
    return window.clearInterval(player.step);
  },
  // 慢速
  slow: function slow() {
    player.pause();
    player.speed = 300;
    player.play();
  },
  // 中速
  normal: function normal() {
    player.pause();
    player.speed = 50;
    player.play();
  },
  // 快速
  fast: function fast() {
    player.pause();
    player.speed = 0;
    player.play();
  }
};
player.init();
},{"./style.js":"2IwU"}]},{},["epB2"], null)
//# sourceMappingURL=main.d483600a.js.map
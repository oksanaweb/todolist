// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
const $FORM = document.querySelector(".task-form");
const $TASK = document.querySelector(".task");
const $TITLE = $FORM.querySelector("#title");
const $AUTHOR = $FORM.querySelector("#author");
const $MESSAGE = $FORM.querySelector("#message");
const $CREATE = $FORM.querySelector("#btn-create");
const $BTNINPROGRESS = $FORM.querySelector("#btn-inprogress");
const $CLOSEFORM = $FORM.querySelector(".close-btn");
const $INPUTS = document.querySelectorAll(".input-task");
const $ADD = document.querySelector(".add");
const $ADDNEW = document.querySelector(".addnew");
const $ADDDONE = document.querySelector(".adddone");
const $TRASH = document.querySelectorAll(".trash");
const $TASKMAKE = document.querySelector(".task-make");
const $TASKINPROGRESS = document.querySelector(".task-inprogress");
const $TASKDONE = document.querySelector(".task-done");
const $ACCUM = document.querySelector(".accum");
const $ACCUM2 = document.querySelector(".accum2");
const $ACCUM3 = document.querySelector(".accum3");
const $DELETE = document.querySelectorAll(".remove-maketask");
const $SENDPROGRESS = document.querySelectorAll(".send-inprogress");
const $INPUT = $FORM.querySelectorAll(".input-task");
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let CurrentDate = `${day}.${month}.${year}.`;
document.querySelector(".currentdate").textContent = CurrentDate;
$ADD.addEventListener("click", (e)=>{
    $TASK.classList.toggle("active");
    $TASK.style.display = "block";
});
$ADDNEW.addEventListener("click", (e)=>{
    $TASK.classList.toggle("active");
    $TASK.style.display = "block";
});
let make = JSON.parse(localStorage.getItem("todo")) || [];
let progress = JSON.parse(localStorage.getItem("arr")) || [];
let done = JSON.parse(localStorage.getItem("done")) || [];
function localmake() {
    localStorage.setItem("todo", JSON.stringify(make));
}
function localprogress() {
    localStorage.setItem("arr", JSON.stringify(progress));
}
function localdone() {
    localStorage.setItem("done", JSON.stringify(done));
}
function localupdate() {
    if (make !== []) make.forEach((element, index)=>{
        $TASKMAKE.innerHTML += rendermake(element, index);
        $ACCUM.innerHTML = index + 1;
    });
    if (progress !== []) progress.forEach((element, index)=>{
        $TASKINPROGRESS.innerHTML += renderprogress(element, index);
        $ACCUM2.innerHTML = index + 1;
    });
    if (done !== []) done.forEach((element, index)=>{
        $TASKDONE.innerHTML += renderdone(element, index);
        $ACCUM3.innerHTML = index + 1;
    });
}
function TaskUser(title, message, author) {
    this.title = title;
    this.message = message;
    this.author = author;
}
let submitbutn = document.getElementById("btn-create");
let newbtn = document.getElementById("btn-inprogress");
let input = document.getElementById("title");
input.addEventListener("keyup", (e)=>{
    console.log(e.currentTarget.value);
    const value = e.currentTarget.value;
    submitbutn.disabled = false;
    newbtn.disabled = false;
    if (value === "") {
        submitbutn.disabled = true;
        newbtn.disabled = true;
        input = "";
    }
});
$CREATE.addEventListener("click", (event)=>{
    event.preventDefault();
    let todo = new TaskUser($TITLE.value, $MESSAGE.value, $AUTHOR.value);
    make.push(todo);
    let newTask = make[make.length - 1];
    let newTaskIndex = make.lastIndexOf(newTask);
    ClearValue();
    $TASKMAKE.innerHTML += rendermake(newTask, newTaskIndex);
    let arrlength = make.length;
    $ACCUM.innerHTML = arrlength;
    localmake();
});
localupdate();
function rendermake(el, i) {
    return `
  <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-maketask" data-action="delete" id="${i}">Remove</button>
    <button class="send-inprogress" id="${i}">Send</button>
  </div>
  </div> `;
}
function ClearValue() {
    $TITLE.value = "";
    $AUTHOR.value = "";
    $MESSAGE.value = "";
}
$CLOSEFORM.addEventListener("click", (e)=>{
    e.preventDefault();
    $TASK.classList.toggle("active");
    $TASK.style.display = "none";
});
$BTNINPROGRESS.addEventListener("click", (event)=>{
    event.preventDefault();
    let todo = new TaskUser($TITLE.value, $MESSAGE.value, $AUTHOR.value);
    progress.push(todo);
    let lasttask = progress[progress.length - 1];
    let lasttaskindex = progress.lastIndexOf(lasttask);
    ClearValue();
    $TASKINPROGRESS.innerHTML += renderprogress(lasttask, lasttaskindex);
    let arrProgresslength = progress.length;
    $ACCUM2.innerHTML = arrProgresslength;
    localprogress();
});
function renderprogress(el, i) {
    return `
  <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-maketask" data-action="delete" id="${i}">Remove</button>
    <button class="sendback" id="${i}">Send Back</button>
    <button class="sendnext" id="${i}">Next</button>
  </div>
</div> `;
}
$TASKMAKE.addEventListener("click", function(tasks) {
    let del = tasks.target.getAttribute("class");
    console.log(del);
    let idTask = tasks.target.getAttribute("id");
    console.log(idTask);
    if (del == "send-inprogress") {
        $TASKMAKE.innerHTML = "";
        progress.push(make[idTask]);
        make.splice(idTask, 1);
        make.forEach((element, index)=>{
            $TASKMAKE.innerHTML += rendermake(element, index);
        });
        localmake();
        $TASKINPROGRESS.innerHTML = "";
        progress.forEach((element, index)=>{
            $TASKINPROGRESS.innerHTML += renderprogress(element, index);
        });
    //localStorage.setItem('arr',JSON.stringify(progress)); 
    }
    localprogress();
    $ACCUM.innerHTML = make.length;
    $ACCUM2.innerHTML = progress.length;
});
$TASKMAKE.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.target.dataset.action === "delete") {
        let cardParent = event.target.getAttribute("id");
        console.log(cardParent);
        $TASKMAKE.innerHTML = "";
        make.splice(cardParent, 1);
        make.forEach((element, index)=>{
            $TASKMAKE.innerHTML += rendermake(element, index);
        });
        localmake();
        //localStorage.setItem('todo',JSON.stringify(make));
        let arrlength = make.length;
        $ACCUM.innerHTML = arrlength;
    }
});
document.querySelector(".first-trash").addEventListener("click", ()=>{
    let value = document.querySelector(".task-make");
    value.innerHTML = "";
    make.length = 0;
    console.log(make);
    $ACCUM.innerHTML = make.length;
    localmake();
});
$TASKINPROGRESS.addEventListener("click", function(tasks) {
    let del = tasks.target.getAttribute("class");
    console.log(del);
    let idTask = tasks.target.getAttribute("id");
    console.log(idTask);
    if (del == "sendback") {
        $TASKINPROGRESS.innerHTML = "";
        make.push(progress[idTask]);
        progress.splice(idTask, 1);
        progress.forEach((element, index)=>{
            $TASKINPROGRESS.innerHTML += renderprogress(element, index);
        });
        localprogress();
        $TASKMAKE.innerHTML = "";
        make.forEach((element, index)=>{
            $TASKMAKE.innerHTML += rendermake(element, index);
        });
    // localStorage.setItem('arr',JSON.stringify(progress)); 
    }
    localmake();
    $ACCUM.innerHTML = make.length;
    if (del == "sendnext") {
        $TASKINPROGRESS.innerHTML = "";
        done.push(progress[idTask]);
        progress.splice(idTask, 1);
        progress.forEach((element, index)=>{
            $TASKINPROGRESS.innerHTML += renderprogress(element, index);
        });
        localprogress();
        $TASKDONE.innerHTML = "";
        done.forEach((element, index)=>{
            $TASKDONE.innerHTML += renderdone(element, index);
        });
        localdone();
    }
    $ACCUM2.innerHTML = progress.length;
    $ACCUM3.innerHTML = done.length;
});
$TASKINPROGRESS.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.target.dataset.action === "delete") {
        let cardParent = event.target.getAttribute("id");
        console.log(cardParent);
        $TASKINPROGRESS.innerHTML = "";
        progress.splice(cardParent, 1);
        progress.forEach((element, index)=>{
            $TASKINPROGRESS.innerHTML += renderprogress(element, index);
        });
        localprogress();
        let arrlength = progress.length;
        $ACCUM2.innerHTML = arrlength;
    }
});
document.querySelector(".second-trash").addEventListener("click", ()=>{
    let value = document.querySelector(".task-inprogress");
    value.innerHTML = "";
    progress.length = 0;
    console.log(progress);
    $ACCUM2.innerHTML = progress.length;
    localprogress();
});
function renderdone(el, i) {
    return `
   <div class="card-item" id="${i}">
  <h3 class="card-title">${el.title}</h3>
  <div class="card-content">Task: ${el.message}</div>
  <div class="card-footer">
    <span class="name">Name: ${el.author}</span><br>
    <button type="submit" class="remove-task" data-action="delete" id="${i}">Remove</button>
    <button class="sendstart"id="${i}">Start to over</button>
  </div>
</div>`;
}
$TASKDONE.addEventListener("click", function(tasks) {
    let del = tasks.target.getAttribute("class");
    console.log(del);
    let idTask = tasks.target.getAttribute("id");
    console.log(idTask);
    if (del == "sendstart") {
        $TASKDONE.innerHTML = "";
        make.push(done[idTask]);
        done.splice(idTask, 1);
        done.forEach((element, index)=>{
            $TASKDONE.innerHTML += renderdone(element, index);
        });
        localdone();
        $TASKMAKE.innerHTML = "";
        make.forEach((element, index)=>{
            $TASKMAKE.innerHTML += rendermake(element, index);
        });
        localmake();
    }
    $ACCUM3.innerHTML = done.length;
    $ACCUM.innerHTML = make.length;
});
$TASKDONE.addEventListener("click", function(event) {
    console.log(event.target);
    if (event.target.dataset.action === "delete") {
        let cardParent = event.target.getAttribute("id");
        console.log(cardParent);
        $TASKDONE.innerHTML = "";
        done.splice(cardParent, 1);
        done.forEach((element, index)=>{
            $TASKDONE.innerHTML += renderdone(element, index);
        });
        localdone();
        let arrlength = done.length;
        $ACCUM3.innerHTML = arrlength;
    }
});
document.querySelector(".done-trash").addEventListener("click", ()=>{
    let value = document.querySelector(".task-done");
    value.innerHTML = "";
    done.length = 0;
    console.log(done);
    $ACCUM3.innerHTML = done.length;
    localdone();
});

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequiref557")

//# sourceMappingURL=index.739bf03c.js.map

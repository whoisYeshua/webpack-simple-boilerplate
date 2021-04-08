/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./analytics.js":
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/***/ (() => {

eval("function createAnalytics() {\n    let counter = 0\n    let destroyed = false\n\n    const listener = () => counter++\n    document.addEventListener('click', listener)\n\n    return {\n        destroy() {\n            document.removeEventListener('click', listener)\n            destroyed = true\n        },\n        getClicks() {\n            if (destroyed) {\n                return `Analytics is destroyed. Total clicks = ${counter}`\n            }\n            return counter\n        },\n    }\n}\n\nwindow.analytics = createAnalytics()\n\n\n//# sourceURL=webpack:///./analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./analytics.js"]();
/******/ 	
/******/ })()
;
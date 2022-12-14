"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_users_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/users.module.css */ \"./pages/styles/users.module.css\");\n/* harmony import */ var _styles_users_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_users_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_userss_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/userss.module.scss */ \"./pages/styles/userss.module.scss\");\n/* harmony import */ var _styles_userss_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_userss_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Users = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"ser\",\n            age: 27\n        },\n        {\n            id: 2,\n            name: \"ser\",\n            age: 27\n        },\n        {\n            id: 3,\n            name: \"ser\",\n            age: 27\n        }\n    ]), usersItems = ref[0], setUsers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref1[0], setData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var response, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://jsonplaceholder.typicode.com/posts\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"users\",\n        children: usersItems.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_users_module_css__WEBPACK_IMPORTED_MODULE_5___default().users__list),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(user.id, \" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_styles_users_module_css__WEBPACK_IMPORTED_MODULE_5___default().users__link),\n                            children: user.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n                            lineNumber: 22,\n                            columnNumber: 50\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n                        lineNumber: 22,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/users/\".concat(user.id, \" \"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_styles_userss_module_scss__WEBPACK_IMPORTED_MODULE_6___default().users__link),\n                            children: [\n                                \" \",\n                                user.age\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n                            lineNumber: 23,\n                            columnNumber: 50\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n                        lineNumber: 23,\n                        columnNumber: 16\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\serge\\\\Desktop\\\\next-js\\\\pages\\\\users.js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, _this);\n};\n_s(Users, \"nuG+iqRu7irctOiGAYmYOVPHTvo=\");\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWtEO0FBQ3RCO0FBQ2lCO0FBQ0c7QUFDaEQsSUFBTU0sS0FBSyxHQUFHLFdBQU07O0lBQ2pCLElBQStCSixHQUk3QixHQUo2QkEsK0NBQVEsQ0FBQztRQUNyQztZQUFFSyxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsS0FBSztZQUFFQyxHQUFHLEVBQUUsRUFBRTtTQUFFO1FBQy9CO1lBQUVGLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxLQUFLO1lBQUVDLEdBQUcsRUFBRSxFQUFFO1NBQUU7UUFDL0I7WUFBRUYsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLEtBQUs7WUFBRUMsR0FBRyxFQUFFLEVBQUU7U0FBRTtLQUNqQyxDQUFDLEVBSktDLFVBQVUsR0FBY1IsR0FJN0IsR0FKZSxFQUFFUyxRQUFRLEdBQUlULEdBSTdCLEdBSnlCO0lBSzNCLElBQXdCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCVSxJQUFJLEdBQWFWLElBQVksR0FBekIsRUFBRVcsT0FBTyxHQUFJWCxJQUFZLEdBQWhCO0lBRXBCRCxnREFBUyxlQUFDLCtGQUFZO1lBQ2JhLFFBQVEsRUFDUkYsSUFBSTs7OztvQkFETzs7d0JBQU1HLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztzQkFBQTs7b0JBQXBFRCxRQUFRLEdBQUcsYUFBeUQ7b0JBQzdEOzt3QkFBTUEsUUFBUSxDQUFDRSxJQUFJLEVBQUU7c0JBQUE7O29CQUE1QkosSUFBSSxHQUFHLGFBQXFCOzs7Ozs7SUFDckMsQ0FBQyxHQUFFLEVBQUUsQ0FBQztJQUNOLHFCQUNHLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUVsQlIsVUFBVSxDQUFDUyxHQUFHLENBQUNDLFNBQUFBLElBQUk7aUNBQ2pCLDhEQUFDQyxJQUFFO2dCQUFDSCxTQUFTLEVBQUVkLDZFQUFpQjs7a0NBQzdCLDhEQUFDRCxrREFBSTt3QkFBQ29CLElBQUksRUFBRSxTQUFRLENBQVUsTUFBQyxDQUFUSCxJQUFJLENBQUNiLEVBQUUsRUFBQyxHQUFDLENBQUM7a0NBQUUsNEVBQUNpQixHQUFDOzRCQUFDTixTQUFTLEVBQUVkLDZFQUFpQjtzQ0FBR2dCLElBQUksQ0FBQ1osSUFBSTs7Ozs7aUNBQUs7Ozs7OzZCQUFPO2tDQUN6Riw4REFBQ0wsa0RBQUk7d0JBQUNvQixJQUFJLEVBQUUsU0FBUSxDQUFVLE1BQUMsQ0FBVEgsSUFBSSxDQUFDYixFQUFFLEVBQUMsR0FBQyxDQUFDO2tDQUFFLDRFQUFDaUIsR0FBQzs0QkFBQ04sU0FBUyxFQUFFYiwrRUFBa0I7O2dDQUFFLEdBQUM7Z0NBQUNlLElBQUksQ0FBQ1gsR0FBRzs7Ozs7O2lDQUFLOzs7Ozs2QkFBTzs7Ozs7O3FCQUN2RjtTQUFBLENBR1I7Ozs7O2FBR0csQ0FDVDtBQUNKLENBQUM7R0EzQktILEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQTZCWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy5qcz8wMDYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi9zdHlsZXMvdXNlcnMubW9kdWxlLmNzcydcclxuaW1wb3J0IHVzZXJzcyBmcm9tICcuL3N0eWxlcy91c2Vyc3MubW9kdWxlLnNjc3MnXHJcbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xyXG4gICBjb25zdCBbdXNlcnNJdGVtcywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW1xyXG4gICAgICB7IGlkOiAxLCBuYW1lOiAnc2VyJywgYWdlOiAyNyB9LFxyXG4gICAgICB7IGlkOiAyLCBuYW1lOiAnc2VyJywgYWdlOiAyNyB9LFxyXG4gICAgICB7IGlkOiAzLCBuYW1lOiAnc2VyJywgYWdlOiAyNyB9XHJcbiAgIF0pXHJcbiAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgIH0sIFtdKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJzXCI+XHJcblxyXG4gICAgICAgICB7dXNlcnNJdGVtcy5tYXAodXNlciA9PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt1c2Vycy51c2Vyc19fbGlzdH0+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmlkfSBgfT48YSBjbGFzc05hbWU9e3VzZXJzLnVzZXJzX19saW5rfT57dXNlci5uYW1lfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmlkfSBgfT48YSBjbGFzc05hbWU9e3VzZXJzcy51c2Vyc19fbGlua30+IHt1c2VyLmFnZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L3VsID5cclxuXHJcblxyXG4gICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgIDwvZGl2ID5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZXJzIiwidXNlcnNzIiwiVXNlcnMiLCJpZCIsIm5hbWUiLCJhZ2UiLCJ1c2Vyc0l0ZW1zIiwic2V0VXNlcnMiLCJkYXRhIiwic2V0RGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidXNlciIsInVsIiwidXNlcnNfX2xpc3QiLCJocmVmIiwiYSIsInVzZXJzX19saW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});
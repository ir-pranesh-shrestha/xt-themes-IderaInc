
(function (factory) {
  if (typeof module === 'object' && typeof module.exports !== "undefined") {
      module.exports = factory;
  } else {
      factory(FusionCharts);
  }
}(function (FusionCharts) {
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(2);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_gammel___ = __webpack_require__(18);
FusionCharts.addDep(__WEBPACK_IMPORTED_MODULE_0__src_gammel___["a" /* default */]);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fusioncharts_theme_gammel_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fusioncharts_theme_gammel_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fusioncharts_theme_gammel_css__);
/*
 Gammel Theme v0.2
 FusionCharts JavaScript Library

 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*//* jshint ignore:start *//* jshint ignore:end */var themeObject={name:'gammel',theme:{base:{chart:{// plot customization
paletteColors:'#7CB5EC, #434348, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',usePlotGradientColor:'0',showPlotBorder:'0',showShadow:'0',// chart and canvas background and padding customization
showBorder:'0',showCanvasBorder:'0',bgColor:'#FFFFFF',bgAlpha:'100',canvasBgAlpha:'0',// axis and grid lines customization
showAlternateHGridColor:'0',showAlternateVGridColor:'0',divLineAlpha:'100',divLineColor:'#E6E6E6',divLineThickness:'1',yAxisValuesPadding:'10',labelPadding:'10',canvasPadding:'10',valuePadding:'0',adjustDiv:'1',labelDisplay:'AUTO',transposeAxis:'1',showCanvasBase:'0',// tooltip customization
tooltipColor:'#333333',toolTipBgColor:'#F6F6F6',toolTipBgAlpha:'85',toolTipPadding:'8',toolTipBorderColor:'#999999',toolTipBorderRadius:'3',toolTipBorderThickness:'1',tooltipBorderAlpha:'90',showToolTipShadow:'1',// font and text size customization
baseFontSize:'11',baseFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',baseFontColor:'#666666',outCnvBaseFontSize:'11',outCnvBaseFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',outCnvBaseFontColor:'#666666',captionFontSize:'18',captionFontBold:'0',captionFontColor:'#333333',subCaptionFontSize:'12',subCaptionFontBold:'0',subCaptionFontColor:'#666666',valueFontBold:'1',valueFontSize:'11',valueFontColor:'#000000',placeValuesInside:'0',xAxisNameFontBold:'0',xAxisNameFontSize:'12',xAxisNameFontColor:'#666666',yAxisNameFontBold:'0',yAxisNameFontSize:'12',yAxisNameFontColor:'#666666',sYAxisNameFontBold:'0',sYAxisNameFontSize:'12',sYAxisNameFontColor:'#666666',xAxisNamePadding:'8',yAxisNamePadding:'8',sYAxisNamePadding:'8',captionPadding:'10',centerLabelFontSize:'11',centerLabelColor:'#666666',centerLabelBgOval:'1',useEllipsesWhenOverflow:'1',// legend customization
showLegend:'1',legendBgAlpha:'0',legendBorderThickness:'0',legendBorderAlpha:'0',legendShadow:'0',legendItemFontSize:'12',legendItemFontColor:'#333333',legendItemFontBold:'1',legendPosition:'bottom',legendNumColumns:'4',drawCustomLegendIcon:'1',legendIconSides:'2',legendIconBorderThickness:'0',legendItemHiddenColor:'#CCCCCC',// cross line customization
drawCrossLineOnTop:'0',crossLineThickness:'1',crossLineColor:'#E6E6E6',crossLineAlpha:'60',// hover effect
showHoverEffect:'1',plotHoverEffect:'1',plotFillHoverAlpha:'95',columnHoverAlpha:'95',// scroll customization
scrollColor:'#808080',scrollHeight:'11',flatscrollbars:'1',scrollshowbuttons:'1'}},// 1. Column 2D
column2d:{chart:{plotToolText:'$label: <b>$dataValue</b>',paletteColors:'#7CB5EC'}},// 2. Column 3D
column3d:{chart:{plotToolText:'$label: <b>$dataValue</b>',paletteColors:'#7CB5EC'}},// 3. Line 2D
line:{chart:{paletteColors:'#7CB5EC',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',plotToolText:'$label: <b>$dataValue</b>',showValues:'0',anchorBgColor:'#7CB5EC',anchorBorderHoverColor:'#D8D8D8',drawCrossLine:'1',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 4. Area 2D
area2d:{chart:{paletteColors:'#7CB5EC',plotBorderColor:'#7CB5EC',showPlotBorder:'1',plotBorderAlpha:'100',plotBorderThickness:'1.5',plotFillAlpha:'70',drawAnchors:'0',plotToolText:'$label: <b>$dataValue</b>',showValues:'0',drawCrossLine:'1'}},// 5. Bar 2D
bar2d:{chart:{plotToolText:'$label: <b>$dataValue</b>',paletteColors:'#7CB5EC'}},// 6. Bar 3D
bar3d:{chart:{plotToolText:'$label: <b>$dataValue</b>',paletteColors:'#7CB5EC'}},// 7. Pie 2D
pie2d:{chart:{showZeroPies:'1',plotToolText:'$label: <b>$dataValue</b>',showPercentValues:'1',showPercentInToolTip:'0',labelSepChar:': ',use3DLighting:'0',enableMultiSlicing:'0',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0'},data:function(b,a,c){a=window.Math;return{alpha:100-(50<c?a.round(100/a.ceil(c/10)):20)*a.floor(b/10)}}},// 8. Pie 3D
pie3d:{chart:{showZeroPies:'1',plotToolText:'$label: <b>$dataValue</b>',showPercentValues:'1',showPercentInToolTip:'0',labelSepChar:': ',use3DLighting:'0',enableMultiSlicing:'0',pieYScale:'75',pieSliceDepth:'10',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0'},data:function(b,a,c){a=window.Math;return{alpha:100-(50<c?a.round(100/a.ceil(c/10)):20)*a.floor(b/10)}}},// 9. Doughnut 2D
doughnut2d:{chart:{showZeroPies:'1',plotToolText:'$label: <b>$dataValue</b>',showPercentValues:'1',showPercentInToolTip:'0',labelSepChar:': ',use3DLighting:'0',enableMultiSlicing:'0',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0'},data:function(b,a,c){a=window.Math;return{alpha:100-(50<c?a.round(100/a.ceil(c/10)):20)*a.floor(b/10)}}},// 10. Doughnut 3D
doughnut3d:{chart:{showZeroPies:'1',plotToolText:'$label: <b>$dataValue</b>',showPercentValues:'1',showPercentInToolTip:'0',labelSepChar:': ',use3DLighting:'0',enableMultiSlicing:'0',pieYScale:'75',pieSliceDepth:'10',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0'},data:function(b,a,c){a=window.Math;return{alpha:100-(50<c?a.round(100/a.ceil(c/10)):20)*a.floor(b/10)}}},// 11. Pareto 2D
pareto2d:{chart:{paletteColors:'#434348',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',plotToolText:'$label: <b>$dataValue</b>',showValues:'0',lineColor:'#7CB5EC',anchorBgColor:'#7CB5EC',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2'}},// 12. Pareto 3D
pareto3d:{chart:{paletteColors:'#434348',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',plotToolText:'$label: <b>$dataValue</b>',showValues:'0',lineColor:'#7CB5EC',anchorBgColor:'#7CB5EC',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2'}},// 13. Multi-series Column 2D
mscolumn2d:{chart:{showValues:'0',drawCrossLine:'1'}},// 14. Multi-series Column 3D
mscolumn3d:{chart:{showValues:'0'}},// 15. Multi-series Line 2D
msline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',drawCrossLine:'1',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 16. Multi-series Bar 2D
msbar2d:{chart:{showValues:'0',drawCrossLine:'1'}},// 17. Multi-series Bar 3D
msbar3d:{chart:{showValues:'0'}},// 18. Multi-series Area 2D
msarea:{chart:{showPlotBorder:'1',plotBorderAlpha:'100',plotBorderThickness:'1.5',plotFillAlpha:'70',drawAnchors:'0',showValues:'0',drawCrossLine:'1'}},// 19. Marikekko
marimekko:{chart:{plotToolText:'$seriesName - <b>$label: $dataValue</b>'}},// 20. Zoom Line
zoomline:{chart:{// fallback in case cross line is not used
drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 21. Zoom Line Dual Y-Axis
zoomlinedy:{chart:{// fallback in case cross line is not used
drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 22. Stacked Column2D Chart
stackedcolumn2d:{chart:{showValues:'0',showSum:'1'}},// 23. Stacked Column3D Chart
stackedcolumn3d:{chart:{showValues:'0',showSum:'1'}},// 24. Stacked Bar2D Chart
stackedbar2d:{chart:{showValues:'0',showSum:'1'}},// 25. Stacked Bar3D Chart
stackedbar3d:{chart:{showValues:'0',showSum:'1'}},// 26. Stacked Area 2D Chart
stackedarea2d:{chart:{showValues:'0',showSum:'0',drawCrossLine:'1',plotFillAlpha:'70'}},// 27. Multi-series Stacked Column2D Chart
msstackedcolumn2d:{chart:{showValues:'0',showSum:'0',drawCrossLine:'0'}},// 28. Multi-series 2D Single Y Combination Chart
mscombi2d:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',drawCrossLine:'1',legendIconBorderThickness:'1'}},// 29. Multi-series 3D Single Y Combination Chart
mscombi3d:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 30. Multi-series Column 3D + Line - Single Y Axis Chart
mscolumnline3d:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 31. Stacked Column 2D + Line Single Y Axis Chart
stackedcolumn2dline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',drawCrossLine:'1',legendIconBorderThickness:'1'}},// 32. Stacked Column 3D + Line Single Y Axis Chart
stackedcolumn3dline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 33. Multi-series 2D Dual Y Combination Chart
mscombidy2d:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',drawCrossLine:'1',legendIconBorderThickness:'1'}},// 34. Multi-series Column 3D + Line - Dual Y Axis Chart
mscolumn3dlinedy:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 35. Stacked Column 3D + Line Dual Y Axis Chart
stackedcolumn3dlinedy:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 36. Multi-series Stacked Column 2D + Line Dual Y Axis Chart
msstackedcolumn2dlinedy:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',drawCrossLine:'1',legendIconBorderThickness:'1'}},// 37. Scatter
scatter:{chart:{drawCustomLegendIcon:'0',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'7',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2'}},// 38. Bubble
bubble:{chart:{quadrantLineThickness:'2',quadrantLineColor:'#000000',quadrantLineDashed:'1',quadrantLineAlpha:'100',setAdaptiveYMin:'1',setAdaptiveXMin:'1',quadrantLineDashGap:'3.5',quadrantLineDashLen:'2',use3dlighting:'0',plotFillAlpha:'80'}},// 39. Zoom Scatter
zoomscatter:{chart:{drawCustomLegendIcon:'0',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'7',showValues:'0'}},// 40 Scroll Column 2D
scrollcolumn2d:{chart:{showLegend:'1',showShadow:'0',adjustDiv:'1',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3'}},// 41 Scroll Line 2D
scrollline2d:{chart:{showValues:'0',showShadow:'0',adjustDiv:'1',lineThickness:'2',anchorRadius:'4',showLegend:'1',adjustDiv:'1',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3',anchorHoverEffect:'1',anchorHoverRadius:'6',anchorBorderHoverThickness:'2',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},// 42 Scroll Area 2D
scrollarea2d:{chart:{showValues:'0',showCanvasBase:'0',canvasBaseDepth:'0',showShadow:'0',chartTopMargin:'35',adjustDiv:'1',lineThickness:'2',drawAnchors:'0',showLegend:'1',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3'}},// 43 Scroll Stacked Column 2D
scrollstackedcolumn2d:{chart:{showLegend:'1',showValues:'0',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3'}},// 44 Scroll Combination 2D (Single Y)
scrollcombi2d:{chart:{showValues:'0',lineThickness:'2',anchorRadius:'4',showLegend:'1',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'2',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},// 45 Scroll Combination 2D (Dual Y)
scrollcombidy2d:{chart:{showValues:'0',lineThickness:'2',anchorRadius:'4',showLegend:'1',flatScrollBars:'1',scrollShowButtons:'1',scrollHeight:'15',scrollColor:'#F3F3F3',anchorHoverEffect:'1',anchorHoverRadius:'4',anchorBorderHoverThickness:'2',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},// 46 Real-time Angular
angulargauge:{chart:{setAdaptiveMin:'1',adjustTM:'1',tickvaluedistance:'10',placeTicksInside:'0',autoAlignTickValues:'1',showGaugeBorder:'0',minortmnumber:'0',majorTMHeight:'8',gaugeFillMix:'{light-0}',pivotbgcolor:'#000000',pivotfillmix:'0',showpivotborder:'1',pivotBorderColor:'#FFFFFF',showValue:'0',valueBelowPivot:'1'},dials:{dial:[{bgColor:'#000000',borderThickness:'0',rearExtension:'13'}]}},// 47 Real-time bulb
bulb:{chart:{is3D:'0',placeValuesInside:'1',valueFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'}},// 48 Real-time Cylinder
cylinder:{chart:{cylRadius:'50',cylYScale:'30'}},// 49 Real-time Horizontal LED
hled:{chart:{showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},// 50 Real-time Horizontal Linear Gauge
hlineargauge:{chart:{showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50',gaugeFillMix:'{light-0}'}},// 51 Real-time Thermometer
thermometer:{chart:{use3DLighting:'0',manageResize:'1',autoScale:'1',showGaugeBorder:'1',gaugeBorderAlpha:'40',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},// 52 Real-time Vertical LED
vled:{chart:{showGaugeBorder:'0',setAdaptiveMin:'1',adjustTM:'1',placeTicksInside:'0',autoAlignTickValues:'1',minortmnumber:'0',majorTMHeight:'8',majorTMAlpha:'50'}},// 53 Real-time Area
realtimearea:{chart:{showLegend:'1',showValues:'0'}},// 54 Real-time Column
realtimecolumn:{chart:{showLegend:'1',showValues:'0'}},// 55 Real-time Line
realtimeline:{chart:{showValues:'0',lineThickness:'2',anchorRadius:'4',showLegend:'1',anchorHoverEffect:'1',anchorHoverRadius:'6',anchorBorderHoverThickness:'2',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},// 56 Real-time Stacked Area
realtimestackedarea:{chart:{showLegend:'1',showValues:'0',showSum:'0',plotFillAlpha:'80'}},// 57 Real-time Stacked Column
realtimestackedcolumn:{chart:{showLegend:'1',showValues:'1',showSum:'1'}},// 58 Real-time Line (Dual Y)
realtimelinedy:{chart:{lineThickness:'2',anchorRadius:'4',showLegend:'1',anchorHoverEffect:'1',anchorHoverRadius:'6',anchorBorderHoverThickness:'2',anchorBgHoverColor:'#FFFFFF',legendIconBorderThickness:'1'}},// 59 Spark Line
sparkline:{chart:{plotFillColor:'#7CB5EC',anchorRadius:'4',highColor:'#8EED7D',lowColor:'#F45B5B',captionPosition:'top',showOpenAnchor:'0',showCloseAnchor:'0',showOpenValue:'0',showCloseValue:'0',showHighLowValue:'0',periodColor:'#C0C0C0'}},// 60 Spark Column
sparkcolumn:{chart:{plotFillColor:'#7CB5EC',highColor:'#8EED7D',lowColor:'#F45B5B',captionPosition:'top',periodColor:'#C0C0C0'}},// 61 Spark Win/Loss
sparkwinloss:{chart:{winColor:'#7CB5EC',lossColor:'#F45B5B',captionPosition:'top',drawColor:'#E4D354',scoreLessColor:'#8085E9',periodColor:'#C0C0C0'}},// 62 Horizontal Bullet Graph
hbullet:{chart:{plotFillColor:'#434348',showTickMarks:'0',showTickValues:'1',showLimits:'1'}},// 63 Horizontal Bullet Graph
vbullet:{chart:{plotFillColor:'#434348',showTickMarks:'0',showTickValues:'1',showLimits:'1'}},// 64 Funnel Chart
funnel:{chart:{is2D:'1',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0',streamlinedData:'1',useSameSlantAngle:'1',alignCaptionWithCanvas:'1',showPlotBorder:'1',plotBorderColor:'#FFFFFF',plotBorderThickness:'1.5',plotBorderAlpha:'100'}},// 65 Pyramid Chart
pyramid:{chart:{is2D:'1',isSmartLineSlanted:'0',smartLineColor:'#434348',smartLineThickness:'1',smartLabelClearance:'0',streamlinedData:'1',useSameSlantAngle:'1',alignCaptionWithCanvas:'1',use3dlighting:'0',showPlotBorder:'1',plotBorderColor:'#FFFFFF',plotBorderThickness:'1.5',plotBorderAlpha:'100'}},// 66 Gantt Chart
gantt:{chart:{taskBarFillMix:'{light+0}',flatScrollBars:'1',gridBorderAlpha:'100',gridBorderColor:'#E6E6E6',ganttLineColor:'#E6E6E6',ganttLineAlpha:'100',taskBarRoundRadius:'2',flatScrollBars:'1',showHoverEffect:'1',plotHoverEffect:'1',plotFillHoverAlpha:'50',showCategoryHoverBand:'1',categoryHoverBandAlpha:'50',showGanttPaneVerticalHoverBand:'1',showProcessHoverBand:'1',processHoverBandAlpha:'50',showGanttPaneHorizontalHoverBand:'1',showConnectorHoverEffect:'1',connectorHoverAlpha:'50',showTaskHoverEffect:'1',taskHoverFillAlpha:'50',slackHoverFillAlpha:'50',scrollShowButtons:'0',drawCustomLegendIcon:'0',legendShadow:'0',legendBorderAlpha:'0',legendBorderThickness:'0',legendIconBorderThickness:'0',legendBgAlpha:'0'},categories:[{fontcolor:'#434348',fontsize:'11',bgcolor:'#F4F4F4',hoverBandAlpha:'50',showGanttPaneHoverBand:'1',showHoverBand:'1',category:[{fontcolor:'#434348',fontsize:'11',bgcolor:'#F4F4F4'}]}],tasks:{showBorder:'0',showHoverEffect:'0'},processes:{fontcolor:'#434348',isanimated:'0',bgcolor:'#FFFFFF',bgAlpha:'70',headerbgcolor:'#F4F4F4',headerfontcolor:'#434348',showGanttPaneHoverBand:'1',showHoverBand:'1'},text:{fontcolor:'#434348',bgcolor:'#FFFFFF'},datatable:{fontcolor:'#434348',bgcolor:'#FFFFFF',bgAlpha:'100',datacolumn:[{bgcolor:'#FFFFFF'}]},connectors:[{hoverThickness:'1.5'}],milestones:{milestone:[{color:'#8EED7D'}]}},// 67 Logarithmic Column 2D Chart
logmscolumn2d:{chart:{showValues:'0',drawCrossLine:'1'}},// 68 Logarithmic Line 2D Chart
logmsline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',drawCrossLine:'1',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 69 Single-Series Spline 2D
spline:{chart:{paletteColors:'#7CB5EC',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBgColor:'#7CB5EC',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',plotToolText:'$label: <b>$dataValue</b>',legendIconBorderThickness:'1'}},// 70 Single-Series Spline Area 2D
splinearea:{chart:{paletteColors:'#7CB5EC',drawAnchors:'0',showValues:'0',plotFillAlpha:'70',plotToolText:'$label: <b>$dataValue</b>'}},// 71 Multi-Series Spline 2D
msspline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',drawCrossLine:'1',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 72 Multi-Series Spline Area 2D
mssplinearea:{chart:{showValues:'0',showLegend:'1',drawAnchors:'0',plotFillAlpha:'70'}},// 73 Error Bar Chart
errorbar2d:{chart:{paletteColors:'#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',errorBarColor:'#434348',errorBarThickness:'1.3',showValues:'0'}},// 74 Error Line 2D Chart
errorline:{chart:{paletteColors:'#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',errorBarColor:'#434348',errorBarThickness:'1.3',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 75 Error Scatter Chart
errorscatter:{chart:{paletteColors:'#7CB5EC, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',errorBarColor:'#434348',errorBarThickness:'1.3',drawCustomLegendIcon:'0',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'7',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2'}},// 76 Inverse Y-Axis Area 2D Chart
inversemsarea:{chart:{showValues:'0',drawCrossLine:'1',showLegend:'1',plotFillAlpha:'70'}},// 77 Inverse Y-Axis Column 2D Chart
inversemscolumn2d:{chart:{showLegend:'1',showValues:'0'}},// 78 Inverse Y-Axis Line 2D Chart
inversemsline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',drawCrossLine:'1',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 79 Drag-able Column 2D Chart
dragcolumn2d:{chart:{showValues:'0',showLegend:'1'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',alpha:'70'}]}]},// 80 Drag-able Line 2D Chart
dragline:{chart:{drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',alpha:'70',dashed:'1'}]}]},// 81 Drag-able Area 2D Chart
dragarea:{chart:{showValues:'0',showLegend:'1',drawAnchors:'0',plotFillAlpha:'70'},categories:[{category:[{fontItalic:'1'}]}],dataset:[{data:[{allowDrag:'1',dashed:'1'}]}]},// 82 Treemap Chart
treemap:{chart:{parentLabelLineHeight:'13',baseFontSize:'11',labelFontSize:'11',showParent:'1',showNavigationBar:'0',plotBorderThickness:'0.5',plotBorderColor:'#FFFFFF',labelGlow:'0',labelGlowIntensity:'100',btnBackChartTooltext:'Back',btnResetChartTooltext:'Home',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0',toolbarButtonScale:'1.50',plotToolText:'$label, $dataValue, $sValue'},data:[{fillColor:'#F4F4F4',data:[{fillColor:'#F4F4F4'}]}]},// 83 Radar Chart
radar:{chart:{showLegend:'1',plotFillAlpha:'40',anchorBgAlpha:'40',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'6',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2',legendIconBorderThickness:'1'}},// 84 Heat Map Chart
heatmap:{chart:{baseFontSize:'11',labelFontSize:'11',showPlotBorder:'1',plotBorderAlpha:'100',plotBorderThickness:'0.5',plotBorderColor:'#FFFFFF',tlFontColor:'#FDFDFD',tlFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',tlFontSize:'10',trFontColor:'#FDFDFD',trFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',trFontSize:'10',blFontColor:'#FDFDFD',blFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',blFontSize:'10',brFontColor:'#FDFDFD',brFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',brFontSize:'10',captionPadding:'20',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0'},colorrange:{gradient:'1',code:'#7CB5EC'}},// 85 Box and Whisker Chart
boxandwhisker2d:{chart:{drawCustomLegendIcon:'0',showLegend:'1',showDetailedLegend:'1',showValues:'0',showPlotBorder:'1',plotBorderColor:'#7CB5EC',plotBorderAlpha:'100',plotBorderThickness:'1.5',upperBoxBorderAlpha:'0',lowerBoxBorderAlpha:'0',lowerQuartileAlpha:'0',upperQuartileAlpha:'0',upperWhiskerColor:'#7CB5EC',upperWhiskerThickness:'1.5',lowerWhiskerColor:'#7CB5EC',lowerWhiskerThickness:'1.5',medianColor:'#7CB5EC',medianThickness:'0.7',medianAlpha:'100',outliericonshape:'spoke',outliericonsides:'9',meaniconcolor:'#7CB5EC',meanIconShape:'spoke',meaniconsides:'9',meaniconradius:'5'}},// 86 Candle-Stick Chart
candlestick:{chart:{showShadow:'0',showVPlotBorder:'0',bearFillColor:'#F45B5B',bullFillColor:'#8EED7D',plotLineThickness:'0.3',plotLineAlpha:'100',divLineDashed:'0',showDetailedLegend:'1',showHoverEffect:'1',plotHoverEffect:'1',showVolumeChart:'0',trendLineColor:'#434348',trendLineThickness:'1',trendValueAlpha:'100',rollOverBandAlpha:'100',rollOverBandColor:'#E6E6E6'},categories:[{verticalLineColor:'#434348',verticalLineThickness:'1',verticalLineAlpha:'35'}]},// 87 Drag Node Chart
dragnode:{chart:{use3DLighting:'0',plotBorderThickness:'0',plotBorderAlpha:'0',showDetailedLegend:'1',divLineThickness:'0'},dataset:[{color:'#7CB5EC'}],connectors:[{connector:[{color:'#434348',strength:'1.5'}]}]},// 88 Step Line Chart
msstepline:{chart:{drawAnchors:'0',lineThickness:'2',showValues:'0',plotToolText:'$label: <b>$dataValue</b>'}},// 89 Multi-axis Line Chart
multiaxisline:{chart:{showValues:'0',showLegend:'1',lineThickness:'2',connectNullData:'1',drawAnchors:'0',divLineDashed:'0',divLineColor:'#E6E6E6',vDivLineColor:'#E6E6E6',vDivLineDashed:'0',yAxisNameFontSize:'11',drawCustomLegendIcon:'0',legendIconBorderThickness:'1'},axis:[{divLineColor:'#E6E6E6',setAdaptiveYMin:'1',divLineDashed:'0'}]},// 90 Multi-level Pie Chart
multilevelpie:{chart:{useHoverColor:'1',hoverFillColor:'#8087E5',showHoverEffect:'1',plotHoverEffect:'1'},category:[{color:'#8087E5',category:[{color:'#7CB5EC',category:[{color:'#7CB5EC'}]}]}]},// 91 Select-Scatter Chart
selectscatter:{chart:{drawCustomLegendIcon:'0',drawAnchors:'1',anchorRadius:'4',anchorHoverRadius:'7',showValues:'0',anchorBorderHoverColor:'#D8D8D8',anchorHoverEffect:'1',anchorBgHoverAlpha:'95',anchorBorderHoverThickness:'2'}},// 92 Waterfall / Cascade Chart
waterfall2d:{chart:{showValues:'0',paletteColors:'#7CB5EC, #434348, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',positiveColor:'#8EED7D',negativeColor:'#F7A35C',showConnectors:'1',connectorDashed:'1',connectorThickness:'1.5',connectorColor:'#434348'}},// 93 Kagi Chart
kagi:{chart:{rallyThickness:'2',declineThickness:'2',drawAnchors:'0',rallyColor:'#8EED7D',declineColor:'#F45B5B',showValues:'0'}},// 94 Geo Maps
geo:{chart:{showLabels:'0',legendScaleLineThickness:'0',legendaxisborderalpha:'0',legendShadow:'0',fillColor:'#E6E6E6',showEntityHoverEffect:'1',entityFillHoverAlpha:'70',connectorHoverAlpha:'70',markerBorderHoverAlpha:'70',showBorder:'1',borderColor:'#434348',borderThickness:'0.3',nullEntityColor:'434348',nullEntityAlpha:'30',entityFillHoverColor:'#434348'},colorrange:{gradient:'1',code:'#7CB5EC'}},//timeseries
timeseries:{// caption styling
caption:{style:{text:{'font-size':18,'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',fill:'#333333','font-weight':500}}},// subcaption styling
subcaption:{style:{text:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif','font-size':12,fill:'#666666'}}},chart:{paletteColors:'#7CB5EC, #434348, #8EED7D, #F7A35C, #8085E9, #F15C80, #E4D354, #2B908F, #F45B5B, #91E8E1',multiCanvasTooltip:1,baseFont:'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',style:{text:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'},canvas:{stroke:'#E6E6E6','stroke-width':1},tooltip:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif','font-size':12,color:'#333333','background-color':'#F6F6F6','background-opacity':'0.85','border':'1px solid rgba(153, 153, 153, 0.9)',// "border-width": "1",
'border-radius':'3'},navigator:{brush:{handle:{fill:'#F2F2F2'},overlay:{opacity:1}},scroller:{button:{fill:'#E6E6E6'},track:{fill:'#F2F2F2'},scrollbar:{fill:'#CCCCCC'}}}}},extensions:{customRangeSelector:{style:{title:{text:{fill:'#333333','font-weight':'500'},icon:{fill:'#333333'}},label:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',color:'#666666'},input:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',color:'#333333','background-color':'#FFFFFF','border':'1px solid #CCCCCC'},button:{apply:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif','background-color':'#7CB5EC',color:'#333333',border:'none','font-weight':600},cancel:{'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',color:'#666666','background-color':'#FFFFFF',border:'none','font-weight':500}},calendar:{navprev:'fc-cal-nav-prev-gammel',navnext:'fc-cal-nav-next-gammel',month:'fc-cal-month-gammel',days:'fc-cal-day-gammel',normaldate:'fc-cal-date-normal-gammel',disableddate:'fc-cal-date-disabled-gammel',selecteddate:'fc-cal-date-selected-gammel',weekend:'fc-cal-weekend-gammel'}}},standardRangeSelector:{style:{button:{text:{fill:'#666666','font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'// backlog - https://fusioncharts.jira.com/browse/FTV3-812
// background: {
//   fill: "#F7F7F7"
// }
}},'button:hover':{text:{fill:'#333333','font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif'// backlog - https://fusioncharts.jira.com/browse/FTV3-812
// background: {
//   fill: "#F7F7F7"
// }
}},'button:active':{text:{fill:'#333333','font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif','font-weight':600// backlog - https://fusioncharts.jira.com/browse/FTV3-812
// background: {
//   fill: "#EBEBF5"
// }
}},separator:{stroke:'#E6E6E6'}}}},legend:{item:{style:{text:{fill:'#333333','font-size':12,'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif','font-weight':600}}}},xaxis:{style:{title:{'font-size':12,'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',fill:'#666666'},ticks:{major:{stroke:'#CCD6EB','stroke-width':1},minor:{stroke:'#CCD6EB','stroke-width':0.75}},text:{major:{color:'#666666'},minor:{color:'#666666'},context:{color:'#333333','font-weight':600}}}},plotconfig:{column:{style:{'plot:hover':{opacity:0.75},'plot:highlight':{opacity:0.9}}},line:{style:{plot:{'stroke-width':2},anchor:{'stroke-width':1}}},area:{style:{anchor:{'stroke-width':1}}},candlestick:{style:{bear:{stroke:'#F45B5B',fill:'#F45B5B'},bull:{stroke:'#8EED7D',fill:'#8EED7D'},'bear:hover':{opacity:0.75},'bear:highlight':{opacity:0.9},'bull:hover':{opacity:0.75},'bull:highlight':{opacity:0.9}}},ohlc:{style:{bear:{stroke:'#F45B5B',fill:'#F45B5B'},bull:{stroke:'#8EED7D',fill:'#8EED7D'},'bear:hover':{opacity:0.75},'bear:highlight':{opacity:0.9},'bull:hover':{opacity:0.75},'bull:highlight':{opacity:0.9}}}},yaxis:[{style:{title:{'font-size':12,'font-family':'Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif',fill:'#666666'},'tick-mark':{stroke:'#E6E6E6','stroke-width':1},'grid-line':{stroke:'#E6E6E6','stroke-width':1},label:{color:'#666666'}}}]}}};/* harmony default export */ __webpack_exports__["a"] = ({extension:themeObject,name:'gammelTheme',type:'theme'});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(20);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js!./fusioncharts.theme.gammel.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js!./fusioncharts.theme.gammel.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "/* ft calendar customization */\n.fc-cal-nav-prev-gammel, .fc-cal-nav-next-gammel {\n  font-family:\n  \"Lucida Grande\";\n  font-weight: 400;\n}\n\n.fc-cal-month-gammel {\n  font-family:\n  \"Lucida Grande\";\n  background-color: #7CB5EC;\n  color: #333333;\n}\n\n.fc-cal-day-gammel, .fc-cal-date-normal-gammel {\n  font-family:\n  \"Lucida Grande\";\n  color: #333333;\n  font-size: 11px;\n}\n\n.fc-cal-date-disabled-gammel {\n  font-family:\n  \"Lucida Grande\";\n  color: #999999;\n  font-size: 11px;\n}\n\n.fc-cal-date-selected-gammel {\n  font-family:\n  \"Lucida Grande\";\n  background-color: #7CB5EC;\n  color: #333333;\n  font-weight: bold;\n  font-size: 11px;\n}\n\n.fc-cal-weekend-gammel {\n  background-color: #F3F8FD;\n}\n\n", ""]);

// exports


/***/ })
/******/ ]);
}));

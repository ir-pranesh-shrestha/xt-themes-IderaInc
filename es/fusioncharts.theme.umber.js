function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@font-face {\n  font-family: \"Titillium Web Regular\";\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Titillium Web Regular\"), local(\"TitilliumWeb-Regular\"),\n    url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2)\n      format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n@font-face {\n  font-family: \"Titillium Web SemiBold\";\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"Titillium Web SemiBold\"), local(\"TitilliumWeb-SemiBold\"),\n    url(https://fonts.gstatic.com/s/titilliumweb/v7/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2)\n      format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n/* ft calendar customiztion */\n.fc-cal-day-umber {\n  background-color: #fff1e5;\n  color: #33302e;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-normal-umber {\n  background-color: #fff1e5;\n  color: #33302e;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-normal-umber:hover {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-date-disabled-umber {\n  background-color: #fff1e5;\n  color: rgba(51, 48, 46, 0.5);\n  font-family: \"Titillium Web Regular\";\n  border: none;\n}\n\n.fc-cal-month-header-umber {\n  background-color: #000000;\n  font-family: \"Titillium Web Regular\";\n}\n\n.fc-cal-weekend-umber {\n  background-color: rgba(0, 0, 0, 0.25);\n}\n\n.fc-cal-container-umber {\n  border: none;\n}\n\n.fc-cal-nav-next-umber,\n.fc-cal-nav-prev-umber {\n  font-family: \"Titillium Web Regular\";\n  font-size: 12px;\n}\n\n.fc-cal-date-selected-umber {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n}\n\n.fc-cal-date-selected-umber:hover {\n  background-color: #000000;\n  color: #ffffff;\n  font-family: \"Titillium Web Regular\";\n}\n";
styleInject(css);

/*
 Umber Theme v0.1
 FusionCharts JavaScript Library

 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
/* jshint ignore:end */
var themeObject = {
	'name': 'umber',
	'theme': {
		'base': {
			'chart': {
				'showBorder': 0,
				'showCanvasBorder': 0,
				'bgColor': '#FFF1E5',
				'bgAlpha': 100,
				'canvasBgAlpha': 0,
				'showAlternateHGridColor': 0,
				'showAlternateVGridColor': 0,
				'captionFont': 'Titillium Web SemiBold',
				'captionFontSize': 16,
				'captionFontBold': 0,
				'captionFontColor': '#000000',
				'subcaptionFont': 'Titillium Web Regular',
				'subCaptionFontSize': 12,
				'subCaptionFontBold': 0,
				'subcaptionFontColor': '#66605C',
				'captionAlignment': 'left',
				'captionPadding': 20,
				'xAxisNameFont': 'Titillium Web Regular',
				'xAxisNameFontSize': 12,
				'xAxisNameFontBold': 0,
				'xAxisNameFontColor': '#33302E',
				'yAxisNameFont': 'Titillium Web Regular',
				'yAxisNameFontSize': 12,
				'yAxisNameFontBold': 0,
				'yAxisNameFontColor': '#33302E',
				'sYAxisNameFont': 'Titillium Web Regular',
				'sYAxisNameFontSize': 12,
				'sYAxisNameFontBold': 0,
				'sYAxisNameFontColor': '#33302E',
				'baseFont': 'Titillium Web Regular',
				'baseFontColor': '#606060',
				'baseFontSize': 11,
				'outCnvBaseFont': 'Titillium Web Regular',
				'outCnvBaseFontColor': '#606060',
				'outCnvBaseFontSize': 11,
				'showValues': 0,
				'placeValuesInside': 0,
				'valueFont': 'Titillium Web Regular',
				'valueFontSize': 11,
				'valueFontColor': '#33302E',
				'legendItemFont': 'Titillium Web Regular',
				'legendItemFontSize': 12,
				'legendItemFontColor': '#33302E',
				'legendItemHiddenColor': '#D5CDBE',
				'labelDisplay': 'auto',
				'divLineColor': '#D5CDBE',
				'divLinealpha': 100,
				'divLineThickness': 0.75,
				'vDivLineColor': '#D5CDBE',
				'vDivLinealpha': 100,
				'vDivLineThickness': 0.75,
				'paletteColors': '#0f5499, #B5323E, #0a5e66, #EDB34A, #676668, #ED9CBD, #4CCBB8, #B9C36C, #749FC0, #FC6D6D',
				'usePlotGradientColor': 0,
				'showPlotBorder': 0,
				'showShadow': 0,
				'use3DLighting': 0,
				'tooltipPadding': 6,
				'tooltipBgColor': '#FFF9F5',
				'tooltipColor': '#33302E',
				'tooltipBorderRadius': 3,
				'tooltipBorderColor': '#D5CDBE',
				'tooltipBorderThickness': 0.5,
				'tooltipBgAlpha': 90,
				'crossLineColor': '#D5CDBE',
				'crossLineAlpha': 100,
				'crossLineThickness': 1,
				'legendBgAlpha': 0,
				'legendBorderThickness': 0,
				'legendIconScale': 1,
				'drawCustomLegendIcon': 1,
				'legendShadow': 0,
				'showHoverEffect': 1,
				'plotHoverEffect': 1,
				'anchorHoverEffect': 0,
				'plotFillHoverAlpha': 85,
				'plotBorderHoverThickness': 0,
				'plotBorderHoverAlpha': 0,
				'toolbarButtonColor': '#FFF1E5',
				'toolbarButtonHoverColor': '#FFF9F5',
				'toolbarButtonBorderColor': '#D5CDBE',
				'toolbarButtonBorderThickness': 0.5,
				'toolbarButtonScale': 1.3,
				'transposeAxis': 1,
				'setAdaptiveYMin': 1,
				'setAdaptiveXMin': 1
			}
		},
		'column2d': {
			'chart': {
				'paletteColors': '#0f5499'
			}
		},
		'column3d': {
			'chart': {
				'paletteColors': '#0f5499',
				'showCanvasBase': 0
			}
		},
		'line': {
			'chart': {
				'paletteColors': '#0f5499',
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'area2d': {
			'chart': {
				'drawAnchors': 0,
				'paletteColors': '#0f5499',
				'plotFillAlpha': 85,
				'legendIconBgAlpha': 85,
				'legendIconBorderAlpha': 0,
				'drawCrossLine': 1,
				'anchorBgColor': '#FFF1E5',
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'bar2d': {
			'chart': {
				'paletteColors': '#0f5499'
			}
		},
		'bar3d': {
			'chart': {
				'paletteColors': '#0f5499',
				'showCanvasBase': 0
			}
		},
		'pie2d': {
			'chart': {
				'showLegend': '1',
				'enableMultiSlicing': 0,
				'legendIconSides': 2,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'showValues': 1,
				'showPercentValues': 1,
				'showPercentInToolTip': 0
			}
		},
		'pie3d': {
			'chart': {
				'showLegend': 1,
				'enableMultiSlicing': 0,
				'legendIconSides': 2,
				'pieYScale': 75,
				'pieSliceDepth': 10,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'showValues': 1,
				'showPercentValues': 1,
				'showPercentInToolTip': 0
			}
		},
		'doughnut2d': {
			'chart': {
				'showLegend': 1,
				'enableMultiSlicing': 0,
				'legendIconSides': 2,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'showValues': 1,
				'showPercentValues': 1,
				'showPercentInToolTip': 0,
				'centerLabelFont': 'Titillium Web Regular',
				'centerLabelFontSize': 12,
				'centerLabelColor': '#33302E',
				'defaultCenterLabel': null,
				'centerLabel': null
			}
		},
		'doughnut3d': {
			'chart': {
				'showLegend': 1,
				'enableMultiSlicing': 0,
				'legendIconSides': 2,
				'pieYScale': 75,
				'pieSliceDepth': 10,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'showValues': 1,
				'showPercentValues': 1,
				'showPercentInToolTip': 0
			}
		},
		'pareto2d': {
			'chart': {
				'paletteColors': '#0f5499',
				'lineColor': '#B5323E',
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2
			}
		},
		'pareto3d': {
			'chart': {
				'paletteColors': '#0f5499',
				'lineColor': '#B5323E',
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'showCanvasBase': 0
			}
		},
		'mscolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'mscolumn3d': {
			'chart': {
				'showCanvasBase': 0
			}
		},
		'msline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'msbar2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'msbar3d': {
			'chart': {
				'showCanvasBase': 0
			}
		},
		'msarea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'drawCrossLine': 1,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'marimekko': {
			'chart': {
				'showSum': 0,
				'valueBgColor': 'FFF9F5',
				'valueFontColor': '#33302E',
				'valueFontSize': 12,
				'valueBorderThickness': 0.5,
				'valueBorderColor': '#D5CDBE',
				'valueBorderRadius': 3,
				'showPlotBorder': 1,
				'plotborderThickness': 0.5,
				'plotBorderColor': '#D5CDBE'
			}
		},
		'zoomline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'zoomlinedy': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'stackedcolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'stackedcolumn3d': {
			'chart': {
				'showCanvasBase': 0
			}
		},
		'stackedbar2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'stackedbar3d': {
			'chart': {
				'showCanvasBase': 0
			}
		},
		'stackedarea2d': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 85,
				'legendIconBgAlpha': 85,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'drawCrossLine': 1,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'msstackedcolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'mscombi2d': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'mscombi3d': {
			'chart': {
				'showCanvasBase': 0,
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'mscolumnline3d': {
			'chart': {
				'showCanvasBase': 0,
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'stackedcolumn2dline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'stackedcolumn3dline': {
			'chart': {
				'showCanvasBase': 0,
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'mscombidy2d': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'drawCrossLine': 1
			}
		},
		'mscolumn3dlinedy': {
			'chart': {
				'showCanvasBase': 0,
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'stackedcolumn3dlinedy': {
			'chart': {
				'showCanvasBase': 0,
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'msstackedcolumn2dlinedy': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'drawCrossLine': 1
			}
		},
		'scatter': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCustomLegendIcon': 0,
				'anchorBorderThickness': 2,
				'legendIconBorderThickness': 2
			}
		},
		'bubble': {
			'chart': {
				'plotFillAlpha': 85,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'quadrantLineThickness': 1.5,
				'quadrantLineColor': '#33302E',
				'quadrantLineDashed': 1,
				'quadrantLineAlpha': 100,
				'quadrantLineDashGap': 2,
				'quadrantLineDashLen': 2,
				'quadrantLabelFont': 'Titillium Web Regular',
				'quadrantLabelFontSize': 12,
				'quadrantLabelFontBold': 0,
				'quadrantLabelFontColor': '#33302E',
				'plotFillHoverAlpha': 60
			}
		},
		'zoomscatter': {
			'chart': {
				'plotFillAlpha': 85,
				'anchorRadius': 4,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'quadrantLineThickness': 1.5,
				'quadrantLineColor': '#33302E',
				'quadrantLineDashed': 1,
				'quadrantLineAlpha': 100,
				'quadrantLineDashGap': 2,
				'quadrantLineDashLen': 2,
				'quadrantLabelFont': 'Titillium Web Regular',
				'quadrantLabelFontSize': 12,
				'quadrantLabelFontBold': 0,
				'quadrantLabelFontColor': '#33302E',
				'plotFillHoverAlpha': 60
			}
		},
		'scrollcolumn2d': {
			'chart': {
				'drawCrossLine': 1,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'scrollline2d': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9',
				'plotHoverEffect': 0
			}
		},
		'scrollarea2d': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'drawCrossLine': 1,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9',
				'plotHoverEffect': 0
			}
		},
		'scrollstackedcolumn2d': {
			'chart': {
				'drawCrossLine': 1,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'scrollcombi2d': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'scrollcombidy2d': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'drawCrossLine': 1,
				'flatscrollbars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9'
			}
		},
		'angulargauge': {
			'chart': {
				'captionAlignment': 'center',
				'setAdaptiveMin': 1,
				'adjustTM': 1,
				'tickvaluedistance': 5,
				'placeTicksInside': 0,
				'autoAlignTickValues': 1,
				'showGaugeBorder': 0,
				'minortmnumber': 0,
				'majorTMHeight': 10,
				'majorTMColor': 'D5CDBE',
				'gaugeFillMix': '{light-0}',
				'pivotbgcolor': '#33302E',
				'pivotfillmix': 0,
				'showpivotborder': 1,
				'pivotBorderColor': '#D5CDBE',
				'showValue': 0,
				'valueBelowPivot': 1,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E'
			},
			'dials': {
				'dial': [{
					'bgColor': '#33302E',
					'borderThickness': 0
				}]
			}
		},
		'bulb': {
			'chart': {
				'captionAlignment': 'center',
				'is3D': 0,
				'placeValuesInside': 1,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E'
			}
		},
		'cylinder': {
			'chart': {
				'cylRadius': 50,
				'cylYScale': 30,
				'cylFillColor': '#0f5499',
				'cylGlassColor': '#FFF9F5',
				'majorTMHeight': 10,
				'majorTMColor': '#D5CDBE',
				'minortmnumber': 0,
				'showValue': 1,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'hled': {
			'chart': {
				'captionAlignment': 'center',
				'setAdaptiveMin': 1,
				'showGaugeBorder': 0,
				'adjustTM': 1,
				'placeTicksInside': 0,
				'autoAlignTickValues': 1,
				'minortmnumber': 0,
				'majorTMHeight': 10,
				'majorTMColor': '#D5CDBE',
				'ledGap': 0,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'hlineargauge': {
			'chart': {
				'captionAlignment': 'center',
				'showGaugeBorder': 0,
				'setAdaptiveMin': 1,
				'adjustTM': 1,
				'placeTicksInside': 0,
				'autoAlignTickValues': 1,
				'minortmnumber': 0,
				'majorTMHeight': 10,
				'majorTMColor': '#D5CDBE',
				'gaugeFillMix': '{light-0}',
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'thermometer': {
			'chart': {
				'manageResize': 1,
				'autoScale': 1,
				'showGaugeBorder': 1,
				'gaugeBorderColor': '#D5CDBE',
				'gaugeBorderThickness': 2,
				'gaugeBorderAlpha': 100,
				'thmFillColor': '#0f5499',
				'thmGlassColor': '#FFF9F5',
				'placeTicksInside': 0,
				'autoAlignTickValues': 1,
				'minortmnumber': 0,
				'majorTMHeight': 10,
				'majorTMColor': '#D5CDBE',
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'vled': {
			'chart': {
				'captionAlignment': 'center',
				'setAdaptiveMin': 1,
				'showGaugeBorder': 0,
				'adjustTM': 1,
				'placeTicksInside': 0,
				'autoAlignTickValues': 1,
				'minortmnumber': 0,
				'majorTMHeight': 10,
				'majorTMColor': '#D5CDBE',
				'ledGap': 0,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'realtimearea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'realtimecolumn': {
			'chart': {
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'realtimeline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'realtimestackedarea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 85,
				'legendIconBgAlpha': 85,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'realtimestackedcolumn': {
			'chart': {
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'realtimelinedy': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'realTimeValueFont': 'Titillium Web SemiBold',
				'realTimeValueFontSize': 12,
				'realTimeValueFontColor': '#33302E'
			}
		},
		'sparkline': {
			'chart': {
				'captionPosition': 'middle',
				'plotFillColor': '#0F5499',
				'lineAlpha': 85,
				'plotFillHoverColor': '#D5CDBE',
				'lineThickness': 2,
				'anchorRadius': 4,
				'anchorBorderThickness': 2,
				'highColor': '#0A5E66',
				'lowColor': '#B5323E',
				'showOpenAnchor': 0,
				'showCloseAnchor': 0,
				'showOpenValue': 0,
				'showCloseValue': 0,
				'showHighLowValue': 0,
				'periodColor': '#D5CDBE',
				'chartLeftMargin': 5,
				'chartRightMargin': 5
			}
		},
		'sparkcolumn': {
			'chart': {
				'captionPosition': 'middle',
				'plotFillColor': '#0F5499',
				'highColor': '#0A5E66',
				'lowColor': '#B5323E',
				'periodColor': '#D5CDBE',
				'chartLeftMargin': 5
			}
		},
		'sparkwinloss': {
			'chart': {
				'captionPosition': 'middle',
				'winColor': '#0A5E66',
				'lossColor': '#B5323E',
				'drawColor': '#EDB34A',
				'scoreLessColor': '#0F5499',
				'periodColor': '#D5CDBE',
				'chartLeftMargin': 5
			}
		},
		'hbullet': {
			'chart': {
				'plotFillColor': '#0F5499',
				'colorRangeFillMix': '{light-0}',
				'targetColor': '#000000',
				'targetThickness': '2',
				'targetCapStyle': 'round',
				'showTickMarks': 0,
				'showTickValues': 1,
				'showLimits': 1,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'vbullet': {
			'chart': {
				'plotFillColor': '#0F5499',
				'colorRangeFillMix': '{light-0}',
				'targetColor': '#000000',
				'targetThickness': '2',
				'targetCapStyle': 'round',
				'showTickMarks': 0,
				'showTickValues': 1,
				'showLimits': 1,
				'valueFont': 'Titillium Web SemiBold',
				'valueFontSize': 12,
				'valueFontColor': '#33302E',
				'baseFontColor': '#33302E'
			}
		},
		'funnel': {
			'chart': {
				'is2D': 1,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'streamlinedData': 1,
				'useSameSlantAngle': 1,
				'showLegend': 1,
				'legendPosition': 'right',
				'showLabels': 0
			}
		},
		'pyramid': {
			'chart': {
				'is2D': 1,
				'isSmartLineSlanted': 0,
				'smartLineColor': '#D5CDBE',
				'smartLineThickness': 1,
				'streamlinedData': 1,
				'useSameSlantAngle': 1,
				'showLegend': 1,
				'legendPosition': 'right',
				'showLabels': 0,
				'plotBorderThickness': 0
			}
		},
		'gantt': {
			'chart': {
				'taskBarFillMix': '{light+0}',
				'flatScrollBars': 1,
				'scrollHeight': 17,
				'scrollColor': '#F2E5D9',
				'gridBorderAlpha': 100,
				'gridBorderColor': '#D5CDBE',
				'ganttLineColor': '#D5CDBE',
				'ganttLineAlpha': 100,
				'taskBarRoundRadius': 3,
				'showHoverEffect': 1,
				'plotHoverEffect': 1,
				'plotFillHoverAlpha': 85,
				'showCategoryHoverBand': 1,
				'categoryHoverBandAlpha': 85,
				'showGanttPaneVerticalHoverBand': 1,
				'showProcessHoverBand': 1,
				'processHoverBandAlpha': 85,
				'showGanttPaneHorizontalHoverBand': 1,
				'showConnectorHoverEffect': 1,
				'connectorHoverAlpha': 85,
				'showTaskHoverEffect': 1,
				'taskHoverFillAlpha': 85,
				'slackHoverFillAlpha': 85,
				'scrollShowButtons': 1,
				'showCanvasBorder': 1,
				'canvasBorderColor': '#D5CDBE',
				'canvasBorderThickness': 0.75
			},
			'categories': [{
				'fontcolor': '#33302E',
				'fontsize': 12,
				'bgcolor': '#FFF9F5',
				'hoverBandAlpha': 85,
				'showGanttPaneHoverBand': 1,
				'showHoverBand': 1,
				'category': [{
					'fontcolor': '#33302E',
					'fontsize': 11,
					'bgAlpha': 85,
					'bgcolor': '#FFF9F5'
				}]
			}],
			'tasks': {
				'showBorder': 0,
				'showHoverEffect': 0,
				'task': [{
					'color': '#0f5499'
				}]
			},
			'processes': {
				'fontcolor': '#33302E',
				'isanimated': 0,
				'bgcolor': '#FFF9F5',
				'bgAlpha': 85,
				'headerbgcolor': '#FFF9F5',
				'headerfontcolor': '#33302E',
				'showGanttPaneHoverBand': 1,
				'showHoverBand': 1
			},
			'text': {
				'fontcolor': '#33302E',
				'bgcolor': '#FFF9F5'
			},
			'datatable': {
				'fontcolor': '#33302E',
				'bgcolor': '#FFF9F5',
				'datacolumn': [{
					'bgcolor': '#FFF9F5'
				}]
			},
			'connectors': [{
				'hoverThickness': 1
			}],
			'milestones': {
				'milestone': [{
					'color': '#33302E'
				}]
			}
		},
		'logmscolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'logmsline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'spline': {
			'chart': {
				'paletteColors': '#0f5499',
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2
			}
		},
		'splinearea': {
			'chart': {
				'drawAnchors': 0,
				'paletteColors': '#0f5499',
				'plotFillAlpha': 85,
				'legendIconBgAlpha': 85,
				'legendIconBorderAlpha': 0,
				'drawCrossLine': 1,
				'anchorBgColor': '#FFF1E5',
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'msspline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2
			}
		},
		'mssplinearea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'drawCrossLine': 1,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'errorbar2d': {
			'chart': {
				'errorBarColor': '#33302E',
				'errorBarThickness': 1
			}
		},
		'errorline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'errorBarColor': '#33302E',
				'errorBarThickness': 1
			}
		},
		'errorscatter': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCustomLegendIcon': 0,
				'anchorBorderThickness': 2,
				'legendIconBorderThickness': 2,
				'errorBarColor': '#33302E',
				'errorBarThickness': 1
			}
		},
		'inversemsarea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'drawCrossLine': 1,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'inversemscolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'inversemsline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'dragcolumn2d': {
			'chart': {},
			'categories': [{
				'category': [{
					'fontItalic': 1
				}]
			}],
			'dataset': [{
				'data': [{
					'allowDrag': 1,
					'alpha': 85
				}]
			}]
		},
		'dragline': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'plotHoverEffect': 0
			},
			'categories': [{
				'category': [{
					'fontItalic': 1
				}]
			}],
			'dataset': [{
				'data': [{
					'allowDrag': 1,
					'alpha': 85,
					'dashed': 1
				}]
			}]
		},
		'dragarea': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'anchorBorderThickness': 2,
				'plotHoverEffect': 0
			},
			'categories': [{
				'category': [{
					'fontItalic': 1
				}]
			}],
			'dataset': [{
				'data': [{
					'drawAnchors': 1,
					'allowDrag': 1,
					'dashed': 1
				}]
			}]
		},
		'treemap': {
			'chart': {
				'parentLabelLineHeight': 12.5,
				'baseFontSize': 11,
				'labelFontSize': 11,
				'showParent': 1,
				'showNavigationBar': 0,
				'plotBorderThickness': 0.5,
				'plotBorderColor': '#D5CDBE',
				'labelGlow': 0,
				'btnBackChartTooltext': 'Back',
				'btnResetChartTooltext': 'Home',
				'legendScaleLineThickness': 0,
				'legendaxisborderalpha': 0,
				'legendPointerColor': '#FFF9F5',
				'legendpointerbordercolor': '#606060',
				'legendPointerAlpha': 85,
				'defaultParentBgColor': '#FFF9F5',
				'fontcolor': '#33302E'
			},
			'data': [{
				'fillcolor': '#FFF9F5',
				'data': [{
					'fillcolor': '#FFF9F5'
				}]
			}]
		},
		'radar': {
			'chart': {
				'drawAnchors': 1,
				'anchorBgColor': '#FFF1E5',
				'plotFillAlpha': 50,
				'legendIconBgAlpha': 50,
				'legendIconBorderAlpha': 0,
				'legendIconSides': 2,
				'anchorBorderThickness': 2,
				'radarFillColor': '#FFF9F5',
				'radarBorderThickness': 0
			}
		},
		'heatmap': {
			'chart': {
				'showPlotBorder': 1,
				'plotBorderThickness': 0.5,
				'plotBorderColor': '#D5CDBE',
				'tlFontColor': '#606060',
				'tlFontSize': 10,
				'trFontColor': '#606060',
				'trFontSize': 10,
				'blFontColor': '#606060',
				'blFontSize': 10,
				'brFontColor': '#606060',
				'brFontSize': 10,
				'legendScaleLineThickness': 0,
				'legendaxisborderalpha': 0,
				'legendPointerColor': '#FFF9F5',
				'legendpointerbordercolor': '#606060',
				'legendPointerAlpha': 85,
				'showCanvasBorder': 1,
				'canvasBorderThickness': 0.5,
				'canvasBorderColor': '#D5CDBE'
			},
			'colorrange': {
				'gradient': 1,
				'code': '#0f5499'
			}
		},
		'boxandwhisker2d': {
			'chart': {
				'drawCustomLegendIcon': 0,
				'showLegend': 1,
				'showDetailedLegend': 1,
				'legendIconSides': 2,
				'showPlotBorder': 0,
				'upperBoxBorderAlpha': 0,
				'lowerBoxBorderAlpha': 0,
				'lowerQuartileAlpha': 0,
				'upperQuartileAlpha': 0,
				'upperWhiskerThickness': 1,
				'upperWhiskerColor': '#33302E',
				'lowerWhiskerColor': '#33302E',
				'lowerWhiskerThickness': 1,
				'medianColor': '#000000',
				'medianThickness': 1,
				'outliericonshape': 'circle',
				'outliericonsides': 4,
				'meaniconcolor': '#000000',
				'meanIconShape': 'circle',
				'meaniconsides': 2,
				'meaniconradius': 3
			}
		},
		'candlestick': {
			'chart': {
				'showVPlotBorder': 1,
				'vplotborderThickness': 0.5,
				'plotborderThickness': 0.5,
				'bearFillColor': '#B5323E',
				'bearBorderColor': '#B5323E',
				'bullFillColor': '#FFF9F5',
				'bullBorderColor': '#606060',
				'plotLineThickness': 0.75,
				'plotLineAlpha': 100,
				'divLineDashed': 0,
				'showDetailedLegend': 1,
				'legendIconSides': 4,
				'showHoverEffect': 1,
				'plotHoverEffect': 1,
				'trendLineColor': '#000000',
				'trendLineThickness': 1,
				'trendValueAlpha': 100,
				'rollOverBandAlpha': 100,
				'rollOverBandColor': '#D5CDBE'
			},
			'categories': [{
				'verticalLineColor': '#D5CDBE',
				'verticalLineThickness': 1
			}]
		},
		'dragnode': {
			'chart': {
				'showDetailedLegend': 1,
				'legendIconSides': 2,
				'divLineAlpha': 0,
				'numDivLines': 0,
				'valueFontColor': '#FFFFFF'
			},
			'dataset': [{
				'color': '#0F5499'
			}],
			'connectors': [{
				'connector': [{
					'color': '#33302E'
				}]
			}]
		},
		'msstepLine': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'plotHoverEffect': 0
			}
		},
		'multiaxisline': {
			'chart': {
				'drawAnchors': 0,
				'anchorBgColor': '#FFF1E5',
				'drawCrossLine': 1,
				'lineThickness': 2,
				'anchorBorderThickness': 2,
				'legendIconSides': 2,
				'legendIconBorderThickness': 2,
				'allowSelection': 0,
				'plotHoverEffect': 0
			},
			'axis': [{
				'divLineColor': '#D5CDBE',
				'divLineThickness': 0.75,
				'setAdaptiveYMin': '1'
			}]
		},
		'multilevelpie': {
			'chart': {
				'useHoverColor': 0,
				'valueFontColor': '#FFFFFF',
				'showPlotBorder': 1,
				'plotborderThickness': 0.5,
				'plotBorderColor': '#D5CDBE'
			},
			'category': [{
				'color': '#33302E',
				'category': [{
					'color': '#0F5499',
					'alpha': 85,
					'category': [{
						'color': '#0F5499',
						'alpha': 70,
						'category': [{
							'color': '#0F5499',
							'alpha': 55
						}]
					}]
				}]
			}]
		},
		'selectscatter': {
			'chart': {
				'anchorBgColor': '#FFF1E5',
				'drawCustomLegendIcon': 0,
				'anchorBorderThickness': 2,
				'legendIconBorderThickness': 2
			}
		},
		'waterfall2d': {
			'chart': {
				'paletteColors': '#0F5499',
				'positiveColor': '#0A5E66',
				'negativeColor': '#B5323E',
				'showConnectors': 1,
				'connectorColor': '#33302E',
				'connectorThickness': 1
			}
		},
		'kagi': {
			'chart': {
				'rallyThickness': 2,
				'declineThickness': 2,
				'legendIconSides': 2,
				'drawAnchors': 0,
				'rallyColor': '#0A5E66',
				'declineColor': '#B5323E'
			}
		},
		'geo': {
			'chart': {
				'showLabels': 0,
				'legendScaleLineThickness': 0,
				'legendaxisborderalpha': 0,
				'legendPointerColor': '#FFF9F5',
				'legendpointerbordercolor': '#606060',
				'legendPointerAlpha': 85,
				'fillColor': '#0f5499',
				'showEntityHoverEffect': 1,
				'entityFillHoverAlpha': 85,
				'connectorHoverAlpha': 85,
				'markerBorderHoverAlpha': 85,
				'showBorder': 1,
				'borderColor': '#D5CDBE',
				'borderThickness': 0.5,
				'nullEntityColor': 'FFF9F5',
				'entityFillHoverColor': '#606060'
			},
			'colorrange': {
				'gradient': 1,
				'code': '#0f5499'
			}
		},
		'overlappedbar2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'overlappedcolumn2d': {
			'chart': {
				'drawCrossLine': 1
			}
		},
		'timeseries': {
			'chart': {
				'baseFont': 'Titillium Web Regular',
				'style': {
					'text': {
						'font-family': 'Titillium Web Regular'
					},
					'background': {
						'fill': '#FFF1E5'
					},
					'canvas': {
						'fill': '#FFF1E5',
						'stroke': '#D5CDBE',
						'stroke-width': 0.75
					}
				}
			},
			'tooltip': {
				'style': {
					'container': {
						'background-color': '#FFF9F5',
						'opacity': 0.9,
						'border': '0.5px solid #D5CDBE',
						'border-radius': '3px',
						'padding': '6px'
					},
					'text': {
						'font-size': '11px',
						'color': '#606060'
					},
					'header': {
						'font-family': 'Titillium Web SemiBold',
						'font-size': '12px',
						'color': '#33302E',
						'padding': '0px'
					},
					'body': {
						'padding': '0px'
					}
				}
			},
			'navigator': {
				'scrollbar': {
					'style': {
						'button': {
							'fill': '#D5CDBE'
						},
						'track': {
							'fill': '#F2E5D9'
						},
						'scroller': {
							'fill': '#D5CDBE'
						}
					}
				},
				'window': {
					'style': {
						'handle': {
							'fill': '#D5CDBE'
						},
						'mask': {
							'opacity': 0.5,
							'stroke': '#D5CDBE',
							'stroke-width': 0.75
						}
					}
				}
			},
			'crossline': {
				'style': {
					'line': {
						'stroke': '#D5CDBE',
						'stroke-width': 1
					}
				}
			},
			'caption': {
				'style': {
					'text': {
						'font-size': 16,
						'font-family': 'Titillium Web SemiBold',
						'fill': '#000000'
					}
				}
			},
			'subcaption': {
				'style': {
					'text': {
						'font-size': 12,
						'font-family': 'Titillium Web Regular',
						'fill': '#66605C'
					}
				}
			},
			'plotconfig': {
				'column': {
					'style': {
						'plot:hover': {
							'opacity': 0.85
						},
						'plot:highlight': {
							'opacity': 0.85
						}
					}
				},
				'line': {
					'style': {
						'plot': {
							'stroke-width': 2
						}
					}
				},
				'candlestick': {
					'style': {
						'bear': {
							'stroke': '#B5323E',
							'fill': '#B5323E'
						},
						'bear:hover': {
							'opacity': 0.85
						},
						'bear:highlight': {
							'opacity': 0.85
						},
						'bull': {
							'stroke': '#606060',
							'fill': '#FFF9F5'
						},
						'bull:hover': {
							'opacity': 0.85
						},
						'bull:highlight': {
							'opacity': 0.85
						}
					}
				},
				'ohlc': {
					'style': {
						'bear': {
							'stroke': '#B5323E',
							'fill': '#B5323E'
						},
						'bear:hover': {
							'opacity': 0.85
						},
						'bear:highlight': {
							'opacity': 0.85
						},
						'bull': {
							'stroke': '#606060',
							'fill': '#FFF9F5'
						},
						'bull:hover': {
							'opacity': 0.85
						},
						'bull:highlight': {
							'opacity': 0.85
						}
					}
				}
			},
			'yaxis': [{
				'referenceline': [{
					'style': {
						'marker': {
							'fill': '#33302E',
							'stroke': '#33302E',
							'stroke-width': 1.5
						}
					}
				}],
				'style': {
					'title': {
						'font-size': 12,
						'fill': '#33302E'
					},
					'tick-mark': {
						'stroke': '#D5CDBE',
						'stroke-width': 0.75
					},
					'grid-line': {
						'stroke': '#D5CDBE',
						'stroke-width': 0.75
					},
					'label': {
						'color': '#606060'
					}
				}
			}],
			'xaxis': {
				'style': {
					'title': {
						'font-size': 12,
						'fill': '#33302E'
					},
					'tick-mark-major': {
						'stroke': '#D5CDBE',
						'stroke-width': 0.75
					},
					'tick-mark-minor': {
						'stroke': '#D5CDBE',
						'stroke-width': 0.5
					},
					'label-major': {
						'color': '#606060'
					},
					'label-minor': {
						'color': '#606060'
					},
					'label-context': {
						'color': '#000000'
					},
					'grid-line': {
						'stroke': '#D5CDBE',
						'stroke-width': 0.75
					}
				}
			},
			'legend': {
				'item': {
					'style': {
						'text': {
							'fill': '#33302E',
							'font-size': 12
						}
					}
				}
			},
			'extensions': {
				'standardRangeSelector': {
					'style': {
						'button': {
							'text': {
								'fill': '#66605C',
								'font-family': 'Titillium Web Regular'
							}
						},
						'button:hover': {
							'text': {
								'fill': '#33302E',
								'font-family': 'Titillium Web SemiBold'
							}
						},
						'button:active': {
							'text': {
								'fill': '#33302E',
								'font-family': 'Titillium Web SemiBold'
							}
						},
						'separator': {
							'stroke': '#D5CDBE',
							'stroke-width': 0.75
						}
					}
				},
				'customRangeSelector': {
					'style': {
						'calendar': {
							'days': 'fc-cal-day-umber',
							'normaldate': 'fc-cal-date-normal-umber',
							'disableddate': 'fc-cal-date-disabled-umber',
							'selecteddate': 'fc-cal-date-selected-umber',
							'header': 'fc-cal-month-header-umber',
							'weekend': 'fc-cal-weekend-umber',
							'navprev': 'fc-cal-nav-prev-umber',
							'navnext': 'fc-cal-nav-next-umber'
						},
						'title': {
							'text': {
								'fill': '#33302E',
								'font-family': 'Titillium Web SemiBold'
							},
							'icon': {
								'fill': '#33302E',
								'font-family': 'Titillium Web SemiBold'
							}
						},
						'background': {
							'background-color': '#FFF1E5'
						},
						'button': {
							'apply': {
								'color': '#FFFFFF',
								'background-color': '#33302E',
								'border': 'none'
							},
							'cancel': {
								'color': '#33302E',
								'background-color': '#FFF1E5',
								'border': 'none'
							}
						},
						'button:hover': {
							'apply': {
								'font-family': 'Titillium Web SemiBold'
							},
							'cancel': {
								'font-family': 'Titillium Web SemiBold'
							}
						},
						'label': {
							'color': '#33302E',
							'font-family': 'Titillium Web SemiBold'
						},
						'input': {
							'background-color': '#FFF9F5',
							'border': '0.5px solid #D5CDBE',
							'border-radius': '3px',
							'color': '#33302E',
							'font-family': 'Titillium Web Regular'
						},
						'select': {
							'background-color': '#FFF9F5',
							'border': '0.5px solid #D5CDBE',
							'border-radius': '3px',
							'color': '#33302E'
						}
					}
				}
			}
		}
	}
};

var index = {
  extension: themeObject,
  name: 'umberTheme',
  type: 'theme'
};

export default index;

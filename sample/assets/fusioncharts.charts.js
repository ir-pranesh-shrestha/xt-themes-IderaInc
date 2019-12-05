(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FusionCharts", [], factory);
	else if(typeof exports === 'object')
		exports["FusionCharts"] = factory();
	else
		root["FusionCharts"] = factory();
})(this, function() {
return webpackJsonpFusionCharts([3],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _iterator = __webpack_require__(9);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(10);

var _symbol2 = _interopRequireDefault(_symbol);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

var _pie2d = __webpack_require__(68);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _fusioncharts = __webpack_require__(58);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    mathPI = math.PI,
    mathRound = math.round,
    deg2rad = mathPI / 180,
    rad2deg = 180 / mathPI,
    convertColor = _lib.graphics.convertColor;

var Pie2D = function (_GaugeBase) {
  _inherits(Pie2D, _GaugeBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pie2D.getName = function getName() {
    return 'Pie2D';
  };

  function Pie2D() {
    _classCallCheck(this, Pie2D);

    var _this = _possibleConstructorReturn(this, _GaugeBase.call(this));

    _this.friendlyName = 'Pie Chart';
    _this.defaultSeriesType = 'pie';
    _this.defaultPlotShadow = 1;
    _this.reverseLegend = 1;
    _this.defaultPaletteOptions = undefined;
    _this.alignCaptionWithCanvas = 0;
    _this.sliceOnLegendClick = true;
    _this.isSingleSeries = true;
    _this.dontShowLegendByDefault = true;
    _this.defaultDatasetType = 'Pie2D';
    _this.defaultZeroPlaneHighlighted = false;
    _this.hasCanvas = true;
    _this.eiMethods = /** @lends FusionCharts# */{
      /**
       * Pie charts have slices that can be clicked to slice in and out.
       * Checks whether a particular wedge of Pie or Doughnut chart is sliced-out or sliced-in.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {number} index - The index of the data corresponding to the pie/doughnut slice.
       * @return {boolean} - The sliced state of the pie/doughnut wedge. Returns `true` if it's sliced out,
       * or `false` if it's sliced in.
       *
       * @example
       * // Render a pie 2d chart with some data in sliced out state, provide data index
       * // in an input textfield and get the sliced state of the pie on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Get the sliced state of a pie returned when clicked on a button
       *     // (with an id pie-sliced-state). It picks the data index from
       *     // an input textfield (with id pie-data-index).
       *     document.getElementById("pie-sliced-state").onclick = function () {
       *         var dataIndex = document.getElementById("pie-data-index").value,
       *             slicedState = chart.isPlotItemSliced(dataIndex);
       *     };
       * });
       */
      isPlotItemSliced: function isPlotItemSliced(index) {
        var data,
            config,
            dataSet,
            apiInstance = this.apiInstance;

        return apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && (data = dataSet.components.data) && data[index] && (config = data[index].config) && config.sliced;
      },

      addData: function addData() {
        var dataSet,
            apiInstance = this.apiInstance;
        return apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && dataSet.addData.apply(dataSet, arguments);
      },

      removeData: function removeData() {
        var dataSet,
            apiInstance = this.apiInstance;
        return apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && dataSet.removeData.apply(dataSet, arguments);
      },

      updateData: function updateData() {
        var dataSet,
            apiInstance = this.apiInstance;
        return apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && dataSet.updateData.apply(dataSet, arguments);
      },
      /**
       * Pie charts have slices. These slices can be clicked by users to slice in or slice out.
       * Slices a pie/doughnut wedge to in / out state. In absence of the optional second parameter, it
       * toggles the sliced state of the pie. The second parameter only enforces a specific sliced state.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {number} index - The index of the data corresponding to the pie/doughnut slice.
       * @param {boolean=} [slice] - Gives direction to chart on what is the required sliced state. For
       * `true`, it slices out, if in sliced-in state. Or else, maintains it's sliced-out state. And
       * vice-versa.
       *
       * @return {boolean} - The final sliced state of the pie/doughnut wedge. Returns `true` if it's
       * sliced out, or `false` if it's sliced in.
       *
       * @fires FusionCharts#slicingStart
       * @fires FusionCharts#slicingEnd
       *
       * @example
       * // Render a pie 2d chart, provide data index in an input textfield
       * // and toggle the sliced state of the pie on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Toggle the sliced state of the pie when clicked on a button
       *     // (with an id pie-sliced-state). It picks the data index from
       *     // an input textfield (with id pie-data-index).
       *     document.getElementById("pie-sliced-state").onclick = function () {
       *         var dataIndex = document.getElementById("pie-data-index").value;
       *         chart.slicePlotItem(dataIndex);
       *     };
       * });
       */
      slicePlotItem: function slicePlotItem(index, slice, callback) {
        var dataSet,
            data,
            config,
            num,
            output,
            sliceVal = !!slice,
            apiInstance = this.apiInstance,
            asyncRender = apiInstance.chartInstance.args.asyncRender;

        if (callback || asyncRender) {
          apiInstance.addJob('eiMethods-slice-plot', function () {
            output = apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && (data = dataSet.components.data) && (num = data.length) && data[index = dataSet.config.reversePlotOrder ? num - index - 1 : index] && (config = data[index].config) && ((sliceVal !== config.sliced || slice === UNDEF) && apiInstance._plotGraphicClick.call(data[index].graphics.element) || config.sliced);
            if (typeof callback === 'function') {
              callback(output);
            }
          }, _lib.priorityList.postRender);
        } else {
          return apiInstance && apiInstance.components.dataset && (dataSet = apiInstance.components.dataset[0]) && (data = dataSet.components.data) && (num = data.length) && data[index = dataSet.config.reversePlotOrder ? num - index - 1 : index] && (config = data[index].config) && ((sliceVal !== config.sliced || slice === UNDEF) && apiInstance._plotGraphicClick.call(data[index].graphics.element) || config.sliced);
        }
      },
      /**
       * Sets the center label in Dougnut 2D chart. The label cosmetics are configurable via the second
       * optional parameter, which accepts a host of related properties.
       *
       * > Available on `doughnut` chart only.
       *
       * @group chart:pie-center-label
       *
       * @param {string} labelText - The text to be displayed at doughnut center.
       * @param {Object=} [options] - The optional parameter that holds a host of configurable params
       * with most them being cosmetic properties of the center label. The properties are case sensitive.
       *
       * @param {string=} [options.font] - Sets the font face of the label.
       * @param {string=} [options.fontSize] - Defines the font size of the label.
       * @param {boolean=} [options.bold] - Specifies of whether the label be bold.
       * @param {boolean=} [options.italic] - Specifies of whether the label be in italic.
       * @param {hexcolor=} [options.color] - Sets the color of the label text.
       * @param {alpha=} [options.alpha] - Sets the opacity of the label text.
       * @param {hexcolor=} [options.hoverColor] - Sets the hover color of the label text.
       * @param {alpha=} [options.hoverAlpha] - Sets the hover opacity of the label text.
       * @param {hexcolor=} [options.bgColor] - Sets the color of the label background.
       * @param {alpha=} [options.bgAlpha] - Sets the opacity of the label background.
       * @param {hexcolor=} [options.borderColor] - Sets the color of the label background border.
       * @param {alpha=} [options.borderAlpha] - Sets the opacity of the label background border.
       * @param {number=} [options.borderThickness] - Sets the thickness of the label background border.
       * @param {number=} [options.borderRadius] - Sets the radius for rounded label background.
       * @param {number=} [options.padding] - The padding between extremities of the label and inner periphery
       * of the doughnut. For rectangular label background, it's relative to any of the 4 corners. While for
       * circular background, it's the gap between the 2 concentric circles, background border and inner
       * periphery.
       * @param {number=} [options.textPadding] - For rectangular label background, it's the gutter between
       * the text and the background border. While for circular background, it's the minimum space between
       * the background border and the containing circle of the text.
       * @param {string=} [options.toolText] - Sets the tooltext for the label.
       *
       * @fires FusionCharts#centerLabelChanged
       *
       * @example
       * // Render a doughnut 2d chart and set center label with some
       * // configuring params on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "doughnut2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Assign the functionality of setting the center label when clicked on
       *     // a button (with an id set-center-label).
       *     document.getElementById("set-center-label").onclick = function () {
       *         chart.centerLabel("The central label", {bold: true, toolText: "center label tooltext"});
       *     };
       * });
       */
      centerLabel: function centerLabel(labelText, options) {
        var chart = this.apiInstance,
            asyncRender = chart.chartInstance.args.asyncRender,
            _helperFn = function _helperFn() {
          var seriesData = chart.components.dataset[0],
              config = seriesData.config,
              centerLabel = chart.getFromEnv('centerLabel'),
              piePlotOptions = config.piePlotOptions,
              innerSize = piePlotOptions.innerSize,
              pieCenter = config.pieCenter,
              cx = pieCenter[0],
              cy = pieCenter[1],
              centerLabelConfig = config.centerLabelConfig,
              key;

          if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
            options = centerLabelConfig;
          } else {
            // Create the config cosmetics object from those obtained
            // from argument and default values
            for (key in centerLabelConfig) {
              options[key] === UNDEF && (options[key] = centerLabelConfig[key]);
            }
          }
          options.label = labelText;
          seriesData.centerLabelConfig = options;

          innerSize && centerLabel && centerLabel.draw(labelText || '', cx, cy, innerSize, innerSize, options, true);
        };

        if (asyncRender) {
          chart.addJob('eiMethods-center-lebel', _helperFn, _lib.priorityList.postRender);
        } else {
          _helperFn();
        }
      },
      /**
       * Rotates the pie/doughnut chart to a specific angle or by a specific angle. The mode of
       * operation is controlled by the optional second parameter. Even the first parameter is optional,
       * in absence of which, the chart doesn't rotate and simply returns the current starting angle
       * of the pie/doughnut chart.
       *
       * Starting angle of a pie/doughnut chart is the angle at which the starting face of the first data is
       * aligned to. Each pie is drawn in counter clock-wise direction.
       *
       * > Available on `pie` and `doughnut` chart types only.
       *
       * @group chart:pie-slice
       *
       * @param {degrees=} [angle=0] - The angle by which to rotate the entire pie/doughnut chart.
       * @param {boolean=} [relative=false] - Specify whether the angle being set is relative to the current
       * angle or with respect to absolute 0.
       * @return {degrees} - The final state of the starting angle of the chart.
       *
       * @example
       * // Render a pie 2d chart and rotate the chart by 90 degrees on click of a button
       * FusionCharts.ready(function () {
       *     var chart = new FusionCharts({
       *         type: "pie2d",
       *         renderAt: "chart-container",
       *         dataSource: "data.json",
       *         dataFormat: "jsonurl"
       *     }).render();
       *
       *     // Assign the functionality of rotating the chart by 90 degrees when clicked on
       *     // a button (with an id rotate-chart).
       *     document.getElementById("rotate-chart").onclick = function () {
       *         chart.startingAngle(90, true);
       *     };
       * });
       */
      startingAngle: function startingAngle(angle, relative, callback) {
        var chart = this.apiInstance,
            asyncRender = chart.chartInstance.args.asyncRender,
            output;

        if (callback || asyncRender) {
          chart.addJob('eiMethods-start-angle', function () {
            output = chart._startingAngle(angle, relative);
            if (typeof callback === 'function') {
              callback(output);
            }
          }, _lib.priorityList.postRender);
        } else {
          return chart._startingAngle(angle, relative);
        }
      }
    };
    return _this;
  }

  Pie2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _GaugeBase.prototype.__setDefaultConfig && _GaugeBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.plotborderthickness = 1;
    config.alphaanimation = 0;
    config.singletonPlaceValue = true;
    config.usedataplotcolorforlabels = 0;
    config.enableslicing = _lib.ONESTRING;
    config.skipCanvasDrawing = true;
  };
  /**
   * function to  create dataset.
   * assign dataset to chart.
   **/


  Pie2D.prototype._createDatasets = function _createDatasets() {
    var iapi = this,
        jsonData = iapi.jsonData,
        DSClass,
        datasetJSON = {};
    datasetJSON.data = jsonData.data;
    iapi.config.categories = datasetJSON.data;
    if (!(datasetJSON.data && datasetJSON.data.length !== 0)) {
      iapi.setChartMessage();
      return;
    }
    DSClass = iapi.getDSdef();
    (0, _lib.datasetFactory)(iapi, DSClass, 'dataset', 1, [datasetJSON]);
  };

  Pie2D.prototype._spaceManager = function _spaceManager() {
    var chart = this,
        chartConfig = chart.config,
        dataSet = chart.getChildren('dataset')[0],
        data = dataSet.components.data,
        conf = dataSet.config,
        legend = chart.getFromEnv('legend'),
        colorM = chart.getFromEnv('color-manager'),
        SmartLabel = chart.getFromEnv('smartLabel'),
        textWidthArr = [],
        length = conf.dataLabelCounter,
        labelMaxW = 0,
        fcJSONChart = chart.jsonData.chart,
        manageLabelOverflow = (0, _lib.pluckNumber)(fcJSONChart.managelabeloverflow, 0),
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        slicingDistance = !conf.preSliced && chartConfig.allPlotSliceEnabled === _lib.ZEROSTRING && (fcJSONChart.showlegend !== _lib.ONESTRING || fcJSONChart.interactivelegend === _lib.ZEROSTRING) ? 0 : mathAbs((0, _lib.pluckNumber)(userGivenSlicingDist, 20)),
        pieRadius = (0, _lib.pluckNumber)(fcJSONChart.pieradius, 0),
        enableSmartLabels = (0, _lib.pluckNumber)(fcJSONChart.enablesmartlabels, fcJSONChart.enablesmartlabel, 1),
        skipOverlapLabels = enableSmartLabels ? (0, _lib.pluckNumber)(fcJSONChart.skipoverlaplabels, fcJSONChart.skipoverlaplabel, 1) : 0,
        isSmartLineSlanted = (0, _lib.pluckNumber)(fcJSONChart.issmartlineslanted, 1),
        labelDistance = length ? (0, _lib.pluckNumber)(fcJSONChart.labeldistance, fcJSONChart.nametbdistance, 5) : slicingDistance,
        smartLabelClearance = (0, _lib.pluckNumber)(fcJSONChart.smartlabelclearance, 5),
        width = chartConfig.width,
        height = chartConfig.height,
        actionBarHeight = (chart._manageActionBarSpace(height * 0.225) || {}).bottom,
        chartWorkingWidth = width - (chartConfig.marginRight + chartConfig.marginLeft),
        chartWorkingHeight = height - (chartConfig.marginTop + chartConfig.marginBottom) - (actionBarHeight ? actionBarHeight + chartConfig.marginBottom : 0),
        minOfWH = mathMin(chartWorkingHeight, chartWorkingWidth),
        smartLineColor = (0, _lib.pluck)(fcJSONChart.smartlinecolor, colorM.getColor('plotFillColor')),
        smartLineAlpha = (0, _lib.pluckNumber)(fcJSONChart.smartlinealpha, 100),
        smartLineThickness = (0, _lib.pluckNumber)(fcJSONChart.smartlinethickness, 0.7),
        dataLabelOptions = conf.dataLabelOptions = dataSet._parseDataLabelOptions(),
        style = dataLabelOptions.style,
        lineHeight = length ? (0, _lib.pluckNumber)(parseInt(style.lineHeight, 10), 12) : 0,
        // 2px padding
    pieMinRadius = pieRadius === 0 ? minOfWH * 0.15 : pieRadius,
        pieMinDia = 2 * pieMinRadius,
        legendSpace = {
      bottom: 0,
      right: 0
    },
        captionSpace,
        pieYScale = conf.pieYScale,
        pieSliceDepth = conf.pieSliceDepth,
        textObj,
        avaiableMaxpieSliceDepth,
        totalSpaceReq;
    // Old code for placeValuesInside
    // placeLabelsInside = pluckNumber ((FCchartName === 'doughnut2d') ? 0 : fcJSONChart.placevaluesinside),

    dataLabelOptions.connectorWidth = smartLineThickness;
    dataLabelOptions.connectorPadding = (0, _lib.pluckNumber)(fcJSONChart.connectorpadding, 5);
    dataLabelOptions.connectorColor = convertColor(smartLineColor, smartLineAlpha);

    // If smart label is on and there is a label defined only then modify the label distance
    if (length) {
      if (enableSmartLabels) {
        labelDistance = smartLabelClearance;
      }
      labelDistance += slicingDistance;
    }
    // Include label
    totalSpaceReq = pieMinDia + (lineHeight + labelDistance) * 2;

    // Provide at least single line height space for caption.
    // a space manager that manages the space for the tools as well as the captions.
    captionSpace = chart._manageChartMenuBar(totalSpaceReq < chartWorkingHeight ? chartWorkingHeight - totalSpaceReq : chartWorkingHeight / 2);
    chartWorkingHeight -= (captionSpace.top || 0) + (captionSpace.bottom || 0);

    if (conf.showLegend) {
      chart.hasLegend = true;
      if ((0, _lib.pluck)(fcJSONChart.legendposition, _lib.POSITION_BOTTOM).toLowerCase() !== _lib.POSITION_RIGHT) {
        legendSpace = legend._manageLegendPosition(chartWorkingHeight / 2);
        chartWorkingHeight -= legendSpace.bottom;
      } else {
        legendSpace = legend._manageLegendPosition(chartWorkingHeight / 2);
        chartWorkingWidth -= legendSpace.right;
      }
    }
    chart._allocateSpace(legendSpace);
    // Now get the max width required for all display text
    // set the style
    SmartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    if (length !== 1) {
      // Fix for single data in Pie makes pie very small in size.
      for (; length--;) {
        SmartLabel.setStyle(data[length].config.style || chartConfig.dataLabelStyle);
        textWidthArr[length] = textObj = SmartLabel.getOriSize(data[length].config.displayValue);
        labelMaxW = mathMax(labelMaxW, textObj.width);
      }
    }
    // If redius not supplyed then auto calculate it
    if (pieRadius === 0) {
      pieMinRadius = chart._stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius);
    } else {
      conf.slicingDistance = slicingDistance;
      conf.pieMinRadius = pieMinRadius;
      dataLabelOptions.distance = labelDistance;
    }
    avaiableMaxpieSliceDepth = chartWorkingHeight - 2 * (pieMinRadius * pieYScale + lineHeight);
    conf.managedPieSliceDepth = pieSliceDepth > avaiableMaxpieSliceDepth ? pieSliceDepth - avaiableMaxpieSliceDepth : conf.pieSliceDepth;
    dataLabelOptions.isSmartLineSlanted = isSmartLineSlanted;
    dataLabelOptions.enableSmartLabels = enableSmartLabels;
    dataLabelOptions.skipOverlapLabels = skipOverlapLabels;
    dataLabelOptions.manageLabelOverflow = manageLabelOverflow;
  };
  // manages the spaces when no radius is given.


  Pie2D.prototype._stubRadius = function _stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius) {
    var chart = this,
        dataSet = chart.getChildren('dataset')[0],
        conf = dataSet.config,
        fcJSONChart = chart.jsonData.chart,
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        dataLabelOptions = conf.dataLabelOptions || (conf.dataLabelOptions = dataSet._parseDataLabelOptions()),
        availableRadius = 0,

    // Slicing distance can not be less then the MINSLICINGDIST (10)
    MINSLICINGDIST = 10,
        shortFall;
    availableRadius = mathMin(chartWorkingWidth / 2 - labelMaxW - slicingDistance, chartWorkingHeight / 2 - lineHeight) - labelDistance;
    if (availableRadius >= pieMinRadius) {
      // there has space for min width
      pieMinRadius = availableRadius;
    } else if (!userGivenSlicingDist) {
      /** @todo smartyfy Labels */
      // If slicing distance is not given by the user, adjust slicing distance based on pie radius.
      shortFall = pieMinRadius - availableRadius;
      // Now reduce the pie slicing distance, but restrict the minimum slicing distance to 10 pixels.
      slicingDistance = labelDistance = mathMax(mathMin(labelDistance - shortFall, slicingDistance), MINSLICINGDIST);
    }
    conf.slicingDistance = slicingDistance;
    conf.pieMinRadius = pieMinRadius;
    dataLabelOptions.distance = labelDistance;

    return pieMinRadius;
  };

  Pie2D.prototype._startingAngle = function _startingAngle(angle, relative) {
    var ang,
        chart = this,
        dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,

    // Angle is differently handled in Pie2D and Pie3D. So, angles is converted
    // accordingly to the same base. Its radian in 2D while in degrees in 3D.
    // Moreover, sense of positive angle is opposite in the two.
    currentAngle = (ang = seriesData.startAngle) * -rad2deg + (-1 * ang < 0 ? 360 : 0);
    if (!isNaN(angle)) {
      if (!(seriesData.singletonCase || seriesData.isRotating)) {
        angle += relative ? currentAngle : 0;
        seriesData.startAngle = -angle * deg2rad;
        dataSet._rotate(angle);
        currentAngle = angle;
      } else {
        currentAngle = seriesData.startAngle;
      }
    }
    // Angle normalised in the range of [0, 360]
    return mathRound(((currentAngle %= 360) + (currentAngle < 0 ? 360 : 0)) * 100) / 100;
  };

  Pie2D.prototype.getDSdef = function getDSdef() {
    return _pie2d2['default'];
  };

  return Pie2D;
}(_fusioncharts2['default']);

exports['default'] = Pie2D;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(147);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _pie3d = __webpack_require__(220);

var _pie3d2 = _interopRequireDefault(_pie3d);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathPI = math.PI;

var Pie3D = function (_Pie2D) {
  _inherits(Pie3D, _Pie2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pie3D.getName = function getName() {
    return 'Pie3D';
  };

  function Pie3D() {
    _classCallCheck(this, Pie3D);

    var _this = _possibleConstructorReturn(this, _Pie2D.call(this));

    _this.defaultDatasetType = 'Pie3D';
    _this.is3D = true;
    _this.friendlyName = '3D Pie Chart';
    // this.fireGroupEvent = true;
    _this.defaultPlotShadow = 0;
    return _this;
  }

  Pie3D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2D.prototype.__setDefaultConfig && _Pie2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.plotborderthickness = 0.1;
    config.alphaanimation = 0;
  };

  // Pie2D (base) has defaultPlotShadow, but 3d does not.


  Pie3D.prototype.animate = function animate() {
    var i,
        point,
        graphic,
        pointGraphics,
        pointConfig,
        element,
        args,
        up,
        start,
        end,
        chart = this,
        chartComponents = chart.components,
        dataSet = chartComponents.dataset[0],
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        plotItems = dataSetComponents.data,
        len = plotItems.length,
        alphaAnim = dataSetConfig.alphaAnimation,
        animationObj = chart.get('config', 'animationObj'),
        animationDuration = animationObj.duration || 0,
        mainElm = animationObj.dummyObj,
        animObj = animationObj.animObj,
        animType = animationObj.animType;

    if (!alphaAnim) {
      for (i = 0; i < len; i++) {
        point = plotItems[i];
        pointGraphics = point.graphics;
        pointConfig = point.config;
        args = pointConfig.shapeArgs;
        up = 2 * mathPI;
        element = pointGraphics.element;

        // start values
        if (element) {
          element.attr({
            sAngle: up,
            eAngle: up
          });

          start = args.sAngle;
          end = args.eAngle;

          /* Raphael animation do not support start and end attributes.
           * Since the attribute setting for Pie3D goes through attrFN
           * method of Pie3DManager, we can safely use some unused
           * attributes for pie3D to pass through Raphael animation module
           * and trap the attributes to convert to start and end in attrFN */
          graphic.animateWith(mainElm, animObj, {
            cx: start - up,
            cy: end - up
          }, animationDuration, animType);
        }
      }
    }
  };
  // manages the spaces when no radius is given.


  Pie3D.prototype._stubRadius = function _stubRadius(chartWorkingWidth, labelMaxW, chartWorkingHeight, labelDistance, slicingDistance, lineHeight, pieMinRadius) {
    var chart = this,
        dataSet = chart.getChildren('dataset')[0],
        conf = dataSet.config,
        fcJSONChart = dataSet.config,
        userGivenSlicingDist = (0, _lib.pluckNumber)(fcJSONChart.slicingdistance),
        dataLabelOptions = conf.dataLabelOptions || (conf.dataLabelOptions = dataSet._parseDataLabelOptions()),
        availableRadius = 0,

    // Slicing distance can not be less then the MINSLICINGDIST (10)
    MINSLICINGDIST = 10,
        pieYScale = conf.pieYScale,
        pieSliceDepth = conf.pieSliceDepth,
        shortFall;
    chartWorkingHeight -= pieSliceDepth;
    availableRadius = mathMin(chartWorkingWidth / 2 - labelMaxW - slicingDistance, (chartWorkingHeight / 2 - lineHeight) / pieYScale) - labelDistance;

    if (availableRadius >= pieMinRadius) {
      // there has space for min width
      pieMinRadius = availableRadius;
    } else if (!userGivenSlicingDist) {
      /** @todo smartyfy Labels */
      // If slicing distance is not given by the user, adjust slicing distance based on pie radius.
      shortFall = pieMinRadius - availableRadius;
      // Now reduce the pie slicing distance, but restrict the minimum slicing distance to 10 pixels.
      slicingDistance = labelDistance = mathMax(mathMin(labelDistance - shortFall, slicingDistance), MINSLICINGDIST);
    }
    conf.slicingDistance = slicingDistance;
    conf.pieMinRadius = pieMinRadius;
    dataLabelOptions.distance = labelDistance;

    return pieMinRadius;
  };

  Pie3D.prototype._startingAngle = function _startingAngle(angle, relative) {
    var ang,
        chart = this,
        dataSet = chart.components.dataset[0],
        seriesData = dataSet.config,

    // Angle is differently handled in Pie2D and Pie3D. So, angles is converted
    // accordingly to the same base. Its radian in 2D while in degrees in 3D.
    // Moreover, sense of positive angle is opposite in the two.
    currentAngle = (ang = seriesData.startAngle) + (ang < 0 ? 360 : 0);

    if (!isNaN(angle)) {
      if (!(seriesData.singletonCase || seriesData.isRotating)) {
        angle += relative ? currentAngle : 0;
        chart._rotate(angle);
        currentAngle = angle;
      }
    }
    // Angle normalised in the range of [0, 360]
    return mathRound(((currentAngle %= 360) + (currentAngle < 0 ? 360 : 0)) * 100) / 100;
  };

  Pie3D.prototype.getDSdef = function getDSdef() {
    return _pie3d2['default'];
  };

  return Pie3D;
}(_fusioncharts2['default']);

exports['default'] = Pie3D;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(9);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(10);

var _symbol2 = _interopRequireDefault(_symbol);

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _typeof = typeof _symbol2['default'] === "function" && typeof _iterator2['default'] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2['default'] === "function" && obj.constructor === _symbol2['default'] && obj !== _symbol2['default'].prototype ? "symbol" : typeof obj; };

var _pie2d = __webpack_require__(68);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _lib = __webpack_require__(5);

var _redraphael = __webpack_require__(17);

var _redraphael2 = _interopRequireDefault(_redraphael);

var _eventApi = __webpack_require__(7);

var _componentInterface = __webpack_require__(6);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _doughnut2d = __webpack_require__(221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var win = window,
    UNDEF = void 0,
    HIDDEN = 'hidden',
    docMode8 = window.document.documentMode === 8,
    VISIBLE = docMode8 ? 'visible' : '',
    COMMASTRING = ',',
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',
    EVENTARGS = 'eventArgs',
    GROUPID = 'groupId',
    POINTER = 'pointer',
    elementStr = _lib.preDefStr.elementStr,
    M = 'M',
    L = 'L',
    V = 'v',
    A = 'A',
    Z = 'Z',
    math = Math,
    mathMax = math.max,
    mathMin = math.min,
    mathAbs = math.abs,
    mathCeil = math.ceil,
    mathSin = math.sin,
    mathATan2 = math.atan2,
    mathCos = math.cos,
    mathFloor = math.floor,
    mathRound = math.round,
    pi = math.PI,
    pi2 = 2 * pi,
    piBy2 = pi / 2,
    pi3By2 = pi + piBy2,
    getAbsScaleAngle = function getAbsScaleAngle(start, end) {
  return (start > end ? pi2 : 0) + end - start;
},
    getDarkColor = _lib.graphics.getDarkColor,
    getLightColor = _lib.graphics.getLightColor,
    convertColor = _lib.graphics.convertColor,
    map = function map(arr, fn) {
  var results = [],
      i = 0,
      len = arr.length;

  for (; i < len; i++) {
    results[i] = fn.call(arr[i], arr[i], i, arr);
  }
  return results;
},

/* Helper function */
normalizeAngle = function normalizeAngle(angle, inDegrees) {
  var fullCycle = inDegrees ? 360 : pi2;
  angle = (angle || 0) % fullCycle;
  return angle < 0 ? fullCycle + angle : angle;
},
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},
    isObject = function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
},
    isString = function isString(s) {
  return typeof s === 'string';
},
    pInt = function pInt(s, mag) {
  return parseInt(s, mag || 10);
},
    pie3DCacheColorStore = {
  lighting3D: {},
  lighting2D: {}
},
    getClickArcTangent = function getClickArcTangent(x, y, center, ref, pieYScale) {
  return mathATan2((y - center[1] - ref.top) / pieYScale, x - center[0] - ref.left);
},
    plotRollOver = function plotRollOver(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      dataSetComponents = dataSet.components,
      data = dataSetComponents.data[index],
      setGraphics = data.graphics,
      setConfig = data.config,
      element = setGraphics.element,
      hoverEffects = setConfig.hoverEffects;
  if (!dataSetConfig.isRotating) {
    _lib.plotEventHandler.call(element, chart, e, ROLLOVER);
    hoverEffects.enabled && element.attr(hoverEffects);
  }
  chartConfig.isHovered = true;
},
    plotRollOut = function plotRollOut(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      dataSetComponents = dataSet.components,
      data = dataSetComponents.data[index],
      setGraphics = data.graphics,
      setConfig = data.config,
      element = setGraphics.element;

  if (!dataSetConfig.isRotating) {
    _lib.plotEventHandler.call(element, chart, e, ROLLOUT);
    element.attr({
      color: setConfig.color.color.split(',')[0],
      alpha: setConfig._3dAlpha,
      borderWidth: setConfig.borderWidth,
      borderColor: setConfig.borderColor
    });
  }
  chartConfig.isHovered = false;
},
    plotDragStart = function plotDragStart(evt) {
  var plotItem = this.data('plotItem'),
      chart = plotItem.chart,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      angle,
      x = evt.data[0],
      y = evt.data[1];

  dataSetConfig.isRightClicked = !!(!_lib.hasTouch && evt.button !== 0 && evt.button !== 1);
  if (!dataSetConfig.enableRotation || dataSetConfig.isRightClicked) {
    return;
  }

  dataSetConfig.isRotating = false;
  angle = getClickArcTangent.call(evt, x, y, dataSetConfig.center, dataSetConfig.chartPosition = (0, _lib.getPosition)(dataSet.getFromEnv('chart-container')), dataSetConfig.pieYScale);
  dataSetConfig.dragStartAngle = angle;
  dataSetConfig._lastAngle = -dataSetConfig.startAngle;
  dataSetConfig.startingAngleOnDragStart = dataSetConfig.startAngle;
},
    plotDragEnd = function plotDragEnd(e) {
  var plotItem = this.data('plotItem'),
      index = plotItem.index,
      chart = plotItem.chart,
      chartConfig = chart.config,
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      Pie3DManager = dataSet.getFromEnv('pie3DManager'),
      startingAng = dataSetConfig.startAngle;
  // save state
  /* reflowUpdate = {
      hcJSON: {
          series: [ {
              startAngle: startingAng
          }]
      }
  }; */
  /* if (!chart.disposed) {
      extend2 (chart.logic.chartInstance.jsVars._reflowData,
                  reflowUpdate, true);
  } */

  if (dataSetConfig.isRightClicked) {
    return;
  }
  if (dataSetConfig.isRotating) {
    /* The events mouseup, dragend and click are raised in order. In order
      * to update the flag isRotating to false post click event, setTimeout
      * called, to take immediate effect, is programmed to update the flag.
      * Thus, the flag gets updated post the series of events, in effect.
      * NB: Click event is subscribed conditionally.
      */
    setTimeout(function () {
      dataSetConfig.isRotating = false;
    }, 0);
    /**
     * @event FusionCharts#rotationEnd
     * @group chart:pie-slice
     *
     * @param { number} startingAngle - The initial angle. (desc)
     * @param { number} changeInAngle - It is the difference between the starting angle and the starting
     * angle on the drag start.
     */
    (0, _eventApi.triggerEvent)('rotationEnd', chart.chartInstance, {
      startingAngle: normalizeAngle(startingAng, true),
      changeInAngle: startingAng - dataSetConfig.startingAngleOnDragStart
    });

    !chartConfig.isHovered && Pie3DManager.colorObjs[index] && Pie3DManager.onPlotHover(index, false);
  } else {
    _pie2d.plotGraphicClick.call(this, e);
  }
},
    plotDragMove = function plotDragMove(evt) {
  var plotItem = this.data('plotItem'),
      chart = plotItem.chart,
      evtData = evt.data,
      dx = evtData[0],
      dy = evtData[1],
      x = evtData[2],
      y = evtData[3],
      dataSet = chart.getChildren('dataset')[0],
      dataSetConfig = dataSet.config,
      angle,
      currentTime,
      deltaAngle,
      dummyObj = chart.get('config', 'animationObj').dummyObj;

  // Stop dummyobj animation if happening
  dummyObj && dummyObj.stop(undefined, true, true);

  if (isNaN(dx) || isNaN(dy) || !dataSetConfig.enableRotation || dataSetConfig.singletonCase || dataSetConfig.isRightClicked) {
    return;
  }

  angle = getClickArcTangent.call(evt, x, y, dataSetConfig.center, dataSetConfig.chartPosition, dataSetConfig.pieYScale);

  if (!dataSetConfig.isRotating) {
    dataSetConfig.dragStartAngle !== angle && (dataSetConfig.isRotating = true);
    /**
     * This event is fired when a pie or doughnut chart's rotation is triggered.
     *
     * @event FusionCharts#rotationStart
     * @group chart:pie-slice
     * @param { number} startingAngle - This indicates the angle from where rotation started.
     */
    (0, _eventApi.triggerEvent)('rotationStart', chart.chartInstance, { startingAngle: normalizeAngle(dataSetConfig.startAngle, true) });
  }

  deltaAngle = angle - dataSetConfig.dragStartAngle;

  dataSetConfig.dragStartAngle = angle;
  dataSetConfig.moveDuration = 0;

  dataSetConfig._lastAngle += deltaAngle * 180 / pi;
  currentTime = new Date().getTime();

  if (!dataSetConfig._lastTime || dataSetConfig._lastTime + dataSetConfig.timerThreshold < currentTime) {
    if (!dataSetConfig._lastTime) {
      dataSet._rotate();
    }
    dataSetConfig.timerId = setTimeout(function () {
      if (!chart.disposed || !chart.disposing) {
        dataSet._rotate();
      }
    }, dataSetConfig.timerThreshold);
    dataSetConfig._lastTime = currentTime;
  }
},
    elementZSortFn = function elementZSortFn(a, b) {
  var centerAngleDiff = a._conf.index - b._conf.index || a._conf.cIndex - b._conf.cIndex || a._conf.isStart - b._conf.isStart || a._conf.si - b._conf.si;
  // !centerAngleDiff && console.log("aaa");
  return centerAngleDiff;
},
    getStartIndex = function getStartIndex(array) {
  var l,
      i,
      startsAtFrontHalf,
      startIndex = array[0] && array[0]._conf.index,
      atFrontHalf,
      index;

  startsAtFrontHalf = startIndex <= pi;
  for (i = 1, l = array.length; i < l; i += 1) {
    index = array[i]._conf.index;
    atFrontHalf = index <= pi;
    if (atFrontHalf !== startsAtFrontHalf || index < startIndex) {
      return i;
    }
  }
  return 0;
},

/*
 * Pie Helper Functions.
 */
sortArrayByPoint = function sortArrayByPoint(a, b) {
  return a.point.value - b.point.value;
},
    sortArrayByAngle = function sortArrayByAngle(a, b) {
  return a.angle - b.angle;
},
    alignments = ['start', 'start', 'end', 'end'],
    alignCenter = 'middle',
    ySign = [-1, 1, 1, -1],
    xSign = [1, 1, -1, -1],
    attrKeyList = {
  // block following attribute
  stroke: true,
  strokeWidth: true,
  'stroke-width': true,
  dashstyle: true,
  'stroke-dasharray': true,
  translateX: true,
  translateY: true,
  'stroke-opacity': true,
  fill: true,
  'fill-opacity': true,
  opacity: true,
  // attribute that has direct effect
  transform: true,
  ishot: true,
  cursor: true,
  sAngle: true,
  eAngle: true,
  color: true,
  alpha: true,
  borderColor: true,
  borderAlpha: true,
  borderWidth: true,
  rolloverProps: true,
  showBorderEffect: true,
  positionIndex: true,
  cx: true,
  cy: true,
  radiusYFactor: true,
  r: true,
  innerR: true
},
    attrFN = function attrFN(hash, val) {
  var key,
      value,
      slice = this,
      confObject = slice._confObject,
      commonAttr = {},
      elements = confObject.elements,
      x,
      updateShape,
      updateColor,
      Pie3DManager = confObject.Pie3DManager,
      applyCommonAttr;

  // single key-value pair
  if (isString(hash) && defined(val)) {
    key = hash;
    hash = {};
    hash[key] = val;
  }

  // used as a getter: first argument is a string, second is undefined
  if (!hash || isString(hash)) {
    if (attrKeyList[hash]) {
      slice = confObject[hash];
    } else {
      slice = slice._attr(hash);
    }
    // setter
  } else {
    for (key in hash) {
      value = hash[key];

      // if belongs from the list then handle here
      if (attrKeyList[key]) {
        // store the att in confObject for further use
        confObject[key] = value;
        if (key === 'ishot' || key === 'cursor' || key === 'transform' || key === 'opacity' || key === 'fill-opacity') {
          commonAttr[key] = value;
          applyCommonAttr = true;
          /* jshint ignore:end */
        } else if (key === 'sAngle' || key === 'eAngle' || key === 'cx' || key === 'cy' || key === 'radiusYFactor' || key === 'r' || key === 'innerR') {
          updateShape = true;
        } else if (key === 'color' || key === 'alpha' || key === 'borderColor' || key === 'borderAlpha' || key === 'borderWidth') {
          updateColor = true;
        }
      } else {
        // else leve for the original attr
        slice._attr(key, value);
      }
    }

    // if paths need to be updated
    if (updateShape) {
      Pie3DManager._setSliceShape(confObject);
      // refreash the drawinh for proper z lavel for elements
      Pie3DManager.refreshDrawing();
    }
    // if colors need to be updated
    // If the shape got changed, then also cange the color
    if (updateColor || updateShape) {
      Pie3DManager._setSliceCosmetics(confObject);
    }
    // apply common attributes
    if (applyCommonAttr) {
      // other elements
      for (x in elements) {
        elements[x].attr(commonAttr);
      }
      // main element
      slice._attr(commonAttr);
    }
  }
  return slice;
},
    onFN = function onFN(eventType, handler) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].on(eventType, handler);
  }
  return slice._on(eventType, handler);
},
    onDragFN = function onDragFN(dragStart, dragMove, dragEnd) {
  var element,
      slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      navigator = win.navigator,
      ua = navigator.userAgent.toLowerCase(),
      isAndroid = ua.indexOf('android') > -1;
  for (element in elements) {
    if (isAndroid) {
      if (element === 'topBorder' || element === 'frontOuter' || element === 'startSlice' || element === 'endSlice') {
        elements[element].drag(dragStart, dragMove, dragEnd);
      }
    } else {
      elements[element].drag(dragStart, dragMove, dragEnd);
    }
  }
  return slice._drag(dragStart, dragMove, dragEnd);
},
    hideFN = function hideFN() {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].hide();
  }
  return slice._hide();
},
    showFN = function showFN() {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;

  for (element in elements) {
    elements[element].show();
  }
  return slice._show();
},
    destroyFN = function destroyFN() {
  var confObject = this._confObject,
      elements = confObject.elements,
      x;
  // other elements
  for (x in elements) {
    elements[x].destroy();
  }
  if (_lib.hasSVG) {
    // destory other element
    // TODO: Check whether this clip elements are not destroying from else where
    confObject.clipTop.destroy();
    confObject.clipOuterFront.destroy();
    confObject.clipOuterBack.destroy();
    if (confObject.clipOuterFront1) {
      confObject.clipOuterFront1.destroy();
    }
    if (confObject.clipInnerFront) {
      confObject.clipInnerFront.destroy();
    }
    if (confObject.clipInnerBack) {
      confObject.clipInnerBack.destroy();
    }
  }
  // main element
  return this._destroy();
},
    tooltipFN = function tooltipFN(tooltext) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;
  // other elements
  for (element in elements) {
    elements[element].tooltip(tooltext);
  }
  // main element
  return slice._tooltip(tooltext);
},
    dataFN = function dataFN(key, value) {
  var slice = this,
      confObject = slice._confObject,
      elements = confObject.elements,
      element;
  if (value === UNDEF) {
    return slice._data(key);
  } else {
    // other elements
    for (element in elements) {
      elements[element].data(key, value);
    }
    // main element
    return slice._data(key, value);
  }
},
    si = 0; // slice index

var Pie3DDataset = function (_Pie2DDataset) {
  _inherits(Pie3DDataset, _Pie2DDataset);

  function Pie3DDataset() {
    _classCallCheck(this, Pie3DDataset);

    var _this = _possibleConstructorReturn(this, _Pie2DDataset.call(this));

    _this.type = 'pie3d';
    return _this;
  }

  Pie3DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2DDataset.prototype.__setDefaultConfig && _Pie2DDataset.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.setBorderWidth = UNDEF;
    config.alphaanimation = 0;
    config.showBorderEffect = UNDEF;
  };

  Pie3DDataset.prototype.placeDataLabels = function placeDataLabels(isRotating, anim) {
    var attr,
        prevTextPos,
        dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        isSingleStepAnim = chartConfig.isSingleStepAnim,
        plotOptions = dataSet.config,
        plotItems = dataSet.components.data,
        piePlotOptions = plotOptions.piePlotOptions,
        canvasLeft = chartConfig.canvasLeft,
        canvasTop = chartConfig.canvasTop,
        canvasWidth = chartConfig.canvasWidth,
        cx = canvasLeft + chartConfig.canvasWidth * 0.5,
        cy = canvasTop + chartConfig.canvasHeight * 0.5,
        smartLabel = chart.getFromEnv('smartLabel'),
        dataLabelsOptions = plotOptions.dataLabelOptions,
        style = dataLabelsOptions.style,
        lineHeight = (0, _lib.pluckNumber)(mathCeil(parseFloat(style.lineHeight)), 12),
        placeInside = (0, _lib.getFirstValue)(dataLabelsOptions.placeInside, false),
        skipOverlapLabels = dataLabelsOptions.skipOverlapLabels,
        manageLabelOverflow = dataLabelsOptions.manageLabelOverflow,
        connectorPadding = dataLabelsOptions.connectorPadding,
        distanceOption = dataLabelsOptions.distance,
        connectorWidth = dataLabelsOptions.connectorWidth,
        remainingHeight,

    // divide the points into quarters for anti collision
    quarters = [[], // top right
    [], // bottom right
    [], // bottom left
    [] // top left
    ],

    // todo remove the dupliace variables.
    plotLeft = canvasLeft,
        plotTop = canvasTop,
        plotWidth = canvasWidth,
        labelFontSize = parseInt(style.fontSize, 10),
        labelHeight = labelFontSize,
        halfLabelHeight = labelHeight / 2,
        xDisplacement = [connectorPadding, connectorPadding, -connectorPadding, -connectorPadding],
        isSmartLineSlanted = dataLabelsOptions.isSmartLineSlanted,
        align,
        i,
        labelWidth,
        j,
        oriY,
        maxYmayHave,
        spaceRequired,
        length,
        k,
        sliced,
        x1,
        x2,
        x3,
        x4,
        y1,
        y2,
        y3,
        points,
        point,
        angle,
        excess,
        excessArr,
        dataLabel,
        quarter,
        transX,
        transY,
        smartLabelObj,
        pointConfig,
        pointGraphics,
        connector,
        connectorPath,
        outside = distanceOption > 0,
        center = plotOptions.center || (plotOptions.center = [cx, cy, piePlotOptions.size, piePlotOptions.innerSize || 0]),
        centerY = center[1],
        centerX = center[0],
        radius = center[2],
        radiusY = center[4],
        dataLabelsRadius = plotOptions.labelsRadius,
        dataLabelsRadiusY = mathRound(plotOptions.labelsRadiusY * 100) / 100,
        maxLabels = plotOptions.maxLabels,
        enableSmartLabels = plotOptions.enableSmartLabels,
        labelQuardentHeight,
        maxQuardentLabel,
        pieSliceDepthHalf = plotOptions.pieSliceDepth / 2,
        animationObj = chart.get('config', 'animationObj'),
        animationDuration = isRotating ? 0 : animationObj.duration,
        mainElm = animationObj.dummyObj,
        animObj = animationObj.animObj,
        animType = animationObj.animType,
        _textCss,
        _textAttrs,
        paper = chart.getFromEnv('paper'),
        applyAttrFn = function applyAttrFn(attr) {
      this.attr(attr);
    },
        dataLabelContainer = dataSet.getContainer('label-group');

    smartLabel.useEllipsesOnOverflow(chartConfig.useEllipsesWhenOverflow);
    // save the world if there is no labels to be placed.
    if (!plotOptions.dataLabelCounter) {
      return;
    }
    if (!isRotating) {
      // do not set the style every time
      // Do it for first time
      smartLabel.setStyle(style);
    }
    // arrange points for detection collision
    // Creates an array of quarter containing labels of each quarter
    // if there has only one label the draw it inside
    if (plotItems.length == 1) {
      point = plotItems[0];
      pointGraphics = point.graphics;
      pointConfig = point.config;
      _textAttrs = pointConfig._textAttrs;
      _textCss = pointConfig._textCss;
      dataLabel = pointGraphics.label;
      connector = pointGraphics.connector;
      pointConfig.slicedTranslation = [plotLeft, plotTop];
      if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
        _textAttrs.visibility = VISIBLE;
        _textAttrs['text-anchor'] = alignCenter;
        _textAttrs.x = centerX;
        _textAttrs.y = centerY + halfLabelHeight - 2;

        _textAttrs._x = centerX;
      }
      if (!dataLabel) {
        dataLabel = pointGraphics.label = paper.text(_textAttrs, _textCss, dataLabelContainer).on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).hover(plotRollOver, plotRollOut);
      } else {
        dataLabel.animateWith(mainElm, animObj, _textAttrs, animationDuration, animType);
      }
      if (_textAttrs._x) {
        dataLabel.x = _textAttrs._x;
        delete _textAttrs.x;
      }
      dataLabel.data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);

      if (_textAttrs.visibility === VISIBLE) {
        dataLabel.show();
      }

      if (connector) {
        connector.hide();
      }
    } else {
      if (placeInside) {
        (0, _lib.fcEach)(plotItems, function (point) {
          var slicedTranslation, transX, transY;

          pointGraphics = point.graphics;
          pointConfig = point.config;
          _textAttrs = pointConfig._textAttrs;
          dataLabel = pointGraphics.label;
          if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
            angle = pointConfig.angle;
            y3 = centerY + center[6] * mathSin(angle) + halfLabelHeight - 2;
            x3 = centerX + center[5] * mathCos(angle);
            _textAttrs._x = x3;
            _textAttrs._y = y3;
            if (pointConfig.sliced) {
              slicedTranslation = point.slicedTranslation;
              transX = slicedTranslation[0] - plotLeft;
              transY = slicedTranslation[1] - plotTop;
              x3 = x3 + transX;
              y3 = y3 + transY;
            }
            _textAttrs.visibility = VISIBLE;
            _textAttrs.align = alignCenter;
            _textAttrs.x = x3;
            _textAttrs.y = y3;
          }

          if (!dataLabel) {
            dataLabel = pointGraphics.label = paper.text(_textAttrs, _textCss, dataLabelContainer).on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).hover(plotRollOver, plotRollOut);
          } else {
            dataLabel.animateWith(mainElm, animObj, _textAttrs, animationDuration, animType);
          }

          dataLabel.data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);

          if (_textAttrs.visibility === VISIBLE) {
            dataLabel.show();
          }

          dataLabel.x = _textAttrs._x;
          dataLabel._x = _textAttrs._x;
          dataLabel._y = _textAttrs._y;
        });
      } else {
        // outside
        (0, _lib.fcEach)(plotItems, function (point) {
          pointGraphics = point.graphics;
          pointConfig = point.config;
          _textCss = pointConfig._textCss;
          _textAttrs = pointConfig._textAttrs;
          if (!(_textAttrs.text = pointConfig.displayValue)) {
            return;
          }
          pointGraphics = point.graphics;
          if (pointConfig.y !== null && pointConfig.y !== UNDEF) {
            dataLabel = pointGraphics.label;
            connector = pointGraphics.connector;
            connector && connector.show();
            dataLabel && dataLabel.show();
          }

          dataLabel = pointGraphics.label;

          angle = pointConfig.angle;

          if (angle < 0) {
            angle = pi2 + angle;
          }
          // Calculate top right quarter labels
          if (angle >= 0 && angle < piBy2) {
            quarter = 1;
          } else
            // Calculate bottom right quarter labels
            if (angle < pi) {
              quarter = 2;
            } else
              // Calculate bottom left quarter labels
              if (angle < pi3By2) {
                quarter = 3;
              } else {
                // Calculate bottom left quarter labels
                quarter = 0;
              }
          // Now put labels according to each quarter
          quarters[quarter].push({
            point: point,
            angle: angle
          });

          /* dataLabel = pointGraphics.label;
          if (dataLabel) {
              angle = pointConfig.angle;
               if (angle < 0) {
                  angle = pi2 + angle;
              }
              // Calculate top right quarter labels
              if (angle >= 0 && angle < piBy2) {
                  quarter = 1;
              } else
              // Calculate bottom right quarter labels
              if (angle < pi) {
                  quarter = 2;
              } else
              // Calculate bottom left quarter labels
              if (angle < (pi3By2)) {
                  quarter = 3;
              }
              // Calculate bottom left quarter labels
              else {
                  quarter = 0;
              }
              // Now put labels according to each quarter
              quarters[quarter].push ( {
                  point : point,
                  angle : angle
              });
          } */
        });

        i = 4;
        // if excess then remove the low value slice first
        while (i--) {
          if (skipOverlapLabels) {
            // Find labels can fit into the quarters or not
            excess = quarters[i].length - maxLabels;
            if (excess > 0) {
              quarters[i].sort(sortArrayByPoint); // sort by point.y
              // remove extra data form the array
              // which labels can not be fitted into the quarters
              excessArr = quarters[i].splice(0, excess);
              // hide all removed labels
              for (j = 0, length = excessArr.length; j < length; j += 1) {
                point = excessArr[j].point;
                pointGraphics = point.graphics;
                if (pointGraphics.label) {
                  pointGraphics.label.attr('visibility', HIDDEN);
                }
                if (pointGraphics.connector) {
                  pointGraphics.connector.attr({
                    visibility: HIDDEN
                  });
                }
              }
            }
          }
          // now we sort the data labels by its label angle
          quarters[i].sort(sortArrayByAngle);
        }

        maxQuardentLabel = mathMax(quarters[0].length, quarters[1].length, quarters[2].length, quarters[3].length);
        labelQuardentHeight = mathMax(mathMin(maxQuardentLabel, maxLabels) * labelHeight, dataLabelsRadiusY + labelHeight);

        // reverse 1st and 3rd quardent points
        quarters[1].reverse();
        quarters[3].reverse();
        smartLabel.setStyle(style);
        k = 4;
        while (k--) {
          points = quarters[k];
          length = points.length;

          if (!skipOverlapLabels) {
            if (length > maxLabels) {
              labelHeight = labelQuardentHeight / length;
            } else {
              labelHeight = labelFontSize;
            }
            halfLabelHeight = labelHeight / 2;
          }

          // 1st pass
          // place all labels at 1st quarter

          // calculate the total available space to put labels
          spaceRequired = length * labelHeight;
          // calculate the remaining height
          remainingHeight = labelQuardentHeight;
          // place all child point
          for (i = 0; i < length; i += 1, spaceRequired -= labelHeight) {
            // Get the y position of the label (radius where data label is to draw)
            oriY = mathAbs(labelQuardentHeight * mathSin(points[i].angle));
            if (remainingHeight < oriY) {
              oriY = remainingHeight;
            } else if (oriY < spaceRequired) {
              oriY = spaceRequired;
            }
            remainingHeight = (points[i].oriY = oriY) - labelHeight;
          }

          // 2nd pass (reverse)
          align = alignments[k];
          // place all labels at 1st quarter
          maxYmayHave = labelQuardentHeight - (length - 1) * labelHeight;
          remainingHeight = 0;

          // place all child point
          for (i = points.length - 1; i >= 0; i -= 1, maxYmayHave += labelHeight) {
            point = points[i].point;
            pointGraphics = point.graphics;
            pointConfig = point.config;
            _textAttrs = pointConfig._textAttrs;
            _textCss = pointConfig._textCss;

            if (pointConfig.y === null || !_textAttrs.text) {
              continue;
            }
            angle = points[i].angle;
            sliced = pointConfig.sliced;
            dataLabel = pointGraphics.label;

            oriY = mathAbs(labelQuardentHeight * mathSin(angle));

            if (oriY < remainingHeight) {
              oriY = remainingHeight;
            } else if (oriY > maxYmayHave) {
              oriY = maxYmayHave;
            }

            remainingHeight = oriY + labelHeight;

            y1 = (oriY + points[i].oriY) / 2;
            x1 = centerX + xSign[k] * dataLabelsRadius * mathCos(math.asin(y1 / labelQuardentHeight));

            y1 *= ySign[k];
            y1 += centerY;

            y2 = centerY + radiusY * mathSin(angle);
            x2 = centerX + radius * mathCos(angle);

            // Relation: centerX <= connectorStartX <= connectorEndX (for right half and vice
            // versa for left half)
            (k < 2 && x1 < x2 || k > 1 && x1 > x2) && (x1 = x2);

            x3 = x1 + xDisplacement[k];
            y3 = y1 + halfLabelHeight - 2;
            x4 = x3 + xDisplacement[k];

            _textAttrs._x = x4;

            if (manageLabelOverflow) {
              labelWidth = k > 1 ? x4 - canvasLeft : canvasLeft + plotWidth - x4;
              smartLabel.setStyle(pointConfig.style);
              lineHeight = (0, _lib.pluckNumber)(mathCeil(parseFloat(pointConfig.style.lineHeight)), 12) + (mathCeil(parseFloat(pointConfig.style.border), 12) * 2 || 0);
              smartLabelObj = smartLabel.getSmartText(pointConfig.displayValue, labelWidth, lineHeight);
              _textAttrs.text = smartLabelObj.text;
              _textAttrs.tooltip = smartLabelObj.tooltext;
            }

            // shift the labels at front pieSliceDepthHalf
            if (angle < pi) {
              y1 += pieSliceDepthHalf;
              y2 += pieSliceDepthHalf;
              y3 += pieSliceDepthHalf;
            }
            _textAttrs._y = y3;
            // dataLabel.y = y3;
            if (sliced) {
              transX = pointConfig.transX;
              transY = pointConfig.transY;
              x3 = x3 + transX;
              x1 = x1 + transX;
              x2 = x2 + transX;
              y2 = y2 + transY;
              x4 = x4 + transX;
            }
            _textAttrs.visibility = VISIBLE;
            _textAttrs['text-anchor'] = align;
            prevTextPos = dataLabel && dataLabel.data('textPos');
            if (prevTextPos) {
              dataLabel.attr({
                x: prevTextPos.x,
                y: prevTextPos.y
              });
            }
            _textAttrs.x = x4;
            _textAttrs.y = y1;
            _textAttrs.opacity = 1;
            if (!isRotating && prevTextPos) {
              if (isSingleStepAnim) {
                anim.plot.data.push({
                  el: dataLabel,
                  attrs: {
                    x: _textAttrs.x,
                    y: _textAttrs.y
                  },
                  callback: applyAttrFn.bind(dataLabel, _textAttrs)
                });
              } else {
                dataLabel.attr(_textAttrs);
              }
            } else {
              if (!dataLabel) {
                dataLabel = pointGraphics.label = paper.text(_textAttrs, _textCss, dataLabelContainer).on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).hover(plotRollOver, plotRollOut);
              } else {
                _textAttrs && dataLabel.attr(_textAttrs);
              }
            }
            dataLabel.data('textPos', {
              x: x4,
              y: y1
            }).data('plotItem', _textAttrs.plotItem).data(EVENTARGS, _textAttrs.eventArgs);

            dataLabel.x = _textAttrs._x;
            // storing original x value
            // to use while slicing in (IE Issue original x get changed form animate)
            dataLabel._x = _textAttrs._x;
            dataLabel.y = _textAttrs._y;

            if (_textAttrs.tooltip) {
              dataLabel.tooltip(_textAttrs.tooltip);
              delete _textAttrs.tooltip;
            }
            // draw the connector
            // draw the connector
            if (outside && connectorWidth && enableSmartLabels) {
              connector = pointGraphics.connector;
              // if (!pointConfig.connectorPath) {
              //   isNewElem = true;
              // }
              pointConfig.connectorPath = connectorPath = [M, x2, y2, // base
              L, isSmartLineSlanted ? x1 : x2, y1, // first break, next to the label
              x3, y1 // end of the string at the label
              ];

              attr = {
                path: connectorPath,
                'stroke-width': connectorWidth,
                stroke: dataLabelsOptions.connectorColor || '#606060',
                opacity: 1,
                visibility: VISIBLE
              };
              if (connector) {
                if (isSingleStepAnim) {
                  anim.plot.data.push({
                    el: connector,
                    attrs: attr,
                    callback: applyAttrFn.bind(connector, attr)
                  });
                } else {
                  connector.attr(attr);
                }
              }
            }
          }
        }
      }
    }
  };

  Pie3DDataset.prototype._parsePie3DOptions = function _parsePie3DOptions() {
    var dataSet = this,
        conf = dataSet.config;
    return {
      size: 2 * conf.pieMinRadius,
      slicedOffset: conf.slicingDistance,
      allowPointSelect: true,
      cursor: POINTER,
      innerSize: dataSet.type === 'pie3d' ? 0 : _doughnut2d._getInnerSize.call(dataSet)
    };
  };
  // Some border properties of PIE3D varies from that of its 2d counter part


  Pie3DDataset.prototype._parseBorderConfig = function _parseBorderConfig(setColor, setAlpha, dataJSON) {
    var dataSet = this,
        conf = dataSet.config,
        pieBorderColor = conf.pieBorderColor,
        chartAttr = dataSet.getFromEnv('chart-attrib'),

    // each slice border color
    setPlotBorderColor = (0, _lib.pluck)(dataJSON.bordercolor, pieBorderColor),

    // each slice border alpha
    setPlotBorderAlpha = (0, _lib.pluck)(dataJSON.borderalpha, chartAttr.plotborderalpha, chartAttr.pieborderalpha);

    setPlotBorderColor = (0, _lib.pluck)(setPlotBorderColor, getLightColor(setColor, 90)).split(COMMASTRING)[0];
    setPlotBorderAlpha = chartAttr.showplotborder == _lib.ZEROSTRING ? _lib.ZEROSTRING : (0, _lib.pluck)(setPlotBorderAlpha, setAlpha, '80');
    return {
      setPlotBorderColor: setPlotBorderColor,
      setPlotBorderAlpha: setPlotBorderAlpha
    };
  };
  // Initialising the pie3D manager class.


  Pie3DDataset.prototype._initPie3dManager = function _initPie3dManager() {
    var i,
        point,
        dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        precision = 1000,
        total = 0,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        dataLabelOptions = dataSetConfig.dataLabelOptions,
        pie3DOptions = dataSetConfig.pie3DOptions = dataSet._parsePie3DOptions(),
        startingAngle = (0, _lib.pluck)(dataSetConfig.startAngle, 0) % pi2,
        fontSize,
        managedPieSliceDepth = dataSetConfig.managedPieSliceDepth,
        slicedOffset = dataSetConfig.slicedOffset = pie3DOptions.slicedOffset,
        plotWidth = chartConfig.canvasWidth,
        plotHeight = chartConfig.canvasHeight,
        positions = [chartConfig.canvasLeft + plotWidth * 0.5, chartConfig.canvasTop + plotHeight * 0.5 - managedPieSliceDepth * 0.5],
        start,
        pointConfig,
        end,
        angle,
        lastEnd,
        maxEnd,
        data = dataSetComponents.data,
        fraction,
        smallestSize = mathMin(plotWidth, plotHeight),
        isPercent,
        radiusX,
        // the x component of the radius vector for a given point
    radiusY,
        labelDistance = dataLabelOptions.distance,
        pieYScale = dataSetConfig.pieYScale,
        slicedOffsetY = dataSetConfig.slicedOffsetY || (dataSetConfig.slicedOffsetY = slicedOffset * dataSetConfig.pieYScale),
        pie3DManager = dataSet.getFromEnv('pie3DManager');

    // get positions - either an integer or a percentage string must be given
    positions.push(2 * dataSetConfig.pieMinRadius, pie3DOptions.innerSize || 0);

    positions = map(positions, function (length, i) {
      isPercent = /%$/.test(length);
      return isPercent ?
      // i == 0: centerX, relative to width
      // i == 1: centerY, relative to height
      // i == 2: size, relative to smallestSize
      // i == 4: innerSize, relative to smallestSize
      [plotWidth, plotHeight - managedPieSliceDepth, smallestSize, smallestSize][i] * pInt(length) / 100 : length;
    });

    // convert all diameter into radius
    positions[2] /= 2;
    positions[3] /= 2;
    // Add the ry
    positions.push(positions[2] * pieYScale);
    // centerRadiusX
    positions.push((positions[2] + positions[3]) / 2);
    // centerRadiusY
    positions.push(positions[5] * pieYScale);

    // utility for getting the x value from a given y, used for anticollision logic in data labels
    dataSet.getX = function (y, left) {
      angle = math.asin((y - positions[1]) / (positions[2] + labelDistance));

      return positions[0] + (left ? -1 : 1) * (mathCos(angle) * (positions[2] + labelDistance));
    };

    // set center for later use
    dataSetConfig.center = positions;

    // get the total sum
    (0, _lib.fcEach)(data, function (point) {
      total += point.config.y;
    });

    dataSetConfig.labelsRadius = positions[2] + labelDistance;
    dataSetConfig.labelsRadiusY = dataSetConfig.labelsRadius * pieYScale;
    dataSetConfig.quadrantHeight = (plotHeight - managedPieSliceDepth) / 2;
    dataSetConfig.quadrantWidth = plotWidth / 2;

    lastEnd = startingAngle;

    lastEnd = mathRound(lastEnd * precision) / precision;
    maxEnd = lastEnd + pi2;

    fontSize = (0, _lib.pluckNumber)(parseInt(dataLabelOptions.style.fontSize, 10), 10) + 4; // 2px padding
    dataSetConfig.maxLabels = mathFloor(dataSetConfig.quadrantHeight / fontSize); // max labels per quarter
    dataSetConfig.labelFontSize = fontSize;
    dataSetConfig.connectorPadding = (0, _lib.pluckNumber)(dataLabelOptions.connectorPadding, 5);
    dataSetConfig.isSmartLineSlanted = (0, _lib.pluck)(dataLabelOptions.isSmartLineSlanted, true);
    dataSetConfig.connectorWidth = (0, _lib.pluckNumber)(dataLabelOptions.connectorWidth, 1);
    dataSetConfig.enableSmartLabels = dataLabelOptions.enableSmartLabels;
    if (!pie3DManager) {
      pie3DManager = new Pie3DManager(chart);
      dataSet.attachChild(pie3DManager, 'pie3DManager', false);
      dataSet.addToEnv('pie3DManager', pie3DManager);
      // enabling the tooltip options for slices as it is the parent group being used by the pie3dmanager
      chart.getChildContainer().datalabelsGroup.trackTooltip(true);
    }
    dataSet._configurePie3DManager();

    // each (data, function (point) {
    for (i = data.length - 1; i >= 0; i -= 1) {
      point = data[i];
      pointConfig = point.config;
      // set start and end angle
      start = lastEnd;
      fraction = total ? pointConfig.y / total : 0;

      lastEnd = mathRound((lastEnd + fraction * pi2) * precision) / precision;
      if (lastEnd > maxEnd) {
        lastEnd = maxEnd;
      }
      end = lastEnd;

      // set the shape
      pointConfig.shapeArgs = {
        sAngle: mathRound(start * precision) / precision,
        eAngle: mathRound(end * precision) / precision
      };

      // center for the sliced out slice
      pointConfig.centerAngle = angle = (end + start) / 2 % pi2;
      // TODO: slicedTranslation is implemented as string
      pointConfig.slicedTranslation = [mathRound(mathCos(angle) * slicedOffset), mathRound(mathSin(angle) * slicedOffsetY)];

      // set the anchor point for tooltips
      radiusX = mathCos(angle) * positions[2];
      dataSetConfig.radiusY = radiusY = mathSin(angle) * positions[4];
      pointConfig.tooltipPos = [positions[0] + radiusX * 0.7, positions[1] + radiusY // changed to reducr mouce on tooltip condition
      ];

      // API properties
      pointConfig.percentage = fraction * 100;
      pointConfig.total = total;
    }
  };

  Pie3DDataset.prototype._configurePie3DManager = function _configurePie3DManager() {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        data = dataSetComponents.data;

    if (pie3DManager) {
      pie3DManager.configure(dataSetConfig.pieSliceDepth, data.length === 1, dataSetConfig.use3DLighting, false);
    }
  };

  Pie3DDataset.prototype.draw = function draw() {
    var positions,
        pieYScale,
        dataSet = this,
        pool = dataSet.pool || (dataSet.pool = {}),
        dataSetComponents = dataSet.components,
        dataSetConfig = dataSet.config,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        plotData = dataSetComponents.data,
        pie3DManager,
        dataLabelOptions = dataSetConfig.dataLabelOptions,
        style = dataLabelOptions.style,
        paper = dataSet.getFromEnv('paper'),
        tooltipOptions = chartConfig.tooltip || {},
        isTooltip = tooltipOptions && tooltipOptions.enabled !== false,
        slicedOffset = dataSetConfig.slicingDistance,
        slicedOffsetY = dataSetConfig.slicedOffsetY || (dataSetConfig.slicedOffsetY = slicedOffset * dataSetConfig.pieYScale),
        enableRotation = !!dataSetConfig.enableRotation,
        showBorderEffect = dataSetConfig.showBorderEffect,
        dataLength = plotData.length,
        animationObj = chart.get('config', 'animationObj'),
        animationDuration = animationObj.duration || 0,
        alphaanimation = chartConfig.alphaanimation,
        colorLabelFromPoint = dataSetConfig.usePerPointLabelColor,
        textDirection = chartConfig.textDirection,
        eventArgs,
        plotItem,
        set,
        val,
        displayValue,
        setLink,
        sliced,
        isHot,
        angle,
        connectorWidth,
        shapeArgs,
        toolText,
        setConfig,
        setGraphics,
        dataLabel,
        removeDataArr = dataSetComponents.removeDataArr || [],
        connector,
        visible = dataSet.visible,
        i,
        callBackCalled = false,
        datasetGraphics = dataSet.graphics,
        dataLabelContainer = datasetGraphics.dataLabelContainer,
        startAngle = (dataSetConfig.startAngle || 0) % pi2,
        plotAnimCallBack,
        initialAngle,
        isTranspose,
        endAngle = startAngle - pi2,
        animateClockWise = dataSetConfig.animateClockWise,
        setElement,
        _textAttrs,
        _textCss,
        setElAttr,
        isnewElem,
        setElCosmetics = {},
        prevPositions,
        isSingleStepAnim = chart.config.isSingleStepAnim,
        anim = {
      plot: {
        data: [],
        animType: 'linear'
      },
      initial: {
        data: []
      },
      final: {
        data: []
      }
    },
        showDataLabels = function showDataLabels() {
      dataLabelContainer.show();
      dataSet.placeDataLabels(false, anim);
    },
        animStartFN = function animStartFN() {
      if (!callBackCalled) {
        callBackCalled = true;
        showDataLabels();
      }
    },
        transposeAnimCallBack = function transposeAnimCallBack() {
      var i, dataObj;
      if (!callBackCalled) {
        !isSingleStepAnim && animStartFN();
        for (i = 0; i < dataLength; i += 1) {
          // set original color
          dataObj = plotData[i];
          dataObj.graphics.element && dataObj.graphics.element.attr({
            fill: (0, _lib.toRaphaelColor)(dataObj.config.color)
          });
        }
      }
    },
        hideGen = function hideGen(el) {
      return function () {
        el && el.hide();
      };
    },
        fadeIn = function fadeIn(el, callback, rev) {
      var arr = rev ? anim.initial : anim['final'];
      if (!el || !el.attrs) {
        return;
      }
      arr.data.push({
        el: el,
        attrs: {
          opacity: +!rev
        },
        callback: callback && (callback.call ? callback : hideGen(el))
      });
    },
        fadeOut = function fadeOut(el, callback) {
      fadeIn(el, callback, 1);
    },
        dataLabelStyle = chartConfig.dataLabelStyle,
        key = '';
    if (!dataSet.getContainer('pie-groups')) {
      dataSet._createContainer();
    }
    dataLabelContainer = dataSet.getContainer('label-group');

    if (!dataSet.drawn) {
      if (animationDuration) {
        plotAnimCallBack = animStartFN;
        dataLabelContainer.hide();
      }
    } else {
      isTranspose = true;
      if (animationDuration) {
        plotAnimCallBack = transposeAnimCallBack;
      }
    }
    dataLabelContainer.css(dataLabelStyle);
    // hide all groups if dataset is not visible.
    if (!visible) {
      dataLabelContainer.hide();
    }

    // does the initialising tasks and calculations before the actual rendering.
    dataSet._initPie3dManager();
    pie3DManager = dataSet.getFromEnv('pie3DManager');
    // Remove extra plots
    removeDataArr.length && dataSet.remove(anim);

    positions = dataSetConfig.center;
    prevPositions = dataSetConfig.prevPositions || positions;
    pieYScale = dataSetConfig.pieYScale;

    // Spare the world if no data has been sent
    if (!(plotData && dataLength)) {
      plotData = [];
    }

    i = -1;
    while (++i < dataLength) {
      set = plotData[i];
      setConfig = set.config;
      if (!(_textAttrs = setConfig._textAttrs)) {
        _textAttrs = setConfig._textAttrs = {};
      }

      setGraphics = set.graphics;
      val = setConfig.y;
      displayValue = setConfig.displayValue;
      sliced = setConfig.sliced;
      shapeArgs = setConfig.shapeArgs;
      angle = setConfig.centerAngle;
      toolText = setConfig.toolText;
      setLink = !!setConfig.link;
      style = setConfig.style;
      isHot = setLink || enableRotation || !setConfig.doNotSlice;

      if (val === null || val === UNDEF) {
        // todo: update null data.
        continue;
      }

      setElement = setGraphics.element;
      dataLabel = setGraphics.label;
      connector = setGraphics.connector;
      // Defining final attrs
      setElAttr = {
        sAngle: shapeArgs.sAngle,
        eAngle: shapeArgs.eAngle,
        r: positions[2],
        innerR: positions[3],
        cx: positions[0],
        cy: positions[1],
        radiusYFactor: pieYScale,
        opacity: 1
      };
      // create the element if not available.
      if (!setElement) {
        isnewElem = true;
        // pick from the pool (maintained by Pie3dManager).
        setElement = setGraphics.element = pie3DManager.useSliceFromPool();
        initialAngle = animateClockWise ? startAngle : endAngle;
        if (isTranspose) {
          initialAngle = startAngle;
        }
        if (!setElement) {
          setElement = setGraphics.element = pie3DManager.createSlice().drag(plotDragMove, plotDragStart, plotDragEnd).mouseover(plotRollOver).mouseout(plotRollOut).attr({
            ishot: isHot
          });
        }
        if (!isTranspose) {
          if (alphaanimation) {
            setElement.attr(setElAttr);
          } else {
            setElement.attr({
              sAngle: shapeArgs.sAngle,
              eAngle: shapeArgs.eAngle,
              cx: positions[0],
              cy: positions[1],
              r: positions[3],
              opacity: 0,
              innerR: positions[3],
              radiusYFactor: pieYScale
            });
          }
        } else {
          setElement.attr({
            sAngle: -initialAngle,
            eAngle: -initialAngle,
            cx: prevPositions[0],
            cy: prevPositions[1],
            r: prevPositions[2],
            innerR: prevPositions[3],
            radiusYFactor: pieYScale
          });
        }
      } else {
        isnewElem = false;
      }
      if (displayValue !== UNDEF) {
        // If data label cosmetics exists.
        if (style) {
          if (!(_textCss = setConfig._textCss)) {
            _textCss = setConfig._textCss = {};
          }
          _textCss.fontFamily = style.fontFamily;
          _textCss.fontSize = style.fontSize;
          _textCss.lineHeight = style.lineHeight;
          _textCss.fontWeight = style.fontWeight;
          _textCss.fontStyle = style.fontStyle;
        } else if (setConfig._textCss) {
          /* If there was a perviously applied cosmetics for a data Object, need to restore the chart
          Label styling to it. */
          dataLabel && dataLabel.removeCSS();
          delete setConfig._textCss;
          _textCss = UNDEF;
        }

        setConfig.style = style || (style = dataLabelStyle);
        _textAttrs.text = displayValue;
        _textAttrs.fill = (colorLabelFromPoint ? (0, _lib.toRaphaelColor)(setConfig.color) : style.color) || '#000000';
        _textAttrs['text-bound'] = [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash];
        _textAttrs.direction = textDirection;
        _textAttrs.lineHeight = style.lineHeight;

        if (!dataLabel) {
          if (pool && pool.graphics && pool.graphics.label && pool.graphics.label.length) {
            dataLabel = setGraphics.label = pool.graphics.label.splice(0, 1);
          } else {
            _textAttrs.ishot = isHot;
          }
        } else {
          if (_textCss) {
            dataLabel.css(_textCss);
            delete _textCss.fontFamily;
            delete _textCss.fontSize;
            delete _textCss.lineHeight;
            delete _textCss.fontWeight;
            delete _textCss.fontStyle;
            _textCss = UNDEF;
          }

          delete _textAttrs.ishot;
        }
        if (dataLabelOptions.distance > 0 && (connectorWidth = dataLabelOptions.connectorWidth) && dataLabelOptions.enableSmartLabels) {
          if (!connector) {
            if (pool && pool.graphics && pool.graphics.connector && pool.graphics.connector.length) {
              connector = setGraphics.connector = pool.graphics.connector.splice(0, 1);
            } else {
              connector = setGraphics.connector = paper.path('M 0 0 l 0 0', dataLabelContainer).attr({
                visibility: HIDDEN,
                ishot: isHot
              }).on('dragstart', plotDragStart).on('dragmove', plotDragMove).on('dragend', plotDragEnd).hover(plotRollOver, plotRollOut);
            }
          }
          connector.attr({
            'stroke-width': connectorWidth,
            stroke: dataLabelOptions.connectorColor || '#606060',
            cursor: setLink ? POINTER : ''
          }).show();
        } else {
          fadeOut(connector, 1);
        }
      } else {
        // hide the label and connectors.
        fadeOut(dataLabel, 1);
        fadeOut(connector, 1);
      }

      plotItem = {
        chart: chart,
        index: i,
        seriesData: dataSetConfig,
        value: val,
        angle: setConfig.angle = angle,
        link: setConfig.link,
        shapeArgs: shapeArgs,
        slicedX: sliced && !dataSetConfig.singletonCase ? mathCos(angle) * slicedOffset : 0,
        slicedY: sliced && !dataSetConfig.singletonCase ? mathSin(angle) * slicedOffsetY : 0,
        sliced: sliced,
        labelText: displayValue,
        name: setConfig.name,
        percentage: setConfig.percentage,
        toolText: toolText,
        originalIndex: dataLength - i - 1,
        style: setConfig.style,
        graphic: setElement,
        transX: setConfig.transX = mathCos(angle) * slicedOffset,
        transY: setConfig.transY = mathSin(angle) * slicedOffsetY,
        slicedTranslation: setConfig.slicedTranslation = 't' + setConfig.transX + ',' + setConfig.transY,
        label: dataLabel,
        connector: connector
      };

      eventArgs = {
        index: dataSetConfig.reversePlotOrder ? i : dataLength - 1 - i,
        link: setConfig.link,
        value: setConfig.y,
        displayValue: setConfig.displayValueArgs,
        categoryLabel: setConfig.categoryLabel,
        isSliced: setConfig.sliced,
        toolText: setConfig.toolText
      };

      setElCosmetics = {
        color: setConfig.color.color.split(',')[0],
        alpha: setConfig._3dAlpha,
        borderWidth: setConfig.borderWidth,
        borderColor: setConfig.borderColor
      };

      if (isnewElem) {
        setElement.attr(setElCosmetics);
      }

      setElement.attr({
        cursor: setLink ? POINTER : '',
        showBorderEffect: showBorderEffect
      }).tooltip(isTooltip ? toolText : _lib.BLANKSTRING).data(GROUPID, i).data('plotItem', plotItem).data(EVENTARGS, eventArgs);

      if (!isTranspose) {
        if (alphaanimation) {
          setElement.attr({
            opacity: 0
          });
          anim.plot.data.push({
            el: setElement,
            attrs: {
              opacity: 1
            },
            callback: plotAnimCallBack
          });
        } else {
          anim.plot.data.push({
            el: setElement,
            attrs: setElAttr,
            callback: plotAnimCallBack,
            animConfig: [_lib.animHelperFN.animByWeight(animateClockWise ? dataLength - i - 1 : i, dataLength, 0.5)],
            animType: 'easeInOutQuad'
          });
        }
      } else {
        anim.plot.data.push({
          el: setElement,
          attrs: setElAttr,
          callback: plotAnimCallBack
        });
      }

      // Animate Cosmetics
      anim.plot.data.push({
        el: setElement,
        attrs: setElCosmetics
      });
      if (!isSingleStepAnim) {
        // Slicing in during start of animation
        anim.initial.data.push({
          el: setElement,
          attrs: {
            transform: ''
          }
        });
      }
      // Slicing out if enabled issliced
      // during end animation
      anim['final'].data.push({
        el: setElement,
        attrs: {
          transform: 't' + plotItem.slicedX + ',' + plotItem.slicedY
        }
      });

      _textAttrs.plotItem = plotItem;
      _textAttrs[EVENTARGS] = eventArgs;

      if (!isSingleStepAnim) {
        fadeOut(dataLabelContainer, showDataLabels);
        fadeIn(dataLabelContainer);
      }

      connector && connector.data('plotItem', plotItem).data(EVENTARGS, eventArgs);
    }
    (!animationDuration || isSingleStepAnim) && showDataLabels();
    // Registering the animations
    for (key in anim) {
      dataSet.getFromEnv('animationManager').registerAnimation([anim[key]], key);
    }
    // Marking dataSet drawn
    dataSet.drawn = true;
    // Savinf prev positions
    dataSetConfig.prevPositions = positions.slice(0);
  };

  Pie3DDataset.prototype.remove = function remove(anim) {
    var dataSet = this,
        conf = dataSet.config,
        components = dataSet.components,
        removeDataArr = components.removeDataArr || [],
        pool = dataSet.pool = dataSet.pool = [],
        len = removeDataArr.length,
        pie3DManager = this.getFromEnv('pie3DManager'),
        removeData,
        ele,
        graphics,
        i,
        elem,
        hideFn = function hideFn(graphic, type) {
      return function () {
        if (type === elementStr) {
          pie3DManager.removeSlice(graphic.element);
          delete graphic.element;
        } else {
          graphic[type].hide();
        }
      };
    },
        startAngle = conf.startAngle,
        positions = conf.center;
    for (i = 0; i < len; i++) {
      removeData = removeDataArr[0];
      graphics = removeData.graphics;
      for (ele in graphics) {
        elem = graphics[ele];
        if (!pool[ele]) {
          pool[ele] = [];
        }
        if (ele === elementStr) {
          // Slicing in during start of animation
          anim.initial.data.push({
            el: elem,
            attrs: {
              transform: ''
            }
          });
          anim.plot.data.push({
            el: elem,
            attrs: {
              sAngle: -startAngle,
              eAngle: -startAngle + 0.01,
              r: positions[2],
              innerR: positions[3],
              cx: positions[0],
              cy: positions[1]
            },
            callback: hideFn(graphics, ele)
          });
        } else {
          anim.initial.data.push({
            el: elem,
            attrs: {
              opacity: 0
            },
            callback: hideFn(graphics, ele)
          });
        }
      }
      removeDataArr.splice(0, 1);
    }
  };

  Pie3DDataset.prototype._rotate = function _rotate(setAngle) {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        data = dataSetComponents.data,
        slicedOffset = dataSetConfig.slicedOffset,
        slicedOffsetY = dataSetConfig.slicedOffsetY,
        startingAngle = dataSetConfig.startAngle,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        angle;

    setAngle = !isNaN(setAngle) ? setAngle : -dataSetConfig._lastAngle;

    angle = (setAngle - startingAngle) % 360;

    dataSetConfig.startAngle = (0, _lib.pluckNumber)(setAngle, dataSetConfig.startAngle) % 360;

    angle = -(angle * pi) / 180;

    if (pie3DManager) {
      pie3DManager.rotate(angle);
    }

    (0, _lib.fcEach)(data, function (point) {
      var slicedTranslation = [],
          pointGraphics = point.graphics,
          pointConfig = point.config,
          element = pointGraphics.element,
          args = pointConfig.shapeArgs,
          newAngleArgs = {
        sAngle: args.sAngle += angle,
        eAngle: args.eAngle += angle
      },
          pointAngle = pointConfig.angle = normalizeAngle((newAngleArgs.sAngle + newAngleArgs.eAngle) / 2),
          sliced = pointConfig.sliced,
          cosAngle = mathCos(pointAngle),
          sinAngle = mathSin(pointAngle);

      // set the  slicedTranslation
      slicedTranslation = pointConfig.slicedTranslation = [mathRound(cosAngle * slicedOffset), mathRound(sinAngle * slicedOffsetY)];

      pointConfig.transX = slicedTranslation[0];
      pointConfig.transY = slicedTranslation[1];
      pointConfig.slicedX = sliced ? mathCos(angle) * slicedOffset : 0;
      pointConfig.slicedY = sliced ? mathSin(angle) * slicedOffsetY : 0;

      if (element && sliced) {
        element.attr({
          transform: 't' + slicedTranslation[0] + ',' + slicedTranslation[1]
        });
      }
    });

    dataSet.placeDataLabels(true, data);
  };

  Pie3DDataset.prototype.foldingFn = function foldingFn() {
    var conf = this.config,
        startAngle = conf.startAngle;
    return {
      sAngle: -startAngle,
      eAngle: -startAngle + 0.01
    };
  };

  return Pie3DDataset;
}(_pie2d2['default']);

// **** pie3d manager ***** //
// set the new animatable properites


if (_redraphael2['default']._availableAnimAttrs && _redraphael2['default']._availableAnimAttrs.cx) {
  // assuming that cx is also numaric type
  _redraphael2['default']._availableAnimAttrs.innerR = _redraphael2['default']._availableAnimAttrs.depth = _redraphael2['default']._availableAnimAttrs.radiusYFactor = _redraphael2['default']._availableAnimAttrs.sAngle = _redraphael2['default']._availableAnimAttrs.eAngle = _redraphael2['default']._availableAnimAttrs.cx;
}

// Pie 3D point class

var Pie3DManager = function (_ComponentInterface) {
  _inherits(Pie3DManager, _ComponentInterface);

  function Pie3DManager(chart) {
    _classCallCheck(this, Pie3DManager);

    var _this2 = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    var manager = _this2;
    manager.config = {};
    manager.linkedItems = {
      chart: chart
    };
    return _this2;
  }
  /**
   * This function create a new 3d slice and return that for futher use
   * @return {slice} an raphael like composite object that can be used as a slice element
   * TODO: update slice color depending upon angle
   * TODO: For proper z-index create 2 back outer element for larger (>180 deg) slices
   * TODO: Optimize ***** the element creation, instead of outer1, back and from for all elements,
   * create few extra element per manager, which will act as outer1, back / front (inner / outer wall) for
   *  slices, who has both. Because, at max 1 slice can have outer1 and only 2 slice can have
   *   back and front both
   */


  Pie3DManager.prototype.createSlice = function createSlice() {
    var manager = this,
        renderer = manager.renderer,
        returnElement = void 0,
        confObject = {
      elements: {},
      Pie3DManager: manager
    },
        slicingWallsArr = manager.slicingWallsArr,
        elements = confObject.elements,
        renderingPath = _lib.hasSVG ? 'litepath' : 'path';

    // create elements
    returnElement = renderer[renderingPath](manager.topGroup);
    // store the _confObject reference
    returnElement._confObject = confObject;
    confObject.thisElement = returnElement;

    // modify few core function

    returnElement._destroy = returnElement.destroy;
    returnElement.destroy = destroyFN;

    returnElement._show = returnElement.show;
    returnElement.show = showFN;

    returnElement._hide = returnElement.hide;
    returnElement.hide = hideFN;

    returnElement._on = returnElement.on;
    returnElement.on = onFN;

    returnElement._drag = returnElement.drag;
    returnElement.drag = onDragFN;

    returnElement._attr = returnElement.attr;
    returnElement.attr = attrFN;

    returnElement._tooltip = returnElement.tooltip;
    returnElement.tooltip = tooltipFN;

    returnElement._data = returnElement.data;
    returnElement.data = dataFN;

    // add the element to the store
    manager.pointElemStore.push(returnElement);

    elements.topBorder = renderer[renderingPath](manager.topGroup);
    elements.bottom = renderer[renderingPath](manager.bottomBorderGroup).attr({
      'stroke-width': 0
    });
    elements.bottomBorder = renderer[renderingPath](manager.bottomBorderGroup);
    elements.frontOuter = renderer[renderingPath](manager.slicingWallsFrontGroup).attr({
      'stroke-width': 0
    });
    elements.backOuter = renderer[renderingPath](manager.slicingWallsFrontGroup).attr({
      'stroke-width': 0
    });
    elements.startSlice = renderer[renderingPath](manager.slicingWallsFrontGroup);
    elements.endSlice = renderer[renderingPath](manager.slicingWallsFrontGroup);
    elements.frontOuter1 = renderer[renderingPath](manager.slicingWallsFrontGroup).attr({
      'stroke-width': 0
    });

    // update config object for proper z order
    elements.frontOuter._conf = {
      si: si,
      isStart: 0.5
    };
    elements.frontOuter1._conf = {
      si: si,
      isStart: 0.5
    };
    elements.startSlice._conf = {
      si: si,
      isStart: 0
    };
    elements.endSlice._conf = {
      si: si,
      isStart: 1
    };
    elements.backOuter._conf = {
      si: si,
      isStart: 0.4
    };
    slicingWallsArr.push(elements.startSlice, elements.frontOuter1, elements.frontOuter, elements.backOuter, elements.endSlice);
    if (manager.isDoughnut) {
      // innerFront
      elements.frontInner = renderer[renderingPath](manager.slicingWallsFrontGroup).attr({
        'stroke-width': 0
      });
      elements.backInner = renderer[renderingPath](manager.slicingWallsFrontGroup).attr({
        'stroke-width': 0
      });

      elements.backInner._conf = {
        si: si,
        isStart: 0.5
      };

      elements.frontInner._conf = {
        si: si,
        isStart: 0.4
      };
      slicingWallsArr.push(elements.frontInner, elements.backInner);
    }

    si += 1;
    return returnElement;
  };

  Pie3DManager.prototype.refreshDrawing = function refreshDrawing() {
    var slicingWallsArr = this.slicingWallsArr,
        x = 0,
        sWall = void 0,
        ln = slicingWallsArr.length,
        startIndex = void 0,
        lastElem2 = void 0,
        lastElem3 = void 0,
        index = void 0,
        frontGroup = this.slicingWallsFrontGroup,
        backGroup = this.slicingWallsBackGroup;

    // sort the slicing walls for z-placing
    slicingWallsArr.sort(elementZSortFn);
    // find the index which cross the pi line
    startIndex = getStartIndex(slicingWallsArr);

    for (; x < ln; x += 1, startIndex += 1) {
      if (startIndex === ln) {
        startIndex = 0;
      }
      sWall = slicingWallsArr[startIndex];
      index = sWall._conf.index;
      if (index < piBy2) {
        frontGroup.appendChild(sWall);
      } else if (index <= pi) {
        if (lastElem2) {
          sWall.insertBefore(lastElem2);
        } else {
          frontGroup.appendChild(sWall);
        }
        lastElem2 = sWall;
      } else if (index <= pi3By2) {
        if (lastElem3) {
          sWall.insertBefore(lastElem3);
        } else {
          backGroup.appendChild(sWall);
        }
        lastElem3 = sWall;
      } else {
        backGroup.appendChild(sWall);
      }
    }
  };

  Pie3DManager.prototype.configure = function configure(depth, hasOnePoint, use3DLighting, isDoughnut) {
    var manager = this,
        chart = manager.getFromEnv('chart'),
        renderer = manager.getFromEnv('paper'),
        seriesGroup = chart.getChildContainer('datalabelsGroup');
    if (isObject(depth)) {
      depth = depth.depth;
      hasOnePoint = depth.hasOnePoint;
      use3DLighting = depth.use3DLighting;
      isDoughnut = depth.isDoughnut;
    }
    // @todo: need to have pie to daughnut transpose

    // add the values to the instance
    if (!manager.renderer) {
      manager.renderer = renderer;
    }
    manager.hasOnePoint = hasOnePoint;
    manager.use3DLighting = use3DLighting;
    manager.isDoughnut = isDoughnut;
    manager.depth = depth;

    // create required groups
    // TODO: if requared create bottom side group
    !manager.bottomBorderGroup && (manager.bottomBorderGroup = renderer.group('bottom-border', seriesGroup));

    // @todo: need to have animate with for dept
    manager.bottomBorderGroup.attr({
      transform: 't0,' + depth
    });
    !manager.slicingWallsBackGroup && (manager.slicingWallsBackGroup = renderer.group('slicingWalls-back-Side', seriesGroup));
    !manager.slicingWallsFrontGroup && (manager.slicingWallsFrontGroup = renderer.group('slicingWalls-front-Side', seriesGroup));
    !manager.topGroup && (manager.topGroup = renderer.group('top-Side', seriesGroup));

    // if arrays are not availabel the create the m for first time
    !manager.pointElemStore && (manager.pointElemStore = []);
    !manager.slicingWallsArr && (manager.slicingWallsArr = []);

    // few reusable code
    manager.moveCmdArr = [M];
    manager.lineCmdArr = [L];
    manager.closeCmdArr = [Z];

    manager.colorObjs = [];
  };

  Pie3DManager.prototype._parseSliceColor = function _parseSliceColor(color, alpha, pointConf) {
    var manager = this,
        dark1,
        dark2,

    // dark3,
    dark4,
        dark5,
        dark6,
        light1,
        light2,
        light3,
        light4,

    // light5,
    light6,
        alpha1,
        colorStr1,
        colorStr2,
        alphaStr1,
        alphaStr2,
        alphaStr3,
        colorStr3,
        colorStr4,
        colorStr5,
        alphaFactor = 3,
        lighting3D = manager.use3DLighting,
        cacheStore = lighting3D ? pie3DCacheColorStore.lighting3D : pie3DCacheColorStore.lighting2D,
        colorsObj,
        radiusYFactor = pointConf.radiusYFactor,
        cx = pointConf.cx,
        cy = pointConf.cy,
        rx = pointConf.r,
        ry = rx * radiusYFactor,
        innerRx = pointConf.innerR || 0,
        rightX = cx + rx,
        leftX = cx - rx,
        rightInnerX = cx + innerRx,
        leftInnerX = cx - innerRx;

    if (~color.indexOf('rgb')) {
      color = _lib.graphics.rawRGBtoHEX(color);
    }
    alpha = alpha || 100;
    alpha1 = alpha / 2;

    // check in cacheStore
    if (cacheStore[color] && cacheStore[color][alpha]) {
      // if found return the color
      colorsObj = cacheStore[color][alpha];
    } else {
      // create the color components
      if (!cacheStore[color]) {
        cacheStore[color] = {};
      }
      if (!cacheStore[color][alpha]) {
        cacheStore[color][alpha] = {};
      }
      colorsObj = cacheStore[color][alpha];

      if (lighting3D) {
        dark1 = getDarkColor(color, 80);
        dark2 = getDarkColor(color, 75);
        light1 = getLightColor(color, 85);
        light2 = getLightColor(color, 70);
        light3 = getLightColor(color, 40);

        light4 = getLightColor(color, 50);
        // light5 = getLightColor(color, 30);
        light6 = getLightColor(color, 65);
        // dark3 = getDarkColor(color, 85);
        dark4 = getDarkColor(color, 69);
        dark5 = getDarkColor(color, 75);
        dark6 = getDarkColor(color, 95);
      } else {
        alphaFactor = 10;
        dark1 = getDarkColor(color, 90);
        dark2 = getDarkColor(color, 87);
        light1 = getLightColor(color, 93);
        light2 = getLightColor(color, 87);
        light3 = getLightColor(color, 80);

        light6 = light4 = getLightColor(color, 85);
        // light5 = getLightColor(color, 80);
        dark6 = getDarkColor(color, 85);
        // dark3 = dark6;
        dark4 = getDarkColor(color, 75);
        dark5 = getDarkColor(color, 80);
      }
      colorStr1 = dark2 + COMMASTRING + light1 + COMMASTRING + light2 + COMMASTRING + light1 + COMMASTRING + dark2;
      alphaStr1 = alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha;
      colorStr2 = dark2 + COMMASTRING + color + COMMASTRING + light1 + COMMASTRING + color + COMMASTRING + dark2;
      alphaStr2 = alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1 + COMMASTRING + alpha1;
      colorStr3 = dark2 + COMMASTRING + color + COMMASTRING + light3 + COMMASTRING + color + COMMASTRING + dark2;
      colorStr4 = dark5 + COMMASTRING + light1 + COMMASTRING + light4 + COMMASTRING + light1 + COMMASTRING + dark4;
      colorStr5 = 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF' + COMMASTRING + 'FFFFFF';
      alphaStr3 = 0 + COMMASTRING + alpha1 / alphaFactor + COMMASTRING + alpha / alphaFactor + COMMASTRING + alpha1 / alphaFactor + COMMASTRING + 0;

      if (_lib.hasSVG) {
        colorsObj.top = {
          FCcolor: {
            gradientUnits: 'userSpaceOnUse',
            radialGradient: true,
            color: light6 + COMMASTRING + dark6,
            alpha: alpha + COMMASTRING + alpha,
            ratio: '0,100'
          }
        };
      } else {
        colorsObj.top = {
          FCcolor: {
            gradientUnits: 'objectBoundingBox',
            color: light2 + COMMASTRING + light2 + COMMASTRING + light1 + COMMASTRING + dark2,
            alpha: alpha + COMMASTRING + alpha + COMMASTRING + alpha + COMMASTRING + alpha,
            angle: -72,
            ratio: '0,8,15,77'
          }
        };
      }

      colorsObj.frontOuter = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr4,
          alpha: alphaStr1,
          angle: 0,
          ratio: '0,20,15,15,50'
        }
      };
      colorsObj.backOuter = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr3,
          alpha: alphaStr2,
          angle: 0,
          ratio: '0,62,8,8,22'
        }
      };
      colorsObj.frontInner = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr2,
          alpha: alphaStr2,
          angle: 0,
          ratio: '0,25,5,5,65'
        }
      };
      colorsObj.backInner = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr1,
          alpha: alphaStr1,
          angle: 0,
          ratio: '0,62,8,8,22'
        }
      };
      colorsObj.topBorder = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr5,
          alpha: alphaStr3,
          angle: 0,
          ratio: '0,20,15,15,50'
        }
      };
      colorsObj.topInnerBorder = {
        FCcolor: {
          gradientUnits: 'userSpaceOnUse',
          y1: 0,
          y2: 0,
          color: colorStr5,
          alpha: alphaStr3,
          angle: 0,
          ratio: '0,50,15,15,20'
        }
      };
      colorsObj.bottom = (0, _lib.toRaphaelColor)(convertColor(color, alpha1));
      /** TODO will be changed w. r. t. angle */
      colorsObj.startSlice = (0, _lib.toRaphaelColor)(convertColor(dark1, alpha));
      colorsObj.endSlice = (0, _lib.toRaphaelColor)(convertColor(dark1, alpha));
    }

    // check if non color attributes match, else apply them
    if (colorsObj.cx !== cx || colorsObj.cy !== cy || colorsObj.rx !== rx || colorsObj.radiusYFactor !== radiusYFactor || colorsObj.innerRx !== innerRx) {
      // appaly positional properties in colors
      if (_lib.hasSVG) {
        colorsObj.top.FCcolor.cx = cx;
        colorsObj.top.FCcolor.cy = cy;
        colorsObj.top.FCcolor.r = rx;
        colorsObj.top.FCcolor.fx = cx - 0.3 * rx;
        colorsObj.top.FCcolor.fy = cy + ry * 1.2;
      }
      colorsObj.topBorder.FCcolor.x1 = colorsObj.backOuter.FCcolor.x1 = colorsObj.frontOuter.FCcolor.x1 = leftX;
      colorsObj.topBorder.FCcolor.x2 = colorsObj.backOuter.FCcolor.x2 = colorsObj.frontOuter.FCcolor.x2 = rightX;
      colorsObj.topInnerBorder.FCcolor.x1 = colorsObj.backInner.FCcolor.x1 = colorsObj.frontInner.FCcolor.x1 = leftInnerX;
      colorsObj.topInnerBorder.FCcolor.x2 = colorsObj.backInner.FCcolor.x2 = colorsObj.frontInner.FCcolor.x2 = rightInnerX;

      // Set positional attributes in color Object
      colorsObj.cx = cx;
      colorsObj.cy = cy;
      colorsObj.rx = rx;
      colorsObj.radiusYFactor = radiusYFactor;
      colorsObj.innerRx = innerRx;
    }

    return colorsObj;
  };

  Pie3DManager.prototype.rotate = function rotate(angle) {
    var manager = this,
        pointElemStore = manager.pointElemStore,
        x = 0,
        ln = pointElemStore.length,
        point,
        confObject;
    if (!manager.hasOnePoint) {
      for (; x < ln; x += 1) {
        point = pointElemStore[x];
        confObject = point._confObject;
        confObject.sAngle += angle;
        confObject.eAngle += angle;
        manager._setSliceShape(confObject);
      }
      manager.refreshDrawing();
    }
  };

  Pie3DManager.prototype.removeSlice = function removeSlice(slice) {
    var manager = this,
        pointElemStore = manager.pointElemStore,
        confObject = slice._confObject,
        elements = confObject.elements,
        slicingWallsArr = manager.slicingWallsArr,
        x,
        ln = pointElemStore.length,
        point,
        wallElement;
    // remove the slice from the point store
    for (x = ln - 1; x >= 0; x -= 1) {
      point = pointElemStore[x];
      if (point === slice) {
        pointElemStore.splice(x, 1);
      }
    }
    // remove the side elements from the side wall arr
    ln = slicingWallsArr.length;
    for (x = ln - 1; x >= 0; x -= 1) {
      wallElement = slicingWallsArr[x];
      if (wallElement === elements.startSlice || wallElement === elements.frontOuter1 || wallElement === elements.frontOuter || wallElement === elements.backInner || wallElement === elements.endSlice) {
        slicingWallsArr.splice(x, 1);
      }
    }

    // hide corrosponding elements
    slice.hide && slice.hide();

    // store the element in pool for future reuse
    if (!manager._slicePool) {
      manager._slicePool = [];
    }
    manager._slicePool.push(slice);

    manager.refreshDrawing();
  };

  Pie3DManager.prototype.useSliceFromPool = function useSliceFromPool() {
    var manager = this,
        slicePool = manager._slicePool || (manager._slicePool = []),
        slicingWallsArr = manager.slicingWallsArr,
        newSlice = false,
        elements;
    if (slicePool.length) {
      newSlice = slicePool.shift();
      // restore the element in point store
      manager.pointElemStore.push(newSlice);
      // show the slice
      newSlice.show();
      // push the side walls in to the side wall array
      elements = newSlice._confObject.elements;
      slicingWallsArr.push(elements.startSlice, elements.frontOuter1, elements.frontOuter);

      elements.backInner && slicingWallsArr.push(elements.backInner);
      slicingWallsArr.push(elements.endSlice);
    }
    return newSlice;
  };
  // This function do the z-index management

  // @todo: needs to be optimize


  Pie3DManager.prototype._setSliceShape = function _setSliceShape(pointConf, doNotApply) {
    var Pie3DManager = this,
        getArcPath = function getArcPath(startX, startY, endX, endY, rX, rY, isClockWise, isLargeArc) {
      return startX == endX && startY == endY ? [] : [A, rX, rY, 0, isLargeArc, isClockWise, endX, endY];
    },
        startOri = pointConf.sAngle,
        endOri = pointConf.eAngle,
        start = normalizeAngle(startOri),
        end = normalizeAngle(endOri),
        scaleAngle,
        startCos,
        startSin,
        endCos,
        endSin,
        startOuterX,
        startOuterY,
        startOuterTopClipX,
        startOuterTopClipY,
        endOuterTopClipX,
        endOuterTopClipY,
        startInnerX,
        startInnerY,
        endInnerX,
        endInnerY,
        startInnerY1,
        endInnerY1,
        borderThickness = 1,
        isDoughnut = Pie3DManager.isDoughnut,
        radiusYFactor = pointConf.radiusYFactor,
        cx = pointConf.cx,
        cy = pointConf.cy,
        rx = pointConf.r,
        ry = rx * radiusYFactor,
        topCliprx = rx + (_lib.hasSVG ? -borderThickness : 2),
        topClipry = ry + (_lib.hasSVG ? -borderThickness : 2),
        innerRx = pointConf.innerR || 0,
        innerRy = innerRx * radiusYFactor,
        depth = Pie3DManager.depth,
        depthY = depth + cy,
        rightX = cx + rx,
        leftX = cx - rx,
        rightInnerX = cx + innerRx,
        leftInnerX = cx - innerRx,
        topY = cy - ry,
        bottomY = depthY + ry,
        clipPathforNoClip = [M, leftInnerX, topY, L, leftInnerX, bottomY, Z],
        elements = pointConf.elements,
        startOuterY1,
        endOuterX,
        endOuterY,
        endOuterY1,
        tempArr1,
        tempArr2,
        tempArr3,
        tempArr4,
        tempArr5,
        tempArr6,
        moveCmdArr,
        lineCmdArr,
        closeCmdArr,
        centerPoint,
        leftPoint,
        topPoint,
        rightPoint,
        bottomPoint,
        leftDepthPoint,
        rightDepthPoint,
        leftInnerPoint,
        rightInnerPoint,
        leftInnerDepthPoint,
        rightInnerDepthPoint,
        pathAttrString = 'path',
        middleAngle = (start + end) / 2,
        // not applicable for the slices that are crossing the 0deg
    frontOuterIndex,
        BackOuterIndex,
        crossed2Pi = start > end;

    startCos = mathCos(start);
    startSin = mathSin(start);
    endCos = mathCos(end);
    endSin = mathSin(end);

    startOuterX = cx + rx * startCos;
    startOuterY = cy + ry * startSin;
    startOuterTopClipX = cx + topCliprx * startCos;
    startOuterTopClipY = cy + topClipry * startSin;
    startOuterY1 = startOuterY + depth;
    endOuterX = cx + rx * endCos;
    endOuterY = cy + ry * endSin;
    endOuterTopClipX = cx + topCliprx * endCos;
    endOuterTopClipY = cy + topClipry * endSin;
    endOuterY1 = endOuterY + depth;

    if (isDoughnut) {
      // doughnut like slice
      startInnerX = cx + innerRx * startCos;
      startInnerY = cy + innerRy * startSin;
      startInnerY1 = startInnerY + depth;
      endInnerX = cx + innerRx * endCos;
      endInnerY = cy + innerRy * endSin;
      endInnerY1 = endInnerY + depth;
      pointConf.startSlice = [M, startOuterX, startOuterY, L, startOuterX, startOuterY1, startInnerX, startInnerY1, startInnerX, startInnerY, Z];
      pointConf.endSlice = [M, endOuterX, endOuterY, L, endOuterX, endOuterY1, endInnerX, endInnerY1, endInnerX, endInnerY, Z];
    } else {
      pointConf.startSlice = [M, startOuterX, startOuterY, L, startOuterX, startOuterY1, cx, depthY, cx, cy, Z];
      pointConf.endSlice = [M, endOuterX, endOuterY, L, endOuterX, endOuterY1, cx, depthY, cx, cy, Z];
    }

    if (_lib.hasSVG) {
      scaleAngle = getAbsScaleAngle(start, end);
      // create the clip for top and bottom
      if (!isDoughnut) {
        pointConf.clipTopPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterX, endOuterY, L, cx, cy, Z]];
      } else {
        pointConf.clipTopPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterX, endOuterY, L, endInnerX, endInnerY, A, innerRx, innerRy, 0, scaleAngle > pi ? 1 : 0, 0, startInnerX, startInnerY, Z]];
      }

      pointConf.clipOuterFrontPath1 = [clipPathforNoClip];

      pointConf.clipTopBorderPath = [[M, startOuterTopClipX, startOuterTopClipY, A, topCliprx, topClipry, 0, scaleAngle > pi ? 1 : 0, 1, endOuterTopClipX, endOuterTopClipY, L, endOuterX, endOuterY, endOuterX, endOuterY + borderThickness, A, rx, ry, 0, scaleAngle > pi ? 1 : 0, 0, startOuterX, startOuterY + borderThickness, L, startOuterX, startOuterY, Z]];

      if (startOri != endOri) {
        if (start > end) {
          // crossed the 0 deg line
          if (start < pi) {
            // crossed the 180 deg line also
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterFrontPath1 = [[M, leftX, cy, A, rx, ry, 0, 0, 0, startOuterX, startOuterY, V, depth, A, rx, ry, 0, 0, 1, leftX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, rightX, cy, A, rx, ry, 0, 1, 0, leftX, cy, V, depth, A, rx, ry, 0, 1, 1, rightX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerBackPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 1, 0, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 1, 1, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, rightInnerX, cy + depth, Z, M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY, V, depth, A, innerRx, innerRy, 0, 0, 1, leftInnerX, cy + depth, Z]];
            }
          } else if (end > pi) {
            // crossed the 180 deg line also
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 1, 1, leftX, cy, V, depth, A, rx, ry, 0, 1, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, leftX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, leftX, cy + depth, Z, M, rightX, cy, A, rx, ry, 0, 0, 0, startOuterX, startOuterY, V, depth, A, rx, ry, 0, 0, 1, rightX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 1, 1, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 1, 0, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerBackPath = [[M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, leftInnerX, cy + depth, Z, M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY, V, depth, A, innerRx, innerRy, 0, 0, 1, rightInnerX, cy + depth, Z]];
            }
          } else {
            pointConf.clipOuterFrontPath = [[M, rightX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, rightX, cy + depth, Z]];
            pointConf.clipOuterBackPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, rightX, cy, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, rightInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, rightInnerX, cy + depth, Z]];

              pointConf.clipInnerBackPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, rightInnerX, cy, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
            }
          }
        } else if (start < pi) {
          if (end > pi) {
            // crossed the 180 deg line only
            pointConf.clipOuterFrontPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, leftX, cy, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            pointConf.clipOuterBackPath = [[M, leftX, cy, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, leftX, cy + depth, Z]];
            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, leftInnerX, cy, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
              pointConf.clipInnerBackPath = [[M, leftInnerX, cy, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, leftInnerX, cy + depth, Z]];
            }
          } else {
            // haven't crossed any thing
            pointConf.clipOuterFrontPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
            pointConf.clipOuterBackPath = [clipPathforNoClip];

            if (isDoughnut) {
              pointConf.clipInnerFrontPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];

              pointConf.clipInnerBackPath = [clipPathforNoClip];
            }
          }
        } else {
          // haven't crossed any thing
          pointConf.clipOuterFrontPath = [clipPathforNoClip];
          pointConf.clipOuterBackPath = [[M, startOuterX, startOuterY, A, rx, ry, 0, 0, 1, endOuterX, endOuterY, V, depth, A, rx, ry, 0, 0, 0, startOuterX, startOuterY1, Z]];
          if (isDoughnut) {
            pointConf.clipInnerFrontPath = [clipPathforNoClip];

            pointConf.clipInnerBackPath = [[M, startInnerX, startInnerY, A, innerRx, innerRy, 0, 0, 1, endInnerX, endInnerY, V, depth, A, innerRx, innerRy, 0, 0, 0, startInnerX, startInnerY1, Z]];
          }
        }
      } else {
        // zero Pie
        pointConf.clipOuterFrontPath = pointConf.clipOuterBackPath = pointConf.clipInnerBackPath = pointConf.clipInnerFrontPath = [clipPathforNoClip];
      }

      pathAttrString = 'litepath';
      pointConf.clipBottomBorderPath = pointConf.clipTopPath;
      pointConf.startSlice = [pointConf.startSlice];
      pointConf.endSlice = [pointConf.endSlice];
    } else {
      // for VML
      moveCmdArr = Pie3DManager.moveCmdArr;
      lineCmdArr = Pie3DManager.lineCmdArr;
      closeCmdArr = Pie3DManager.closeCmdArr;
      centerPoint = [cx, cy];
      leftPoint = [leftX, cy];
      topPoint = [cx, topY];
      rightPoint = [rightX, cy];
      bottomPoint = [cx, cy + ry];
      leftDepthPoint = [leftX, depthY];
      rightDepthPoint = [rightX, depthY];
      leftInnerPoint = [leftInnerX, cy];
      rightInnerPoint = [rightInnerX, cy];
      leftInnerDepthPoint = [leftInnerX, depthY];
      rightInnerDepthPoint = [rightInnerX, depthY];
      pointConf.clipOuterFrontPath1 = [];
      if (startOri != endOri) {
        if (start > end) {
          // crossed the 0 deg line
          if (start < pi) {
            // crossed the 180 deg line also
            tempArr1 = getArcPath(startOuterX, startOuterY, leftX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(leftX, cy, rightX, cy, rx, ry, 1, 0);
            tempArr5 = getArcPath(rightX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat(leftPoint, tempArr3, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath1 = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr5, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3, tempArr5);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(rightInnerX, cy, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr6 = getArcPath(leftInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr4, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr6, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr, moveCmdArr, [endInnerX, endInnerY], tempArr2, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else if (end > pi) {
            // crossed the 180 deg line also
            tempArr1 = getArcPath(startOuterX, startOuterY, rightX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(rightX, cy, leftX, cy, rx, ry, 1, 0);
            tempArr5 = getArcPath(leftX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr3, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr, moveCmdArr, leftPoint, tempArr5, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3, tempArr5);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(leftInnerX, cy, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr6 = getArcPath(rightInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr4, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr6, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr, moveCmdArr, [endInnerX, endInnerY], tempArr2, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);

              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, tempArr6);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else {
            tempArr1 = getArcPath(startOuterX, startOuterY, rightX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(rightX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterFrontPath = moveCmdArr.concat(rightPoint, tempArr3, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, rightX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, rightDepthPoint, getArcPath(rightX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, rightInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(rightInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerFrontPath = moveCmdArr.concat([endInnerX, endInnerY], tempArr2, lineCmdArr, rightInnerDepthPoint, getArcPath(rightInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerBackPath = moveCmdArr.concat(rightInnerPoint, tempArr4, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, rightInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          }
        } else if (start < pi) {
          if (end > pi) {
            // crossed the 180 deg line only
            tempArr1 = getArcPath(startOuterX, startOuterY, leftX, cy, rx, ry, 1, 0);
            tempArr3 = getArcPath(leftX, cy, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat(leftPoint, tempArr3, lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, leftX, depthY, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipOuterFrontPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, lineCmdArr, leftDepthPoint, getArcPath(leftX, depthY, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            pointConf.clipTopBorderPath = moveCmdArr.concat([startOuterX, startOuterY], tempArr1, tempArr3);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, leftInnerX, cy, innerRx, innerRy, 0, 0);
              tempArr4 = getArcPath(leftInnerX, cy, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat([endInnerX, endInnerY], tempArr2, lineCmdArr, leftInnerDepthPoint, getArcPath(leftInnerX, depthY, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipInnerFrontPath = moveCmdArr.concat(leftInnerPoint, tempArr4, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, leftInnerX, depthY, innerRx, innerRy, 1, 0), closeCmdArr);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2, tempArr4);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          } else {
            // haven't crossed any thing
            tempArr1 = getArcPath(startOuterX, startOuterY, endOuterX, endOuterY, rx, ry, 1, 0);
            pointConf.clipOuterBackPath = moveCmdArr.concat([startOuterX, startOuterY]);
            pointConf.clipTopBorderPath = pointConf.clipOuterBackPath.concat(tempArr1);
            pointConf.clipOuterFrontPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
            if (isDoughnut) {
              tempArr2 = getArcPath(endInnerX, endInnerY, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
              pointConf.clipInnerBackPath = moveCmdArr.concat([endInnerX, endInnerY]);
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, closeCmdArr);
              pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(moveCmdArr, [endInnerX, endInnerY], tempArr2);
              pointConf.clipInnerFrontPath = pointConf.clipInnerBackPath.concat(tempArr2, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
            } else {
              pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
            }
          }
        } else {
          // haven't crossed any thing
          tempArr1 = getArcPath(startOuterX, startOuterY, endOuterX, endOuterY, rx, ry, 1, 0);
          pointConf.clipOuterFrontPath = moveCmdArr.concat([startOuterX, startOuterY]);
          pointConf.clipTopBorderPath = pointConf.clipOuterFrontPath.concat(tempArr1);
          pointConf.clipOuterBackPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endOuterX, endOuterY1], getArcPath(endOuterX, endOuterY1, startOuterX, startOuterY1, rx, ry, 0, 0), closeCmdArr);
          if (isDoughnut) {
            tempArr2 = getArcPath(endInnerX, endInnerY, startInnerX, startInnerY, innerRx, innerRy, 0, 0);
            pointConf.clipInnerFrontPath = moveCmdArr.concat([endInnerX, endInnerY]);
            pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, [endInnerX, endInnerY], tempArr2, closeCmdArr);
            pointConf.clipTopBorderPath = pointConf.clipTopBorderPath.concat(pointConf.clipInnerFrontPath, tempArr2);
            pointConf.clipInnerBackPath = pointConf.clipInnerFrontPath.concat(tempArr2, lineCmdArr, [startInnerX, startInnerY1], getArcPath(startInnerX, startInnerY1, endInnerX, endInnerY1, innerRx, innerRy, 1, 0), closeCmdArr);
          } else {
            pointConf.clipTopPath = pointConf.clipTopBorderPath.concat(lineCmdArr, centerPoint, closeCmdArr);
          }
        }
        // enlarge the bounded box so that the gradient works perfactly
        tempArr1 = moveCmdArr.concat(leftPoint, lineCmdArr, rightPoint);
        tempArr2 = moveCmdArr.concat(topPoint, lineCmdArr, bottomPoint);
        pointConf.clipTopPath = pointConf.clipTopPath.concat(tempArr1, tempArr2);
        pointConf.clipOuterFrontPath = pointConf.clipOuterFrontPath.concat(tempArr1);
        pointConf.clipOuterFrontPath1 = pointConf.clipOuterFrontPath1.concat(tempArr1);
        pointConf.clipOuterBackPath = pointConf.clipOuterBackPath.concat(tempArr1);

        if (isDoughnut) {
          tempArr2 = moveCmdArr.concat(leftInnerPoint, lineCmdArr, rightInnerPoint);
          pointConf.clipInnerFrontPath = pointConf.clipInnerFrontPath.concat(tempArr2);
          pointConf.clipInnerBackPath = pointConf.clipInnerBackPath.concat(tempArr2);
        }
      } else {
        // zero Pie
        pointConf.clipTopPath = pointConf.clipOuterFrontPath = pointConf.clipOuterBackPath = [];
        if (isDoughnut) {
          pointConf.clipInnerFrontPath = pointConf.clipInnerBackPath = [];
        }
      }

      pointConf.clipBottomBorderPath = pointConf.clipTopBorderPath;
    }

    // now apply the changes
    if (!doNotApply) {
      elements.startSlice._conf.index = start;
      elements.endSlice._conf.index = end;
      elements.backOuter._conf.index = BackOuterIndex = crossed2Pi && (start <= pi3By2 || end > pi3By2) || start <= pi3By2 && end > pi3By2 ? pi3By2 : start > pi ? start : end;

      elements.frontOuter._conf.index = frontOuterIndex = end <= piBy2 ? end : start > end || start <= piBy2 ? piBy2 : start;
      elements.frontOuter1._conf.index = start;
      elements.frontOuter1._conf.cIndex = pi;
      if (start > end) {
        elements.backOuter._conf.cIndex = start < pi3By2 ? pi3By2 : pi2;
        elements.startSlice._conf.cIndex = start < pi ? (start + pi) / 2 : (start + pi2) / 2;
        elements.endSlice._conf.cIndex = elements.frontOuter._conf.cIndex = 0;
      } else {
        elements.backOuter._conf.cIndex = elements.startSlice._conf.cIndex = elements.endSlice._conf.cIndex = elements.frontOuter._conf.cIndex = middleAngle;
      }

      if (scaleAngle > pi) {
        elements.frontOuter1.show().attr(pathAttrString, pointConf.clipOuterFrontPath1);
      } else {
        elements.frontOuter1.hide();
      }
      pointConf.thisElement._attr(pathAttrString, pointConf.clipTopPath);
      elements.bottom.attr(pathAttrString, pointConf.clipTopPath);
      elements.bottomBorder.attr(pathAttrString, pointConf.clipBottomBorderPath);

      elements.topBorder && elements.topBorder.attr(pathAttrString, pointConf.clipTopBorderPath);
      elements.frontOuter.attr(pathAttrString, pointConf.clipOuterFrontPath);
      elements.backOuter.attr(pathAttrString, pointConf.clipOuterBackPath);

      if (isDoughnut) {
        elements.backInner.attr(pathAttrString, pointConf.clipInnerBackPath);
        elements.frontInner.attr(pathAttrString, pointConf.clipInnerFrontPath);
        elements.backInner._conf.index = BackOuterIndex;
        elements.frontInner._conf.index = frontOuterIndex;
        if (start > end) {
          elements.backInner._conf.cIndex = pi2;
          elements.frontInner._conf.cIndex = 0;
        } else {
          elements.backInner._conf.cIndex = elements.frontInner._conf.cIndex = middleAngle;
        }
      }

      if (Pie3DManager.hasOnePoint) {
        elements.startSlice.hide();
        elements.endSlice.hide();
      } else {
        elements.startSlice.attr(pathAttrString, pointConf.startSlice).show();
        elements.endSlice.attr(pathAttrString, pointConf.endSlice).show();
      }
    }
  };

  Pie3DManager.prototype._setSliceCosmetics = function _setSliceCosmetics(pointConf) {
    var manager = this,
        topElement = pointConf.thisElement,
        showBorderEffect = pointConf.showBorderEffect,
        elements = pointConf.elements,
        colorObj,
        borderColor = convertColor(pointConf.borderColor, (0, _lib.pluckNumber)(pointConf.borderAlpha, pointConf.alpha)),
        borderWidth = pointConf.borderWidth,
        topAttrObj;
    if (!pointConf.color) {
      return;
    }
    colorObj = manager._parseSliceColor(pointConf.color, pointConf.alpha, pointConf);
    if (_lib.hasSVG) {
      topAttrObj = { fill: (0, _lib.toRaphaelColor)(colorObj.top), 'stroke-width': 0 };

      if (showBorderEffect) {
        elements.topBorder.show().attr({
          fill: (0, _lib.toRaphaelColor)(colorObj.topBorder),
          'stroke-width': 0
        });
      } else {
        elements.topBorder.hide();
        topAttrObj.stroke = borderColor;
        topAttrObj['stroke-width'] = borderWidth;
      }

      // top
      topElement._attr(topAttrObj);
    } else {
      topElement._attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.top),
        'stroke-width': 0
      });
      // top border
      elements.topBorder.attr({
        stroke: borderColor,
        'stroke-width': borderWidth
      });
    }

    // bottom
    elements.bottom.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.bottom)
    });

    // bottom
    elements.bottomBorder.attr({
      stroke: borderColor,
      'stroke-width': borderWidth
    });

    elements.frontOuter.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.frontOuter)
    });
    elements.frontOuter1.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.frontOuter)
    });

    // outerback
    elements.backOuter.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.backOuter)
    });

    // startSlice
    // whenAtBack
    elements.startSlice.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.startSlice),
      stroke: borderColor,
      'stroke-width': borderWidth
    });

    // endSlice
    // whenAtBack
    elements.endSlice.attr({
      fill: (0, _lib.toRaphaelColor)(colorObj.endSlice),
      stroke: borderColor,
      'stroke-width': borderWidth
    });
    if (manager.isDoughnut) {
      // innerFront
      elements.frontInner.attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.frontInner)
      });

      elements.backInner.attr({
        fill: (0, _lib.toRaphaelColor)(colorObj.backInner)
      });
    }
  };

  return Pie3DManager;
}(_componentInterface2['default']);

exports['default'] = Pie3DDataset;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._getInnerSize = undefined;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _pie2d = __webpack_require__(68);

var _pie2d2 = _interopRequireDefault(_pie2d);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var COMMASTRING = ',',
    _getInnerSize2 = function _getInnerSize2() {
  var innerradius,
      dataSet = this,
      chart = dataSet.getFromEnv('chart'),
      dataSetConfig = dataSet.config,
      chartAttr = chart.jsonData.chart,
      doughnutRadius = dataSetConfig.doughnutradius,
      use3DLighting = (0, _lib.pluckNumber)(chartAttr.use3dlighting, 1),
      radius3D = use3DLighting ? (0, _lib.pluckNumber)(chartAttr.radius3d, chartAttr['3dradius'], 50) : 100,
      innerpercentR,
      diff50Percent,
      radius3Dpercent,
      pointConfig,
      poin2nd,
      ratioStr,
      x,
      point,
      data,
      length,
      pieMinRadius = dataSetConfig.pieMinRadius;
  if (radius3D > 100) {
    radius3D = 100;
  }
  if (radius3D < 0) {
    radius3D = 0;
  }
  /*
   * Decide inner radius
   */
  if (/%/.test(doughnutRadius)) {
    doughnutRadius = Number(doughnutRadius.split('%')[0]) / 100;
    innerradius = pieMinRadius * doughnutRadius;
  } else if (doughnutRadius <= 0 || doughnutRadius >= pieMinRadius) {
    innerradius = pieMinRadius / 2;
  } else {
    innerradius = doughnutRadius;
  }

  dataSetConfig.innerRadius = innerradius;
  // hcJSON.plotOptions.pie3d.innerSize = hcJSON.plotOptions.pie.innerSize = 2 * innerradius;

  /*
    * Create doughnut type 3d lighting
    */
  if (radius3D > 0 && _lib.hasSVG) {
    // Radial gradient is not supported in VML
    innerpercentR = parseInt(innerradius / pieMinRadius * 100, 10);
    diff50Percent = (100 - innerpercentR) / 2;
    radius3Dpercent = parseInt(diff50Percent * radius3D / 100, 10);
    poin2nd = 2 * (diff50Percent - radius3Dpercent);
    ratioStr = innerpercentR + COMMASTRING + radius3Dpercent + COMMASTRING + poin2nd + COMMASTRING + radius3Dpercent;
    // Loop for all points
    if (dataSet && (data = dataSet.components.data)) {
      for (x = 0, length = data.length; x < length; x += 1) {
        point = data[x];
        pointConfig = point.config;
        if (pointConfig.color) {
          pointConfig.color.ratio = ratioStr;
          if (pointConfig.hoverEffects && pointConfig.hoverEffects.color) {
            pointConfig.hoverEffects.ratio = ratioStr;
          }
        }
      }
    }
  }
  return innerradius * 2;
};

var Doughnut2DDataset = function (_Pie2DDataset) {
  _inherits(Doughnut2DDataset, _Pie2DDataset);

  function Doughnut2DDataset() {
    _classCallCheck(this, Doughnut2DDataset);

    var _this = _possibleConstructorReturn(this, _Pie2DDataset.call(this));

    _this.type = 'doughnut2d';
    return _this;
  }

  Doughnut2DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2DDataset.prototype.__setDefaultConfig && _Pie2DDataset.prototype.__setDefaultConfig.call(this);
    this.config.doughnutradius = '50%';
  };

  Doughnut2DDataset.prototype._parsePiePlotOptions = function _parsePiePlotOptions() {
    var dataSet = this,
        piePlotOptions = _Pie2DDataset.prototype._parsePiePlotOptions.call(this);

    piePlotOptions.innerSize = dataSet._getInnerSize();
    return piePlotOptions;
  };

  Doughnut2DDataset.prototype._getInnerSize = function _getInnerSize() {
    return _getInnerSize2.call(this);
  };

  Doughnut2DDataset.prototype.draw = function draw() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        canvasWidth = chartConfig.canvasWidth,
        canvasHeight = chartConfig.canvasHeight,
        conf = dataSet.config,
        cx = chartConfig.canvasLeft + canvasWidth * 0.5,
        cy = chartConfig.canvasTop + canvasHeight * 0.5,
        r2,
        innerSize,
        centerLabel = dataSet.getFromEnv('centerLabel'),
        centerLabelConfig = conf.centerLabelConfig,
        centerLabelText = centerLabelConfig.label;
    // adding the extra property for donought
    innerSize = conf.innerSize = dataSet._getInnerSize();
    r2 = (innerSize || 0) * 0.5;
    // call the draw function of the pie2d class.
    _Pie2DDataset.prototype.draw.call(this);
    // canterLabel attach child in the chart as object not array
    // draw the centerLabelText
    centerLabelText && r2 && centerLabel && centerLabel.draw(centerLabelText, cx, cy, r2 * 2, r2 * 2, centerLabelConfig, true);
    conf.lastCenterLabelConfig = centerLabelConfig;
  };

  return Doughnut2DDataset;
}(_pie2d2['default']);

exports._getInnerSize = _getInnerSize2;
exports['default'] = Doughnut2DDataset;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(145);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bar2d = __webpack_require__(146);

var _bar2d2 = _interopRequireDefault(_bar2d);

var _column = __webpack_require__(15);

var _column2 = _interopRequireDefault(_column);

var _fusioncharts3 = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var MSBar2D = function (_MSBarCartesian) {
  _inherits(MSBar2D, _MSBarCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSBar2D.getName = function getName() {
    return 'MSBar2D';
  };

  function MSBar2D() {
    _classCallCheck(this, MSBar2D);

    var _this = _possibleConstructorReturn(this, _MSBarCartesian.call(this));

    _this.friendlyName = 'Multi-series Bar Chart';
    _this.hasLegend = true;
    _this.isBar = true;
    _this.defaultDatasetType = 'bar2d';
    return _this;
  }
  /**
   * function to  create dataset, groupmaneger.
   * assign dataset to group manager.
   **/


  MSBar2D.prototype._createDatasets = function _createDatasets() {
    _fusioncharts3._createDatasets.call(this);
  };
  /**
   * This method return the dataset definations for this charts
   */


  MSBar2D.prototype.getDSdef = function getDSdef() {
    return _bar2d2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  MSBar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _column2['default'];
  };

  return MSBar2D;
}(_fusioncharts2['default']);

exports['default'] = MSBar2D;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _area = __webpack_require__(20);

var _area2 = _interopRequireDefault(_area);

var _fusioncharts = __webpack_require__(12);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var MSArea = function (_AreaBase) {
  _inherits(MSArea, _AreaBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  MSArea.getName = function getName() {
    return 'MSArea';
  };

  /** Constructor method of Class MSArea to initialise values **/


  function MSArea() {
    _classCallCheck(this, MSArea);

    var _this = _possibleConstructorReturn(this, _AreaBase.call(this));

    _this.name = 'msarea';
    _this.standaloneInit = true;
    _this.friendlyName = 'Multi-series Area Chart';
    _this.defaultDatasetType = 'area';
    _this.defaultPlotShadow = 0;
    _this.applicableDSList = { 'area': true };
    return _this;
  }
  /** This method return the dataset definations for this charts **/


  MSArea.prototype.getDSdef = function getDSdef() {
    return _area2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  MSArea.prototype.getDSGroupdef = function getDSGroupdef() {
    return undefined;
  };

  return MSArea;
}(_fusioncharts2['default']);

exports['default'] = MSArea;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(98);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _scatter = __webpack_require__(70);

var _scatter2 = _interopRequireDefault(_scatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0;

var Scatter = function (_ScatterBase) {
  _inherits(Scatter, _ScatterBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Scatter.getName = function getName() {
    return 'Scatter';
  };

  function Scatter() {
    _classCallCheck(this, Scatter);

    var _this = _possibleConstructorReturn(this, _ScatterBase.call(this));

    _this.friendlyName = 'Scatter Chart';
    _this.isXY = true;
    _this.standaloneInit = true;
    _this.hasLegend = true;
    _this.defaultZeroPlaneHighlighted = false;
    return _this;
  }

  Scatter.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScatterBase.prototype.__setDefaultConfig && _ScatterBase.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.allowreversexaxis = true;
    config.enablemousetracking = true;
  };

  Scatter.prototype.getDSdef = function getDSdef() {
    return _scatter2['default'];
  };
  // This method return the dataset-group definations for this charts


  Scatter.prototype.getDSGroupdef = function getDSGroupdef() {
    return UNDEF;
  };

  return Scatter;
}(_fusioncharts2['default']);

exports['default'] = Scatter;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _fusioncharts = __webpack_require__(360);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(424);

var _fusioncharts4 = _interopRequireDefault(_fusioncharts3);

var _fusioncharts5 = __webpack_require__(426);

var _fusioncharts6 = _interopRequireDefault(_fusioncharts5);

var _fusioncharts7 = __webpack_require__(427);

var _fusioncharts8 = _interopRequireDefault(_fusioncharts7);

var _fusioncharts9 = __webpack_require__(428);

var _fusioncharts10 = _interopRequireDefault(_fusioncharts9);

var _fusioncharts11 = __webpack_require__(147);

var _fusioncharts12 = _interopRequireDefault(_fusioncharts11);

var _fusioncharts13 = __webpack_require__(219);

var _fusioncharts14 = _interopRequireDefault(_fusioncharts13);

var _fusioncharts15 = __webpack_require__(430);

var _fusioncharts16 = _interopRequireDefault(_fusioncharts15);

var _fusioncharts17 = __webpack_require__(432);

var _fusioncharts18 = _interopRequireDefault(_fusioncharts17);

var _fusioncharts19 = __webpack_require__(23);

var _fusioncharts20 = _interopRequireDefault(_fusioncharts19);

var _fusioncharts21 = __webpack_require__(222);

var _fusioncharts22 = _interopRequireDefault(_fusioncharts21);

var _fusioncharts23 = __webpack_require__(223);

var _fusioncharts24 = _interopRequireDefault(_fusioncharts23);

var _fusioncharts25 = __webpack_require__(224);

var _fusioncharts26 = _interopRequireDefault(_fusioncharts25);

var _fusioncharts27 = __webpack_require__(434);

var _fusioncharts28 = _interopRequireDefault(_fusioncharts27);

var _fusioncharts29 = __webpack_require__(437);

var _fusioncharts30 = _interopRequireDefault(_fusioncharts29);

var _fusioncharts31 = __webpack_require__(438);

var _fusioncharts32 = _interopRequireDefault(_fusioncharts31);

var _fusioncharts33 = __webpack_require__(439);

var _fusioncharts34 = _interopRequireDefault(_fusioncharts33);

var _fusioncharts35 = __webpack_require__(94);

var _fusioncharts36 = _interopRequireDefault(_fusioncharts35);

var _fusioncharts37 = __webpack_require__(69);

var _fusioncharts38 = _interopRequireDefault(_fusioncharts37);

var _fusioncharts39 = __webpack_require__(446);

var _fusioncharts40 = _interopRequireDefault(_fusioncharts39);

var _fusioncharts41 = __webpack_require__(96);

var _fusioncharts42 = _interopRequireDefault(_fusioncharts41);

var _fusioncharts43 = __webpack_require__(225);

var _fusioncharts44 = _interopRequireDefault(_fusioncharts43);

var _fusioncharts45 = __webpack_require__(97);

var _fusioncharts46 = _interopRequireDefault(_fusioncharts45);

var _fusioncharts47 = __webpack_require__(447);

var _fusioncharts48 = _interopRequireDefault(_fusioncharts47);

var _fusioncharts49 = __webpack_require__(149);

var _fusioncharts50 = _interopRequireDefault(_fusioncharts49);

var _fusioncharts51 = __webpack_require__(448);

var _fusioncharts52 = _interopRequireDefault(_fusioncharts51);

var _fusioncharts53 = __webpack_require__(226);

var _fusioncharts54 = _interopRequireDefault(_fusioncharts53);

var _fusioncharts55 = __webpack_require__(227);

var _fusioncharts56 = _interopRequireDefault(_fusioncharts55);

var _fusioncharts57 = __webpack_require__(228);

var _fusioncharts58 = _interopRequireDefault(_fusioncharts57);

var _fusioncharts59 = __webpack_require__(449);

var _fusioncharts60 = _interopRequireDefault(_fusioncharts59);

var _fusioncharts61 = __webpack_require__(452);

var _fusioncharts62 = _interopRequireDefault(_fusioncharts61);

var _fusioncharts63 = __webpack_require__(16);

var _fusioncharts64 = _interopRequireDefault(_fusioncharts63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// export * from './mantle/renderer-javascript/charts-zoomline.js';

// eslint-disable-next-line

// import StackedColumn3DLine from './mantle/renderer-javascript/charts/fusioncharts.stackedcolumn3dline';

// import StackedBar3D from './mantle/renderer-javascript/charts/fusioncharts.stackedbar3d';

// import MSColumn3D from './mantle/renderer-javascript/charts/fusioncharts.mscolumn3d';

// import Bar3D from './mantle/renderer-javascript/charts/fusioncharts.bar3d';
/* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */
_fusioncharts64['default'].addDep(_fusioncharts20['default']);
// import MSColumn3DLineDy from './mantle/renderer-javascript/charts/fusioncharts.mscolumn3dlinedy';
// import StackedColumn3DLineDy from './mantle/renderer-javascript/charts/fusioncharts.stackedcolumn3dlinedy';

// import MSCombi3D from './mantle/renderer-javascript/charts/fusioncharts.mscombi3d';
// import MSColumnLine3D from './mantle/renderer-javascript/charts/fusioncharts.mscolumnline3d';

// import StackedColumn3D from './mantle/renderer-javascript/charts/fusioncharts.stackedcolumn3d';

// import MSBar3D from './mantle/renderer-javascript/charts/fusioncharts.msbar3d';

// import Pareto3D from './mantle/renderer-javascript/charts/fusioncharts.pareto3d';

// import Column3D from './mantle/renderer-javascript/charts/fusioncharts.column3d';

_fusioncharts64['default'].addDep(_fusioncharts26['default']);
_fusioncharts64['default'].addDep(_fusioncharts24['default']);
_fusioncharts64['default'].addDep(_fusioncharts8['default']);
_fusioncharts64['default'].addDep(_fusioncharts6['default']);
_fusioncharts64['default'].addDep(_fusioncharts2['default']);
_fusioncharts64['default'].addDep(_fusioncharts4['default']);
// FusionCharts.addDep(Bar3D);
_fusioncharts64['default'].addDep(_fusioncharts22['default']);
// FusionCharts.addDep(MSBar3D);
_fusioncharts64['default'].addDep(_fusioncharts12['default']);
_fusioncharts64['default'].addDep(_fusioncharts14['default']);
_fusioncharts64['default'].addDep(_fusioncharts16['default']);
_fusioncharts64['default'].addDep(_fusioncharts18['default']);
_fusioncharts64['default'].addDep(_fusioncharts58['default']);
_fusioncharts64['default'].addDep(_fusioncharts60['default']);
// FusionCharts.addDep(Column3D);
// FusionCharts.addDep(MSColumn3D);
_fusioncharts64['default'].addDep(_fusioncharts38['default']);
// FusionCharts.addDep(MSCombi3D);
_fusioncharts64['default'].addDep(_fusioncharts42['default']);
_fusioncharts64['default'].addDep(_fusioncharts30['default']);
// FusionCharts.addDep(StackedColumn3D);
_fusioncharts64['default'].addDep(_fusioncharts36['default']);
_fusioncharts64['default'].addDep(_fusioncharts32['default']);
// FusionCharts.addDep(StackedBar3D);
_fusioncharts64['default'].addDep(_fusioncharts28['default']);
_fusioncharts64['default'].addDep(_fusioncharts34['default']);
// FusionCharts.addDep(MSColumnLine3D);
_fusioncharts64['default'].addDep(_fusioncharts40['default']);
// FusionCharts.addDep(StackedColumn3DLine);
// FusionCharts.addDep(StackedColumn3DLineDy);
_fusioncharts64['default'].addDep(_fusioncharts44['default']);
// FusionCharts.addDep(MSColumn3DLineDy);
_fusioncharts64['default'].addDep(_fusioncharts10['default']);
// FusionCharts.addDep(Pareto3D);
_fusioncharts64['default'].addDep(_fusioncharts46['default']);
_fusioncharts64['default'].addDep(_fusioncharts48['default']);
_fusioncharts64['default'].addDep(_fusioncharts50['default']);
_fusioncharts64['default'].addDep(_fusioncharts52['default']);
_fusioncharts64['default'].addDep(_fusioncharts54['default']);
_fusioncharts64['default'].addDep(_fusioncharts56['default']);
_fusioncharts64['default'].addDep(_fusioncharts62['default']);
_fusioncharts64['default'].addFile('fusioncharts.charts.js');

exports['default'] = _fusioncharts64['default'];
// var Charts = function (FC) {
//   return FC;
// };
//
// export default Charts;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(35);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


/**
 * Class for single series column charts and who depend on this class
 * @type {class}
 */
var Column2D = function (_SSCartesian) {
  _inherits(Column2D, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Column2D.getName = function getName() {
    return 'Column2D';
  };

  /**
   * constructor function of this class
   */


  function Column2D() {
    _classCallCheck(this, Column2D);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.standaloneInit = true;
    _this.friendlyName = 'Column Chart';
    _this.defaultDatasetType = 'column';
    _this.applicableDSList = { 'column': true };
    _this.singleseries = true;
    return _this;
  }
  /**
   * parse defualt configuration of the chart
   */


  Column2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig.call(this);
    this.config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       Column dataset definition
   */


  Column2D.prototype.getDSdef = function getDSdef() {
    return _column2['default'];
  };

  return Column2D;
}(_fusioncharts2['default']);

exports['default'] = Column2D;

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(425);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bar2d = __webpack_require__(146);

var _bar2d2 = _interopRequireDefault(_bar2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */

/**
 * chart API of the Bar2Dn chart
 */
var Bar2D = function (_SSBarCartesian) {
  _inherits(Bar2D, _SSBarCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Bar2D.getName = function getName() {
    return 'Bar2D';
  };

  /**
   * constructor method of this class
   */


  function Bar2D() {
    _classCallCheck(this, Bar2D);

    var _this = _possibleConstructorReturn(this, _SSBarCartesian.call(this));

    _this.friendlyName = 'Bar Chart';
    _this.standaloneInit = true;
    // this.isBar = true;
    _this.defaultDatasetType = 'bar2d';
    _this.singleseries = true;
    return _this;
  }
  /**
   * This set the default configuration for this chart
   */


  Bar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSBarCartesian.prototype.__setDefaultConfig.call(this);
    this.config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @return {class} bar2d dataset definitions
   */


  Bar2D.prototype.getDSdef = function getDSdef() {
    return _bar2d2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   */


  Bar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    // this fn overrides
  };

  return Bar2D;
}(_fusioncharts2['default']);

exports['default'] = Bar2D;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(35);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _fusioncharts3 = __webpack_require__(145);

var BarCartesianMethods = _interopRequireWildcard(_fusioncharts3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */

/**
 * This class is base class for single series bar charts.
 */
var SSBarCartesian = function (_SSCartesian) {
  _inherits(SSBarCartesian, _SSCartesian);

  function SSBarCartesian() {
    _classCallCheck(this, SSBarCartesian);

    return _possibleConstructorReturn(this, _SSCartesian.apply(this, arguments));
  }

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  SSBarCartesian.getName = function getName() {
    return 'SSBarCartesian';
  };

  /**
   * This method create axis compoenents and attach with chart and linked with canvas.
   */


  SSBarCartesian.prototype._createAxes = function _createAxes() {
    BarCartesianMethods._createAxes.call(this);
  };
  /**
   * This method parse all the attributes which are associated with axis compoenents.
   * So that axis compoenents can be configured.
   */


  SSBarCartesian.prototype._feedAxesRawData = function _feedAxesRawData() {
    BarCartesianMethods._feedAxesRawData.call(this);
  };
  /**
  * This method first assigns the entire area of the chart to canvas. Then every component (for example toolbox,
  * caption etc) is asked to allocate its own space. Once every compoenent has had its space allocated, the canvas is
  * assigned the remaining space.
  */


  SSBarCartesian.prototype._spaceManager = function _spaceManager() {
    BarCartesianMethods._spaceManager.call(this);
  };
  /**
   * This function is adjusting value padding depending upon data and axis labels and set dimention to axis
   */


  SSBarCartesian.prototype._postSpaceManagement = function _postSpaceManagement() {
    BarCartesianMethods._postSpaceManagement.call(this);
  };

  return SSBarCartesian;
}(_fusioncharts2['default']);

exports['default'] = SSBarCartesian;

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(35);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _area = __webpack_require__(20);

var _area2 = _interopRequireDefault(_area);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    SEVENTYSTRING = _lib.preDefStr.SEVENTYSTRING;

var Area2D = function (_SSCartesian) {
  _inherits(Area2D, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Area2D.getName = function getName() {
    return 'Area2D';
  };

  function Area2D() {
    _classCallCheck(this, Area2D);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.name = 'line';
    _this.friendlyName = 'Area Chart';
    _this.standaloneInit = true;
    _this.defaultDatasetType = 'area';
    _this.singleseries = true;
    _this.defaultPlotShadow = 0;
    return _this;
  }

  Area2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig && _SSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEF;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEF;
    config.anchorbgalpha = _lib.HUNDREDSTRING;
    config.anchorimagealpha = _lib.HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEF;
    config.anchorbordercolor = UNDEF;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEF;
    config.linealpha = _lib.HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
    config.enablemousetracking = true;
  };
  // This method return the dataset definations for this charts


  Area2D.prototype.getDSdef = function getDSdef() {
    return _area2['default'];
  };
  // // This method return the dataset-group definations for this charts
  // getDSGroupdef (name) {
  //   return UNDEF;
  // }


  return Area2D;
}(_fusioncharts2['default']);

exports['default'] = Area2D;

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(35);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    SEVENTYSTRING = _lib.preDefStr.SEVENTYSTRING;

var Line = function (_SSCartesian) {
  _inherits(Line, _SSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Line.getName = function getName() {
    return 'Line';
  };

  function Line() {
    _classCallCheck(this, Line);

    var _this = _possibleConstructorReturn(this, _SSCartesian.call(this));

    _this.name = 'line';
    _this.friendlyName = 'Line Chart';
    _this.standaloneInit = true;
    _this.defaultPlotShadow = 1;
    _this.singleseries = true;
    _this.axisPaddingLeft = 0;
    _this.axisPaddingRight = 0;
    _this.defaultDatasetType = 'line';
    return _this;
  }

  Line.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _SSCartesian.prototype.__setDefaultConfig && _SSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.anchorborderthickness = 1;
    config.anchorimageurl = UNDEF;
    config.anchorimagepadding = 1;
    config.anchorsides = 1;
    config.anchoralpha = UNDEF;
    config.anchorbgalpha = _lib.HUNDREDSTRING;
    config.anchorimagealpha = _lib.HUNDREDSTRING;
    config.anchorimagescale = 100;
    config.anchorstartangle = 90;
    config.anchorshadow = 0;
    config.anchorbgcolor = UNDEF;
    config.anchorbordercolor = UNDEF;
    config.anchorradius = 3;
    config.showvalues = 1;
    config.plotfillalpha = SEVENTYSTRING;
    config.linedashlen = 5;
    config.linedashgap = 4;
    config.linedashed = UNDEF;
    config.linealpha = _lib.HUNDREDSTRING;
    config.linethickness = 2;
    config.drawfullareaborder = 1;
    config.connectnulldata = 0;
    config.zeroplanethickness = 1;
    config.enablemousetracking = true;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
  };
  // This method return the dataset definations for this charts


  Line.prototype.getDSdef = function getDSdef() {
    return _line2['default'];
  };
  // // This method return the dataset-group definations for this charts
  // getDSGroupdef (name) {
  //   return UNDEF;
  // }


  return Line;
}(_fusioncharts2['default']);

exports['default'] = Line;

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._setCategories = exports._createDatasets = undefined;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(57);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _pareto = __webpack_require__(429);

var _cartesian = __webpack_require__(22);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var NINETYSTRING = _lib.preDefStr.NINETYSTRING;

function _setCategories2() {
  var iapi = this,
      dataObj = iapi.jsonData,
      dataset = dataObj.dataset,
      numberFormatter = iapi.getFromEnv('number-formatter'),
      xAxis = iapi.getChildren('xAxis'),
      data = dataObj.data || dataset && dataset[0].data || [],
      catArr = [],
      datum,
      dataLen = data.length,
      i,
      vLine = {};

  // iterate all data and remove null and vlines
  for (i = dataLen - 1; i >= 0; i--) {
    datum = data[i];
    if (datum.vline === 'true' || datum.vline === '1' || datum.vline === 1 || datum.vline === true) {
      vLine[i] = datum;
      data.splice(i, 1);
    } else if (numberFormatter.getCleanValue(datum.value, true) === null) {
      data.splice(i, 1);
    }
  }

  // Sort the original data
  data.sort(function (a, b) {
    return numberFormatter.getCleanValue(b.value, true) - numberFormatter.getCleanValue(a.value, true);
  });

  // clone the sorted data for categories
  catArr = data.slice();
  // add the v lines
  for (i in vLine) {
    catArr.splice(i, 0, vLine[i]);
  }
  xAxis[0].setCategory(catArr);
}

/**
 * function to  create dataset.
 * assign dataset to vCanvas.
 **/
function _createDatasets() {
  var iapi = this,
      children = iapi.getChildren(),
      chartAttr = iapi.getFromEnv('chart-attrib'),
      canvas = children.canvas[0],
      datasetParent = canvas.getChildren('vCanvas'),
      dataObj = iapi.jsonData,
      dataset = dataObj.dataset,
      showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1),
      data = dataObj.data || dataset && dataset[0].data,
      DSClass,
      datasetJSON;

  datasetJSON = {
    data: data
  };

  if (!(data && data.length !== 0)) {
    iapi.setChartMessage();
    return;
  }
  DSClass = iapi.getDSdef('column');
  (0, _lib.datasetFactory)(datasetParent[0], DSClass, 'dataset', 1, [datasetJSON]);
  if (showCumulativeLine) {
    DSClass = iapi.getDSdef('line');
    (0, _lib.datasetFactory)(datasetParent[1], DSClass, 'dataset', 1, [datasetJSON], [1]);
  }
}

var Pareto2D = function (_MSDyBaseCartesian) {
  _inherits(Pareto2D, _MSDyBaseCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Pareto2D.getName = function getName() {
    return 'Pareto2D';
  };

  function Pareto2D() {
    _classCallCheck(this, Pareto2D);

    var _this = _possibleConstructorReturn(this, _MSDyBaseCartesian.call(this));

    _this.defaultDatasetType = 'column';
    _this.singleseries = true;
    _this.hasLegend = false;
    _this.isPercentage = true;
    _this._createDatasets = _createDatasets;
    return _this;
  }

  Pareto2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSDyBaseCartesian.prototype.__setDefaultConfig && _MSDyBaseCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.plotfillalpha = NINETYSTRING;
    config.enablemousetracking = true;
  };

  Pareto2D.prototype._setCategories = function _setCategories() {
    _setCategories2.call(this);
  };

  Pareto2D.prototype._createAxes = function _createAxes() {
    var iapi = this,
        children,
        k,
        chartAttr = iapi.getFromEnv('chart-attrib'),
        showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1),
        canvas = iapi.getChildren('canvas')[0],
        zoomObj = {
      zoomable: true,
      pannable: true
    },
        yAxis,
        xAxis;

    (0, _lib.componentFactory)(iapi, _cartesian2['default'], 'xAxis');
    children = iapi.getChildren();
    xAxis = children.xAxis[0];

    canvas.attachAxis(xAxis, false, iapi.zoomX ? zoomObj : {});

    if (showCumulativeLine) {
      (0, _lib.componentFactory)(iapi, _cartesian2['default'], 'yAxis', 2);
      yAxis = iapi.getChildren('yAxis');
      canvas.attachAxis(yAxis[0], true, iapi.zoomY ? zoomObj : {});
      canvas.attachAxis(yAxis[1], true, iapi.zoomY ? zoomObj : {});
      yAxis && yAxis[1].setAxisConfig({
        isPercent: true,
        drawLabels: true,
        drawPlotLines: true,
        drawAxisName: true,
        drawAxisLine: true,
        drawPlotBands: true,
        drawTrendLines: true,
        drawTrendLabels: true
      });
    } else {
      (0, _lib.componentFactory)(iapi, _cartesian2['default'], 'yAxis');
      yAxis = iapi.getChildren('yAxis');
      for (k = yAxis.length - 1; k >= 0; k--) {
        if (yAxis[k].getState('removed') !== true) {
          canvas.attachAxis(yAxis[k], true, iapi.zoomY ? zoomObj : {});
        } else {
          canvas.detachAxis(yAxis[k]);
        }
      }
    }

    iapi._setCategories();
  };

  Pareto2D.prototype.getDSdef = function getDSdef(name) {
    return name === 'column' ? _pareto.ParetoColumnDataset : _pareto.ParetoLineDataset;
  };
  // This method return the dataset-group definations for this charts


  Pareto2D.prototype.getDSGroupdef = function getDSGroupdef() {
    // this fn overrides
  };

  return Pareto2D;
}(_fusioncharts2['default']);

exports['default'] = Pareto2D;
exports._createDatasets = _createDatasets;
exports._setCategories = _setCategories2;

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ParetoLineDataset = exports.ParetoColumnDataset = undefined;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _lib = __webpack_require__(5);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var PLOTBORDERCOLOR = 'plotBorderColor',
    PLOTGRADIENTCOLOR = 'plotGradientColor',
    SHOWSHADOW = 'showShadow',
    UNDEF = void 0,
    math = Math,
    mathMin = math.min,
    mathMax = math.max,
    mathAbs = math.abs,
    convertColor = _lib.graphics.convertColor,
    getLightColor = _lib.graphics.getLightColor;

var ParetoColumnDataset = function (_ColumnDataset) {
  _inherits(ParetoColumnDataset, _ColumnDataset);

  function ParetoColumnDataset() {
    _classCallCheck(this, ParetoColumnDataset);

    return _possibleConstructorReturn(this, _ColumnDataset.apply(this, arguments));
  }

  ParetoColumnDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.JSONData = datasetJSON;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        xAxis = dataSet.getFromEnv('xAxis'),
        JSONData = dataSet.JSONData,
        setDataArr = JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = setDataLen,
        chartAttr = dataSet.getFromEnv('chart-attrib'),
        colorM = dataSet.getFromEnv('color-manager'),
        index = dataSet.index || dataSet.positionIndex,
        showplotborder,
        plotColor = colorM.getPlotColor(index),
        plotBorderDash = (0, _lib.pluckNumber)(JSONData.dashed, chartAttr.plotborderdashed),
        usePlotGradientColor = (0, _lib.pluckNumber)(chartAttr.useplotgradientcolor, 1),
        showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1),
        yAxisName = (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
        xAxisName = (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
        formatedVal,
        parserConfig,
        setTooltext,
        macroIndices,
        tempPlotfillAngle,
        toolText,
        plotDashLen,
        plotDashGap,
        plotBorderThickness,
        isRoundEdges,
        showHoverEffect,
        plotfillAngle,
        plotFillAlpha,
        plotFillRatio,
        plotgradientcolor,
        plotBorderAlpha,
        plotBorderColor,
        plotBorderDashStyle,
        initailPlotBorderDashStyle,
        setData,
        setValue,
        dataObj,
        config,
        colorArr,
        dataStore = dataSet.components.data,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        setDisplayValue,
        is3D = chart.is3D,
        hoverColor,
        hoverAlpha,
        hoverGradientColor,
        hoverRatio,
        hoverAngle,
        hoverBorderColor,
        hoverBorderAlpha,
        hoverBorderThickness,
        hoverBorderDashed,
        hoverBorderDashGap,
        hoverBorderDashLen,
        hoverDashStyle,
        hoverColorArr,
        enableAnimation,
        setDataDashed,
        setDataPlotDashLen,
        setDataPlotDashGap,
        i,
        maxValue = -Infinity,
        minValue = +Infinity,
        displayValue,
        displayValuePercent,
        sumValue = 0,
        value,
        catObj,
        cleanArr = [],
        cumulativeSumValue = 0,
        useDataPlotColorForLabels,
        tooltipSepChar = conf.tootipSepChar = (0, _lib.pluck)(chartAttr.tooltipsepchar, ', ');

    conf.defaultPadding = {
      left: 0.5,
      right: 0.5
    };
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showShadow = isRoundEdges || is3D ? (0, _lib.pluckNumber)(chartAttr.showshadow, 1) : (0, _lib.pluckNumber)(chartAttr.showshadow, colorM.getColor(SHOWSHADOW));
    conf.useDataPlotColorForLabels = useDataPlotColorForLabels = (0, _lib.pluckNumber)(chartAttr.usedataplotcolorforlabels, 0);
    conf.use3dlineshift = (0, _lib.pluckNumber)(chartAttr.use3dlineshift, chart.use3dlineshift);

    showplotborder = conf.showplotborder = (0, _lib.pluckNumber)(chartAttr.showplotborder, is3D ? 0 : 1);
    conf.plotDashLen = plotDashLen = (0, _lib.pluckNumber)(chartAttr.plotborderdashlen, 5);
    conf.plotDashGap = plotDashGap = (0, _lib.pluckNumber)(chartAttr.plotborderdashgap, 4);
    conf.plotfillangle = plotfillAngle = (0, _lib.pluckNumber)(360 - chartAttr.plotfillangle, 90);
    conf.plotfillalpha = plotFillAlpha = (0, _lib.pluck)(chartAttr.plotfillalpha, _lib.HUNDREDSTRING);
    conf.plotColor = plotColor;
    conf.isRoundEdges = isRoundEdges = (0, _lib.pluckNumber)(chartAttr.useroundedges, 0);
    conf.plotRadius = (0, _lib.pluckNumber)(chartAttr.useRoundEdges, conf.isRoundEdges ? 1 : 0);
    conf.plotfillratio = plotFillRatio = (0, _lib.pluck)(chartAttr.plotfillratio);
    conf.plotgradientcolor = plotgradientcolor = (0, _lib.getDefinedColor)(chartAttr.plotgradientcolor, colorM.getColor(PLOTGRADIENTCOLOR));
    !usePlotGradientColor && (plotgradientcolor = '');
    conf.plotborderalpha = plotBorderAlpha = showplotborder && !is3D ? (0, _lib.pluck)(chartAttr.plotborderalpha, plotFillAlpha, _lib.HUNDREDSTRING) : 0;
    conf.plotbordercolor = plotBorderColor = (0, _lib.pluck)(chartAttr.plotbordercolor, is3D ? '#ffffff' : colorM.getColor(PLOTBORDERCOLOR));
    conf.plotborderthickness = plotBorderThickness = (0, _lib.pluckNumber)(chartAttr.plotborderthickness, 1);
    conf.plotBorderDashStyle = initailPlotBorderDashStyle = plotBorderDash ? (0, _lib.getDashStyle)(plotDashLen, plotDashGap) : 'none';
    conf.showValues = (0, _lib.pluckNumber)(chartAttr.showvalues, 1);
    conf.definedGroupPadding = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent), 0);
    conf.plotSpacePercent = mathMax((0, _lib.pluckNumber)(chartAttr.plotspacepercent, 20) % 100, 0);
    conf.maxcolwidth = (0, _lib.pluckNumber)(chartAttr.maxcolwidth, 50);
    conf.plotpaddingpercent = (0, _lib.pluckNumber)(chartAttr.plotpaddingpercent);
    conf.placevaluesinside = (0, _lib.pluckNumber)(chartAttr.placevaluesinside, 0);
    conf.use3dlighting = (0, _lib.pluckNumber)(chartAttr.use3dlighting, 1);
    conf.parentYAxis = 0;

    dataSet.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, 1) === 1);
    dataSet.setState('dirty', true);

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }
    // Get the sum value and create the clean Array of value
    for (i = 0; i < len; i++) {
      value = mathAbs(numberFormatter.getCleanValue(setDataArr[i].value));
      sumValue += value;
      cleanArr[i] = (0, _lib.extend2)({}, setDataArr[i]);
      cleanArr[i].value = value;
    }
    // Sort the clean Array of values
    cleanArr.sort(function (a, b) {
      return b.value - a.value;
    });

    conf.imageCount = 0;
    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      setData = cleanArr[i];
      dataObj = dataStore[i];
      if (!dataObj) {
        dataObj = dataStore[i] = {
          graphics: {}
        };
      }
      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }
      setValue = mathAbs(numberFormatter.getCleanValue(setData.value));
      if (setValue === null) {
        continue;
      }
      config = dataObj && dataObj.config;
      catObj = xAxis.getLabel(i);
      config.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(catObj.label)));
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.setValue = setValue;
      config.setLink = (0, _lib.pluck)(setData.link);
      config.setDisplayValue = setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      cumulativeSumValue += config.setValue;
      displayValue = numberFormatter.dataLabels(setValue);

      setDataDashed = (0, _lib.pluckNumber)(setData.dashed);
      setDataPlotDashLen = (0, _lib.pluckNumber)(setData.dashlen, plotDashLen);
      setDataPlotDashGap = plotDashGap = (0, _lib.pluckNumber)(setData.dashgap, plotDashGap);

      config.plotBorderDashStyle = plotBorderDashStyle = setDataDashed === 1 ? (0, _lib.getDashStyle)(setDataPlotDashLen, setDataPlotDashGap) : setDataDashed === 0 ? 'none' : initailPlotBorderDashStyle;
      plotColor = colorM.getPlotColor(i);
      plotColor = (0, _lib.pluck)(setData.color, plotColor);
      plotFillRatio = (0, _lib.pluck)(setData.ratio, conf.plotfillratio);
      plotFillAlpha = (0, _lib.pluck)(setData.alpha, conf.plotfillalpha);

      plotBorderAlpha = (0, _lib.pluck)(setData.alpha, conf.plotborderalpha);
      // Setting the angle for plot fill for negative data
      if (setValue < 0 && !isRoundEdges) {
        tempPlotfillAngle = plotfillAngle;
        plotfillAngle = 360 - plotfillAngle;
      }

      // Setting the color Array to be applied to the bar/column.
      config.colorArr = colorArr = _lib.graphics.getColumnColor(plotColor + ',' + plotgradientcolor, plotFillAlpha, plotFillRatio, plotfillAngle, isRoundEdges, plotBorderColor, plotBorderAlpha.toString(), 0, !!is3D);
      if (showHoverEffect !== 0) {
        hoverColor = (0, _lib.pluck)(setData.hovercolor, chartAttr.plotfillhovercolor, chartAttr.columnhovercolor, plotColor);
        hoverAlpha = (0, _lib.pluck)(setData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.columnhoveralpha, plotFillAlpha);
        hoverGradientColor = (0, _lib.pluck)(setData.hovergradientcolor, chartAttr.plothovergradientcolor, plotgradientcolor);
        !hoverGradientColor && (hoverGradientColor = '');
        hoverRatio = (0, _lib.pluck)(setData.hoverratio, chartAttr.plothoverratio, plotFillRatio);
        hoverAngle = (0, _lib.pluckNumber)(360 - setData.hoverangle, 360 - JSONData.hoverangle, 360 - chartAttr.plothoverangle, plotfillAngle);
        hoverBorderColor = (0, _lib.pluck)(setData.borderhovercolor, chartAttr.plotborderhovercolor, plotBorderColor);
        hoverBorderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, chartAttr.plotfillhoveralpha, plotBorderAlpha, plotFillAlpha);
        hoverBorderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, plotBorderThickness);
        hoverBorderDashed = (0, _lib.pluckNumber)(setData.borderhoverdashed, chartAttr.plotborderhoverdashed);
        hoverBorderDashGap = (0, _lib.pluckNumber)(setData.borderhoverdashgap, chartAttr.plotborderhoverdashgap, plotDashLen);
        hoverBorderDashLen = (0, _lib.pluckNumber)(setData.borderhoverdashlen, chartAttr.plotborderhoverdashlen, plotDashGap);
        hoverDashStyle = hoverBorderDashed ? (0, _lib.getDashStyle)(hoverBorderDashLen, hoverBorderDashGap) : plotBorderDashStyle;

        /* If no hover effects are explicitly defined and
         * showHoverEffect is not 0 then hoverColor is set.
         */
        if (showHoverEffect == 1 && hoverColor === plotColor) {
          hoverColor = getLightColor(hoverColor, 70);
        }

        // setting the hover color array which is always applied except
        // when showHoverEffect is not 0.
        hoverColorArr = _lib.graphics.getColumnColor(hoverColor + ',' + hoverGradientColor, hoverAlpha, hoverRatio, hoverAngle, isRoundEdges, hoverBorderColor, hoverBorderAlpha.toString(), 0, !!is3D);

        config.setRolloutAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(colorArr[0]) : [(0, _lib.toRaphaelColor)(colorArr[0]), !conf.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(colorArr[1]),
          'stroke-width': plotBorderThickness,
          'stroke-dasharray': plotBorderDashStyle
        };
        config.setRolloverAttr = {
          fill: !is3D ? (0, _lib.toRaphaelColor)(hoverColorArr[0]) : [(0, _lib.toRaphaelColor)(hoverColorArr[0]), !conf.use3dlighting],
          stroke: showplotborder && (0, _lib.toRaphaelColor)(hoverColorArr[1]),
          'stroke-width': hoverBorderThickness,
          'stroke-dasharray': hoverDashStyle
        };
      }

      useDataPlotColorForLabels && xAxis.updateCategory(i, {
        labelfontcolor: convertColor(plotColor)
      });
      config.displayValue = (0, _lib.pluck)(setDisplayValue, displayValue);
      setTooltext = config.setTooltext = config.origToolText = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, chartAttr.plottooltext)));
      config.toolTipValue = numberFormatter.dataLabels(setValue, conf.parentYAxis);
      config._x = i;
      config._y = setValue;

      formatedVal = config.toolTipValue;
      maxValue = mathMax(maxValue, setValue);
      minValue = mathMin(minValue, setValue);
      // Parsing tooltext against various configurations provided by the user.
      if (!showTooltip) {
        toolText = false;
      } else {
        if (!conf.showTooltip) {
          toolText = false;
        } else if (setTooltext !== UNDEF) {
          parserConfig = {
            formattedValue: formatedVal,
            label: config.label,
            yaxisName: yAxisName,
            xaxisName: xAxisName,
            cumulativeValue: cumulativeSumValue,
            cumulativeDataValue: numberFormatter.dataLabels(cumulativeSumValue),
            cumulativePercentValue: displayValuePercent,
            sum: numberFormatter.dataLabels(sumValue),
            unformattedSum: sumValue
          };
          macroIndices = [1, 2, 3, 5, 6, 7, 20, 21, 22, 23, 24, 25];
          toolText = (0, _lib.parseTooltext)(setTooltext, macroIndices, parserConfig, setData, chartAttr);
        } else {
          // determine the dispalay value then
          toolText = config.label ? config.label + tooltipSepChar : '';
        }
        config.toolText = toolText;
      }
      config.toolText = toolText;
      config.tooltext = setTooltext;
      config.setTooltext = toolText;
      tempPlotfillAngle && (plotfillAngle = tempPlotfillAngle);
    }
    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  return ParetoColumnDataset;
}(_column2['default']);

var ParetoLineDataset = function (_LineDataset) {
  _inherits(ParetoLineDataset, _LineDataset);

  function ParetoLineDataset() {
    _classCallCheck(this, ParetoLineDataset);

    return _possibleConstructorReturn(this, _LineDataset.apply(this, arguments));
  }

  ParetoLineDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.JSONData = datasetJSON;
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        conf = dataSet.config,
        xAxis = dataSet.getFromEnv('xAxis'),
        JSONData = dataSet.JSONData,
        setDataArr = JSONData.data,
        setDataLen = setDataArr && setDataArr.length,
        len = setDataLen,
        chartAttr = dataSet.getFromEnv('chart-attrib'),
        colorM = dataSet.getFromEnv('color-manager'),
        showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1),
        yAxisName = (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
        xAxisName = (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
        formatedVal,
        parserConfig,
        setTooltext,
        macroIndices,
        toolText,
        isRoundEdges,
        setData,
        setValue,
        dataObj,
        config,
        dataStore = dataSet.components.data,
        numberFormatter = dataSet.getFromEnv('number-formatter'),
        is3D = chart.is3D,
        enableAnimation,
        lineDashStyle,
        i,
        maxValue = -Infinity,
        minValue = +Infinity,
        displayValuePercent,
        sumValue = 0,
        value,
        catObj,
        cleanArr = [],
        cumulativeSumValue = 0,
        tooltipSepChar = conf.tootipSepChar = (0, _lib.pluck)(chartAttr.tooltipsepchar, ', '),
        anchorProps;

    conf.defaultPadding = {
      left: 0.5,
      right: 0.5
    };
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.valuePadding = (0, _lib.pluckNumber)(chartAttr.valuepadding, 2);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showShadow = isRoundEdges || is3D ? (0, _lib.pluckNumber)(chartAttr.showshadow, 1) : (0, _lib.pluckNumber)(chartAttr.showshadow, colorM.getColor(SHOWSHADOW));
    conf.useDataPlotColorForLabels = (0, _lib.pluckNumber)(chartAttr.usedataplotcolorforlabels, 0);
    conf.use3dlineshift = (0, _lib.pluckNumber)(chartAttr.use3dlineshift, chart.use3dlineshift);

    conf.linecolor = (0, _lib.getFirstColor)((0, _lib.pluck)(chartAttr.linecolor, colorM.getColor(PLOTBORDERCOLOR)));
    conf.linethickness = (0, _lib.pluckNumber)(chartAttr.linethickness, 2);
    conf.linealpha = (0, _lib.pluck)(chartAttr.linealpha, _lib.HUNDREDSTRING);
    conf.linedashed = (0, _lib.pluckNumber)(chartAttr.linedashed, 0);
    conf.linedashlen = (0, _lib.pluckNumber)(JSONData.linedashlen, chartAttr.linedashlen, 5);
    conf.linedashgap = (0, _lib.pluckNumber)(JSONData.linedashgap, chartAttr.linedashgap, 4);
    lineDashStyle = (0, _lib.getDashStyle)(conf.linedashlen, conf.linedashgap);
    conf.lineDashStyle = conf.linedashed ? lineDashStyle : 'none';
    conf.drawanchors = (0, _lib.pluckNumber)(chartAttr.drawanchors, chartAttr.showanchors);
    conf.anchorbgcolor = (0, _lib.pluck)(chartAttr.anchorbgcolor, colorM.getColor('anchorBgColor'));
    conf.anchorbordercolor = (0, _lib.pluck)(chartAttr.anchorbordercolor, conf.linecolor);
    conf.anchorradius = (0, _lib.pluckNumber)(chartAttr.anchorradius, 3);
    conf.anchoralpha = (0, _lib.pluck)(chartAttr.anchoralpha);
    conf.anchorbgalpha = (0, _lib.pluck)(chartAttr.anchorbgalpha, 100);
    conf.anchorborderthickness = (0, _lib.pluck)(chartAttr.anchorborderthickness, 1);
    conf.anchorsides = (0, _lib.pluck)(chartAttr.anchorsides, 0);
    // Anchor image cosmetics attributes
    conf.anchorimageurl = (0, _lib.pluck)(chartAttr.anchorimageurl);
    conf.anchorimagealpha = (0, _lib.pluckNumber)(chartAttr.anchorimagealpha, 100);
    conf.anchorimagescale = (0, _lib.pluckNumber)(chartAttr.anchorimagescale, 100);
    conf.anchorimagepadding = (0, _lib.pluckNumber)(chartAttr.anchorimagepadding, 1);
    conf.anchorstartangle = (0, _lib.pluckNumber)(chartAttr.anchorstartangle, 90);
    conf.parentYAxis = 1;
    conf.valuePosition = (0, _lib.pluck)(chartAttr.valueposition, 'auto');
    conf.showvalues = conf.showValues = (0, _lib.pluckNumber)(chartAttr.showlinevalues, chartAttr.showvalues, 1);

    dataSet.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, 1) === 1);
    dataSet.setState('dirty', true);

    if (conf.showShadow) {
      conf.shadow = {
        opacity: conf.lineAlpha / 100
      };
    }
    conf.showCumulativeLine = (0, _lib.pluckNumber)(chartAttr.showcumulativeline, 1);
    conf.maxRadius = -Infinity;

    if (!dataStore) {
      dataStore = dataSet.components.data = [];
    }
    // Get the sum value and create the clean Array of value
    for (i = 0; i < len; i++) {
      value = mathAbs(numberFormatter.getCleanValue(setDataArr[i].value));
      sumValue += value;
      cleanArr[i] = (0, _lib.extend2)({}, setDataArr[i]);
      cleanArr[i].value = value;
    }
    // Sort the clean Array of values
    cleanArr.sort(function (a, b) {
      return b.value - a.value;
    });

    conf.imageCount = 0;
    // Parsing the attributes and values at set level.
    for (i = 0; i < len; i++) {
      setData = cleanArr[i];
      dataObj = dataStore[i];
      if (!dataObj) {
        dataObj = dataStore[i] = {
          graphics: {}
        };
      }
      if (!dataObj.config) {
        config = dataStore[i].config = {};
      }
      setValue = mathAbs(numberFormatter.getCleanValue(setData.value));
      if (setValue === null) {
        continue;
      }
      config = dataObj && dataObj.config;
      catObj = xAxis.getLabel(i);
      config.label = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(catObj.label)));
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.setValue = setValue;
      config.setLink = (0, _lib.pluck)(setData.link);
      config.setDisplayValue = (0, _lib.parseUnsafeString)(setData.displayvalue);
      cumulativeSumValue += config.setValue;

      setValue = config.setValue = cumulativeSumValue / sumValue * 100;
      displayValuePercent = numberFormatter.percentValue(setValue);
      config.toolTipValue = displayValuePercent;
      config.displayValue = displayValuePercent;
      config.valuePosition = (0, _lib.pluck)(setData.valueposition, conf.valuePosition);
      config.anchorProps = this._parseAnchorProperties(i, cleanArr);
      config.hoverEffects = this._parseHoverEffectOptions(dataObj);
      anchorProps = config.anchorProps;
      conf.maxRadius = Math.max(conf.maxRadius, anchorProps.radius + anchorProps.borderThickness / 2);
      config._x = i;
      config._y = setValue;
      // setTooltext = config.setTooltext = getValidValue(parseUnsafeString(
      //     pluck(setData.cumulativeplottooltext, chartAttr.cumulativeplottooltext)));

      formatedVal = config.toolTipValue;
      maxValue = mathMax(maxValue, setValue);
      minValue = mathMin(minValue, setValue);
      // Parsing tooltext against various configurations provided by the user.
      if (!showTooltip) {
        toolText = false;
      } else {
        if (!conf.showTooltip) {
          toolText = false;
        } else if (setTooltext !== UNDEF) {
          parserConfig = {
            formattedValue: formatedVal,
            label: config.label,
            yaxisName: yAxisName,
            xaxisName: xAxisName,
            cumulativeValue: cumulativeSumValue,
            cumulativeDataValue: numberFormatter.dataLabels(cumulativeSumValue),
            cumulativePercentValue: displayValuePercent,
            sum: numberFormatter.dataLabels(sumValue),
            unformattedSum: sumValue
          };
          macroIndices = [1, 2, 3, 5, 6, 7, 20, 21, 22, 23, 24, 25];
          toolText = (0, _lib.parseTooltext)(setTooltext, macroIndices, parserConfig, setData, chartAttr);
        } else {
          // determine the dispalay value then
          toolText = config.label ? config.label + tooltipSepChar : '';
        }
        config.toolText = toolText;
      }
      config.toolText = toolText;
      config.tooltext = setTooltext;
      config.setTooltext = toolText;
    }
    conf.maxValue = maxValue;
    conf.minValue = minValue;
  };

  return ParetoLineDataset;
}(_line2['default']);

exports.ParetoColumnDataset = ParetoColumnDataset;
exports.ParetoLineDataset = ParetoLineDataset;

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(147);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _doughnut2d = __webpack_require__(221);

var _doughnut2d2 = _interopRequireDefault(_doughnut2d);

var _centerlabel = __webpack_require__(431);

var _centerlabel2 = _interopRequireDefault(_centerlabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Doughnut2D = function (_Pie2D) {
  _inherits(Doughnut2D, _Pie2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Doughnut2D.getName = function getName() {
    return 'Doughnut2D';
  };

  function Doughnut2D() {
    _classCallCheck(this, Doughnut2D);

    var _this = _possibleConstructorReturn(this, _Pie2D.call(this));

    _this.friendlyName = 'Doughnut Chart';
    _this.defaultDatasetType = 'Doughnut2D';
    return _this;
  }

  Doughnut2D.prototype.configure = function configure(dataObj) {
    _Pie2D.prototype.configure.call(this, dataObj);
    var iapi = this,
        dataset = iapi.getChildren('dataset')[0],
        centerLabel = void 0;
    if (!(centerLabel = iapi.getChildren('centerLabel'))) {
      centerLabel = iapi.attachChild(new _centerlabel2['default'](), 'centerLabel', false);
      iapi.addToEnv('centerLabel', centerLabel);
      centerLabel.setLinkedItem('dataset', dataset);
    }
  };

  Doughnut2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie2D.prototype.__setDefaultConfig && _Pie2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.singletonPlaceValue = false;
  };

  Doughnut2D.prototype.getDSdef = function getDSdef() {
    return _doughnut2d2['default'];
  };

  return Doughnut2D;
}(_fusioncharts2['default']);

exports['default'] = Doughnut2D;

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _componentInterface = __webpack_require__(6);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _eventApi = __webpack_require__(7);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF = void 0,
    docMode8 = window.document.documentMode === 8,
    HIDDEN = 'hidden',
    VISIBLE = docMode8 ? 'visible' : '';

var CenterLabel = function (_ComponentInterface) {
  _inherits(CenterLabel, _ComponentInterface);

  function CenterLabel() {
    _classCallCheck(this, CenterLabel);

    return _possibleConstructorReturn(this, _ComponentInterface.apply(this, arguments));
  }

  /**
   * function to draw label on given co-ordinate.
   * it may take optional label text if it is required.
   * In case of specific label text when it is needed; for example:
   * custom label text on hover on a plot we can set optional label text
   * @param  {number} cx                        x co-ordinate
   * @param  {number} cy                        y co-ordinate
   * @param  {number} dx                        x co-ordinate displacement
   * @param  {number} dy                        y co-ordinate displacement
   * @param  {boolean} [updateConfig = false]   update prev config or not
   * @param  {text} optionalLabel               optional label text
   */
  CenterLabel.prototype.draw = function draw(labelText, cx, cy, dx, dy, centerLabelConfig, updateConfig) {
    var centerLabel = this,
        chart = centerLabel.getFromEnv('chart'),
        dataSet = centerLabel.getLinkedItem('dataset'),
        seriesData = dataSet.config,
        labelConfig = centerLabelConfig || seriesData.lastCenterLabelConfig,
        paper = centerLabel.getFromEnv('paper'),
        smartLabel = centerLabel.getFromEnv('smartLabel'),
        chartGraphics = chart.getGraphicalElement(),
        grp = chartGraphics.datasetGroup,
        labelPadding = labelConfig.padding,
        textpadding = labelConfig.textPadding * 2,
        cssObj = {
      fontFamily: labelConfig.font,
      fontSize: labelConfig.fontSize + 'px',
      lineHeight: 1.2 * labelConfig.fontSize + 'px',
      fontWeight: labelConfig.bold ? 'bold' : '',
      fontStyle: labelConfig.italic ? 'italic' : ''
    },
        txtW = (dx * 0.5 - labelPadding) * 1.414 - textpadding,
        txtH = (dy * 0.5 - labelPadding) * 1.414 - textpadding,
        element,
        smartLabelObj,
        labelOvalBg;
    smartLabel.setStyle(cssObj);
    smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
    smartLabelObj = smartLabel.getSmartText(labelText, txtW, txtH);

    if (!(element = chartGraphics.doughnutCenterLabel)) {
      labelConfig.bgOval && (chartGraphics.centerLabelOvalBg = labelOvalBg = paper.circle(cx, cy, dx * 0.5 - labelPadding, grp));
      element = chartGraphics.doughnutCenterLabel = paper.text(grp).hover(centerLabel._centerLabelRollover, centerLabel._centerLabelRollout).click(centerLabel._centerLabelClick);
      // TODO: Fix reference issue
      element.chart = chart;
    } else {
      element.attr('text') !== labelText && centerLabel.centerLabelChange(labelText);
      labelOvalBg = chartGraphics.centerLabelOvalBg;
    }

    if (labelText) {
      element.css(cssObj).attr({
        x: cx,
        y: cy,
        text: smartLabelObj.text,
        visibility: VISIBLE,
        direction: seriesData.textDirection,
        // title: labelConfig.toolText ? '' : smartLabelObj.tooltext || '',
        fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.color,
            alpha: labelConfig.alpha
          }
        }),
        'text-bound': labelConfig.bgOval ? 'none' : [(0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.bgColor,
            alpha: labelConfig.bgAlpha
          }
        }), (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.borderColor,
            alpha: labelConfig.borderAlpha
          }
        }), labelConfig.borderThickness, labelConfig.textPadding, labelConfig.borderRadius]
      }).tooltip(labelConfig.toolText || smartLabelObj.tooltext);

      if (labelConfig.bgOval) {
        labelOvalBg && labelOvalBg.attr({
          visibility: VISIBLE,
          fill: (0, _lib.hashify)(labelConfig.bgColor),
          'fill-opacity': labelConfig.bgAlpha / 100,
          stroke: (0, _lib.hashify)(labelConfig.borderColor),
          'stroke-width': labelConfig.borderThickness,
          'stroke-opacity': labelConfig.borderAlpha / 100
        });
      }
    } else {
      element.attr('visibility', HIDDEN);
      labelOvalBg && labelOvalBg.attr('visibility', HIDDEN);
    }

    if (updateConfig) {
      seriesData.lastCenterLabelConfig = labelConfig;
      seriesData.centerLabelConfig = labelConfig;
    }
  };
  /**
   * callback function on mouse over event
   */


  CenterLabel.prototype._centerLabelRollover = function _centerLabelRollover() {
    var chart = this.chart,
        chartConfig = chart.config,
        dataSet = chart.getChildren('dataset')[0],
        chartInstance = chart.chartInstance,
        seriesData = dataSet.config,
        ref = chartInstance.ref,
        labelConfig = seriesData.lastCenterLabelConfig,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: chart.linkedItems.container,
      centerLabelText: labelConfig && labelConfig.label
    };
    /**
     * This event is fired on mouse rollover on label at center of doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelRollover
     *
     * @param {string} centerLabelText - is the text for display at center label
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.attr('text') && (0, _eventApi.triggerEvent)('centerLabelRollover', chartInstance, eventArgs, UNDEF, chart.hoverOnCenterLabel);
  };
  /**
   * callback function on mouse out event
   */


  CenterLabel.prototype._centerLabelRollout = function _centerLabelRollout() {
    var chart = this.chart,
        chartConfig = chart.config,
        dataSet = chart.getChildren('dataset')[0],
        chartInstance = chart.chartInstance,
        ref = chartInstance.ref,
        seriesData = dataSet.config,
        labelConfig = seriesData.lastCenterLabelConfig,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: chart.linkedItems.container,
      centerLabelText: labelConfig && labelConfig.label
    };
    /**
     * This event is fired on mouse rollout from label at center of
     * doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelRollout
     *
     * @param {string} centerLabelText - is the text for display at center label
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.attr('text') && (0, _eventApi.triggerEvent)('centerLabelRollout', chartInstance, eventArgs, UNDEF, chart.hoverOffCenterLabel);
  };
  /**
   * callback function on mouse click event
   */


  CenterLabel.prototype._centerLabelClick = function _centerLabelClick() {
    var chart = this.chart,
        chartConfig = chart.config,
        chartInstance = chart.chartInstance,
        ref = chartInstance.ref,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: chart.linkedItems.container
    },
        labelConfig,
        seriesData,
        datasets = [];

    chart.iterateComponents(function (child) {
      if (child.getType() === 'dataset') {
        datasets.push(child);
      }
    });
    seriesData = datasets[0].config;
    labelConfig = seriesData.lastCenterLabelConfig;
    eventArgs.centerLabelText = labelConfig && labelConfig.label;

    /**
     * This event is fired on click on label at center of doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelClick
     *
     * @param {string} centerLabelText - is the text for display at center label.
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked.
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    this.attr('text') && (0, _eventApi.triggerEvent)('centerLabelClick', chartInstance, eventArgs);
  };
  /**
   * helper function to draw
   * when element is present but text is changed then this function is excuted
   * @param  {text} labelText label text
   */


  CenterLabel.prototype.centerLabelChange = function centerLabelChange(labelText) {
    var centerLabel = this,
        chart = centerLabel.getFromEnv('chart'),
        chartConfig = chart.config,
        chartInstance = chart.chartInstance,
        ref = chartInstance.ref,
        eventArgs = {
      height: chartConfig.height,
      width: chartConfig.width,
      pixelHeight: ref.offsetHeight,
      pixelWidth: ref.offsetWidth,
      id: chartInstance.id,
      renderer: chartInstance.args.renderer,
      container: chart.linkedItems.container,
      centerLabelText: labelText
    };
    /**
     * This event is fired on change of label at center of doughnut 2D.
     *
     * > Available on `doughnut` chart only.
     *
     * @group chart:pie-center-label
     * @event FusionCharts#centerLabelChanged
     *
     * @param {string} centerLabelText - is the text for display at center label
     * @param {number} chartX - is the relative X-Cordinate to chart container where the chart was clicked
     * @param {number} chartY - is the relative Y-Cordinate to chart container where the chart was clicked.
     * @param {string} container - is the DOM element where the chart is being rendered.
     * @param {numeric|percent} height - height of the chart
     * @param {numeric|percent} width - width of the chart
     * @param {string} id - is the chart id
     * @param {number} pageX - is the relative X-Cordinate to screen where the chart is clicked
     * @param {number} pageY - is the relative Y-Cordinate to screen where the chart is clicked
     * @param {number} pixelHeight - is the height of the DOM element where the chart is being rendered in
     * pixels
     * @param {number} pixelWidth - is the width of the DOM element where the chart is being rendered in
     * pixels
     * @param {string} renderer - tells if the chart is rendered using JavaScript or Flash
     */
    (0, _eventApi.triggerEvent)('centerLabelChanged', chartInstance, eventArgs);
  };
  /**
   * callback function to centerLabelRollover event
   */


  CenterLabel.prototype.hoverOnCenterLabel = function hoverOnCenterLabel() {
    var chart = this.chart,
        dataSet = chart.getChildren('dataset')[0],
        seriesData = dataSet.config,
        labelConfig = seriesData.lastCenterLabelConfig;

    if (labelConfig.hoverColor || labelConfig.hoverAlpha) {
      this.attr({ fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.hoverColor || labelConfig.color,
            alpha: labelConfig.hoverAlpha || labelConfig.alpha
          }
        })
      });
    }
  };
  /**
   * callback function to centerLabelRollout event
   */


  CenterLabel.prototype.hoverOffCenterLabel = function hoverOffCenterLabel() {
    var chart = this.chart,
        chartComponents = chart.components,
        dataSet = chartComponents.dataset[0],
        seriesData = dataSet.config,
        labelConfig = seriesData.lastCenterLabelConfig;

    if (labelConfig.hoverColor || labelConfig.hoverAlpha) {
      this.attr({ fill: (0, _lib.toRaphaelColor)({
          FCcolor: {
            color: labelConfig.color,
            alpha: labelConfig.alpha
          }
        })
      });
    }
  };

  return CenterLabel;
}(_componentInterface2['default']);

exports['default'] = CenterLabel;

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(219);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _doughnut3d = __webpack_require__(433);

var _doughnut3d2 = _interopRequireDefault(_doughnut3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Doughnut3D = function (_Pie3D) {
  _inherits(Doughnut3D, _Pie3D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Doughnut3D.getName = function getName() {
    return 'Doughnut3D';
  };

  function Doughnut3D() {
    _classCallCheck(this, Doughnut3D);

    var _this = _possibleConstructorReturn(this, _Pie3D.call(this));

    _this.friendlyName = '3D Doughnut Chart';
    _this.defaultDatasetType = 'Doughnut3D';
    return _this;
  }

  Doughnut3D.prototype.getDSdef = function getDSdef() {
    return _doughnut3d2['default'];
  };

  return Doughnut3D;
}(_fusioncharts2['default']);

exports['default'] = Doughnut3D;

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _pie3d = __webpack_require__(220);

var _pie3d2 = _interopRequireDefault(_pie3d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Doughnut3DDataset = function (_Pie3DDataset) {
  _inherits(Doughnut3DDataset, _Pie3DDataset);

  function Doughnut3DDataset() {
    _classCallCheck(this, Doughnut3DDataset);

    var _this = _possibleConstructorReturn(this, _Pie3DDataset.call(this));

    _this.type = 'doughnut3d';
    return _this;
  }

  Doughnut3DDataset.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Pie3DDataset.prototype.__setDefaultConfig && _Pie3DDataset.prototype.__setDefaultConfig.call(this);
    this.config.doughnutradius = '50%';
  };

  Doughnut3DDataset.prototype._configurePie3DManager = function _configurePie3DManager() {
    var dataSet = this,
        dataSetConfig = dataSet.config,
        dataSetComponents = dataSet.components,
        pie3DManager = dataSet.getFromEnv('pie3DManager'),
        data = dataSetComponents.data;

    if (pie3DManager) {
      pie3DManager.configure(dataSetConfig.pieSliceDepth, data.length === 1, dataSetConfig.use3DLighting, true);
    }
  };

  return Doughnut3DDataset;
}(_pie3d2['default']);

exports['default'] = Doughnut3DDataset;

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(223);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(18);

var _cartesian2 = _interopRequireDefault(_cartesian);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedArea2D = function (_MSArea) {
  _inherits(StackedArea2D, _MSArea);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedArea2D.getName = function getName() {
    return 'StackedArea2D';
  };

  function StackedArea2D() {
    _classCallCheck(this, StackedArea2D);

    var _this = _possibleConstructorReturn(this, _MSArea.call(this));

    _this.friendlyName = 'Stacked Area Chart';
    _this.showsum = 0;
    return _this;
  }

  StackedArea2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSArea.prototype.__setDefaultConfig && _MSArea.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.plotfillalpha = _lib.HUNDREDSTRING;
    config.isstacked = 1;
  };

  /** This method return the dataset-group definations for this charts **/


  StackedArea2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedArea2D;
}(_fusioncharts2['default']);

exports['default'] = StackedArea2D;

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(23);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _cartesian = __webpack_require__(18);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedColumn2D = function (_MSColumn2D) {
  _inherits(StackedColumn2D, _MSColumn2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn2D.getName = function getName() {
    return 'StackedColumn2D';
  };

  function StackedColumn2D() {
    _classCallCheck(this, StackedColumn2D);

    var _this = _possibleConstructorReturn(this, _MSColumn2D.call(this));

    _this.friendlyName = 'Stacked Column Chart';
    return _this;
  }

  StackedColumn2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSColumn2D.prototype.__setDefaultConfig && _MSColumn2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.isstacked = true;
  };

  /** This method return the dataset definations for this charts **/


  StackedColumn2D.prototype.getDSdef = function getDSdef() {
    return _column2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  StackedColumn2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedColumn2D;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn2D;

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(222);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(18);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var StackedBar2D = function (_MSBar2D) {
  _inherits(StackedBar2D, _MSBar2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedBar2D.getName = function getName() {
    return 'StackedBar2D';
  };

  function StackedBar2D() {
    _classCallCheck(this, StackedBar2D);

    var _this = _possibleConstructorReturn(this, _MSBar2D.call(this));

    _this.friendlyName = 'Stacked Bar Chart';
    return _this;
  }

  StackedBar2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSBar2D.prototype.__setDefaultConfig && _MSBar2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.enablemousetracking = true;
    config.maxbarheight = 50;
    config.isstacked = true;
  };
  /** This method return the dataset-group definations for this charts **/


  StackedBar2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return StackedBar2D;
}(_fusioncharts2['default']);

exports['default'] = StackedBar2D;

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(14);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _marimekko = __webpack_require__(440);

var _marimekko2 = _interopRequireDefault(_marimekko);

var _marimekkoStack = __webpack_require__(441);

var _marimekkoStack2 = _interopRequireDefault(_marimekkoStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


/**
 * class for Marimekko chartAPI
 */
var Marimekko = function (_MSCartesian) {
  _inherits(Marimekko, _MSCartesian);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Marimekko.getName = function getName() {
    return 'Marimekko';
  };

  /**
   * Constructor funtion for Marimekko chartAPI
   */


  function Marimekko() {
    _classCallCheck(this, Marimekko);

    var _this = _possibleConstructorReturn(this, _MSCartesian.call(this));

    _this.friendlyName = 'Marimekko Chart';
    _this.isValueAbs = true;
    _this.distributedColumns = true;
    _this.stack100percent = true;
    _this.defaultDatasetType = 'marimekko';
    _this.isStacked = true;
    _this.showsum = 1;
    return _this;
  }

  /**
   * Function to create dataset of marimekko chart and add some property to the group manager.
   */


  Marimekko.prototype._createDatasets = function _createDatasets() {
    _MSCartesian.prototype._createDatasets.call(this);
    var iapi = this,
        children = iapi.getChildren(),
        canvas = children.canvas[0],
        vCanvas = canvas.getChildren('vCanvas')[0],
        dsType = iapi.defaultDatasetType || '',
        manager = vCanvas.getChildren('datasetGroup_' + dsType)[0];

    manager.addToEnv('categories', iapi.jsonData.categories);
  };

  /**
   * Set default chart configuration
   */


  Marimekko.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCartesian.prototype.__setDefaultConfig && _MSCartesian.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.isstacked = true;
    config.showpercentvalues = 0;
    config.usepercentdistribution = 1;
    config.showsum = 1;
    config.enablemousetracking = true;
  };

  /**
   * This method return the dataset definations for this charts
   * @return {Object} Column dataset definition
   */


  Marimekko.prototype.getDSdef = function getDSdef() {
    return _marimekko2['default'];
  };

  /**
   * This method return the dataset-group definations for this charts
   * @return {Object} Multiseries column group definition
   */


  Marimekko.prototype.getDSGroupdef = function getDSGroupdef() {
    return _marimekkoStack2['default'];
  };

  return Marimekko;
}(_fusioncharts2['default']);

exports['default'] = Marimekko;

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


var dropHash = _lib.regex.dropHypeash,
    math = Math,
    mathRound = math.round,
    mathAbs = math.abs,
    getLightColor = _lib.graphics.getLightColor;
/**
 * class for Marimekko dataset
 */

var MarimekkoDataset = function (_ColumnDataset) {
  _inherits(MarimekkoDataset, _ColumnDataset);

  /**
   * Constructor function of MarimekkoDataset
   */
  function MarimekkoDataset() {
    _classCallCheck(this, MarimekkoDataset);

    var _this = _possibleConstructorReturn(this, _ColumnDataset.call(this));

    _this.type = 'marimekko';
    _this.groupName = 'column';
    return _this;
  }

  /**
   * Function to configure the dataset
   * @param  {Object} datasetJSON JSON for dataset configurations
   */


  MarimekkoDataset.prototype.configure = function configure(datasetJSON) {
    (0, _lib.fcEach)(datasetJSON.data, function (obj) {
      if (obj) {
        obj.value = mathAbs(obj.value);
      }
    });

    _ColumnDataset.prototype.configure.call(this, datasetJSON);
  };

  /**
   * Function to register datasets in the internal data store of legend class.
   */


  MarimekkoDataset.prototype._addLegend = function _addLegend() {
    var dataset = this,
        strokeColor,
        fillColor,
        config,
        conf = dataset.config,
        legend = dataset.getFromEnv('legend'),
        color = conf.legendSymbolColor;
    strokeColor = getLightColor(color, 60).replace(dropHash, _lib.HASHSTRING);
    fillColor = {
      FCcolor: {
        color: color,
        angle: 0,
        ratio: '0',
        alpha: '100'
      }
    };
    config = {
      enabled: conf.includeInLegend,
      type: dataset.type,
      fillColor: (0, _lib.toRaphaelColor)(fillColor),
      strokeColor: (0, _lib.toRaphaelColor)(strokeColor),
      rawFillColor: color,
      label: (0, _lib.getFirstValue)(dataset.JSONData.seriesname)
    };
    dataset.legendItemId = legend.addItems(dataset, dataset.legendInteractivity, config);
  };

  /**
   * Function returns the nearest dataset index
   * @param {number} searchElementIndex The derived search index as per the mouse postion
   * @param {Array} arr Has the information about each stack
   * @return {number} The found dataset index
   */


  MarimekkoDataset.prototype.searchIndex = function searchIndex(searchElementIndex, arr) {
    var dataset = this,

    // chart = dataset.chart,
    xAxis = dataset.getFromEnv('xAxis'),
        minIndex = 0,
        len = arr.length - 1,
        maxIndex = len,
        currentIndex,
        currentElementIndex;

    while (minIndex <= maxIndex) {
      currentIndex = Math.round((minIndex + maxIndex) / 2) || 0;
      currentElementIndex = xAxis.getAxisPosition(arr[currentIndex].x) + arr[currentIndex].columnWidth / 2;

      if (currentElementIndex < searchElementIndex) {
        minIndex = currentIndex + 1;
      } else if (currentElementIndex > searchElementIndex) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }
    return minIndex;
  };

  /**
   * Function that return the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
  */


  MarimekkoDataset.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        groupManager = dataset.getLinkedParent(),
        stackConf = groupManager.getstackConf(),

    // chart = dataset.chart,
    chartConfig = dataset.getFromEnv('chartConfig'),
        configManager = groupManager.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        showPlotBorder = chartConfig.showplotborder,
        len = stackConf.length - 1,
        halfPlotBorderThickness,
        xPos,
        returnValue,
        datasetIndex;

    plotBorderThickness = showPlotBorder ? plotBorderThickness : 0;
    halfPlotBorderThickness = plotBorderThickness / 2;
    halfPlotBorderThickness = halfPlotBorderThickness % 2 === 0 ? halfPlotBorderThickness + 1 : Math.round(halfPlotBorderThickness);
    xPos = chartX + halfPlotBorderThickness;
    datasetIndex = returnValue && configManager.datasetIndex || dataset.searchIndex(xPos, stackConf);
    // save dataIndex to prevent unnecessary search
    configManager.datasetIndex || (configManager.datasetIndex = datasetIndex);
    // Checking for overlap between two cosecutive column plots along x-axis
    returnValue = dataset._checkPointerOverColumn(datasetIndex, chartX, chartY);
    // delete dataIndex
    returnValue ? delete configManager.datasetIndex : dataset.index === len && delete configManager.datasetIndex;

    return returnValue;
  };

  /**
   * Over-writting the function
   * @return {Object} returning the this object to avoid lint error
   */


  MarimekkoDataset.prototype.setColumnPosition = function setColumnPosition() {
    return this;
  };

  /**
   * Setting the width, xPos of the individual column data such that the corresponding stacks share a common boundary
   * @param {number} xPos The pre-calculated x position
   * @param {number} yPos The pre-calculated y position
   * @param {number} height The pre-calculated height position
   * @param {number} index The index of the data
   * @return {Object} the calculated xPos, yPos, width and height
   */


  MarimekkoDataset.prototype.fineTunePlotDimension = function fineTunePlotDimension(xPos, yPos, height, index) {
    var dataSet = this,
        parent = dataSet.getLinkedParent(),
        stackConf = parent.getstackConf(),
        width = stackConf[index].columnWidth,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        plotBorderThickness = chartConfig.plotborderthickness,
        canvas = chart.getChildren('canvas')[0].config,
        canvasBorderWidth = canvas.canvasBorderWidth,
        hasValidCanvasBorder = canvasBorderWidth > 0,
        canvasRight = chartConfig.canvasRight,
        canvasTop = chartConfig.canvasTop,
        canvasLeft = chartConfig.canvasLeft;

    xPos -= width / 2;
    if (parseInt(yPos) <= canvasTop) {
      height -= canvasTop - yPos - +hasValidCanvasBorder;
      yPos = canvasTop - +hasValidCanvasBorder;
    }

    if (plotBorderThickness <= 1) {
      // in case xPos is right of canvas-left position -
      // normalize
      if (mathRound(xPos) <= canvasLeft) {
        width += xPos;
        xPos = canvasLeft - plotBorderThickness / 2 + +!!plotBorderThickness - +hasValidCanvasBorder;
        width -= xPos;
      }
      // in case plot exceeds canvas-right position -
      // normalize width
      if (mathRound(xPos + width) >= canvasRight) {
        width = canvasRight - xPos + plotBorderThickness / 2 - +!!plotBorderThickness + +hasValidCanvasBorder;
      }
    }

    return {
      xPos: xPos,
      yPos: yPos,
      width: width,
      height: height
    };
  };

  return MarimekkoDataset;
}(_column2['default']);

exports['default'] = MarimekkoDataset;

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _cartesianStack = __webpack_require__(18);

var _cartesianStack2 = _interopRequireDefault(_cartesianStack);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


/**
 * class for marimekko group manager
 */
var MarimekkoStackgroup = function (_CartesianStackgroup) {
  _inherits(MarimekkoStackgroup, _CartesianStackgroup);

  function MarimekkoStackgroup() {
    _classCallCheck(this, MarimekkoStackgroup);

    return _possibleConstructorReturn(this, _CartesianStackgroup.apply(this, arguments));
  }

  /**
   * Function to return the stackConf of groupmanager
   * @return {Object} configurations
   */
  MarimekkoStackgroup.prototype.getstackConf = function getstackConf() {
    return this.config.stackConf;
  };

  /**
   * This function returns an array containing the percent values of individual stack
   * @return {Array} conatains the total value of each stack in percentage
   */


  MarimekkoStackgroup.prototype.getStackSumPercent = function getStackSumPercent() {
    var manager = this,
        config = manager.config,
        stackSumValue = config.stackValues,
        totalSumValue = config.totalSumValue,
        i,
        numberFormatter = manager.getFromEnv('number-formatter'),
        categories = manager.getFromEnv('categories')[0].category,
        setUserWidth = config.setUserWidth,
        arr = [];
    for (i = 0; i < stackSumValue.length; i++) {
      if (setUserWidth) {
        arr[i] = numberFormatter.getCleanValue(categories[i].widthpercent);
      } else {
        arr[i] = stackSumValue[i].positive / totalSumValue * 100;
      }
    }
    return arr;
  };

  /**
   * Draw function of group manager
   */


  MarimekkoStackgroup.prototype.draw = function draw() {
    _CartesianStackgroup.prototype.draw.call(this);
    this.drawLabel();
  };

  /**
   * Function to create container for labels
   */


  MarimekkoStackgroup.prototype.createContainer = function createContainer() {
    _CartesianStackgroup.prototype.createContainer.call(this);
    var manager = this,
        paper = manager.getFromEnv('paper'),
        parent = manager.getLinkedParent();

    !manager.getContainer('commonLabelContainer') && manager.addContainer('commonLabelContainer', paper.group('manager-commonLabelContainer', parent.getChildContainer('vcanvasLabelGroup')));
  };

  /**
   * This function draws the cumulative percentage labels appearing at bottom right of the stack
   */


  MarimekkoStackgroup.prototype.drawLabel = function drawLabel() {
    var manager = this,
        config = manager.config,
        smartLabel = manager.getFromEnv('smartLabel'),
        stackPercentValues = manager.getStackSumPercent(),
        stackConf = config.stackConf,
        xPos,
        yPos,
        index,
        commonLabelContainer = manager.getContainer('commonLabelContainer'),
        numberFormatter = manager.getFromEnv('number-formatter'),
        percentValue = 0,
        formatedPercentValue,
        attr,
        paper = manager.getFromEnv('paper'),
        chartConfig = manager.getFromEnv('chartConfig'),
        canvasBottom = chartConfig.canvasBottom,
        xAxis = manager.getFromEnv('xAxis'),
        inCanvasStyle = manager.getFromEnv('style'),
        style = chartConfig.dataLabelStyle,
        length = stackPercentValues.length,
        bBoxObj,
        labelEle,
        sumValues = config.stackValues,
        borderColor,
        bgColor,
        borderThickness,
        showXAxisPercentValues = chartConfig.showXAxisPercentValues,
        labels = manager.getGraphicalElement('commonLabels') || [],
        animationObj = chartConfig.animationObj,
        animType = animationObj.animType,
        prevLabelLen = labels.length;

    smartLabel.setStyle(style);
    if (showXAxisPercentValues) {
      bgColor = (0, _lib.pluck)(style.backgroundColor, '#ffffff');
      borderColor = (0, _lib.pluck)(style.borderColor === _lib.BLANKSTRING ? '#' + inCanvasStyle.inCancolor : style.borderColor, '#000000');
      borderThickness = (0, _lib.pluck)(style.borderThickness, 1);
      for (index = 0; index < length - 1; index++) {
        percentValue += stackPercentValues[index];
        formatedPercentValue = numberFormatter.percentValue(percentValue);
        xPos = xAxis.getAxisPosition(stackConf[index].x) + stackConf[index].columnWidth / 2;
        yPos = canvasBottom;
        labelEle = labels[index];
        if (sumValues[index].positive === sumValues[index].negative) {
          formatedPercentValue = '';
          if (labelEle) {
            labelEle.hide();
          }
          continue;
        }
        attr = {
          text: formatedPercentValue,
          fill: style.color,
          'text-bound': [bgColor, borderColor, borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
          'line-height': style.lineHeight,
          visibility: _lib.visibleStr
        };

        bBoxObj = smartLabel.getOriSize(formatedPercentValue);

        yPos = yPos - bBoxObj.height / 2 - borderThickness;
        attr.x = xPos;
        attr.y = yPos;
        if (!labelEle) {
          manager.addGraphicalElement('commonLabels', paper.text(attr, commonLabelContainer), true);
        } else {
          labelEle.show();
          manager.getFromEnv('animationManager').registerAnimation([{
            animType: animType,
            data: [{
              el: labelEle,
              attrs: attr
            }]
          }], 'default');
        }
      }

      for (var i = index; i < prevLabelLen; i++) {
        labels[i].hide();
      }
    }
  };

  /**
   * Helper function for determining the xPos of sumLabel
   * @param {number} index The index of the sumLabel
   * @return {number} x-position
   */


  MarimekkoStackgroup.prototype._getXpos = function _getXpos(index) {
    var manager = this,
        xAxis = manager.getFromEnv('xAxis');
    return xAxis.getAxisPosition(manager.config.stackConf[index].x);
  };

  /**
   * Function to set column width and position of all the stacks
   */


  MarimekkoStackgroup.prototype._setStackPosition = function _setStackPosition() {
    _CartesianStackgroup.prototype._setStackPosition.call(this);
    var manager = this,
        config = manager.config,
        k,
        stackSumValue = config.stackValues,
        categories = manager.getFromEnv('categories')[0].category,
        setUserWidth,
        sum = 0,
        positionStackConfig,
        catObj,
        percentValue,
        numberFormatter = manager.getFromEnv('number-formatter'),
        sumPercent = 0,
        x,
        tempX,
        sumValue = 0,
        canvasWidth = manager.getFromEnv('chartConfig').canvasWidth,
        xAxis = manager.getFromEnv('xAxis'),
        range = xAxis.getVisibleConfig(),
        xMin = range.min,
        xMax = range.max,
        diff = xMax - xMin,
        stackConf = config.stackConf || (config.stackConf = []),
        len;
    tempX = xMin;
    for (k = 0, len = stackSumValue.length; k < len; k++) {
      sumValue += stackSumValue[k].positive;
    }
    config.totalSumValue = sumValue;
    for (k = 0; k < categories.length; k++) {
      catObj = categories[k];
      if (catObj.widthpercent) {
        sum += numberFormatter.getCleanValue(catObj.widthpercent);
      }
    }
    if (sum === 100) {
      setUserWidth = config.setUserWidth = 1;
    }
    for (k = 0, len = stackSumValue.length; k < len; k++) {
      catObj = categories[k];
      if (!(positionStackConfig = stackConf[k])) {
        positionStackConfig = stackConf[k] = {};
      }
      if (setUserWidth) {
        percentValue = numberFormatter.getCleanValue(catObj.widthpercent) / 100;
      } else {
        percentValue = stackSumValue[k].positive / sumValue;
      }
      positionStackConfig.columnWidth = percentValue * canvasWidth;
      sumPercent = sumPercent + percentValue;
      x = percentValue * diff / 2 + tempX;
      tempX = sumPercent * diff + xMin;
      positionStackConfig.x = x;
      xAxis.updateCategory(k, { x: x });
    }
  };

  return MarimekkoStackgroup;
}(_cartesianStack2['default']);

exports['default'] = MarimekkoStackgroup;

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(69);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _column = __webpack_require__(8);

var _column2 = _interopRequireDefault(_column);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

var _cartesian = __webpack_require__(18);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEFINED = void 0;

var StackedColumn2DLine = function (_MSCombi2D) {
  _inherits(StackedColumn2DLine, _MSCombi2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  StackedColumn2DLine.getName = function getName() {
    return 'StackedColumn2DLine';
  };

  function StackedColumn2DLine() {
    _classCallCheck(this, StackedColumn2DLine);

    var _this = _possibleConstructorReturn(this, _MSCombi2D.call(this));

    _this.friendlyName = 'Stacked Column and Line Chart';
    _this.defaultDatasetType = 'column';
    return _this;
  }

  StackedColumn2DLine.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _MSCombi2D.prototype.__setDefaultConfig && _MSCombi2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.isstacked = true;
    config.stack100percent = 0;
    config.enablemousetracking = true;
  };
  /**
   * This method return the dataset definations for this charts
   * @param  {string} name type of dataset class
   * @return {Object}      dataset class
   */


  StackedColumn2DLine.prototype.getDSdef = function getDSdef(name) {
    return name === 'line' ? _line2['default'] : _column2['default'];
  };
  /**
   * This method return the dataset-group definations for this charts
   * @param  {string} name is type of dataset group
   * @return {Object} <dataset group class>     dataset group class
   */


  StackedColumn2DLine.prototype.getDSGroupdef = function getDSGroupdef(name) {
    return name === 'column' ? _cartesian2['default'] : UNDEFINED;
  };
  /**
   * function to return dataset type applicable for this chart
   * @param   {string}  name  dataset type
   * @return  {string}        dataset type applicable for this chart
   */


  StackedColumn2DLine.prototype.getDSType = function getDSType(name) {
    return name && name.toLowerCase() === 'line' ? 'line' : 'column';
  };

  return StackedColumn2DLine;
}(_fusioncharts2['default']);

exports['default'] = StackedColumn2DLine;

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(97);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _cartesian = __webpack_require__(18);

var _cartesian2 = _interopRequireDefault(_cartesian);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


/**
 * Creates ScrollStackedColumn2D class
 */
var ScrollStackedColumn2D = function (_ScrollColumn2D) {
  _inherits(ScrollStackedColumn2D, _ScrollColumn2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  ScrollStackedColumn2D.getName = function getName() {
    return 'ScrollStackedColumn2D';
  };

  /**
   * Constructor fn of ScrollStackedColumn2D class
   */


  function ScrollStackedColumn2D() {
    _classCallCheck(this, ScrollStackedColumn2D);

    var _this = _possibleConstructorReturn(this, _ScrollColumn2D.call(this));

    _this.friendlyName = 'Scrollable Stacked Column Chart';
    _this.canvasborderthickness = 1;
    _this.tooltipConstraint = 'plot';
    _this.avgScrollPointWidth = 75;
    return _this;
  }
  /**
   * Sets default chart configuration
   */


  ScrollStackedColumn2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScrollColumn2D.prototype.__setDefaultConfig && _ScrollColumn2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.isstacked = true;
  };
  /**
   * Return Dataset Group class
   * @return {Class} CartesianStackGroup class
   */


  ScrollStackedColumn2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return _cartesian2['default'];
  };

  return ScrollStackedColumn2D;
}(_fusioncharts2['default']);

exports['default'] = ScrollStackedColumn2D;

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(149);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _line = __webpack_require__(11);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * Creates ScrollLine2D class
 */
var ScrollLine2D = function (_ScrollArea2D) {
  _inherits(ScrollLine2D, _ScrollArea2D);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  ScrollLine2D.getName = function getName() {
    return 'ScrollLine2D';
  };

  /**
   * Constructor fn of ScrollLine2D class
   */


  function ScrollLine2D() {
    _classCallCheck(this, ScrollLine2D);

    var _this = _possibleConstructorReturn(this, _ScrollArea2D.call(this));

    _this.friendlyName = 'Scrollable Multi-series Line Chart';
    _this.tooltipConstraint = 'plot';
    _this.canvasborderthickness = 1;
    _this.defaultDatasetType = 'line';
    _this.avgScrollPointWidth = 75;
    _this.defaultPlotShadow = 1;
    _this.binSize = 0;
    return _this;
  }

  /**
   * Sets default chart configuration
   */


  ScrollLine2D.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _ScrollArea2D.prototype.__setDefaultConfig && _ScrollArea2D.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.zeroplanethickness = 1;
    config.zeroplanealpha = 40;
    config.showzeroplaneontop = 0;
    config.enablemousetracking = true;
  };

  /** This method return the dataset definations for this charts **/


  ScrollLine2D.prototype.getDSdef = function getDSdef() {
    return _line2['default'];
  };
  /** This method return the dataset-group definations for this charts **/


  ScrollLine2D.prototype.getDSGroupdef = function getDSGroupdef() {
    return undefined;
  };

  return ScrollLine2D;
}(_fusioncharts2['default']);

exports['default'] = ScrollLine2D;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(228);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _bubble = __webpack_require__(450);

var _bubble2 = _interopRequireDefault(_bubble);

var _bubble3 = __webpack_require__(451);

var _bubble4 = _interopRequireDefault(_bubble3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var Bubble = function (_Scatter) {
  _inherits(Bubble, _Scatter);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  Bubble.getName = function getName() {
    return 'Bubble';
  };

  function Bubble() {
    _classCallCheck(this, Bubble);

    var _this = _possibleConstructorReturn(this, _Scatter.call(this));

    _this.friendlyName = 'Bubble Chart';
    return _this;
  }

  Bubble.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _Scatter.prototype.__setDefaultConfig && _Scatter.prototype.__setDefaultConfig.call(this);
    var config = this.config;
    if (!config) {
      config = this.config = {};
    }
    config.enablemousetracking = true;
  };

  // This method return the dataset definations for this charts


  Bubble.prototype.getDSdef = function getDSdef() {
    return _bubble2['default'];
  };

  Bubble.prototype.getDSGroupdef = function getDSGroupdef() {
    return _bubble4['default'];
  };

  return Bubble;
}(_fusioncharts2['default']);

exports['default'] = Bubble;

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _scatter = __webpack_require__(70);

var _scatter2 = _interopRequireDefault(_scatter);

var _lib = __webpack_require__(5);

var _kdtree = __webpack_require__(93);

var _kdtree2 = _interopRequireDefault(_kdtree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var UNDEF,
    convertColor = _lib.graphics.convertColor,

// ROLLOUT = 'DataPlotRollOut',
// hot/tracker threshold in pixels
HTP = _lib.hasTouch ? _lib.TOUCH_THRESHOLD_PIXELS : _lib.CLICK_THRESHOLD_PIXELS,

// add the tools thats are requared
EVENTARGS = 'eventArgs',
    visibleStr = _lib.preDefStr.visibleStr,
    SETROLLOVERATTR = _lib.preDefStr.setRolloverAttrStr,
    SETROLLOUTATTR = _lib.preDefStr.setRolloutAttrStr,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathPow = math.pow,
    getLightColor = _lib.graphics.getLightColor,
    defined = function defined(obj) {
  return obj !== UNDEF && obj !== null;
},

/*
* valueX, valueY are the compontents of the setlevel data.
* pointObj - Object to store the regression configuration specific to that dataset.
*/
pointValueWatcher = function pointValueWatcher(valueX, valueY, pointObj) {
  var obj = pointObj.obj || (pointObj.obj = {}),
      objX = pointObj.objX || (pointObj.objX = {}),
      itemValueX,
      itemValueY;
  // update the max and min calculations.
  if (valueY !== null) {
    obj.max = obj.max > valueY ? obj.max : valueY;
    obj.min = obj.min < valueY ? obj.min : valueY;
  }
  if (valueX !== null) {
    objX.max = objX.max > valueX ? objX.max : valueX;
    objX.min = objX.min < valueX ? objX.min : valueX;
  }
  // code for regression line
  if (pointObj.isRegression) {
    itemValueX = valueX || 0;
    itemValueY = valueY || 0;
    // Calculating the summation of X.
    pointObj.sumX += itemValueX;
    // Calculating the summation of Y.
    pointObj.sumY += itemValueY;
    // Calculating the summation of XY.
    pointObj.sumXY += itemValueX * itemValueY;
    // Calculating the summation of X²
    pointObj.sumXsqure += mathPow(itemValueX, 2);
    // Push all the x values
    pointObj.xValues.push(itemValueX);
    // Calculating the summation of Y²
    pointObj.sumYsqure += mathPow(itemValueY, 2);
    // Push all the y values
    pointObj.yValues.push(itemValueY);
  }
};

var BubbleDataset = function (_ScatterDataset) {
  _inherits(BubbleDataset, _ScatterDataset);

  function BubbleDataset() {
    _classCallCheck(this, BubbleDataset);

    var _this = _possibleConstructorReturn(this, _ScatterDataset.call(this));

    _this.type = 'bubble';
    return _this;
  }

  BubbleDataset.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return false;
    }
    this.trimData(datasetJSON);
    this.JSONData = datasetJSON;
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        rawDataObj = chart.jsonData,
        chartAttr = rawDataObj.chart,
        JSONData = dataset.JSONData,
        conf = dataset.config,
        setDataArr = JSONData.data || [],
        len,
        i,
        dataObj,
        dataStore,
        HUNDREDSTRING = '100',
        setColor,
        setAlpha,
        colorM = dataset.getFromEnv('color-manager'),
        index = dataset.index,
        numberFormatter = dataset.getFromEnv('number-formatter'),
        regressionObj,
        tooltipSepChar = (0, _lib.pluck)((0, _lib.parseUnsafeString)(chartAttr.tooltipsepchar), ', '),
        formatedVal,
        enableAnimation,
        setData,
        config,
        toolText,
        hoverEffects,
        seriesname,
        parserConfig,
        macroIndices,
        label,
        setDisplayValue,
        BLANKSTRING = '',
        isHoverColorString,
        hColorsLoop,
        hColorsLen,
        infMin = -Infinity,
        infMax = +Infinity,
        xMax = infMin,
        xMin = infMax,
        yMax = infMin,
        yMin = infMax,
        zMax = infMin,
        zMin = infMax,
        colorObj,
        highLight,
        quickEnabled,
        getPointColor = _lib.graphics.getPointColor,
        highlightColors;

    conf.includeInLegend = (0, _lib.pluckNumber)(JSONData.includeinlegend, 1);
    conf.seriesname = (0, _lib.parseUnsafeString)(JSONData.seriesname);
    conf.anchorBgColor = (0, _lib.pluck)(JSONData.color, JSONData.plotfillcolor, chartAttr.plotfillcolor, colorM.getPlotColor(index));
    conf.showPlotBorder = (0, _lib.pluckNumber)(JSONData.showplotborder, chartAttr.showplotborder, 1);
    conf.anchorBorderThickness = conf.showPlotBorder ? (0, _lib.pluckNumber)(JSONData.plotborderthickness, chartAttr.plotborderthickness, 1) : 0;
    conf.anchorBorderColor = (0, _lib.getFirstColor)((0, _lib.pluck)(JSONData.plotbordercolor, chartAttr.plotbordercolor, '666666'));
    conf.plotFillAlpha = (0, _lib.pluck)(JSONData.plotfillalpha, JSONData.bubblefillalpha, chartAttr.plotfillalpha, HUNDREDSTRING);
    conf.plotBorderAlpha = (0, _lib.pluck)(JSONData.plotborderalpha, chartAttr.plotborderalpha, '95');
    conf.negativeColor = (0, _lib.pluck)(chartAttr.negativecolor, 'FF0000');
    conf.is3d = (0, _lib.pluckNumber)(chartAttr.use3dlighting, JSONData.is3d, chartAttr.is3d) !== 0;
    conf.bubbleScale = (0, _lib.pluckNumber)(chartAttr.bubblescale, 1);
    conf.minBubbleRadius = (0, _lib.pluckNumber)(chartAttr.minbubbleradius);
    conf.clipBubbles = (0, _lib.pluckNumber)(chartAttr.clipbubbles, 1);
    conf.showRegressionLine = (0, _lib.pluckNumber)(JSONData.showregressionline, chartAttr.showregressionline, 0);
    conf.enableAnimation = enableAnimation = (0, _lib.pluckNumber)(chartAttr.animation, chartAttr.defaultanimation, 1);
    conf.animation = !enableAnimation ? false : {
      duration: (0, _lib.pluckNumber)(chartAttr.animationduration, 1) * 1000
    };
    conf.showTooltip = (0, _lib.pluckNumber)(chartAttr.showtooltip, 1);
    conf.transposeAnimation = (0, _lib.pluckNumber)(chartAttr.transposeanimation, enableAnimation);
    conf.transposeAnimDuration = (0, _lib.pluckNumber)(chartAttr.transposeanimduration, 0.2) * 1000;
    conf.seriesNameInTooltip = (0, _lib.pluckNumber)(chartAttr.seriesnameintooltip, 1);
    conf.rotateValues = (0, _lib.pluckNumber)(chartAttr.rotatevalues) ? 270 : 0;
    conf.showHoverEffect = (0, _lib.pluckNumber)(chartAttr.plothovereffect, chartAttr.showhovereffect, UNDEF);
    conf.showValues = (0, _lib.pluckNumber)(JSONData.showvalues, chartAttr.showvalues, 0);
    dataStore = dataset.components.data = dataset.components.data || (dataset.components.data = []);
    len = setDataArr.length;
    if (conf.showRegressionLine) {
      dataset.events = {
        hide: this.hideRLine,
        show: this.showRLine
      };
      // regration object used in XY chart
      // create here to avoid checking always
      regressionObj = {
        sumX: 0,
        sumY: 0,
        sumXY: 0,
        sumXsqure: 0,
        sumYsqure: 0,
        xValues: [],
        yValues: [],
        isRegression: true
      };
      conf.showYOnX = (0, _lib.pluckNumber)(JSONData.showyonx, chartAttr.showyonx, 1);
      conf.regressionLineColor = (0, _lib.getFirstColor)((0, _lib.pluck)(JSONData.regressionlinecolor, chartAttr.regressionlinecolor, conf.anchorBgColor));
      conf.regressionLineThickness = (0, _lib.pluckNumber)(JSONData.regressionlinethickness, chartAttr.regressionlinethickness, 1);
      conf.regressionLineAlpha = (0, _lib.getFirstAlpha)((0, _lib.pluckNumber)(JSONData.regressionlinealpha, chartAttr.regressionlinealpha, 100));
      conf.regLineColor = convertColor(conf.regressionLineColor, conf.regressionLineAlpha);
    }
    conf.fillColor = conf.is3d ? (0, _lib.toRaphaelColor)(getPointColor(conf.anchorBgColor, conf.plotFillAlpha)) : (0, _lib.toRaphaelColor)({
      color: conf.anchorBgColor,
      alpha: conf.plotFillAlpha
    });
    conf.strokeColor = (0, _lib.toRaphaelColor)({
      color: conf.anchorBorderColor,
      alpha: conf.plotFillAlpha
    });
    for (i = 0; i < len; i++) {
      setData = setDataArr[i];
      dataObj = dataStore[i] = dataStore[i] || (dataStore[i] = {});
      !dataObj.graphics && (dataObj.graphics = {});
      config = dataObj.config = {};
      config.x = numberFormatter.getCleanValue(setData.x);
      config.y = numberFormatter.getCleanValue(setData.y);
      config.z = numberFormatter.getCleanValue(setData.z, true);
      config.setValue = {
        x: config.x,
        y: config.y,
        z: config.z
      };
      config._x = config.x;
      config._y = config.y;
      config._z = config.z;
      config.showValue = (0, _lib.pluckNumber)(setData.showvalue, conf.showValues);
      config.anchorProps = {};
      label = config.label = config.x;
      config.setLink = (0, _lib.getValidValue)(setData.link);
      conf.max = zMax = mathMax(zMax, config.z || 0);
      conf.min = zMin = mathMin(zMin, config.z || 0);
      config.is3d = (0, _lib.pluckNumber)(setData.is3d, conf.is3d) !== 0;
      xMax = mathMax(xMax, config.x);
      xMin = mathMin(xMin, config.x);
      yMax = mathMax(yMax, config.y);
      yMin = mathMin(yMin, config.y);
      setColor = config.color = (0, _lib.getFirstColor)((0, _lib.pluck)(setData.color, setData.z < 0 ? conf.negativeColor : conf.anchorBgColor));
      setAlpha = config.alpha = (0, _lib.pluck)(setData.alpha, conf.plotFillAlpha);
      config.colorObj = colorObj = config.is3d ? getPointColor(setColor, setAlpha) : {
        color: setColor,
        alpha: setAlpha
      };
      config.setDisplayValue = setDisplayValue = (0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.displayvalue, setData.name, setData.label));
      formatedVal = config.formatedVal = config.y === null ? config.y : numberFormatter.dataLabels(config.y);
      config.displayValue = (0, _lib.pluck)(setDisplayValue, config.formatedVal);
      config.setTooltext = (0, _lib.getValidValue)((0, _lib.parseUnsafeString)((0, _lib.pluck)(setData.tooltext, JSONData.plottooltext, chartAttr.plottooltext)));
      // Initial tooltext parsing
      if (!conf.showTooltip) {
        toolText = false;
      } else {
        if (formatedVal === null) {
          toolText = false;
        } else if (config.setTooltext !== UNDEF) {
          macroIndices = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 118];
          parserConfig = {
            yDataValue: formatedVal,
            xDataValue: numberFormatter.xAxis(label),
            yaxisName: (0, _lib.parseUnsafeString)(chartAttr.yaxisname),
            xaxisName: (0, _lib.parseUnsafeString)(chartAttr.xaxisname),
            zDataValue: numberFormatter.dataLabels(config.z)
          };
          toolText = (0, _lib.parseTooltext)(config.setTooltext, macroIndices, parserConfig, setData, chartAttr, JSONData);
        } else {
          if (conf.seriesNameInTooltip) {
            seriesname = (0, _lib.getFirstValue)(JSONData && JSONData.seriesname);
          }
          toolText = seriesname ? seriesname + tooltipSepChar : BLANKSTRING;
          toolText += label ? numberFormatter.xAxis(label) + tooltipSepChar : BLANKSTRING;
          toolText += formatedVal;
          toolText += setData.z ? tooltipSepChar + numberFormatter.dataLabels(setData.z) : BLANKSTRING;
        }
      }
      config.toolText = toolText;
      conf.showRegressionLine && pointValueWatcher(config.x, config.y, regressionObj);

      hoverEffects = config.hoverEffects = {};
      // Hover attributes parsing
      if (conf.showHoverEffect !== 0) {
        quickEnabled = hoverEffects.enabled = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.bubblehoveralpha, setData.hovercolor, JSONData.hovercolor, JSONData.bubblehovercolor, chartAttr.bubblehovercolor, setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, setData.hoverscale, JSONData.bubblehoverscale, chartAttr.bubblehoverscale, setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, setData.negativehovercolor, JSONData.negativeColor, chartAttr.negativecolor, setData.is3donhover, chartAttr.plotfillhovercolor, JSONData.is3donhover, chartAttr.is3donhover, UNDEF) !== UNDEF;

        hoverEffects.negativeColor = (0, _lib.pluck)(setData.negativehovercolor, JSONData.negativehovercolor, chartAttr.negativehovercolor, conf.negativeColor);

        hoverEffects.is3d = (0, _lib.pluckNumber)(setData.is3donhover, JSONData.is3donhover, chartAttr.is3donhover, config.is3d);
        hoverEffects.color = (0, _lib.pluck)(setData.hovercolor, JSONData.hovercolor, JSONData.bubblehovercolor, chartAttr.plotfillhovercolor, chartAttr.bubblehovercolor, config.is3d ? colorObj.FCcolor.color : setColor);
        hoverEffects.color = hoverEffects.negativeColor && setData.z < 0 ? hoverEffects.negativeColor : hoverEffects.color;
        hoverEffects.scale = (0, _lib.pluck)(setData.hoverscale, JSONData.hoverscale, JSONData.bubblehoverscale, chartAttr.bubblehoverscale, 1);
        hoverEffects.color = (0, _lib.getFirstColor)(hoverEffects.color);
        hoverEffects.alpha = (0, _lib.pluck)(setData.hoveralpha, JSONData.hoveralpha, chartAttr.plotfillhoveralpha, chartAttr.bubblehoveralpha, setAlpha);
        hoverEffects.borderColor = (0, _lib.pluck)(setData.borderhovercolor, JSONData.borderhovercolor, chartAttr.plotborderhovercolor, conf.anchorBorderColor);
        hoverEffects.borderAlpha = (0, _lib.pluck)(setData.borderhoveralpha, JSONData.borderhoveralpha, chartAttr.plotborderhoveralpha, hoverEffects.alpha, conf.plotBorderAlpha);

        hoverEffects.borderThickness = (0, _lib.pluckNumber)(setData.borderhoverthickness, JSONData.borderhoverthickness, chartAttr.plotborderhoverthickness, conf.anchorBorderThickness);
        hoverEffects.color = hoverEffects.is3d ? getPointColor(hoverEffects.color, hoverEffects.alpha) : {
          FCcolor: {
            color: hoverEffects.color,
            alpha: hoverEffects.alpha
          }
        };

        if (quickEnabled && conf.showHoverEffect) {
          highLight = 0;
        } else {
          highLight = conf.showHoverEffect;
        }

        if (highLight === 1) {
          isHoverColorString = typeof hoverEffects.color === 'string';

          highlightColors = isHoverColorString ? hoverEffects.color.split(/\s{0,},\s{0,}/) : hoverEffects.color.FCcolor.color.split(/\s{0,},\s{0,}/);

          hColorsLen = highlightColors.length;
          for (hColorsLoop = 0; hColorsLoop < hColorsLen; hColorsLoop++) {
            highlightColors[hColorsLoop] = getLightColor(highlightColors[hColorsLoop], 70);
          }

          if (isHoverColorString) {
            hoverEffects.color = highlightColors.join(',');
          } else {
            hoverEffects.color.FCcolor.color = highlightColors.join(',');
          }
        }

        if (quickEnabled === false) {
          hoverEffects.enabled = Boolean(conf.showHoverEffect);
        }
      } else {
        hoverEffects.enabled = false;
      }
    }
    conf.xMax = xMax;
    conf.xMin = xMin;
    conf.yMin = yMin;
    conf.yMax = yMax;
    conf.regressionData = conf.showRegressionLine && this.getRegressionLineSeries(regressionObj, conf.showYOnX, len);
    dataset.setState('visible', (0, _lib.pluckNumber)(JSONData.visible, !Number(JSONData.initiallyhidden), 1) === 1);
    dataset._addLegend();
  };
  /*
   * Using kdtree algo for searching
  */


  BubbleDataset.prototype._getHoveredPlot = function _getHoveredPlot(x, y) {
    var res = this.dataTree.getNeighbour({
      x: x,
      y: y
    }, true, 'circle');
    // searching neighbour from Kdtree with basic search flag on
    if (res) {
      return {
        pointIndex: res.index || res.i,
        hovered: true,
        pointObj: res.data
      };
    }
  };

  BubbleDataset.prototype._addLegend = function _addLegend() {
    var dataset = this,
        chart = dataset.getFromEnv('chart'),
        conf = dataset.config,
        legend = chart.getChildren('legend')[0],
        config = {
      enabled: conf.includeInLegend,
      fillColor: conf.fillColor,
      strokeColor: conf.strokeColor,
      rawFillColor: conf.anchorBgColor,
      rawStrokeColor: conf.anchorBorderColor,
      anchorSide: 1,
      type: dataset.type,
      label: conf.seriesname
    };

    dataset.legendItemId = legend.addItems(dataset, dataset.legendInteractivity, config);
  };

  BubbleDataset.prototype.getBubbleRadius = function getBubbleRadius(zValue) {
    var dataset = this,
        mathSqrt = math.sqrt,
        dsConfig = dataset.config,
        bubbleScale = dsConfig.bubbleScale,
        minBubbleRadius = dsConfig.minBubbleRadius,
        chart = dataset.getFromEnv('chart'),
        chartConfig = chart.config,

    // to have diameter of the largest bubble as 25% of the smaller of the two dimensions of
    // canvas
    radiusLimit = mathMin(chartConfig.canvasHeight, chartConfig.canvasWidth) / 8,
        chartLimits = this.getLinkedParent().getDataLimitRange(),
        zMax = chartLimits.zMax,
        sqrtMaxZ = mathSqrt(zMax),
        sqrtBubbleZ = mathSqrt(zValue),
        bubbleRadius;

    // calculating radius with scaling
    bubbleRadius = mathRound(sqrtBubbleZ * radiusLimit / sqrtMaxZ) * bubbleScale || 0;
    // In case minimum radius for bubble is defined we have to honor it
    if (minBubbleRadius) {
      bubbleRadius = mathMax(bubbleRadius, minBubbleRadius);
    }

    return bubbleRadius;
  };

  // Create pixel coordinates for the plots


  BubbleDataset.prototype.createCoordinates = function createCoordinates() {
    var dataset = this,
        dsComponents = dataset.components,
        dsData = dsComponents.data,
        yAxis = dataset.getFromEnv('yAxis'),
        yBase = yAxis.getAxisBase(),
        yBasePos = yAxis.getAxisPosition(yBase),
        xAxis = dataset.getFromEnv('xAxis'),
        isVertical = xAxis.config.isVertical,
        dataObj,
        config,
        previousY,
        i,
        Px,
        Py,
        Pb,
        len = dsData.length,
        dataStore = dsComponents.data;

    for (i = 0; i < len; i++) {
      dataObj = dataStore[i];
      config = dataObj && dataObj.config;

      if (dataObj === UNDEF) {
        continue;
      }

      previousY = config._b;
      Px = xAxis.getAxisPosition(config._x);
      Py = yAxis.getAxisPosition(config._y);

      Pb = previousY ? yAxis.getAxisPosition(previousY) : yBasePos;

      if (dataset.type === 'bubble') {
        config.r = dataset.getBubbleRadius(config._z);
      }

      if (isVertical) {
        config._Px = Py;
        config._Py = Px;
        config._Pby = Py;
        config._Pbx = Pb;
      } else {
        config._Px = Px;
        config._Py = Py;
        config._Pby = Pb;
        config._Pbx = Px;
      }
    }
  };

  BubbleDataset.prototype.drawPlots = function drawPlots(animObj) {
    var dataset = this,
        JSONData = dataset.JSONData,
        chart = dataset.getFromEnv('chart'),
        paper = dataset.getFromEnv('paper'),
        chartConfig = chart.config,
        setElem,
        hotElem,
        xAxis = dataset.getFromEnv('xAxis'),
        conf = dataset.config,
        set,
        bubbleRadius,
        yPos,
        xPos,
        i,
        ln,
        config,
        setDataArr = dataset.components.data,
        containers = dataset.getContainer(),
        visible = dataset.getState('visible'),
        dataLabelContainer = dataset.graphics.dataLabelContainer,
        animCallBack = function animCallBack() {
      if (visible === false) {
        containers.plotGroup.hide();
        containers.commonElemsGroup.hide();
        dataLabelContainer && dataLabelContainer.hide();
        dataset._containerHidden = true;
      }
    },
        limits = this.getLinkedParent().getDataLimitRange(),
        maxXAxisPos = xAxis.getAxisPosition(limits.xMax),
        minXAxisPos = xAxis.getAxisPosition(limits.xMin),
        toolText,
        isTooltip = conf.showTooltip,
        x,
        y,
        z,
        setLink,
        displayValue,
        hoverEffects = {},
        setRolloverAttr,
        label,
        pool = dataset.components.pool || {},
        setRolloutAttr,
        eventArgs,
        borderThickness = conf.anchorBorderThickness,
        kdTreeArr = [],
        canvasDimensionRatio,
        longerSide,
        axisDelta,
        plotXPosDelta,
        plotAnimStart,
        plotAnimEnd;

    if (chartConfig.canvasHeight > chartConfig.canvasWidth) {
      longerSide = chartConfig.canvasHeight;
      canvasDimensionRatio = chartConfig.canvasWidth / chartConfig.canvasHeight;
    } else {
      longerSide = chartConfig.canvasWidth;
      canvasDimensionRatio = chartConfig.canvasHeight / chartConfig.canvasWidth;
    }

    for (i = 0, ln = setDataArr.length; i < ln; i += 1) {
      set = setDataArr[i];
      config = set.config;
      x = (0, _lib.pluckNumber)(config.x, i);
      y = config.y;
      z = config.z;
      setElem = set.graphics.element;
      setLink = config.setLink;
      displayValue = config.displayValue;
      toolText = config.toolText;
      config.finalTooltext = config.toolText;
      hoverEffects = config.hoverEffects;
      setElem = set.graphics.element;
      hotElem = set.graphics.hotElement;
      label = set.graphics.label;

      if (y !== null) {
        eventArgs = config.eventArgs || (config.eventArgs = {});

        eventArgs.index = i;
        eventArgs.link = setLink;
        eventArgs.value = y;
        eventArgs.y = y;
        eventArgs.x = x;
        eventArgs.z = z;
        eventArgs.displayValue = displayValue;
        eventArgs.toolText = toolText;
        eventArgs.id = dataset.userID;
        eventArgs.datasetIndex = dataset.index || 0;
        eventArgs.datasetName = JSONData.seriesname;
        eventArgs.visible = visible;

        yPos = config._Py;
        xPos = config._Px;

        bubbleRadius = config.r;

        kdTreeArr.push({
          x: xPos,
          y: yPos,
          r: bubbleRadius
        });

        setRolloutAttr = config.setRolloutAttr = {
          fill: (0, _lib.toRaphaelColor)(config.colorObj),
          'stroke-width': conf.anchorBorderThickness,
          stroke: (0, _lib.toRaphaelColor)({
            color: conf.anchorBorderColor,
            alpha: conf.plotBorderAlpha
          }),
          r: bubbleRadius
        };

        if (hoverEffects.enabled !== false) {
          setRolloverAttr = config.setRolloverAttr = {
            fill: (0, _lib.toRaphaelColor)(hoverEffects.color),
            'stroke-width': hoverEffects.borderThickness,
            stroke: (0, _lib.toRaphaelColor)({
              color: hoverEffects.borderColor,
              alpha: hoverEffects.borderAlpha
            }),
            r: bubbleRadius * hoverEffects.scale
          };
        }

        // if (!visible) {
        //   bubbleRadius = 0;
        // }

        if (!setElem) {
          if (pool.element && pool.element.length) {
            setElem = set.graphics.element = pool.element.shift();
          } else {
            setElem = set.graphics.element = paper.circle(containers.plotGroup);
            setElem.attr({
              cx: xPos,
              cy: 0 - bubbleRadius,
              r: bubbleRadius || 0,
              fill: (0, _lib.toRaphaelColor)(config.colorObj),
              'stroke-width': conf.anchorBorderThickness,
              stroke: setRolloutAttr.stroke
            });
          }
        }

        setElem.show();
        setElem.attr({
          // In case of tooltip is disabled this element should act as the hot element.
          ishot: !isTooltip,
          'visibility': visible
        });

        if (!visible) {
          animObj.plot.data.push({
            el: setElem,
            callback: animCallBack,
            animType: 'linear',
            attrs: {
              cy: chartConfig.canvasBottom + bubbleRadius
            },
            animConfig: [{
              syncWith: 'plot',
              start: 0,
              end: 1
            }]
          });
          continue;
        }

        animObj.plot.data.push({
          el: setElem,
          animType: 'linear',
          attrs: {
            fill: (0, _lib.toRaphaelColor)(config.colorObj),
            'stroke-width': conf.anchorBorderThickness,
            stroke: setRolloutAttr.stroke
          },
          animConfig: [{
            syncWith: 'plot',
            start: 0,
            end: 1
          }]
        });

        axisDelta = maxXAxisPos - minXAxisPos;
        plotXPosDelta = xPos - minXAxisPos;

        if (setElem.isDrawn) {
          plotAnimStart = 0;
          plotAnimEnd = 1;
        } else {
          plotAnimStart = plotXPosDelta / axisDelta * canvasDimensionRatio;
          plotAnimEnd = (plotXPosDelta + longerSide) / axisDelta * canvasDimensionRatio;
        }

        animObj.plot.data.push({
          el: setElem,
          attrs: {
            cx: xPos,
            cy: yPos
          },
          animType: 'easeOut',
          callback: animCallBack,
          animConfig: [{
            syncWith: 'plot',
            start: plotAnimStart,
            end: plotAnimEnd
          }]
        });

        animObj.plot.data.push({
          el: setElem,
          attrs: {
            r: bubbleRadius || 0
          },
          animType: 'bounce',
          animConfig: [{
            syncWith: 'plot',
            start: 0,
            end: 1
          }]
        });

        config.trackerConfig || (config.trackerConfig = {});

        config.trackerConfig.trackerRadius = mathMax(bubbleRadius + (borderThickness || 0 / 2), HTP);

        setElem.data('hoverEnabled', hoverEffects.enabled).data(SETROLLOVERATTR, setRolloverAttr).data(SETROLLOUTATTR, setRolloutAttr);

        set._xPos = xPos;
        set._yPos = yPos;

        setElem && setElem.data(EVENTARGS, config && config.eventArgs);
        // if (showValue) {
        //     this.drawLabel(i);
        // } else {
        //     label && label.hide();
        // }
      } else {
        setElem && setElem.hide();
        hotElem && hotElem.hide();
        label && label.hide();
      }
      setElem && (setElem.isDrawn = true);
    }

    // Building KdTree
    this.dataTree = new _kdtree2['default']().buildKdTree(kdTreeArr);
  };

  BubbleDataset.prototype.removeElements = function removeElements(anim) {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        canvasBottom = chartConfig.canvasBottom,
        components = dataSet.components,
        removeDataArr = components.removeDataArr,
        pool = components.pool || (components.pool = {
      element: [],
      hotElement: [],
      label: []
    }),
        maxminFlag = dataSet.maxminFlag,
        bubbleDiameter,
        removeData,
        ele,
        graphics,
        i,
        animCallBack = function animCallBack() {
      this.hide();
    };

    for (i = removeDataArr.length - 1; i >= 0; i--) {
      removeData = removeDataArr[i];
      removeDataArr.splice(i, 1);
      // In case of non existing data plot continue;
      if (!removeData || !removeData.graphics) {
        continue;
      }

      graphics = removeData.graphics;
      for (ele in graphics) {
        if (ele === 'label' && dataSet.startPosition === UNDEF && dataSet.endPosition === UNDEF) {
          anim.initial.data.push({
            el: graphics[ele],
            type: 'fadeOut'
          });
        }

        // NOTE: The following comment block was apparently required
        // attr = _pos(removeData);
        // if (ele === 'label') {
        //     attr.transform = paper.getSuggestiveRotation(rotateValues, attr.x, attr.y);
        // }

        if (ele === 'label') {
          anim.initial.data.push({
            el: graphics[ele],
            type: 'fadeOut'
          });
        }

        bubbleDiameter = graphics[ele].attr('r') * 2;

        anim.plot.data.push({
          el: graphics[ele],
          attrs: {
            cy: canvasBottom + bubbleDiameter
          },
          animType: 'linear'
        });

        anim.plot.data.push({
          el: graphics[ele],
          attrs: {
            cy: canvasBottom + bubbleDiameter
          },
          callback: animCallBack,
          animType: 'linear'
        });
      }

      // Storing the graphic elements for reuse.
      removeData.graphics.element && (pool.element = pool.element.concat(removeData.graphics.element));
      removeData.graphics.hotElement && (pool.hotElement = pool.hotElement.concat(removeData.graphics.hotElement));
      removeData.graphics.label && (pool.label = pool.label.concat(removeData.graphics.label));
    }
    components.pool = pool;
    maxminFlag && dataSet.setMaxMin();
  };

  BubbleDataset.prototype.getDataLimits = function getDataLimits() {
    var dataset = this,
        conf = dataset.config,
        maxValue = conf.yMax,
        minValue = conf.yMin,
        infMin = -Infinity,
        infMax = +Infinity,
        transposeAxis = dataset.getFromEnv('chart').config.transposeAxis,
        xMin = conf.xMin,
        xMax = conf.xMax,
        zMax = conf.max,
        zMin = conf.min;
    if (dataset.getState('visible') === false && transposeAxis) {
      maxValue = infMin;
      minValue = infMax;
      xMin = infMax;
      xMax = infMin;
    }
    return {
      max: maxValue,
      min: minValue,
      xMin: xMin,
      xMax: xMax,
      zMax: zMax,
      zMin: zMin
    };
  };
  /*
    * Draws a label
    * Called for each data value to be drawn from draw function of line and area
    * @param {number} i - index of data
   */


  BubbleDataset.prototype.drawLabel = function drawLabel() {
    var dataSet = this,
        chart = dataSet.getFromEnv('chart'),
        chartConfig = chart.config,
        style = chartConfig.dataLabelStyle,
        dataStore = dataSet.components.data,
        paper = dataSet.getFromEnv('paper'),
        dataObj,
        attr,
        displayValue = '',
        conf = dataSet.config,
        animationObj = chart.get('config', 'animationObj'),
        animationDuration = animationObj.duration,
        animType = animationObj.animType,
        dummyAnimObj = animationObj.animObj,
        dummyAnimElem = animationObj.dummyObj,
        rotateValues = conf.rotateValues,
        graphic,
        dataLabelContainer = dataSet.graphics.dataLabelContainer,
        config,
        xPos,
        yPos,
        labelCreated,
        labelElement,
        i,
        len,
        showValue,
        pool = dataSet.components.pool || {};
    // dataLabelsLayer = layers.datalabelsGroup;

    for (i = 0, len = dataStore.length; i < len; i++) {
      dataObj = dataStore[i];
      if (!dataObj) {
        continue;
      }
      config = dataObj.config;
      graphic = dataObj.graphics;
      yPos = dataObj._yPos;
      xPos = dataObj._xPos;
      displayValue = config.displayValue;
      labelElement = graphic.label;
      showValue = config.showValue;
      // Drawing label only if displayvalue is defined and not BLANKSTRING and setValue is not null
      if (defined(displayValue) && displayValue !== _lib.BLANKSTRING && config.z !== null && showValue) {
        attr = {
          text: displayValue,
          fill: style.color,
          'text-bound': [style.backgroundColor, style.borderColor, style.borderThickness, style.borderPadding, style.borderRadius, style.borderDash],
          'line-height': style.lineHeight,
          visibility: visibleStr
        };

        // Create the label if not created
        if (!labelElement) {
          if (pool.label && pool.label.length) {
            labelElement = graphic.label = pool.label.shift();
          } else {
            attr.x = xPos;
            attr.y = yPos;
            attr.transform = paper.getSuggestiveRotation(rotateValues, xPos, yPos);
            labelElement = graphic.label = paper.text(attr, dataLabelContainer);
            labelCreated = true;
          }
        }

        // If it is not a new label then just update the positions and cosmetics
        if (!labelCreated) {
          labelElement.show().animateWith(dummyAnimElem, dummyAnimObj, {
            x: xPos,
            y: yPos,
            transform: paper.getSuggestiveRotation(rotateValues, xPos, yPos)
          }, animationDuration, animType);
          labelElement.attr(attr);
        }
      } else {
        labelElement && labelElement.hide();
      }
    }
  };

  return BubbleDataset;
}(_scatter2['default']);

exports['default'] = BubbleDataset;

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _componentInterface = __webpack_require__(6);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

var math = Math,
    mathMin = math.min,
    mathMax = math.max;

var BubbleDatasetGroup = function (_ComponentInterface) {
  _inherits(BubbleDatasetGroup, _ComponentInterface);

  /**
   * constructor function this class
   */
  function BubbleDatasetGroup() {
    _classCallCheck(this, BubbleDatasetGroup);

    var _this = _possibleConstructorReturn(this, _ComponentInterface.call(this));

    _this.setState('visible', true);
    return _this;
  }
  /**
   * Create child containers
   */


  BubbleDatasetGroup.prototype.createContainer = function createContainer() {
    var manager = this,
        paper = manager.getFromEnv('paper'),
        key = void 0,
        parent = manager.getLinkedParent(),
        pContainer = void 0,
        parentChildContainers = parent.getChildContainer();

    for (key in parentChildContainers) {
      pContainer = parentChildContainers[key];

      !manager.getChildContainer(key) && manager.addChildContainer(key, paper.group('manager-' + key, pContainer));
    }
  };

  /**
   * function call sync draw of its children
   */


  BubbleDatasetGroup.prototype.draw = function draw() {
    this.createContainer();
    this.childrenSyncDraw();
  };

  BubbleDatasetGroup.prototype.getDataLimitRange = function getDataLimitRange() {
    var vcanvas = this,
        children = vcanvas.getChildren(),
        i,
        key,
        child,
        len,
        limits,
        zMax = -Infinity,
        zMin = +Infinity,
        xMax = -Infinity,
        xMin = +Infinity;

    for (key in children) {
      if (children.hasOwnProperty(key)) {
        child = children[key];
        if (child instanceof Array) {
          len = child.length;
          for (i = 0; i < len; i++) {
            limits = child[i].getDataLimits();
            xMax = mathMax(xMax, limits.xMax || -Infinity);
            xMin = mathMin(xMin, limits.xMin || +Infinity);
            zMax = mathMax(zMax, limits.zMax || -Infinity);
            zMin = mathMin(zMin, limits.zMin || +Infinity);
          }
        }
      }
    }

    zMax = zMax === -Infinity ? 0 : zMax;
    zMin = zMin === +Infinity ? 0 : zMin;
    return {
      xMax: xMax,
      xMin: xMin,
      zMax: zMax,
      zMin: zMin
    };
  };

  /**
   * function to accomodate the changes of its child and notify its parent for further action if its needed
   * @param  {Object} updateInfo is an object with the informations about the changes in its child
   */


  BubbleDatasetGroup.prototype.childChanged = function childChanged() {
    var updateInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var manager = this,
        config = manager.config,
        parent = manager.getLinkedParent(),
        range = void 0,
        padding = void 0,
        changeInfo = {},
        ifInformParent = void 0;

    if (updateInfo.hide !== false || updateInfo.show !== false) {
      manager._mapChildren(function (child) {
        child.setState('dirty', true);
      });
      ifInformParent = true;
    }
    if (updateInfo.dataLimitChanged !== false) {
      range = manager.getDataLimits();
      if (range.min !== config.range.min || range.max !== config.range.max) {
        config.range.min = range.min;
        config.range.max = range.max;
        changeInfo.dataLimitChanged = true;
        ifInformParent = true;
      }
    }
    if (updateInfo.paddingChanged !== false) {
      padding = manager.getAxisValuePadding();
      if (padding.left !== config.padding.left || padding.right !== config.padding.right) {
        config.padding.left = padding.left;
        config.padding.right = padding.right;
        changeInfo.paddingChanged = true;
        ifInformParent = true;
      }
    }
    if (ifInformParent) {
      parent.childChanged && parent.childChanged(changeInfo);
    } else {
      manager.asyncDraw();
    }
  };
  /**
   * function to get value for axis padding from is children
   * @return {Object} with left and right member
   */


  BubbleDatasetGroup.prototype.getAxisValuePadding = function getAxisValuePadding() {
    var paddingObj = {},
        axisPaddingLeft = -Infinity,
        axisPaddingRight = -Infinity;
    this._mapChildren(function (child) {
      if (child.getState('removed') || child.getState('visible') === false) {
        return;
      }
      paddingObj = child.getAxisValuePadding && child.getAxisValuePadding() || {};
      axisPaddingLeft = Math.max(axisPaddingLeft, paddingObj.left || -Infinity);
      axisPaddingRight = Math.max(axisPaddingRight, paddingObj.right || -Infinity);
    });
    if (axisPaddingLeft === -Infinity) {
      axisPaddingLeft = 0;
    }
    if (axisPaddingRight === -Infinity) {
      axisPaddingRight = 0;
    }
    if (!this.config.padding) {
      this.config.padding = {};
      this.config.padding.left = axisPaddingLeft;
      this.config.padding.right = axisPaddingRight;
    }
    return {
      left: axisPaddingLeft,
      right: axisPaddingRight
    };
  };
  /**
   * function to get data limits from its child datasets
   * return minimun and maximum value among the datasets limit
   * @return {Object} [min, max]
   */


  BubbleDatasetGroup.prototype.getDataLimits = function getDataLimits() {
    var manager = this,
        chart = manager.getFromEnv('chart'),
        infMin = -Infinity,
        infMax = +Infinity,
        max = infMin,
        min = infMax,
        xMin = infMax,
        xMax = infMin,
        maxminObj,
        xMaxValue,
        xMinValue,
        getMaxMin = function getMaxMin(_maxminObj) {
      xMaxValue = (0, _lib.pluck)(_maxminObj.xMax, infMin);
      xMinValue = (0, _lib.pluck)(_maxminObj.xMin, infMax);
      max = Math.max(max, _maxminObj.max);
      min = Math.min(min, _maxminObj.min);
      xMax = Math.max(xMax, xMaxValue);
      xMin = Math.min(xMin, xMinValue);
    };

    manager._mapChildren(function (child) {
      if (!child.getDataLimits) {
        return;
      }
      maxminObj = child.getDataLimits();
      getMaxMin(maxminObj);
    });

    max === -Infinity && (max = 0);
    min === +Infinity && (min = 0);
    if (!this.config.range) {
      this.config.range = {};
      this.config.range.min = min;
      this.config.range.max = max;
      this.config.range.xMin = xMin;
      this.config.range.xMax = xMax;
    }
    chart.config.yMax = max;
    chart.config.yMin = min;

    return { min: min, max: max, xMin: xMin, xMax: xMax };
  };
  /**
   * it return the status of dataset visiblity
   * @return {boolean} returns the visiblity status of dataset
   */


  BubbleDatasetGroup.prototype.isVisible = function isVisible() {
    return !this.isNotVisible;
  };

  BubbleDatasetGroup.prototype.getType = function getType() {
    return 'manager';
  };

  BubbleDatasetGroup.prototype.getName = function getName() {
    return 'BubbleGroupManager';
  };

  BubbleDatasetGroup.prototype.remove = function remove() {
    var manager = this;
    manager._mapChildren(function (child) {
      if (!child.getState('removed')) {
        child.remove();
      }
    });
    _ComponentInterface.prototype.remove.call(this);
  };

  return BubbleDatasetGroup;
}(_componentInterface2['default']);

exports['default'] = BubbleDatasetGroup;

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _fusioncharts = __webpack_require__(58);

var _fusioncharts2 = _interopRequireDefault(_fusioncharts);

var _schedular = __webpack_require__(41);

var _schedular2 = _interopRequireDefault(_schedular);

var _lib = __webpack_require__(5);

var _redraphael = __webpack_require__(17);

var _redraphael2 = _interopRequireDefault(_redraphael);

var _toolbox = __webpack_require__(67);

var _toolbox2 = _interopRequireDefault(_toolbox);

var _treemap = __webpack_require__(453);

var _treemap2 = _interopRequireDefault(_treemap);

var _fusionchartsTreemap = __webpack_require__(454);

var _fusionchartsTreemap2 = _interopRequireDefault(_fusionchartsTreemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


var TRACKER_FILL = 'rgba(255,0,0,' + (_lib.isIE ? 0.002 : 0.000001) + ')'; // invisible but clickable
// Icon drawing at toolbar. Back and reset button.
_redraphael2['default'].addSymbol({
  backIcon: function backIcon(x, y, radius) {
    var rad = radius - 1,
        x1 = x,
        y1 = y - rad,
        x2 = x - rad,
        y2 = y,
        x3 = x,
        y3 = y + rad,
        x4 = x3,
        y4 = y3 - rad / 2,
        x5 = x4 + rad,
        y5 = y4,
        x6 = x5,
        y6 = y5 - rad,
        x7 = x5 - rad,
        y7 = y6;

    return ['M', x1, y1, 'L', x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, 'Z'];
  },

  homeIcon: function homeIcon(x, y, radius) {
    var rad = radius - 1,
        len = rad * 2,
        x1 = x,
        y1 = y - rad,
        x2 = x - rad,
        y2 = y,
        x3 = x2 + len / 6,
        y3 = y2,
        x4 = x3,
        y4 = y + rad,
        x5 = x4 + len / 4,
        y5 = y4,
        x6 = x5,
        y6 = y5 - rad / 2,
        x7 = x6 + len / 6,
        y7 = y6,
        x8 = x7,
        y8 = y6 + rad / 2,
        x9 = x7 + len / 4,
        y9 = y8,
        x10 = x9,
        y10 = y9 - rad,
        x11 = x9 + len / 6,
        y11 = y10;

    return ['M', x1, y1, 'L', x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, x10, y10, x11, y11, 'Z'];
  }
});
/**
 * chart API of treemap
 */

var TreeMap = function (_GaugeBase) {
  _inherits(TreeMap, _GaugeBase);

  /**
   * Provides the name of the chart extension
   *
   * @static
   * @return {string} The name of the chart extension
   */
  TreeMap.getName = function getName() {
    return 'TreeMap';
  };

  /**
   * constructor function of this class
   */


  function TreeMap() {
    _classCallCheck(this, TreeMap);

    var _this = _possibleConstructorReturn(this, _GaugeBase.call(this));

    _this.hasGradientLegend = true;
    _this.hasCanvas = false;
    _this.addToEnv('ref', _fusionchartsTreemap2['default']);
    return _this;
  }
  /**
   * parse defualt configuration of the chart
   */


  TreeMap.prototype.__setDefaultConfig = function __setDefaultConfig() {
    _GaugeBase.prototype.__setDefaultConfig.call(this);
    this.config.enablemousetracking = true;
  };

  /**
   * Configures the chart component
   * @param {Object} dataObj User input json
   */


  TreeMap.prototype.configure = function configure(dataObj) {
    var iapi = this;
    iapi.parseChartAttr(dataObj);
    iapi.createComponent(dataObj);

    iapi._createDatasets();
    iapi.configureChildren();
    // after configure chart calls its async draw
    iapi.asyncDraw();
  };
  /**
   * This method delegates the handling of  mouse event to the chart's event handler
   * @param  {Object} e The Event Object
   * @private
   */


  TreeMap.prototype._mouseEvtHandler = function _mouseEvtHandler(e) {
    var chart = this,
        data = e.data,
        mouseTracker = data.mouseTracker,
        oriEvent = e.originalEvent,
        chartConfig = chart.config,
        canvasLeft = chartConfig.canvasLeft,
        canvasRight = chartConfig.canvasRight,
        canvasBottom = chartConfig.canvasBottom,
        canvasTop = chartConfig.canvasTop,
        datasets = chartConfig.datasetOrder || chart.getDatasets(),
        coordinate = (0, _lib.getMouseCoordinate)(chart.getFromEnv('chart-container'), oriEvent, chart),
        chartX = coordinate.chartX,
        chartY = coordinate.chartY,
        dataset = void 0,
        hoveredInfo = void 0,
        pointFound = false,
        i = datasets.length,
        j = void 0,
        l = void 0,
        MOUSEOUT = 'mouseout',
        derivedEvensInfo = void 0,
        _lastDatasetIndex = mouseTracker._lastDatasetIndex,
        _lastPointIndex = mouseTracker._lastPointIndex;

    // @todo we have to implement this for charts with more than one canvas like candle stick

    // if inside the canvas
    if (chartX > canvasLeft && chartX < canvasRight && chartY > canvasTop && chartY < canvasBottom || chart.config.plotOverFlow) {
      // @todo make sure the datasets are as per their z-order
      while (i-- && !pointFound) {
        dataset = datasets[i];
        if (dataset) {
          hoveredInfo = dataset._getHoveredPlot && dataset._getHoveredPlot(chartX, chartY);
          if (hoveredInfo && hoveredInfo.hovered) {
            pointFound = true;
            hoveredInfo.datasetIndex = i;
            derivedEvensInfo = mouseTracker.getMouseEvents(e, hoveredInfo.datasetIndex, hoveredInfo.pointIndex);
          }
        }
      }
    }
    // @todo instead of sending event names, create a event object of that type and send it

    // fire out on last hovered plot
    if ((!pointFound || derivedEvensInfo && derivedEvensInfo.fireOut) && _lastDatasetIndex !== undefined) {
      // delete stored last ds details
      delete mouseTracker._lastDatasetIndex;
      delete mouseTracker._lastPointIndex;
      datasets[_lastDatasetIndex] && datasets[_lastDatasetIndex]._firePlotEvent && datasets[_lastDatasetIndex]._firePlotEvent(MOUSEOUT, _lastPointIndex, e);

      // @todo scope to have sticky tracked tooltip
    }
    // fire remaining events
    if (pointFound) {
      l = derivedEvensInfo.events && derivedEvensInfo.events.length;
      // store the index of the hovered DS and plot
      mouseTracker._lastDatasetIndex = hoveredInfo.datasetIndex;
      _lastPointIndex = mouseTracker._lastPointIndex = hoveredInfo.pointIndex;
      for (j = 0; j < l; j += 1) {
        dataset && dataset._firePlotEvent && dataset._firePlotEvent(derivedEvensInfo.events[j], _lastPointIndex, e);
      }
    }
  };
  /**
    * Remove a node from the specified path.
    * tree {Object} - A subtree or even a single node
    * path {Array} - Specify the position of the node to be removed wrt the root node for the tree. The last
    * value in path here denotes the insertion point of the tree. Elements insertion orders have a visual effect on
    * the slice and dice algorithims.
    * draw {Boolean} - A flag when set to false, will not update the visual after the removal.
    */


  TreeMap.prototype.addData = function addData() {
    var ref = this.getFromEnv('ref'),
        algorithmFactory = ref.algorithmFactory,
        args = Array.prototype.slice.call(arguments, 0);
    args.unshift('addData');
    // attaching the data cleaning function for applying number formatting
    args.unshift(this._getCleanValue());
    algorithmFactory.realTimeUpdate.apply(this, args);
  };
  /**
    * Remove a node from the specified path.
    * path {Array} - Specify the position of the node to be removed wrt the root node for the tree.
    * draw {Boolean} - A flag when set to false, will not update the visual after the removal.
    */


  TreeMap.prototype.removeData = function removeData() {
    var ref = this.getFromEnv('ref'),
        algorithmFactory = ref.algorithmFactory,
        args = Array.prototype.slice.call(arguments, 0);
    args.unshift('deleteData');
    // attaching the data cleaning function for applying number formatting
    args.unshift(this._getCleanValue());
    algorithmFactory.realTimeUpdate.apply(this, args);
  };
  /**
   * to trigger kd tree partitioning
   */


  TreeMap.prototype.triggerKDTreePartioning = function triggerKDTreePartioning() {
    var dataset = this.getDatasets()[0];
    _schedular2['default'].addJob(dataset.kdTreePartioning.bind(dataset), _lib.priorityList.tracker);
  };
  /**
   * to reset css property of tracker element
   */


  TreeMap.prototype.resetSingleTracker = function resetSingleTracker() {
    var dataset = this.getDatasets()[0],
        singleTracker = dataset && dataset.graphics && dataset.graphics.singleTracker;
    singleTracker && singleTracker.attr({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      stroke: 'rgba(255,255,255,0)'
    });
  };
  /**
   * to flush out kdTree
   */


  TreeMap.prototype.flushKDTree = function flushKDTree() {
    var dataset = this.getDatasets()[0];
    dataset.kdTree = {};
  };
  /**
   * Create a toolbox with a context menu.
   * Add context menus for export and print options if enabled.
   * Create the chart Menu bar as a chart component.
   */


  TreeMap.prototype._createToolBox = function _createToolBox() {
    var iapi = this,
        toolBox,
        toolBoxAPI,
        ComponentGroup,
        group,
        _Symbol,
        backSymbol,
        homeSymbol,
        conf,
        HorizontalToolbar,
        components = iapi.components,
        chartMenuBar = components.chartMenuBar,
        actionBar = components.actionBar;

    /* Do not reconfigure the toolbox if its already drawn. This flag is set falsy on each time configurations
    are updated. */
    if (chartMenuBar && chartMenuBar.drawn || actionBar && actionBar.drawn) {
      return;
    }

    (0, _lib.componentFactory)(iapi, _toolbox2['default'], 'tb', 1, [{
      graphics: iapi.graphics || (iapi.graphics = {}),
      chart: iapi,
      components: iapi.components
    }]);
    toolBox = iapi.getChildren('tb')[0];

    toolBox.pId = toolBox.getICount();
    toolBox.idCount = toolBox.idCount || 0;
    iapi.addToEnv('toolbox', toolBox);

    !iapi.getFromEnv('toolBoxAPI') && iapi.addToEnv('toolBoxAPI', toolBox.getAPIInstances(toolBox.ALIGNMENT_HORIZONTAL));
    toolBoxAPI = iapi.getFromEnv('toolBoxAPI');

    _Symbol = toolBoxAPI.Symbol;
    HorizontalToolbar = toolBoxAPI.Toolbar;
    ComponentGroup = toolBoxAPI.ComponentGroup;
    conf = toolBox.getDefaultConfiguration();
    group = new ComponentGroup(toolBox.idCount++, toolBox.pId);
    group.setConfiguaration({
      buttons: conf,
      group: {
        fill: TRACKER_FILL,
        borderColor: TRACKER_FILL
      }
    });
    backSymbol = new _Symbol('backIcon', false, (toolBox.idCount = toolBox.idCount || 0, toolBox.idCount++), toolBox.pId);
    homeSymbol = new _Symbol('homeIcon', false, toolBox.idCount++, toolBox.pId);

    group.addSymbol(homeSymbol, true);
    group.addSymbol(backSymbol, true);

    if (group.btnConfig.vAlign === 't') {
      // create a new Horizontal toolbar
      chartMenuBar = iapi.attachChild(new HorizontalToolbar(toolBox.idCount++, toolBox.pId), 'chartMenuBar', false);
      chartMenuBar.addComponent(group);
    } else {
      // create a new Horizontal toolbar
      chartMenuBar = iapi.attachChild(new HorizontalToolbar(toolBox.idCount++, toolBox.pId), 'actionBar', false);
      chartMenuBar.addComponent(group);
    }
    iapi.addToEnv('toolbarBtns', {
      back: backSymbol,
      home: homeSymbol
    });
  };
  /**
    * return a valid value as per the input [either number or null]
    * @return {Function} Returning the number formatted value.
    */


  TreeMap.prototype._getCleanValue = function _getCleanValue() {
    var numberFormatter = this.getFromEnv('number-formatter');
    // storing the reference for number formatter for future use.
    return function (value) {
      return numberFormatter.getCleanValue(value);
    };
  };
  /**
   * function to  create dataset, groupmaneger.
   * assign dataset to group manager.
   **/


  TreeMap.prototype._createDatasets = function _createDatasets() {
    var iapi = this,
        dataObj = iapi.jsonData,
        dataset = dataObj.dataset,
        data = dataObj.data || dataset && dataset[0].data,
        dataOnlyArr = [],
        datasetJSON;
    if (!(data && data.length)) {
      iapi.setChartMessage();
    }
    (0, _lib.fcEach)(data, function (datum) {
      if (!datum.vline) {
        dataOnlyArr.push(datum);
      }
    });
    datasetJSON = { data: dataOnlyArr };

    iapi.config.categories = dataOnlyArr;

    if (!data) {
      iapi.setChartMessage();
      return;
    }

    (0, _lib.datasetFactory)(iapi, iapi.getDSdef(), 'dataset', 1, [datasetJSON]);
  };
  /**
   * This method return the dataset definations for this charts
   * @return {Object}       TreeMap dataset definition
   */


  TreeMap.prototype.getDSdef = function getDSdef() {
    return _treemap2['default'];
  };

  return TreeMap;
}(_fusioncharts2['default']);

exports['default'] = TreeMap;

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _assign = __webpack_require__(13);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(78);

var _keys2 = _interopRequireDefault(_keys);

var _componentInterface = __webpack_require__(6);

var _componentInterface2 = _interopRequireDefault(_componentInterface);

var _schedular = __webpack_require__(41);

var _schedular2 = _interopRequireDefault(_schedular);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


var DEFAULT_CURSOR = _lib.preDefStr.DEFAULT,
    POINTER = 'pointer',
    ROLLOVER = 'DataPlotRollOver',
    ROLLOUT = 'DataPlotRollOut',

/* eslint-disable require-jsdoc */
kdTreeAbs = function kdTreeAbs(arr) {
  'use strict';
  // Max radius will be tolerance

  var tolerance = arr && arr[0] && arr[0].plotDetails.rect || 5,
      i,
      max = Math.max,
      floor = Math.floor,
      sqrt = Math.sqrt,
      min = Math.min,
      log = Math.log,
      exp = Math.exp,
      pow = Math.pow,
      result = {};
  arr = arr || [];
  // Find tolerance as the max radius
  // of the element
  for (i = arr.length; i--;) {
    if (arr[i].r > tolerance) {
      tolerance = arr[i].r;
    }
    // Setting the index
    arr[i].x = +arr[i].plotDetails.rect.x;
    arr[i].y = +arr[i].plotDetails.rect.y;
  }
  // Check a point is in range w.r.t
  // to given range

  function inRange(a, r1, r2) {
    return a >= r1 && a <= r2;
  }
  // KdTree Definition below

  function buildKdTree(arr, left, right, isY) {
    var ob = {},
        mid,
        access = isY ? 'y' : 'x';
    if (left === right) {
      ob.point = arr[left];
      return ob;
    }
    if (right - left === 1) {
      if (arr[left][access] > arr[right][access]) {
        ob.point = arr[left];
        ob.left = {
          point: arr[right]
        };
      } else {
        ob.point = arr[right];
        ob.left = {
          point: arr[left]
        };
      }
      return ob;
    }

    mid = left + right >> 1;

    if (isY) {
      quickselectY(arr, mid, left, right);
    } else {
      quickselectX(arr, mid, left, right);
    }

    ob.point = arr[mid];
    ob.left = buildKdTree(arr, left, mid - 1, !isY);
    ob.right = buildKdTree(arr, mid + 1, right, !isY);
    return ob;
  }

  function quickselectX(arr, k, left, right) {
    var n, m, z, s, sd, newLeft, newRight, t, i, j;

    while (right > left) {
      if (right - left > 600) {
        n = right - left + 1;
        m = k - left + 1;
        z = log(n);
        s = 0.5 * exp(2 * z / 3);
        sd = 0.5 * sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        newLeft = max(left, floor(k - m * s / n + sd));
        newRight = min(right, floor(k + (n - m) * s / n + sd));
        quickselectX(arr, k, newLeft, newRight);
      }

      t = arr[k];
      i = left;
      j = right;

      swap(arr, left, k);
      if (arr[right].x > t.x) {
        swap(arr, left, right);
      }

      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
        while (arr[i].x < t.x) {
          i++;
        }
        while (arr[j].x > t.x) {
          j--;
        }
      }

      if (arr[left].x === t.x) {
        swap(arr, left, j);
      } else {
        j++;
        swap(arr, j, right);
      }

      if (j <= k) {
        left = j + 1;
      }
      if (k <= j) {
        right = j - 1;
      }
    }
  }

  function quickselectY(arr, k, left, right) {
    var n, m, z, s, sd, newLeft, newRight, t, i, j;

    while (right > left) {
      if (right - left > 600) {
        n = right - left + 1;
        m = k - left + 1;
        z = log(n);
        s = 0.5 * exp(2 * z / 3);
        sd = 0.5 * sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        newLeft = max(left, floor(k - m * s / n + sd));
        newRight = min(right, floor(k + (n - m) * s / n + sd));
        quickselectY(arr, k, newLeft, newRight);
      }

      t = arr[k];
      i = left;
      j = right;

      swap(arr, left, k);
      if (arr[right].y > t.y) {
        swap(arr, left, right);
      }

      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
        while (arr[i].y < t.y) {
          i++;
        }
        while (arr[j].y > t.y) {
          j--;
        }
      }

      if (arr[left].y === t.y) {
        swap(arr, left, j);
      } else {
        j++;
        swap(arr, j, right);
      }

      if (j <= k) {
        left = j + 1;
      }
      if (k <= j) {
        right = j - 1;
      }
    }
  }
  function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  result = {
    tree: buildKdTree(arr, 0, arr.length - 1, false),
    search: function search(x, y) {
      // Helper function for search
      // to apply data if found
      // eslint-disable-next-line
      function apply(ob) {
        var currentHovered = inRange(x, ob.x1, ob.x2) && inRange(y, ob.y1, ob.y2),
            currentDist = calcDist(x, y, ob.point.x, ob.point.y);
        if (!res) {
          res = ob;
          lastHovered = currentHovered;
          lastDist = currentDist;
          return;
        }
        if (currentHovered) {
          if (lastHovered) {
            if (ob.point.i > res.point.i) {
              res = ob;
              lastHovered = currentHovered;
              lastDist = currentDist;
            }
          } else {
            res = ob;
            lastHovered = currentHovered;
            lastDist = currentDist;
          }
        } else {
          if (!lastHovered) {
            if (currentDist < lastDist) {
              res = ob;
              lastHovered = currentHovered;
              lastDist = currentDist;
            }
          }
        }
      }
      // Calculate  distance between two points
      // eslint-disable-next-line
      function calcDist(x, y, p, q) {
        return sqrt(pow(x - p, 2) + pow(y - q, 2));
      }
      // X and Y searching different for
      // maintaing performance
      function searchX(ob) {
        // Not found
        if (!ob || !ob.point) {
          return;
        }
        // If match found return
        if (inRange(ob.point.x, x1, x2) && inRange(ob.point.y, y1, y2)) {
          apply(ob);
        }
        // If smaller x1 go left
        if (x1 <= ob.point.x) {
          searchY(ob.left);
        }
        // If bigger x2 goto right
        if (x2 >= ob.point.x) {
          searchY(ob.right);
        }
      }
      function searchY(ob) {
        // Not found
        if (!ob || !ob.point) {
          return;
        }
        // If match found return
        if (inRange(ob.point.x, x1, x2) && inRange(ob.point.y, y1, y2)) {
          apply(ob);
        }
        // If smaller x1 go left
        if (y1 <= ob.point.y) {
          searchX(ob.left);
        }
        // If bigger x2 goto right
        if (y2 >= ob.point.y) {
          searchX(ob.right);
        }
      }
      // Actual search logic
      var tree = this.tree,
          res,
          x1 = x - tolerance,
          x2 = x + tolerance,
          y1 = y - tolerance,
          y2 = y + tolerance,
          lastHovered = false,
          lastDist = 0;
      searchX(tree);
      // Return point otherwise undefined value
      return res && res.point || res;
    },
    searchTreemap: function searchTreemap(x, y) {
      var res,

      // Higher index will be the result
      apply = function apply(ob) {
        if (!res) {
          res = ob;
          return;
        }
        if (ob.i > res.i) {
          res = ob;
        }
      },
          search = function search(ob, isY) {
        // Not found
        if (!ob || !ob.point) {
          return;
        }
        var x1 = ob.point.x,
            x2 = x1 + ob.point.plotDetails.rect.width,
            y1 = ob.point.y,
            y2 = y1 + ob.point.plotDetails.rect.height;
        ob.point.x2 = x2;
        ob.point.y2 = y2;

        // Found
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          apply(ob.point);
        }

        search(ob.left, !isY);
        search(ob.right, !isY);
      };
      search(this.tree, false);
      return res;
    }
  }; // ------
  arr.sort(function (a, b) {
    return a.i - b.i;
  });
  return result;
};
/* eslint-enable require-jsdoc */
/**
 * Dataset for treemap
 */

var TreeMapDS = function (_ComponentsInterface) {
  _inherits(TreeMapDS, _ComponentsInterface);

  /**
   * constructor fn
   */
  function TreeMapDS() {
    _classCallCheck(this, TreeMapDS);

    var _this = _possibleConstructorReturn(this, _ComponentsInterface.call(this));

    var datasetDefStore = _this;
    // Stub for saving all the child component
    datasetDefStore.components = {};
    // Stub for saving all the computed configuration
    datasetDefStore.conf = {};
    // Stub for saving all the graphics component
    datasetDefStore.graphics = {
      elemStore: {
        rect: [],
        label: [],
        highlight: [],
        hot: [],
        polypath: []
      }
    };
    return _this;
  }
  /**
    * Function for parsing all the attributes and value given by the user at chart,dataset and set level.
    * This function is called once from the init() function of the Column class.
    * @param  {Object} datasetJSON JSON for dataset configurations
    */


  TreeMapDS.prototype.configure = function configure(datasetJSON) {
    if (!datasetJSON) {
      return;
    }
    this.JSONData = datasetJSON.data[0];
    var algorithm = void 0,
        maxDepth = void 0,
        showNavigationBar = void 0,
        datasetDefStore = this,
        chart = datasetDefStore.getFromEnv('chart'),
        dsConf = datasetDefStore.conf,
        rawChartAttr = chart.getFromEnv('chart-attrib');

    dsConf.metaTreeInf = {};

    algorithm = rawChartAttr.algorithm || 'squarified';
    dsConf.algorithm = algorithm.toLowerCase();

    // horizontalPadding and verticalPadding is the separation space between parent drawing area
    // and child drawing area
    dsConf.horizontalPadding = (0, _lib.pluckNumber)(rawChartAttr.horizontalpadding, 5);
    dsConf.horizontalPadding = dsConf.horizontalPadding < 0 ? 0 : dsConf.horizontalPadding;
    dsConf.verticalPadding = (0, _lib.pluckNumber)(rawChartAttr.verticalpadding, 5);
    dsConf.verticalPadding = dsConf.verticalPadding < 0 ? 0 : dsConf.verticalPadding;

    // Hides the node which are not leaf nodes by using all the available spaces.
    // This attribute including horizontalPadding and verticalPadding is used to display only the child nodes
    dsConf.showParent = (0, _lib.pluckNumber)(rawChartAttr.showparent, 1);
    dsConf.showChildLabels = (0, _lib.pluckNumber)(rawChartAttr.showchildlabels, 0);

    // Hovers on all the leaf nodes which belong to a particular parent. Disbales single leaf hovering
    dsConf.highlightParentsOnHover = (0, _lib.pluckNumber)(rawChartAttr.highlightparentsonhover, 0);

    // Background color of nodes which are not leaf nodes. The leaf nodes color is managed by
    // the colorRangeManager
    dsConf.defaultParentBGColor = (0, _lib.pluck)(rawChartAttr.defaultparentbgcolor, undefined);
    dsConf.defaultNavigationBarBGColor = (0, _lib.pluck)(rawChartAttr.defaultnavigationbarbgcolor, dsConf.defaultParentBGColor);

    dsConf.showTooltip = (0, _lib.pluckNumber)(rawChartAttr.showtooltip, 1);
    // Font cosmetics
    dsConf.baseFontSize = (0, _lib.pluckNumber)(rawChartAttr.basefontsize, 10);
    dsConf.baseFontSize = dsConf.baseFontSize < 1 ? 1 : dsConf.baseFontSize;
    dsConf.labelFontSize = (0, _lib.pluckNumber)(rawChartAttr.labelfontsize, undefined);
    dsConf.labelFontSize = dsConf.labelFontSize < 1 ? 1 : dsConf.labelFontSize;
    dsConf.baseFont = (0, _lib.pluck)(rawChartAttr.basefont, 'Verdana, Sans');
    dsConf.labelFont = (0, _lib.pluck)(rawChartAttr.labelfont, undefined);
    dsConf.baseFontColor = (0, _lib.pluck)(rawChartAttr.basefontcolor, '#000000').replace(/^#?([a-f0-9]+)/ig, '#$1');
    dsConf.labelFontColor = (0, _lib.pluck)(rawChartAttr.labelfontcolor, undefined);
    dsConf.labelFontColor && (dsConf.labelFontColor = dsConf.labelFontColor.replace(/^#?([a-f0-9]+)/ig, '#$1'));
    dsConf.labelFontBold = (0, _lib.pluckNumber)(rawChartAttr.labelfontbold, 0);
    dsConf.labelFontItalic = (0, _lib.pluckNumber)(rawChartAttr.labelfontitalic, 0);

    // Border cosmetics
    dsConf.plotBorderThickness = (0, _lib.pluckNumber)(rawChartAttr.plotborderthickness, 1);
    dsConf.plotBorderThickness = dsConf.plotBorderThickness < 0 ? 0 : dsConf.plotBorderThickness > 5 ? 5 : dsConf.plotBorderThickness;
    dsConf.plotBorderColor = (0, _lib.pluck)(rawChartAttr.plotbordercolor, '#000000').replace(/^#?([a-f0-9]+)/ig, '#$1');

    // Extended tooltip support
    dsConf.tooltipSeparationCharacter = (0, _lib.pluck)(rawChartAttr.tooltipsepchar, ',');
    dsConf.plotToolText = (0, _lib.pluck)(rawChartAttr.plottooltext, '');

    // Parent label line height configuration
    dsConf.parentLabelLineHeight = (0, _lib.pluckNumber)(rawChartAttr.parentlabellineheight, 12);
    dsConf.parentLabelLineHeight = dsConf.parentLabelLineHeight < 0 ? 0 : dsConf.parentLabelLineHeight;

    // Label glow is required since if the user choose a background that is as same as the color of the label,
    // the glow is required to work as a layer between text and background that will make the label stand out
    dsConf.labelGlow = (0, _lib.pluckNumber)(rawChartAttr.labelglow, 1);
    dsConf.labelGlowIntensity = (0, _lib.pluckNumber)(rawChartAttr.labelglowintensity, 100) / 100;
    dsConf.labelGlowIntensity = dsConf.labelGlowIntensity < 0 ? 0 : dsConf.labelGlowIntensity > 1 ? 1 : dsConf.labelGlowIntensity;
    dsConf.labelGlowColor = (0, _lib.pluck)(rawChartAttr.labelglowcolor, '#ffffff').replace(/^#?([a-f0-9]+)/ig, '#$1');
    dsConf.labelGlowRadius = (0, _lib.pluckNumber)(rawChartAttr.labelglowradius, 2);
    dsConf.labelGlowRadius = dsConf.labelGlowRadius < 0 ? 0 : dsConf.labelGlowRadius > 10 ? 10 : dsConf.labelGlowRadius;

    // Tool bar configuration
    dsConf.btnResetChartTooltext = (0, _lib.pluck)(rawChartAttr.btnresetcharttooltext, 'Back to Top');
    dsConf.btnBackChartTooltext = (0, _lib.pluck)(rawChartAttr.btnbackcharttooltext, 'Back to Parent');

    // Legend Effects Configuration
    dsConf.rangeOutBgColor = (0, _lib.pluck)(rawChartAttr.rangeoutbgcolor, '#808080').replace(/^#?([a-f0-9]+)/ig, '#$1');
    dsConf.rangeOutBgAlpha = (0, _lib.pluckNumber)(rawChartAttr.rangeoutbgalpha, 100);
    dsConf.rangeOutBgAlpha = dsConf.rangeOutBgAlpha < 1 || dsConf.rangeOutBgAlpha > 100 ? 100 : dsConf.rangeOutBgAlpha;

    // maximum levels to display in the tree at a time.
    maxDepth = (0, _lib.pluckNumber)(rawChartAttr.maxdepth);
    dsConf.maxDepth = maxDepth !== undefined ? Math.max(maxDepth, 1) : undefined;

    showNavigationBar = dsConf.showNavigationBar = (0, _lib.pluckNumber)(rawChartAttr.shownavigationbar, 1);
    dsConf.slicingMode = (0, _lib.pluck)(rawChartAttr.slicingmode, 'alternate');
    dsConf.navigationBarHeight = (0, _lib.pluckNumber)(rawChartAttr.navigationbarheight);
    dsConf.navigationBarHeightRatio = (0, _lib.pluckNumber)(rawChartAttr.navigationbarheightratio);
    dsConf.navigationBarBorderColor = (0, _lib.pluck)(rawChartAttr.navigationbarbordercolor, dsConf.plotBorderColor).replace(/^#?([a-f0-9]+)/ig, '#$1');
    dsConf.navigationBarBorderThickness = showNavigationBar ? (0, _lib.pluckNumber)(rawChartAttr.navigationbarborderthickness, dsConf.plotBorderThickness) : 0;
    dsConf.seperatorAngle = (0, _lib.pluckNumber)(rawChartAttr.seperatorangle) * (Math.PI / 180);

    datasetDefStore.getFromEnv('postLegendInitFn')({
      min: 0,
      max: 100
    });

    dsConf.isConfigured = true;
  };
  /**
   * function to create group for dataset
   */


  TreeMapDS.prototype.createContainer = function createContainer() {
    var dataset = this,
        datasetGroup,
        datalabelGroup,
        trackerGroup,
        labelHighlightGroup,
        paper = dataset.getFromEnv('paper'),
        parentContainer = dataset.getLinkedParent().getChildContainer();

    datasetGroup = dataset.getContainer('plots') || dataset.addContainer('plots', paper.group('plots', parentContainer.defaultGroup));
    datalabelGroup = dataset.getContainer('datalabels') || dataset.addContainer('datalabels', paper.group('datalabels', parentContainer.defaultGroup).insertAfter(datasetGroup));

    trackerGroup = dataset.getContainer('tracker') || dataset.addContainer('tracker', paper.group('tracker', parentContainer.defaultGroup));

    !dataset.getContainer('line-hot') && dataset.addContainer('line-hot', paper.group('line-hot', trackerGroup));

    labelHighlightGroup = dataset.getContainer('labelhighlight') || dataset.addContainer('labelhighlight', paper.group('labelhighlight', datalabelGroup));

    !dataset.getContainer('labelfloat') && dataset.addContainer('labelfloat', paper.group('labelfloat', datalabelGroup).insertAfter(labelHighlightGroup));
  };
  /**
   * Function that retunr the nearest plot details
   * @param {number} chartX x-axis position of the mouse cordinate
   * @param {number} chartY x-axis position of the mouse cordinate
   * @return {Object} return an object with details of nearest polt and whether it is hovered or not
   */


  TreeMapDS.prototype._getHoveredPlot = function _getHoveredPlot(chartX, chartY) {
    var dataset = this,
        trackerElem,
        m,
        keys,
        kdTree = dataset.kdTree || {};

    keys = (0, _keys2['default'])(kdTree);
    for (m = keys.length - 1; m > -1; m--) {
      if (dataset.kdTree[keys[m]].searchTreemap(chartX, chartY)) {
        trackerElem = dataset.kdTree[keys[m]].searchTreemap(chartX, chartY);
        break;
      }
    }

    if (trackerElem) {
      dataset.pointObj = trackerElem;
      return {
        pointIndex: trackerElem.i || trackerElem.index,
        hovered: true,
        pointObj: trackerElem
      };
    }
  };
  // eslint-disable-next-line


  TreeMapDS.prototype.kdTreePartioning = function kdTreePartioning() {
    var dataset = this,
        trackerConfigArray = dataset.getFromEnv('chartConfig').trackerConfig,
        m,
        keys,
        trackerObjPartition = {};

    for (m = trackerConfigArray.length; m--;) {
      trackerConfigArray[m].i = m;
      if (trackerObjPartition[trackerConfigArray[m].node.meta.depth] === undefined) {
        trackerObjPartition[trackerConfigArray[m].node.meta.depth] = [];
      }
      trackerObjPartition[trackerConfigArray[m].node.meta.depth].push(trackerConfigArray[m]);
    }
    dataset.kdTree = {};
    keys = (0, _keys2['default'])(trackerObjPartition);
    for (m = keys.length - 1; m > -1; m--) {
      dataset.kdTree[keys[m]] = kdTreeAbs && kdTreeAbs(trackerObjPartition[keys[m]]);
    }
  };
  /**
   * function to handle hover in effect on element
   * @param {Object} elem    graphics element
   * @param {Object} event   original event reference
   */


  TreeMapDS.prototype._rolloverResponseSetter = function _rolloverResponseSetter(elem, event) {
    var elData = elem.getData(),
        chart = this.getFromEnv('chart');
    // Check whether the plot is in dragged state or not if
    // drag then dont fire rolloverevent
    if (elData && elData.showHoverEffect !== 0 && elData.draged !== true) {
      elem.attr(elem.getData().setRolloverAttr);
      _lib.plotEventHandler.call(elem, chart, event, ROLLOVER);
    }
  };
  /**
   * function to handle hover out effect on element
   * @param {Object} elem    graphics element
   * @param {Object} event   original event reference
   */


  TreeMapDS.prototype._rolloutResponseSetter = function _rolloutResponseSetter(elem, event) {
    var elData = elem.getData(),
        chart = this.getFromEnv('chart');
    // Check whether the plot is in draggedstate or not if drag then dont fire rolloutevent
    if (elData && elData.showHoverEffect !== 0 && elData.draged !== true) {
      elem.attr(elem.getData().setRolloutAttr);
      _lib.plotEventHandler.call(elem, chart, event, ROLLOUT);
    }
  };
  /**
   * This method handles all mouse events of an dataset.
   * @param {string} eventType    name of the event
   * @param {number} plotIndex    index of the plot where this event has been occured
   * @param {Event}  e            reference of the original mouse event
   */


  TreeMapDS.prototype._firePlotEvent = function _firePlotEvent(eventType, plotIndex, e) {
    var dataset = this,
        currentToolTip = dataset.config.currentToolTip,
        paper = dataset.getFromEnv('paper'),
        chartConfig = dataset.getFromEnv('chartConfig'),
        data = chartConfig.trackerConfig[plotIndex || 0],
        datasetGroup = dataset.getContainer('tracker'),
        setElement = data && data.node && data.node.plotItem,
        toolText = data && data.plotDetails && data.plotDetails.toolText,
        style = paper.canvas.style,
        toolTipController = dataset.getFromEnv('toolTipController'),
        originalEvent = e.originalEvent,
        singleTracker = dataset.graphics.singleTracker,
        hoveredInfo = dataset.pointObj,
        plotDetails = hoveredInfo.plotDetails;
    if (!singleTracker) {
      singleTracker = dataset.graphics.singleTracker = paper.rect(datasetGroup);
    }
    if (!setElement) {
      setElement = data && data.node.dirtyNode.plotItem;
      plotDetails = {};
      plotDetails.rect = {};
    } else if (plotDetails) {
      singleTracker.attr({
        x: plotDetails.rect.x || 0,
        y: plotDetails.rect.y || 0,
        width: plotDetails.rect.width || 0,
        height: plotDetails.rect.height || 0,
        stroke: '#ffffff',
        'stroke-width': '0px'
      });
      singleTracker.toFront();
    } else {
      singleTracker.attr({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        stroke: '#ffffff',
        'stroke-width': '0px'
      });
      singleTracker.toFront();
    }

    if (setElement) {
      switch (eventType) {
        case 'mouseover':
          data.evtFns.hover[0](singleTracker);
          if (toolText) {
            if (currentToolTip) {
              toolTipController.draw(originalEvent, toolText, currentToolTip);
            } else {
              currentToolTip = dataset.config.currentToolTip = toolTipController.draw(originalEvent, toolText);
            }
          }
          style.cursor = POINTER;
          // dataset._rolloverResponseSetter(setElement, originalEvent);
          break;
        case 'mouseout':
          singleTracker.attr({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            stroke: '#ffffff',
            'stroke-width': '0px'
          });
          style.cursor = DEFAULT_CURSOR;
          singleTracker.toFront();
          toolTipController.hide(currentToolTip);
          dataset._rolloutResponseSetter(setElement, originalEvent);
          break;
        case 'click':
          // plotEventHandler.call(setElement, chart, originalEvent);

          data && data.evtFns && data.evtFns.click && data.evtFns.click[0]();
          dataset.kdTree = {};

          // @todo - get the schedular and add the job
          _schedular2['default'].addJob(dataset.kdTreePartioning.bind(dataset), _lib.priorityList.tracker);
          break;
        case 'mousemove':
          if (toolText) {
            if (currentToolTip) {
              toolTipController.draw(originalEvent, toolText, currentToolTip);
            } else {
              currentToolTip = dataset.config.currentToolTip = toolTipController.draw(originalEvent, toolText);
            }
          }
      }
    }
  };
  /**
   * function to handle drawing job of treemap dataset
   */


  TreeMapDS.prototype.draw = function draw() {
    var datasetDefStore = this,
        dsConf = datasetDefStore.conf,
        chart = datasetDefStore.getFromEnv('chart'),

    // jobList = chart.getJobList(),
    chartConf = datasetDefStore.getFromEnv('chartConfig'),
        trackerConfig = chartConf.trackerConfig,
        canvasLeft = chartConf.canvasLeft,
        canvasRight = chartConf.canvasRight,
        canvasBottom = chartConf.canvasBottom,
        canvasTop = chartConf.canvasTop,
        paper = datasetDefStore.getFromEnv('paper'),
        chartAttr = datasetDefStore.getFromEnv('chart-attrib'),
        datasetLayer,
        datalabelLayer,
        lineHotLayer,
        labelHighlightLayer,
        floatLabelLayer,
        metaInf = dsConf.metaTreeInf,
        elemStore = datasetDefStore.graphics.elemStore,
        rendererAPI = {},
        graphicPool = dsConf._graphicPool || (dsConf._graphicPool = {}),
        drawingAreaCenterPoint = {},
        groupLabelCssProps = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'],
        groupLabelCss = {},
        nodeRect,
        tree,

    // algorithmAPI,
    HOVER_FILL = 'rgba(255, 255, 255, 0)',
        attrs = dsConf,
        legend = datasetDefStore.getFromEnv('gradientLegend'),
        drawTreeFn,
        shadeFilter,
        ref = this.getFromEnv('ref'),
        afAPI = ref.afAPI,
        visController = afAPI.visibilityController,
        animationObj = chartConf.animationObj,

    // animationDuration = (animationObj.duration || 0),
    // mainElm = animationObj.dummyObj,
    // animObj = animationObj.animObj,
    animType = animationObj.animType,
        elemCat,
        elemCatContent,
        thisElem,
        index,
        length,
        animationManager = datasetDefStore.getFromEnv('animationManager'),
        containerManager = ref.containerManager,
        chartLevelAttr,
        algorithmFactory = ref.algorithmFactory,
        attr;

    trackerConfig && (trackerConfig.length = 0);
    datasetDefStore.createContainer();

    chartLevelAttr = (0, _lib.parsexAxisStyles)({}, {}, chartAttr, { fontFamily: 'Verdana,sans', fontSize: '10px' });

    // Extract the required css from the list of css (guard for IE)
    for (index = 0, length = groupLabelCssProps.length; index < length; index++) {
      attr = groupLabelCssProps[index];

      if (attr in chartLevelAttr) {
        groupLabelCss[attr] = chartLevelAttr[attr];
      }
    }

    if (chart.state !== 'resize') {
      for (elemCat in elemStore) {
        elemCatContent = elemStore[elemCat];
        for (index = 0, length = elemCatContent.length; index < length; index++) {
          thisElem = elemCatContent[index];
          // thisElem && thisElem.remove && thisElem.remove();

          thisElem && animationManager.registerAnimation([{
            animType: animType,
            data: [{
              el: thisElem,
              callback: function callback() {
                // this.remove && this.remove();
              },
              attrs: {
                opacity: 0
              }
            }]
          }], 'initial');
        }
        elemCatContent.length = 0;
      }
    }

    // transport all the previously drawn elements to graphic pool.(graphics reusability)
    containerManager.remove();

    datasetLayer = datasetDefStore.getContainer('plots');

    datalabelLayer = datasetDefStore.getContainer('datalabels');

    datalabelLayer.css(groupLabelCss);

    lineHotLayer = datasetDefStore.getContainer('line-hot');

    labelHighlightLayer = datasetDefStore.getContainer('labelhighlight');

    floatLabelLayer = datasetDefStore.getContainer('labelfloat');

    dsConf.colorRange = legend.colorRange;

    // Measurement for available drawing area
    metaInf.effectiveWidth = canvasRight - canvasLeft;
    metaInf.effectiveHeight = canvasBottom - canvasTop;
    metaInf.startX = canvasLeft;
    metaInf.startY = canvasTop;

    // Starting point of animation. Animation starts from the center of the paper.
    drawingAreaCenterPoint.x = metaInf.effectiveWidth / 2;
    drawingAreaCenterPoint.y = metaInf.effectiveHeight / 2;

    // Starting point of animation. Animation starts from the center of the paper.
    drawingAreaCenterPoint.x = metaInf.effectiveWidth / 2;
    drawingAreaCenterPoint.y = metaInf.effectiveHeight / 2;

    /**
      * A function to draw a polygon of specific path and style configuration
      * @param {Object}  config - configuration of node
      * @param {Object} styleAttrs - The style object needed to be applied on the polygon element.
      * @param {TreeNode}  node   - single treenode
      * @return {graphicsElement} - newly created or reused graphics path element
      */
    rendererAPI.drawPolyPath = function (config, styleAttrs) {
      var pathElem,
          resize = chart.state === 'resize',
          newElem;
      // look up for dumped 'polypathItem' inside the garbage pool or create a new path.
      pathElem = (rendererAPI.graphicPool(false, 'polyPathItem') || (newElem = paper.path(datasetLayer))).attr({
        path: config._path,
        opacity: resize ? 1 : 0
      });

      animationManager.registerAnimation([{
        animType: animType,
        data: [{
          el: pathElem,
          attrs: {
            opacity: 1,
            path: config.path
          }
        }]
      }], 'final');
      // applying the css styles.
      pathElem.css(styleAttrs);

      newElem && elemStore.polypath.push(newElem);

      // return the polygon path element.
      return pathElem;
    };
    rendererAPI.drawRect = function (rect, styleAttrs, _rect, overriddenAttrs) {
      var prop,
          pVal,
          beforeAnimationStateRect = {},
          overrideCss = {},
          clicked = chart.state === 'click',
          accordianTrue = chart.state === 'initial' || chart.state === 'update',
          resize = chart.state === 'resize',
          animConfig,
          newElem;

      for (prop in rect) {
        pVal = rect[prop];
        if (pVal < 0) {
          // If value of any rect proerty is negative, give it zero pixel, so it become invisible
          rect[prop] = 0;
          // Explicit visibility hidden required for IE8
          overrideCss.visibility = 'hidden';
        }
      }
      // If animation is applied. For animation to happen we need a 'from state' and a 'to state'.
      // During the time duration the transition happens 'from state'  to 'to states'.

      (0, _lib.extend2)(beforeAnimationStateRect, rect);

      // From state measurement of the animation
      beforeAnimationStateRect.x = drawingAreaCenterPoint.x;
      beforeAnimationStateRect.y = drawingAreaCenterPoint.y;
      beforeAnimationStateRect.height = 0;
      beforeAnimationStateRect.width = 0;

      nodeRect = rendererAPI.graphicPool(false, 'plotItem') || (newElem = paper.rect(datasetLayer));
      // nodeRect = node.plotItem || (newElem = paper.rect(datasetLayer));

      nodeRect.attr(_rect && (_rect.x || _rect.y) && _rect || beforeAnimationStateRect);

      nodeRect.attr(overriddenAttrs);
      overriddenAttrs && delete overriddenAttrs.opacity;

      resize && nodeRect.attr('opacity', 1);
      if (clicked || resize) {
        animationManager.registerAnimation([{
          animType: animType,
          data: [{
            el: nodeRect,
            attrs: (0, _assign2['default'])({ 'opacity': 1 }, rect),
            callback: visController.controlPostAnimVisibility,
            animConfig: [{
              hookFn: function hookFn() {
                this.attr(overriddenAttrs);
                this.attr('opacity') === '0' && this.attr(rect);
              }
            }]
          }]
        }], 'plot');
      } else if (accordianTrue) {
        nodeRect.attr((0, _assign2['default'])({ 'opacity': 0 }, rect));
        animationManager.registerAnimation([{
          animType: animType,
          data: [{
            el: nodeRect,
            attrs: {
              opacity: 1
            },
            animConfig: animConfig
          }]
        }], 'plot');
      }

      nodeRect.css(styleAttrs).toFront();
      // Apply css which has to be applied anyway
      nodeRect.css(overrideCss);
      // Store the reference, so that we canus retrieve it later.
      // todo: remove...
      newElem && elemStore.rect.push(newElem);

      return nodeRect;
    };

    /*
      * Draw a text on the paper. This texts are drawn under datalabel layer.
      * @param text {String} - text to be drawn on paper
      * @param coordinates {Object} - Start co ordinate of the text. In {x: 10, y: 10} format
      * @return {Element} - the element which is drawn on paper
      */
    rendererAPI.drawText = function (text, coordinates, attrs, _coordinates, overAttr) {
      var mandatoryStyle = {},
          newTextElem,
          newHighlightElem,
          label = rendererAPI.graphicPool(false, 'labelItem') || rendererAPI.graphicPool(false, 'pathlabelItem') || (newTextElem = paper.text(floatLabelLayer)),
          highlightMask = rendererAPI.graphicPool(false, 'highlightItem') || rendererAPI.graphicPool(false, 'pathhighlightItem') || (newHighlightElem = paper.text(labelHighlightLayer)),
          textAttrs = attrs.textAttrs,
          highlightsAttrs = attrs.highlightAttrs;

      // There are two layers of datalabel placement happens here. The 1st layer from the top is the
      // real text. And below this is the text that brings the highlight effect. This effect is acheived
      // by making the strong-width bigger.

      (0, _lib.extend2)(mandatoryStyle, textAttrs);

      delete mandatoryStyle.fill;
      mandatoryStyle['stroke-linejoin'] = 'round';

      // If animation is applied. For animation to happen we need a 'from state' and a 'to state'.
      // During the time duration the transition happens 'from state'  to 'to states'.
      label.attr({
        x: _coordinates.x || drawingAreaCenterPoint.x,
        y: _coordinates.y || drawingAreaCenterPoint.y,
        opacity: 0,
        fill: '#000000'
      }).css(textAttrs);

      label.attr(overAttr);
      // If the coordinates are negative valued, texts are made BLANK.
      text = coordinates.x < 0 || coordinates.y < 0 ? _lib.BLANKSTRING : text;

      animationManager.registerAnimation([{
        animType: animType,
        data: [{
          el: label,
          attrs: {
            text: text,
            // x: coordinates.x,
            // y: coordinates.y
            opacity: 1
          },
          animConfig: [{
            hookFn: function hookFn() {
              label.attr(overAttr);
              label.attr({
                text: text,
                x: coordinates.x,
                y: coordinates.y
              });
            }
            // start: 0.5,
            // end: 1
          }]
        }]
      }], 'final');

      delete highlightsAttrs.opacity;
      highlightMask.attr({
        text: text,
        x: _coordinates.x || drawingAreaCenterPoint.x,
        y: _coordinates.y || drawingAreaCenterPoint.y,
        opacity: 0,
        stroke: dsConf.labelGlow ? '#ffffff' : _lib.TRACKER_FILL
      }).css(mandatoryStyle).css(highlightsAttrs);

      highlightMask.attr(overAttr);

      animationManager.registerAnimation([{
        animType: animType,
        data: [{
          el: highlightMask,
          attrs: {
            // x: coordinates.x,
            // y: coordinates.y
            opacity: 1
          },
          animConfig: [{
            hookFn: function hookFn() {
              highlightMask.attr(overAttr);
              highlightMask.attr({
                x: coordinates.x,
                y: coordinates.y
              });
            }
            // start: 0.5,
            // end: 1
          }]
        }]
      }], 'final');

      // Store the reference in the array
      elemStore.label.push(newTextElem);
      elemStore.highlight.push(newHighlightElem);

      return {
        label: label,
        highlightMask: highlightMask
      };
    };

    /*
      * Draw a rect on the paper to mock interactivity. This rects are drawn under hot layer.
      * @param plotDetails {Object} - details of the plot incling the original object and the rect associated.
      * @param eventFns {Object} - a simple key value pair where key is the name of the event and value is the
                                function which is to be invoked when teh event fires
      * @return {Element} - the element which is drawn on paper
      */
    rendererAPI.drawHot = function (plotDetails, evtFns) {
      var tracker,
          plotItem = plotDetails.plotItem || {},
          rect = plotDetails.rect,
          attr,
          fns,
          prop,
          pVal;

      for (prop in rect) {
        pVal = rect[prop];
        if (pVal < 0) {
          // If value of any rect proerty is negative, give it zero pixel, so it become invisible
          rect[prop] = 0;
        }
      }

      tracker = plotItem.tracker = paper.rect(lineHotLayer).attr(rect).attr({
        cursor: 'pointer',
        fill: HOVER_FILL,
        stroke: 'none'
      });

      // Registers event and event functions
      for (attr in evtFns) {
        fns = evtFns[attr];
        tracker[attr].apply(tracker, fns);
      }

      // Save the reference
      elemStore.hot.push(tracker);
      return tracker;
    };

    /*
      * Dispose the graphic elements related to a node element.
      * @param node - {TreeNode} - The node element reference wrt whom the graphic elements needs to be detached.
      * @param disposeList - {Array} - The  disposing graphics elements names which are to be only removed.
    */
    rendererAPI.disposeItems = function (node, disposeList) {
      var i,
          item,
          prop,
          disposeNames = disposeList || ['plotItem', 'labelItem', 'hotItem', 'highlightItem', 'polyPathItem', 'pathlabelItem', 'pathhighlightItem', 'stackedpolyPathItem', 'stackedpathlabelItem', 'stackedpathhighlightItem'];

      for (i = 0; i < disposeNames.length; i += 1) {
        prop = disposeNames[i];
        item = node[prop];
        // push these elements in the graphic pool for reusing in future.
        item && item.type === 'text' && item.attr({
          text: '',
          'text-bound': []
        });
        item && item.hide();
        item && rendererAPI.graphicPool(true, prop, item);
        // hide the elements.
        // detach the node and the graphic element linkage.
        node[prop] = undefined;
      }
    };

    /*
      * Recursively destroy all childs of the tree node.
    */
    rendererAPI.disposeChild = function () {
      var rendererAPI,
          disposeItems = function disposeItems() {
        return rendererAPI.disposeItems;
      },
          removeFn = function removeFn(currentNode, depth) {
        var index, childrenArr;

        // dispose the graphics elements for the element.
        disposeItems(currentNode);
        // todo: put it in closure
        for (index = 0; index < (currentNode.getChildren() || []).length; index++) {
          childrenArr = currentNode.getChildren();
          index = removeFn(childrenArr[index], index);
        }
        return depth;
      };
      return function (node) {
        var parentNode = node.getParent();
        if (!rendererAPI) {
          rendererAPI = this;
          disposeItems = disposeItems();
        }
        // check if its not the global origin
        if (parentNode) {
          rendererAPI.disposeChild(parentNode);
        } else {
          /* dispose the graphics elements, if any. Store it for future re-use and unlink its reference
          from the node element */
          removeFn(node, 0);
        }
      };
    }();

    /**
     * store or fetch an element of the type.
     * param add {boolean} - If to add the element or fetch an element.
     * param type {'string'} - If a hot element, rectangle, texts...
     * param elem {svg element}
     */
    rendererAPI.graphicPool = function () {
      return function (add, type, elem) {
        var freeElement,
            dumpArr = graphicPool[type];
        // create a storage array for the specified type if not existing.
        if (!dumpArr) {
          dumpArr = graphicPool[type] = [];
        }
        if (type === 'hotItem' || type === 'pathhotItem') {
          elem.remove();
        }
        // adds the elemnt to the graphics pool
        if (add) {
          dumpArr.push(elem);
        } else {
          // fectches an element from the pool and remove that from the free pool.
          // slice out the first element from the array of free elements.
          freeElement = dumpArr.splice(0, 1)[0];
          if (freeElement) {
            freeElement.show();
            return freeElement;
          }
        }
      };
    }();

    // dispose the complimentary tree.
    rendererAPI.disposeComplimentary = function (targetNode) {
      var child,
          childrenArr,
          rendererAPI = this,
          parentNode = targetNode.getParent(),
          leftSiblingCount = targetNode.getSiblingCount('left');
      if (parentNode) {
        childrenArr = parentNode.getChildren();
        // set parent node to undefined, to break the parent-child links.
        child = childrenArr.splice(leftSiblingCount, 1)[0];
        // generically dispose the discontinous tree.
        rendererAPI.disposeChild(targetNode);
        // re-eastablish the broken parent-child relationships for the node.
        childrenArr.splice(leftSiblingCount, 0, child);
      }
      // bridge code: Cannot dispose hotItems.
      rendererAPI.removeLayers();
    };

    /**
      * Remove everything that has been drawn in the layers. It doesnot remove the layer directly.
      * Instead it removes the children. All the children of datasetLayer, datalabelLayer, hotLayer
      * are removed
      */
    rendererAPI.removeLayers = function () {
      var index, length,
      /* dataset,
      datalabel,
      highlight, */
      hot,
      /* _datasetLayer,
      _datalabelLayer,
      _highlightLayer, */
      _hotLayer,
      /* datasetLayerLength,
      datalabelLayerLength,
      highlightLayerLength, */
      hotLayerLength;

      /* _datasetLayer = elemStore.rect, datasetLayerLength = _datasetLayer.length;
      _datalabelLayer = elemStore.label, datalabelLayerLength = _datalabelLayer.length;
      _highlightLayer = elemStore.highlight, highlightLayerLength = _highlightLayer.length; */
      _hotLayer = elemStore.hot;
      hotLayerLength = _hotLayer.length;

      // Get the length of maximum element inside among three layers
      // length = Math.max(datasetLayerLength, datalabelLayerLength, highlightLayerLength, hotLayerLength);
      length = hotLayerLength;

      for (index = 0; index < length; index++) {
        /* dataset = _datasetLayer[index];
        datalabel = _datalabelLayer[index];
        highlight = _highlightLayer[index]; */
        hot = _hotLayer[index];

        // Remove the element from DOM
        /* dataset && dataset.remove();
        datalabel && datalabel.remove();
        highlight && highlight.remove(); */
        hot && hot.remove();
      }

      // Empty the arry which was holding the reference
      /* _datasetLayer.length = 0;
      _datalabelLayer.length = 0; */
      _hotLayer.length = 0;
    };

    /* if (hasReflowed) {
        visibleRoot = afAPI.getVisibleRoot();
        afAPI.setVisibleRoot(visibleRoot);
        visibleRoot = [visibleRoot,visibleRoot,visibleRoot];
    } */
    if (chart.state === 'resize') {
      containerManager.draw();
    } else {
      algorithmFactory.init(dsConf.algorithm, true, dsConf.maxDepth);

      // Retrieves draw function of algorithm
      drawTreeFn = algorithmFactory.plotOnCanvas(datasetDefStore.JSONData, chart._getCleanValue());
      // initialise the container manager.

      containerManager.init(datasetDefStore, metaInf, rendererAPI, tree, drawTreeFn);

      // visibleRoot = afAPI.getVisibleRoot();
      // visibleRoot && rendererAPI.disposeChild(visibleRoot);
      // hideAll(visibleRoot);
      // draw the indivual containers inside the container manager.
      containerManager.draw();
    }

    shadeFilter = algorithmFactory.applyShadeFiltering({
      fill: attrs.rangeOutBgColor,
      opacity: attrs.rangeOutBgAlpha * 0.01
    }, function (css) {
      var nodeInf = this;
      nodeInf.plotItem && nodeInf.plotItem.css(css);
    });

    if (legend && legend.enabled) {
      legend.resetLegend();
      legend.clearListeners();
    }

    legend.notifyWhenUpdate(function () {
      shadeFilter.call(this, {
        start: arguments[0],
        end: arguments[1]
      });
    }, this);
    dsConf.isConfigured = false;
    // @todo - get the schedular and add the job
    _schedular2['default'].addJob(datasetDefStore.kdTreePartioning.bind(datasetDefStore), _lib.priorityList.tracker);
  };
  /**
   * Returns the type of the component
   * @return {string} The type of the component, in this case a dataset.
   */


  TreeMapDS.prototype.getType = function getType() {
    return 'dataset';
  };
  /**
   * function to set index for the dataset component
   * @param {number} index    index according to the index JSON
   */


  TreeMapDS.prototype.setJSONIndex = function setJSONIndex(index) {
    this.config.index = index;
  };

  /**
   * function to return index for the dataset component
   * @return {number}    index according to the index JSON
   */


  TreeMapDS.prototype.getJSONIndex = function getJSONIndex() {
    return this.config.index || 0;
  };

  return TreeMapDS;
}(_componentInterface2['default']);

exports['default'] = TreeMapDS;

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(2);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = __webpack_require__(3);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _setPrototypeOf = __webpack_require__(4);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(0);

var _create2 = _interopRequireDefault(_create);

var _eventApi = __webpack_require__(7);

var _lib = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = (0, _getOwnPropertyNames2['default'])(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = (0, _getOwnPropertyDescriptor2['default'])(defaults, key); if (value && value.configurable && obj[key] === undefined) { (0, _defineProperty2['default'])(obj, key, value); } } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2['default'])(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2['default'] ? (0, _setPrototypeOf2['default'])(subClass, superClass) : _defaults(subClass, superClass); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint require-jsdoc: 'error', valid-jsdoc: 'error' */


var DRILLUP = 'drillup',
    getLightColor = _lib.graphics.getLightColor,
    afAPICreator = function afAPICreator(afAPI, containerManager) {
  var iterator, maxDepth, visibleRoot, visibilityController, context;
  /**
    * AbstractTreeMaker is kind of an abstract class that converts fusioncharts configuration to tree.
    * This can directly be used and initialized  if no ordering is required. If any particular ordering
    * is needed, it is the subclass needs to implement order function.
    */

  var AbstractTreeMaker = function () {
    /**
     * constructor
     * @param {Object}   node                 root node of the configuration. This would be root of the returned tree as well
     * @param {boolean}  bucketIterationMode  whether bucket is needed or not
     * @param {Function} cleansingFn          cleansing fn
     */
    function AbstractTreeMaker(node, bucketIterationMode, cleansingFn) {
      _classCallCheck(this, AbstractTreeMaker);

      this.node = node;
      this.bucket = bucketIterationMode ? new Bucket() : undefined;
      this.cleansingFn = cleansingFn;
    }
    /**
      * Create the tree from configuration.
      * @return {TreeNode} - newly created tree
      */


    AbstractTreeMaker.prototype.get = function get() {
      var orderFn = this.order,
          bucket = this.bucket,
          cleansingFn = this.cleansingFn;

      /**
        * Recursively prepare the tree from the configuration.
        * @param {number}   level    - The depth of the current root element.
        * @param {TreeNode} root     - The current base root in the full tree trversal.
        */
      return function rec(root, level) {
        var pNewNode,
            index,
            children,
            childNode,
            newNode,
            notMetaKeys = ['label', 'value', 'data', 'svalue'],
            key;

        if (root) {
          // If root node is present add in the existing tree.
          // This also acts as a break condition of recursion.
          pNewNode = new TreeNode(root.label, cleansingFn(root.value), cleansingFn(root.svalue));
          children = root.data || [];
          if (children.length === 0 && bucket) {
            bucket.addInBucket(pNewNode);
          }
          // sets the depth information in the 'meta' object for the Tree node element.
          pNewNode.setDepth(level);
          // Support for set label attributes. All the set label attributes are stored in meta object.
          for (key in root) {
            // label, value and data is non-meta attribute
            if (notMetaKeys.indexOf(key) !== -1) {
              continue;
            }
            pNewNode.setMeta(key, root[key]);
          }
        }

        if (orderFn) {
          // For ordered treemaps. If the subclass give implementation of orderFn
          children = orderFn(children);
        }

        for (index = 0; index < children.length; index++) {
          childNode = children[index];
          // Recursively iterate to complete the tree along with the incremental level information.
          newNode = rec(childNode, level + 1);
          pNewNode.addChild(newNode);
        }

        return pNewNode;
      }(this.node, 0); // The depth for the initial global node remains '0'.
    };

    /**
      * Get the  bucket formation created by ordering and grouping the leaf nodes. This can be accessed if the
      * legend is enabled.
      * @return {Bucket} - The bucket of leaf nodes
      */


    AbstractTreeMaker.prototype.getBucket = function getBucket() {
      return this.bucket;
    };
    /**
     * return maximum level of tree
     * @return {number} maximum level of tree
     */


    AbstractTreeMaker.getMaxDepth = function getMaxDepth() {
      return maxDepth;
    };

    return AbstractTreeMaker;
  }();
  /**
   * set maximum level of tree
   * @param {number} value maximum level of tree
   * @return {number} maximum level of tree
   */


  function setMaxDepth(value) {
    return maxDepth = value;
  }

  /**
    * Iterates through the tree. This provides two basic traversal of tree. This iteration happens on-demand.
    * Hence faster.
    * 1. Breath-first
    * 2. depth-first
    * @param  {TreeNode} rootNode       - Root node from where the traversal to be started
    * @param  {Object}   controlOptions -
    * @return {Object}                  - Object containg standard API for breadth-first-traversal  and depth-first-traversal
    */
  iterator = function iterator(rootNode, controlOptions) {
    var it = {},
        exception = controlOptions && controlOptions.exception,
        df,
        bf;

    /**
      * Provides control to implement iterator in case the user wants have more than one iterator
      * without waiting for the one to get exhausted.
      */

    var Iterable = function () {
      /**
       * constructor
       * @param {Object}  iterAPI - Iteration APIs [bf or df]
       */
      function Iterable(iterAPI) {
        _classCallCheck(this, Iterable);

        this.iterAPI = iterAPI;
      }

      /**
       * Initialize all the traversing algorithm.
       * @param {TreeNode}  rootNode - node from where iteration will initiated
       * @return {Object}          - new DF or BF algorithm
       */


      Iterable.prototype.initWith = function initWith(rootNode) {
        return this.iterAPI(rootNode);
      };

      return Iterable;
    }();
    /*
      * Depth first (df) iteration API.
      * This exposes two functions
      * next() - gives the next df node. If all nodes are iterated, the pointer is exhausted,
      * it returns undefined
      * reset() - reset the whole system to the initial state
      * Here the iteration happens without saving the states separately. It is on demand. Means,
      * the moment next is called, the callee node and immediate the children are only allocated.
      *
      * If there is a tree like this
      * A -|
      *    |--- B --|
      *    |        | --- B1
      *    |        | --- B2
      *    |
      *    |--- C --|
      *    |        | --- C1
      *    |        | --- C2
      *    |        | --- C3
      *    |
      *    |--- D
      *
      * It creates array like the following
      * init -  | A |
      * next() - | B | C | D | and returns A
      * next() - | B1 | B2 | C | D | and returns B (because B has children we place the children in front)
      * next() - | B2 | C | D | and returns B1 (because B1 doesn't have children, we just returns it)
      * reset() - | A |
      */


    it.df = function (node) {
      var nextNode = node,
          dfArr = [],
          next,
          reset,
          isExhausted = false;

      // initial stage, start with the root node
      dfArr.push(nextNode);

      /*
        * Apply depth first and returns the next node
        * @param maxDepth{Number | undefined} - If there is a hardcoded maxDepth specified, beyond that depth
          of the tree,its children information is not fetched.
        * @return {TreeNode | undefined} - if the complete tree is iterated returns undefined
        */
      next = function next(maxDepth) {
        var children, fNode, len;

        if (isExhausted) {
          // tree iteration complete, return undefined
          return;
        }

        // returns the front node of the array
        fNode = dfArr.shift();

        if (exception && fNode === exception) {
          fNode = dfArr.shift();

          if (!fNode) {
            isExhausted = true;
            return;
          }
        }

        // If maxdepth is defined, no children information is fetched for the node.
        children = maxDepth !== undefined ? fNode.getDepth() >= maxDepth ? [] : fNode.getChildren() : fNode.getChildren();
        len = children && children.length || 0;

        if (len) {
          // place the children at the front of the array
          [].unshift.apply(dfArr, children);
        }

        if (dfArr.length === 0) {
          // Sets the exhaustion flag if the array is empty so that during the next iteration
          // the iterator returns undefined
          isExhausted = true;
        }

        return fNode;
      };

      /*
        * Reset the state of the iterator. Every iterator instance needs to reset its state
        * once it is done traversing. The caller will be responsible for this call.
        */
      reset = function reset() {
        // Go back to initial state
        isExhausted = false;
        nextNode = node;
        dfArr.length = 0;
        dfArr.push(nextNode);
      };

      return {
        next: next,
        reset: reset
      };
    };

    /*
      * Breadth first (bf) iteration API.
      * This exposes two functions
      * next() - gives the next df node. If all nodes are iterated, the pointer is exhausted,
      * it returns undefined
      * reset() - reset the whole system to the initial state
      * Here the iteration happens without saving the states separately. It is on demand. Means,
      * the moment next is called, the callee node and immediate the children are only allocated.
      *
      * If there is a tree like this
      * A -|
      *    |--- B --|
      *    |        | --- B1
      *    |        | --- B2
      *    |
      *    |--- C --|
      *    |        | --- C1
      *    |        | --- C2
      *    |        | --- C3
      *    |
      *    | --- D
      *
      * It creates array like the following
      * init -  | A |
      * next() - | B | C | D | and returns A
      * next() - | C | D | B1 | B2 | and returns B (because B has children we place the children in last)
      * next() - | D | B1 | B2 | C1 | C2 | C3 | and returns C (because C has children
      * we place the children in last)
      * next() - | B1 | B2 | C1 | C2 | C3 | and returns D (because D doesn't have children, we just returns it)
      * next() - | B2 | C1 | C2 | C3 | and returns B1 (because B1 doesn't have children, we just returns it)
      * next() - | C1 | C2 | C3 | and returns B2 (because B2 doesn't have children, we just returns it)
      * next() - | C2 | C3 | and returns C1 (because C1 doesn't have children, we just returns it)
      * next() - | C3 | and returns C2 (because C2 doesn't have children, we just returns it)
      * next() - | | and returns C3 (because C3 doesn't have children, we just returns it)
      * reset() - | A |
      */
    it.bf = function (node) {
      var nextNode = node,
          bfArr = [],
          next,
          nextBatch,
          reset,
          bfBatchArray = [],
          isExhausted = false;

      // initial stage, start with the root node
      bfArr.push(nextNode);
      bfBatchArray.push(nextNode);

      /*
        * Apply breadth first and returns the next node
        * @return {TreeNode | undefined} - if the complete tree is iterated returns undefined
        */
      next = function next() {
        var children, fNode, len;

        if (isExhausted) {
          return;
        }

        fNode = bfArr.shift();
        children = fNode.getChildren();
        len = children && children.length || 0;

        if (len) {
          // Stores all the node of the same level
          [].push.apply(bfArr, children);
        }

        if (bfArr.length === 0) {
          isExhausted = true;
        }

        return fNode;
      };

      /*
        * Custom function to return all the nodes of level by level
        * @return {Array.<TreeNode>} - if the complete tree is iterated returns undefined
        */
      nextBatch = function nextBatch() {
        var children, fNode, len;

        if (isExhausted) {
          return;
        }

        fNode = bfBatchArray.shift();
        children = fNode.getChildren();
        len = children && children.length || 0;

        if (len) {
          [].push.apply(bfBatchArray, children);
        }

        if (bfArr.length === 0) {
          isExhausted = true;
        }

        return children;
      };

      /*
        * Reset the state of the iterator. Every iterator instance needs to reset its state
        * once it is done traversing. The caller will be responsible for this call.
        */
      reset = function reset() {
        isExhausted = false;
        nextNode = node;
        bfArr.length = 0;
        bfArr.push(nextNode);
      };

      return {
        next: next,
        nextBatch: nextBatch,
        reset: reset
      };
    };

    // Everytime iterator is called, this creates new depth first algorithm API
    df = new Iterable(it.df).initWith(rootNode);
    bf = new Iterable(it.bf).initWith(rootNode);

    return {
      df: df,
      bf: bf
    };
  };

  /**
    * Initialization operation to be performed before measuring space for label display.
    * This takes one time information that is applied over all the text emasurement operation.
    * @param  {Object} padding      - provides x and y padding of the label.
    * @param  {number} lineHeight   - line height of text
    * @param  {Object} attrs        - attributes
    * @return {Function}            - a function that calculates and return the configuration to draw the text
    */
  function initConfigurationForlabel(padding, lineHeight, attrs) {
    var padX = padding.x,
        padY = padding.y,
        halfLineHeight = lineHeight / 2,
        titleHideFlag = attrs.showParent ? 0 : 1,
        showChildLabels = attrs.showChildLabels;

    /**
      * Calculate the measurement of text.
      * @param  {TreeNode} node        - node for which the label to be plotted
      * @param  {Object}   rect        - bounding rectangle of node.
      * @param  {boolean}  forcedLabel -
      * @return {Object}               - the configuration object to draw the text and additional attribute primarily where
      *                                  the visibility is maintained
      */
    return function (node, rect, forcedLabel) {
      var // label,
      isLeaf = false,
          textCalConf = {
        x: undefined,
        y: undefined,
        width: undefined,
        height: undefined
      },
          conf = {},
          rectShiftY = 0,
          textAttr = {},
          highlightAttr = {},
          visibility,
          availableHeight,
          meta;

      meta = node.meta;

      if (!node) {
        return;
      }

      if (!node.isLeaf(maxDepth)) {
        // Detect the child nodes and set a flag
        isLeaf = true;
      }

      conf.label = node.getLabel();

      textCalConf.width = rect.width - 2 * padX;
      // Places it horizontally in the middle
      textCalConf.x = rect.x + rect.width / 2;

      availableHeight = rect.height - 2 * padY;

      if (!isLeaf && availableHeight < lineHeight) {
        textCalConf.height = -1;
      }

      if (!forcedLabel && isLeaf) {
        // If it is a leaf node the label will be placed in the middle, horizontally and vertically
        textCalConf.height = showChildLabels ? textCalConf.height ? textCalConf.height : rect.height - 2 * padY : -1;
        textCalConf.y = rect.y + rect.height / 2;
      } else {
        // If it is not leaf node the label will be placed at the top considering the padding and the
        // children area will shrink
        if (!titleHideFlag) {
          // Places the label of the parent
          textCalConf.height = textCalConf.height ? textCalConf.height : lineHeight;
          textCalConf.y = rect.y + padY + halfLineHeight;
        } else {
          // Hides the label of parent.
          textCalConf.y = -1;
          padY = 0;
          lineHeight = 0;
          visibility = 'hidden';
        }
      }

      // Calculation of shift which will be applied to move the starting point of chidren
      rectShiftY += 2 * padY;
      rectShiftY += lineHeight;

      conf.rectShiftY = rectShiftY;
      conf.textRect = textCalConf;

      if (attrs.labelGlow) {
        highlightAttr['stroke-width'] = attrs.labelGlowRadius;
        highlightAttr.opacity = attrs.labelGlowIntensity;
        highlightAttr.stroke = attrs.labelGlowColor;
        highlightAttr.visibility = visibility === 'hidden' ? 'hidden' : 'visible';
      } else {
        highlightAttr.visibility = 'hidden';
      }

      // CSS for node labels
      textAttr = {
        fill: meta && meta.fontcolor && normalizeColorCode(meta.fontcolor) || attrs.labelFontColor || attrs.baseFontColor,
        visibility: visibility
      };

      return {
        conf: conf,
        attr: textAttr,
        highlight: highlightAttr
      };
    };
  }

  /**
    * Manages color of all the nodes. This colors the leaf node taking configuration from the xml/json
    * by using ColorRangeManager.
    * For non-leaf (title) nodes it provides color if user has provided one in defaultParentBGColor attribute.
    * The title nodes are not colored from the ColorRangeManager.
    * This takes the initial parameters and initialize the state and hold it until it is called again
    * @param  {Object}            attrs            - All the chart attributes sanitized
    * @param  {ColorRangeManager} colorRange       - instance of ColorRangeManager that has all the information about the
    *                                               color distribution. This function merely calls the APIs
    * @param  {boolean}           isNavigationBar  - whether it is for navigation bar or not
    * @return {Function}                           - Returns a function that returns a color code when a node
    *                                                is passed keeping in the state intact.
    */
  function mapColorManager(attrs, colorRange, isNavigationBar) {
    var defaultParentBGColor = normalizeColorCode(isNavigationBar ? attrs.defaultNavigationBarBGColor : attrs.defaultParentBGColor);

    /**
      * Uses the saved state and returns the color for a node calculating the node value.
      * @param  {TreeNode} node             - node which is subjected to be colored
      * @param  {boolean}  isNavigationBar  - whether it is for navigation bar or not
      * @return {string}                    - color in hex
      */
    return function (node, isNavigationBar) {
      var colorProp = {},
          cssConf = node.cssConf,
          meta = node.meta,
          overriddenColor = meta.fillcolor ? normalizeColorCode(meta.fillcolor) : undefined,
          parentColor,
          parentStyle,
          parentNode = node.getParent(),
          thisNodeColor,
          nodeColorValue = node.getColorValue();

      // temp CODE
      attrs.isLegendEnabled = true;

      // Get the generalized color for a node. Later overriden for non-leaf nodes
      thisNodeColor = attrs.isLegendEnabled && nodeColorValue ? colorRange.getColorByValue(nodeColorValue) && '#' + colorRange.getColorByValue(nodeColorValue) || normalizeColorCode(colorRange.rangeOutsideColor) : undefined;

      // Check if the current node in context is a leaf node which in turn is dependent if there is a depth
      // restriction imposed.
      if (node.isLeaf(maxDepth)) {
        // If the node is not leaf node apply title colors property if available
        colorProp.fill = overriddenColor || thisNodeColor || defaultParentBGColor;
      } else {
        parentStyle = (parentNode || node).cssConf;
        parentColor = parentStyle && parentStyle.fill;

        thisNodeColor = thisNodeColor || parentColor;
        colorProp.fill = overriddenColor || thisNodeColor;
      }

      // apply node border thickness and color
      colorProp.stroke = isNavigationBar ? attrs.navigationBarBorderColor : attrs.plotBorderColor;
      colorProp.strokeWidth = isNavigationBar ? attrs.navigationBarBorderThickness : attrs.plotBorderThickness;
      colorProp['stroke-dasharray'] = 'none';
      // applicable for only the treemap.
      if (!isNavigationBar) {
        if (cssConf && cssConf['stroke-dasharray'] === '--') {
          colorProp['stroke-dasharray'] = cssConf['stroke-dasharray'];
          colorProp.strokeWidth = cssConf.strokeWidth;
        }
      }
      return colorProp;
    };
  }

  /*
   * Serves the purpose of application context. Any Object can be stored and retrieved through the lifetime
   * of the chart instance. This gives back a singleton instance per id. Like if two different store is needed,
   * this is called with two different id. If the ids are kept same same instance is returned.
   */
  context = function () {
    var objContainer = {},
        pointer;

    /**
     * Constructor to create instance per id
     */
    function C_() {
      // Container of instances of particular id
      this.con = {};
    }

    C_.prototype.constructor = C_;

    C_.prototype.get = function (key) {
      return this.con[key];
    };

    C_.prototype.set = function (key, value) {
      this.con[key] = value;
    };

    C_.prototype['delete'] = function (key) {
      return delete this.con[key];
    };

    return {
      /**
        * Returns singleton instances per id
        * @param  {string} id - name of id
        * @return {Object}    - returns object if already instantiated or create one and return
        */
      getInstance: function getInstance(id) {
        var _con;

        if (objContainer[id]) {
          _con = objContainer[id];
          // Already instantiated, get the reference and return
          pointer = _con;
          return pointer;
        }

        // Not available in container means not instantiated, creates a new instance and returns
        pointer = _con = objContainer[id] = new C_();
        return pointer;
      }
    };
  }();
  /**
    * Sets the visible root node.
    * @param {TreeNode} node - On drill down/ up the visible root needs to be changed.
    */
  function setVisibleRoot(node) {
    visibleRoot = node;
  }
  /**
    * Fetch the visible root.
    * @return {TreeRoot} - The visible root for the current view.
    */
  function getVisibleRoot() {
    return visibleRoot;
  }

  /**
    * It registers the different events and the functionality
    * @param {algorithmFactory} algorithmAPI  - all the apis for the running algorithm
    * @param {Object} dsStore - dataset instance
    * @param {Object} canvasMeasurement  - Simple key-value pair of information
    *                                      of the available drawing area.
    * @param {Object} rendererAPI  - API needed to render the objects in the drawing area.
    * @return {Object}             - contains event callback fn
    */
  function abstractEventRegisterer(algorithmAPI, dsStore, canvasMeasurement, rendererAPI) {
    var chart = dsStore.getFromEnv('chart'),
        btns = dsStore.getFromEnv('toolbarBtns'),
        iChart = chart.chartInstance,
        attrs = dsStore.conf,
        legend = dsStore.getFromEnv('gradientLegend'),
        drawTreeFn = algorithmAPI.drawTree,
        removeFn = rendererAPI.disposeChild,
        _backToParent,
        context = afAPI.context,
        args = arguments,
        stateContextId = 'ClickedState',
        visibleState = 'VisibileRoot',
        plotClickEvt = 'dataplotclick',
        plotRollOverEvt = 'dataplotrollover',
        plotRollOutEvt = 'dataplotrollout',
        stateContext,
        _resetTree,
        dataUprootMap = {
      colorValue: 'svalue',
      label: 'name',
      value: 'value',
      rect: 'metrics'
    };

    stateContext = context.getInstance(stateContextId);

    // Save reference of internal subroutines, for later use
    chart._intSR = {};
    /**
     * function to extract event data
     * @param {Object} node - tree node
     * @return {Object}     - event data
     */
    function extractEventData(node) {
      var res = {},
          key,
          resKey;

      for (key in dataUprootMap) {
        resKey = dataUprootMap[key];
        res[resKey] = node[key];
      }

      return res;
    }

    /**
      * Goes back to immediate parent of the view.
      * @param {boolean} raiseEventFlag - If true event will be raised. Otherwise no.
      *
      */
    chart._intSR.backToParent = _backToParent = function backToParent(raiseEventFlag) {
      var target = this,
          _t = target,
          _p = _t && target.getParent(),
          context = afAPI.context,
          stateContextId = 'ClickedState',
          visibleState = 'VisibileRoot',
          stateContext = context.getInstance(stateContextId),
          clickedState = stateContext.get(visibleState) || {};

      chart.config.trackerConfig.length = 0;
      chart.triggerKDTreePartioning();
      if (raiseEventFlag) {
        /** @todo eventname should be taken from constants */
        /** @todo common event handling API */
        (0, _eventApi.triggerEvent)('beforedrillup', iChart, {
          node: target,
          withoutHead: !attrs.showParent
        }, undefined, function () {
          // If the event is not prevented in anyway

          if (_p) {
            clickedState.state = DRILLUP;
            clickedState.node = [{ virginNode: afAPI.getVisibleRoot() }, _p];
            // Remove all the elements from the paper and redraw the tree
            // using a different root node.
            removeFn(_t);
            drawTreeFn.apply(_p, args);
          }

          // Render complete now raise the event
          /** @todo eventname should be taken from constants */
          (0, _eventApi.triggerEvent)(DRILLUP, iChart, {
            node: target,
            withoutHead: !attrs.showParent,
            drillUp: _backToParent,
            drillUpToTop: _resetTree
          });

          target = target && target.getParent();
        }, function () {
          // Event is prevented
          (0, _eventApi.triggerEvent)('drillupcancelled', iChart, {
            node: target,
            withoutHead: !attrs.showParent
          });
        });
      } else {
        if (_p) {
          clickedState.state = DRILLUP;
          clickedState.node = [{ virginNode: afAPI.getVisibleRoot() }, _p];
          // Remove all the elements from the paper and redraw the tree
          // using a different root node.
          removeFn(_t);
          drawTreeFn.apply(_p, [algorithmAPI, dsStore, canvasMeasurement, rendererAPI]);
        }

        target = target && target.getParent();
      }
    };

    /**
      * Goes back to absolute parent of the view.
      * @param {boolean} raiseEventFlag - If true event will be raised. Otherwise no.
      *
      * @todo donot pollute the chart object. Function access restructuring.
      */
    chart._intSR.resetTree = _resetTree = function resetTree(raiseEventFlag) {
      var target = this,
          _p = target && target.getParent(),
          _t,
          context = afAPI.context,
          stateContextId = 'ClickedState',
          visibleState = 'VisibileRoot',
          stateContext = context.getInstance(stateContextId),
          clickedState = stateContext.get(visibleState) || {};

      chart.config.trackerConfig.length = 0;
      chart.triggerKDTreePartioning();

      while (_p) {
        // Swaps the references. Keep clicked node in one variable and parent in
        // another variable.
        _t = _p;
        _p = _p.getParent();
      }

      if (raiseEventFlag) {
        // @todo eventname should be taken from constants
        (0, _eventApi.triggerEvent)('beforedrillup', iChart, {
          node: target,
          withoutHead: !attrs.showParent
        }, undefined, function () {
          if (_t) {
            clickedState.state = DRILLUP;
            clickedState.node = [{ virginNode: afAPI.getVisibleRoot() }, _t];

            // Remove all the elements from the paper and redraw the tree using
            // a different root node.
            removeFn(_t);
            drawTreeFn.apply(_t, args);

            /* @todo eventname should be taken from constants */
            (0, _eventApi.triggerEvent)(DRILLUP, iChart, {
              node: target,
              sender: chart.fusionCharts,
              withoutHead: !attrs.showParent,
              drillUp: _backToParent,
              drillUpToTop: _resetTree
            });
          }
        }, function () {
          (0, _eventApi.triggerEvent)('drillupcancelled', iChart, {
            node: target,
            withoutHead: !attrs.showParent
          });
        });
      } else {
        if (_t) {
          clickedState.state = DRILLUP;
          clickedState.node = [{ virginNode: afAPI.getVisibleRoot() }, _t];

          // Remove all the elements from the paper and redraw the tree using a different
          // root node.
          removeFn(_t);
          drawTreeFn.apply(_t, args);
        }
      }
    };

    return {
      click: function click(node, baseNode) {
        var thisVNode = node.virginNode,
            eventName,
            parent,
            target;
        chart.state = 'click';
        (0, _eventApi.triggerEvent)(plotClickEvt, iChart, extractEventData(node.virginNode));

        parent = thisVNode.getParent();

        if (!parent) {
          // If the click is on root node, return since it is not possible to go back and
          // display the parent
          return;
        }
        if (thisVNode === baseNode) {
          // If the top most rectangle is clicked show the parent rectangle of it. This
          // is for iterative click (once drilled down)
          target = parent;
          // trackerConfig array made empty for new kd-tree
          chart.flushKDTree();
          chart.config.trackerConfig.length = 0;

          eventName = DRILLUP;
        } else {
          if (thisVNode.next) {
            // If the click is not on top most rectangle (base node)and base node
            // has children, drill down to the clicked node
            target = thisVNode;
            // trackerConfig array made empty for new kd-tree
            chart.flushKDTree();
            chart.config.trackerConfig.length = 0;
            eventName = 'drilldown';
          } else {
            // If the click is not on top most rectangle (base node)and base node
            // doesnot have any more chidren drill down to the parent node of clicked node
            target = parent;

            if (baseNode === target) {
              eventName = undefined;
              return;
            } else {
              // trackerConfig array made empty for new kd-tree
              chart.config.trackerConfig.length = 0;
              /** @todo eventname should be taken from constants */
              eventName = 'drilldown';
            }
          }
        }

        // Reset the legend once any traversal happens
        legend && legend.enabled && legend.resetLegend();
        algorithmAPI.applyShadeFiltering.reset();

        eventName && (0, _eventApi.triggerEvent)('before' + eventName, iChart, {
          node: target,
          withoutHead: !attrs.showParent
        }, undefined, function () {
          stateContext.set(visibleState, {
            node: node,
            state: eventName
          });

          // Remove everything from the paper
          removeFn.call(rendererAPI, target);
          // reset the visible Root
          setVisibleRoot(target);

          // Redraw by assigning a new root
          containerManager.draw();

          // @todo eventname should be taken from constants

          (0, _eventApi.triggerEvent)(eventName, iChart, {
            node: target,
            withoutHead: !attrs.showParent,
            drillUp: _backToParent,
            drillUpToTop: _resetTree
          });
        }, function () {
          // Event is cancelled
          (0, _eventApi.triggerEvent)(eventName + 'cancelled', iChart, {
            node: target,
            withoutHead: !attrs.showParent
          });
        });

        btns.back && btns.back.attachEventHandlers({
          'click': _backToParent.bind(target)
        });

        btns.home && btns.home.attachEventHandlers({
          'click': _resetTree.bind(target)
        });
        chart.resetSingleTracker();
      },

      mouseover: function mouseover(node) {
        var evtData = extractEventData(node.virginNode);
        (0, _eventApi.triggerEvent)(plotRollOverEvt, iChart, evtData, undefined, undefined, function () {
          (0, _eventApi.triggerEvent)(plotRollOverEvt + 'cancelled', iChart, evtData);
        });
      },

      mouseout: function mouseout(node) {
        var evtData = extractEventData(node.virginNode);

        (0, _eventApi.triggerEvent)(plotRollOutEvt, iChart, extractEventData(node.virginNode), undefined, undefined, function () {
          (0, _eventApi.triggerEvent)(plotRollOutEvt + 'cancelled', iChart, evtData);
        });
      }
    };
  }

  visibilityController = function () {
    var restOfTheTreeArr = [],
        nextVisibileTreeRoot,
        inProgress = false,
        attrVisible = { visibility: 'visible', opacity: 1 };

    return {
      controlPreAnimVisibility: function controlPreAnimVisibility(node, superNode) {
        var rootNode, tempNode, itr, dfItr, nextNode, overAttr;

        if (!node) {
          return;
        }

        tempNode = node;
        while (true) {
          tempNode = tempNode.getParent();

          if (!tempNode) {
            break;
          }
          rootNode = tempNode;
        }

        itr = iterator(rootNode, { exception: node });
        dfItr = itr.df;

        while (true) {
          nextNode = dfItr.next();
          if (!nextNode) {
            break;
          }

          overAttr = nextNode.overAttr || (nextNode.overAttr = {});
          // overAttr.visibility = 'hidden';
          overAttr.opacity = '0';
          restOfTheTreeArr.push(nextNode);
        }

        nextVisibileTreeRoot = superNode || node.getParent();

        inProgress = false;
        return restOfTheTreeArr;
      },

      displayAll: function displayAll(node) {
        var itr, overAttr, dfItr, nextNode;

        if (!node) {
          return;
        }

        itr = iterator(node.getParent() || node);
        dfItr = itr.df;

        while (true) {
          nextNode = dfItr.next();
          if (!nextNode) {
            break;
          }

          overAttr = nextNode.overAttr || (nextNode.overAttr = {});
          overAttr.visibility = 'visible';
        }

        nextVisibileTreeRoot = undefined;
        restOfTheTreeArr.length = 0;
        inProgress = false;
      },

      controlPostAnimVisibility: function controlPostAnimVisibility() {
        var textItem, dirtyNode, itr, dfItr, nextNode;

        if (inProgress) {
          return;
        }

        inProgress = true;

        if (!nextVisibileTreeRoot) {
          return;
        }

        itr = iterator(nextVisibileTreeRoot);
        dfItr = itr.df;

        while (true) {
          nextNode = dfItr.next(maxDepth);
          if (!nextNode) {
            break;
          }

          if (nextNode.dirtyNode) {
            dirtyNode = nextNode.dirtyNode;
            dirtyNode && dirtyNode.plotItem.attr(attrVisible);
            textItem = dirtyNode && dirtyNode.textItem;
            textItem && textItem.label && textItem.label.attr(attrVisible);
            textItem && textItem.label && textItem.highlightMask.attr(attrVisible);
          }
        }

        nextVisibileTreeRoot = undefined;
        restOfTheTreeArr.length = 0;
      }
    };
  }();

  afAPI.AbstractTreeMaker = AbstractTreeMaker;
  afAPI.iterator = iterator;
  afAPI.initConfigurationForlabel = initConfigurationForlabel;
  afAPI.context = context;
  afAPI.mapColorManager = mapColorManager;
  afAPI.abstractEventRegisterer = abstractEventRegisterer;
  afAPI.setMaxDepth = setMaxDepth;
  afAPI.getVisibleRoot = getVisibleRoot;
  afAPI.setVisibleRoot = setVisibleRoot;
  afAPI.visibilityController = visibilityController;

  return afAPI;
},


/**
  * Defines the tiling algorithm and exposes api to access those.
  * @param {Object} afAPI - APIs to create algorithm factoy
  * @param {Object} algorithmFactory - Algorithm Factory APIs
  * @return {Object} algorithmFactory - Algorithm Factory APIs
  */
algorithmFactoryCreator = function algorithmFactoryCreator(afAPI, algorithmFactory) {
  var algo,
      AbstractTreeMaker = afAPI.AbstractTreeMaker,
      algorithm,
      treeMaker,
      tree,
      bucketIterationMode,
      depthIncrement,
      maxDepth;
  // drawingAreaMeasurement;

  algo = {
    'sliceanddice': {
      /**
        * Provides a more managed way to calculate space for child.
        * This takes minimum space configuration and applies it over all the subsequent calculation
        * @param {Integer} horizontalPadding  - space between parent and child in x direction
        * @param {Integer} verticalPadding  - space between parent and child in y direction
        * @return {Function} - A function to be called, everytime space for a new node needs to be
        * calculated
        */
      areaBaseCalculator: function areaBaseCalculator(horizontalPadding, verticalPadding) {
        var sx = horizontalPadding,
            sy = verticalPadding;

        /*
         * Provides the basic information of the tree so that the current node can use that and
         * calculate the space
         * @param node {TreeNode} - node which is the subject to calculation
         * @param posOffsetApplyFn {Function} - logic of calculation. This function is called with
         *      meta information, immediate left sibling (if any) and parent. The context
         *      of this function is changed with the one which is subject to calculation.
         * @param options {Object} - provides additional options to the calculation.
                                    Something like space for label.
         * @return {Object} - returns what ever posOffsetApplyFn returns.
         */
        return function (node, posOffsetApplyFn, options) {
          var parent,
              leftSibling,
              denominator,
              meta = {},
              eHeight,
              eWidth,
              parentRect,
              textMargin = 0,
              negSpacesY = 0;

          if (!node) {
            return;
          }

          if (options) {
            textMargin = options.textMargin || textMargin;
          }

          negSpacesY = textMargin;

          parent = node.getParent();
          // Get immediate left sibling
          leftSibling = node.getSibling('left');

          if (parent) {
            // Denomitor to calculate the area. Every parent value is the sum of all children value
            denominator = parent.getValue();
            parentRect = parent.rect;
            // Calculate the width and hight of the space where children will be drawn.
            // This ideally depend on the space that was passed when the outer most function
            // was called
            eHeight = parentRect.height - 2 * sy - negSpacesY;
            eWidth = parentRect.width - 2 * sx;

            /*
             * This is the inner logical rectangle where the child is drawn. If horizontalPadding
               and verticalPadding
             * is zero it is as same as the outermost rectangle. Something like
             *
             *  Parent rect
             *  -----------------------
             * |  verticalPadding     s|
             * |  ------------------- p|
             * | | effective rect    |a|
             * | | where child will  |c|
             * | | be drawn          |e|
             * | |                   |x|
             */
            meta.effectiveRect = {
              height: eHeight,
              width: eWidth,
              x: parentRect.x + sx,
              y: parentRect.y + sy + negSpacesY
            };
            meta.effectiveArea = eHeight * eWidth;
            meta.ratio = node.getValue() / denominator;

            if (leftSibling) {
              // If this is not the first children, this will be drawn relative
              // to the former children
              return posOffsetApplyFn.call(node, meta, leftSibling, parent);
            } else {
              // Flag indication that the last retrieved is parent
              meta.lastIsParent = true;
              // First children. This will be drawn relative
              return posOffsetApplyFn.call(node, meta, parent);
            }
          } else {
            // If parent is not present the it is the root node. For root node use the
            // original canvas area. If parent is not present there is also no chance to
            // have siblings of the node. Since there can only be only one root node
            return null;
          }
        };
      },

      /**
        * Initializes the state required when the legend is dragged and effect to be applied
        * @param {Object}   bucketInstance  - instace of bucket
        * @param {Object}   overrideEffect  - style to be applied in key-value pair
        * @param {Function} rangeOutFn      - Function to be executed when outliers are found
        * @return {Function}                - Control function that operates on outliers by adjusting the range
        */
      applyShadeFiltering: function applyShadeFiltering(bucketInstance, overrideEffect, rangeOutFn) {
        // Set style information
        bucketInstance.setRangeOutEffect(overrideEffect, rangeOutFn);

        this.applyShadeFiltering.reset = function () {
          bucketInstance.resetPointers();
        };

        /**
          * Control the effect to be executed on outliers.
          * @param {Object} limits  - an simple javascript object containing the start and end limit of
          *                           the legend
          */
        return function (limits) {
          bucketInstance.moveLowerShadePointer(limits.start);
          bucketInstance.moveHigherShadePointer(limits.end);
        };
      },
      /**
        * logic of calculation. This function is called with meta information, immediate left sibling
        * (if any) and parent. The context of this function is changed with the one which is subject to
        * calculation.
        * @return {Object} -
        */
      alternateModeManager: function alternateModeManager() {
        return function (meta, lastPoint) {
          var height,
              width,
              isDirectionVertical,
              dx,
              dy,
              cNode = this,
              baseArea = meta.effectiveArea,
              ratio = meta.ratio,
              childArea = baseArea * ratio,
              effectiveRect = meta.effectiveRect,
              lastRect = lastPoint.rect,
              lastIsParent = meta.lastIsParent;

          if (lastIsParent) {
            // If the node is the first children, take measurement of the effective rect
            dx = effectiveRect.x;
            dy = effectiveRect.y;
            height = effectiveRect.height;
            width = effectiveRect.width;

            // First direction is vertical (or parameterized)
            isDirectionVertical = cNode.isDirectionVertical = true;
          } else {
            // If the node is not the first child, get the remaining height and width where
            // the drawing will happen
            height = effectiveRect.height + effectiveRect.y - (lastRect.height + lastRect.y);
            width = effectiveRect.width + effectiveRect.x - (lastRect.width + lastRect.x);

            // Every child drawing direction will be opposite of what the immediate left
            // sibling used to be
            isDirectionVertical = cNode.isDirectionVertical = !lastPoint.isDirectionVertical;
          }

          if (isDirectionVertical) {
            // If this orientation is vertical possible that the last one is horizontal
            width = childArea / height;
            dx = dx !== undefined ? dx : lastRect.x;
            dy = dy !== undefined ? dy : lastRect.y + lastRect.height;
          } else {
            height = childArea / width;
            dx = dx !== undefined ? dx : lastRect.x + lastRect.width;
            dy = dy !== undefined ? dy : lastRect.y;
          }

          return {
            height: height,
            width: width,
            x: dx,
            y: dy
          };
        };
      },

      horizontalVerticalManager: function horizontalVerticalManager(slicingMode) {
        var isVerticalSlicing = Boolean(slicingMode === 'vertical');
        return function (meta, lastPoint) {
          var height,
              width,
              isDirectionVertical,
              dx,
              dy,
              cNode = this,
              baseArea = meta.effectiveArea,
              ratio = meta.ratio,
              childArea = baseArea * ratio,
              effectiveRect = meta.effectiveRect,
              lastRect = lastPoint.rect,
              lastIsParent = meta.lastIsParent;

          if (lastIsParent) {
            // If the node is the first children, take measurement of the effective rect
            dx = effectiveRect.x;
            dy = effectiveRect.y;
            height = effectiveRect.height;
            width = effectiveRect.width;

            // First direction is vertical (or parameterized)
            isDirectionVertical = cNode.isDirectionVertical = !lastPoint.isDirectionVertical;
          } else {
            // If the node is not the first child, get the remaining height and width where
            // the drawing will happen
            height = effectiveRect.height + effectiveRect.y - (lastRect.height + lastRect.y);
            width = effectiveRect.width + effectiveRect.x - (lastRect.width + lastRect.x);

            // Every child drawing direction will be opposite of what the immediate left
            // sibling used to be
            isDirectionVertical = cNode.isDirectionVertical = !arguments[2].isDirectionVertical;
          }
          // toogle the directional flag as per the slicing mode.
          isDirectionVertical = isVerticalSlicing ? isDirectionVertical : !isDirectionVertical;
          if (isDirectionVertical) {
            // If this orientation is vertical possible that the last one is horizontal
            if (height === 0) {
              height = effectiveRect.height;
              dx = dx !== undefined ? dx : lastRect.x + lastRect.width;
              dy = dy !== undefined ? dy : lastRect.y;
            }
            width = childArea / height;
            dx = dx !== undefined ? dx : lastRect.x;
            dy = dy !== undefined ? dy : lastRect.y + lastRect.height;
          } else {
            if (width === 0) {
              width = effectiveRect.width;
              dx = dx !== undefined ? dx : lastRect.x;
              dy = dy !== undefined ? dy : lastRect.y + lastRect.height;
            }
            height = childArea / width;
            dx = dx !== undefined ? dx : lastRect.x + lastRect.width;
            dy = dy !== undefined ? dy : lastRect.y;
          }

          return {
            height: height,
            width: width,
            x: dx,
            y: dy
          };
        };
      },

      /**
        * Maps the logical tree to nested rectangle and render on the paper.
        * @param {algorithmFactory} algorithmAPI  - all the apis for the running algorithm
        * @param {Object} dsStore - dataset instance
        * @param {Object} canvasMeasurement  - Simple key-value pair of information
        *                                      of the available drawing area.
        * @param {Object} rendererAPI  - API needed to render the objects in the drawing area.
        */
      drawTree: function drawTree(algorithmAPI, dsStore, canvasMeasurement, rendererAPI) {
        var treeRoot = this,
            chart = dsStore.getFromEnv('chart'),
            config = chart.config || (chart.config = {}),
            trackerConfig = config.trackerConfig || (config.trackerConfig = []),
            numberFormatter = dsStore.getFromEnv('number-formatter'),
            btns = dsStore.getFromEnv('toolbarBtns'),
            drawRectFn = rendererAPI.drawRect,
            drawTextFn = rendererAPI.drawText,
            drawHotFn = rendererAPI.drawHot,
            xShift = canvasMeasurement.horizontalPadding,
            yShift = canvasMeasurement.verticalPadding,
            smartLabel = dsStore.getFromEnv('smartLabel'),
            lineHeight,
            labelPadding = {
          x: 5,
          y: 5
        },
            iterator = afAPI.iterator,
            itr = iterator(treeRoot),
            dfItr = itr.df,
            baseNode,
            getNextAreaBase = algorithmAPI.areaBaseCalculator(xShift, yShift),
            attrs = dsStore.conf,
            highlightParentsOnHover = attrs.highlightParentsOnHover,
            getTextConf,
            context = afAPI.context,
            visController = afAPI.visibilityController,
            colorRange = dsStore.conf.colorRange,
            localColorProvider = afAPI.mapColorManager(attrs, colorRange),
            abstractEvtReg = afAPI.abstractEventRegisterer(algorithmAPI, dsStore, canvasMeasurement, rendererAPI),
            clickEvtImpl = abstractEvtReg.click,
            mouseoverEvtImpl = abstractEvtReg.mouseover,
            mouseoutEvtImpl = abstractEvtReg.mouseout,
            slicingMode = attrs.slicingMode,
            temp = slicingMode === 'alternate' ? 'alternateModeManager' : 'horizontalVerticalManager',
            postNodeFetcher = algorithmAPI[temp](slicingMode),
            _baseNode,
            _intSR = chart._intSR,
            resetTree,
            backToParent,
            stateContextId = 'ClickedState',
            visibleState = 'VisibileRoot',
            stateContext,
            clickedState,
            csNode;

        stateContext = context.getInstance(stateContextId);
        clickedState = stateContext.get(visibleState) || {};
        csNode = clickedState.node;

        if (clickedState.node && clickedState.state) {
          if (clickedState.state.toLowerCase() === DRILLUP) {
            if (csNode instanceof Array) {
              visController.controlPreAnimVisibility(csNode[0].virginNode, csNode[1]);
            } else {
              visController.controlPreAnimVisibility(csNode.virginNode);
            }
          } else {
            visController.displayAll(clickedState.node.virginNode);
          }
        }

        lineHeight = attrs.parentLabelLineHeight;
        // Gets label configuration
        getTextConf = afAPI.initConfigurationForlabel(labelPadding, lineHeight, attrs);

        // First time iteration to get the root node
        // maximum level of tree traversal is set to the value incremented with the current node depth
        baseNode = dfItr.next(maxDepth = afAPI.setMaxDepth(treeRoot.getDepth() + depthIncrement));

        _baseNode = baseNode;
        while (_baseNode.getParent()) {
          // The loop is added if the root of the tree is passed via attributes otherwise we could
          // have done just by saving the reference in a variable.
          _baseNode = _baseNode.getParent();
        }

        if (!attrs.showNavigationBar) {
          if (_baseNode != baseNode) {
            btns.home.show();
            btns.back.show();
          } else {
            btns.home.hide();
            btns.back.hide();
          }
        } else {
          btns.home.hide();
          btns.back.hide();
        }

        smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
        smartLabel.setStyle(attrs._setStyle = {
          fontSize: (attrs.labelFontSize || attrs.baseFontSize) + 'px',
          fontFamily: attrs.labelFont || attrs.baseFont,
          lineHeight: 1.2 * (attrs.labelFontSize || attrs.baseFontSize) + 'px'
        });
        // Save the state in reflow conf
        // reflowData.tree = baseNode;
        backToParent = _intSR.backToParent;
        resetTree = _intSR.resetTree;
        btns.back && btns.back.attachEventHandlers({
          'click': backToParent.bind(baseNode)
        });

        btns.home && btns.home.attachEventHandlers({
          'click': resetTree.bind(baseNode)
        });

        /*
         * This function recursively draws the tree using depth first algorithm.
         * @param node {TreeMap} - node to be drawn;
         * @param drawingArea {Object} - ultimate drawing area of the node. By ultimate it means
         *                              no more operation will be performed
         */
        (function rec(node, drawingArea) {
          var nextNode,
              _rect,
              _textRect,
              hotItem,
              labelItem,
              highlightItem,
              textItem,
              nodeDrawingArea,
              rect,
              textRect,
              textConfObj,
              textConf,
              options = {},
              label,
              plotItem,
              plotDetails = {},
              evtFns = {},
              hoverContextPointerName = 'hover',
              cssConf = {},
              colorDimension = '',

          //   colorValue,
          formattedValue,
              formattedsValue;

          if (!node) {
            // break condition of recursive iteration
            return;
          }
          formattedValue = numberFormatter.yAxis(node.getValue());
          formattedsValue = numberFormatter.sYAxis(node.getColorValue());
          node.setPath();
          // cache the previous rectangular configurations for animating the rectangle.
          _rect = node.rect || {};
          _textRect = node.textRect || {};

          rect = node.rect = {};
          textRect = node.textRect = {};

          // Get rectangle to draw the node
          rect.width = drawingArea.width;
          rect.height = drawingArea.height;
          rect.x = drawingArea.x;
          rect.y = drawingArea.y;

          // Get the color and border configuration
          cssConf = localColorProvider(node);
          plotItem = node.plotItem;
          // If plotItem exists, then its the interacted sub-tree which is updated with a
          // different animations
          if (plotItem) {
            // dispose the graphic rectangle for the selected node.
            rendererAPI.graphicPool(true, 'plotItem', plotItem, _rect);
          }

          plotItem = node.plotItem = drawRectFn(rect, cssConf, _rect, node.overAttr);
          node.cssConf = cssConf;

          // Get the configuration to draw text
          textConfObj = getTextConf(node, rect);
          textConf = textConfObj.conf;
          // Offset that will be used to plot the children
          options.textMargin = textConf.rectShiftY;
          textRect = node.textRect = textConf.textRect;
          // Get the normalized text
          label = smartLabel.getSmartText(textConf.label, textRect.width, textRect.height).text;

          // Saves the reference so that the event listener can use it, and also useful for disposing.
          node.plotItem = plotItem;
          labelItem = node.labelItem;
          if (labelItem) {
            highlightItem = node.highlightItem;
            rendererAPI.graphicPool(true, 'labelItem', labelItem, _rect);
            rendererAPI.graphicPool(true, 'highlightItem', highlightItem, _rect);
          } else {
            _textRect = _textRect || {};
          }
          textItem = drawTextFn(label, textRect, {
            textAttrs: textConfObj.attr,
            highlightAttrs: textConfObj.highlight
          }, _textRect, node.overAttr, node);

          node.labelItem = textItem.label;
          node.highlightItem = textItem.highlightMask;

          // Save all the references so that it can be used as context
          plotDetails.virginNode = node;
          plotDetails.plotItem = plotItem;
          plotDetails.textItem = textItem;
          // Save circular reference for query
          plotDetails.virginNode.dirtyNode = plotDetails;

          if (node.getColorValue()) {
            colorDimension = attrs.tooltipSeparationCharacter + formattedsValue;
          }

          if (attrs.showTooltip) {
            plotDetails.toolText = (0, _lib.parseTooltext)(attrs.plotToolText, [1, 2, 3, 119, 122], {
              label: node.getLabel(),
              formattedValue: formattedValue,
              formattedsValue: formattedsValue
            }, {
              value: node.getValue(),
              svalue: node.getColorValue()
            }) || node.getLabel() + attrs.tooltipSeparationCharacter + formattedValue + colorDimension;
          } else {
            plotDetails.toolText = _lib.BLANKSTRING;
          }
          plotDetails.rect = rect;

          // @todo - the abstract event handler should come from algorithmAP
          evtFns.hover = [function (forcedTracker) {
            var elem = this,
                parentElem,
                targetElement,
                virginNode,
                hoverContext,
                css,
                maskRgba,
                hoverMaskAlpha = 60;

            // Get the context if created or create a new one and get
            hoverContext = context.getInstance(hoverContextPointerName);
            virginNode = elem.virginNode;

            if (highlightParentsOnHover && !virginNode.next) {
              // If all the sibling leaves to be hovered together attribute is set and
              // the node is really a leaf
              parentElem = virginNode.getParent();
              targetElement = parentElem || virginNode;
            } else {
              // Set hover effect on the child itself
              targetElement = elem.virginNode;
            }

            // Set it on context
            hoverContext.set('element', targetElement);

            css = targetElement.cssConf;
            maskRgba = (0, _lib.convertColor)(getLightColor(css.fill, 80), hoverMaskAlpha);
            forcedTracker.attr({ 'fill': maskRgba });

            mouseoverEvtImpl(this);
          }.bind(plotDetails), function () {
            var hoverContext,
                targetElement,
                css,
                unmaskRgba,
                hoverMaskAlpha = 0;

            // Get the context, which is most definitely created during the mouseover
            hoverContext = context.getInstance(hoverContextPointerName);
            targetElement = hoverContext.get('element');

            css = targetElement.cssConf;
            unmaskRgba = (0, _lib.convertColor)(css.fill || '#fff', hoverMaskAlpha);
            targetElement.plotItem.tracker.attr({ 'fill': unmaskRgba });

            mouseoutEvtImpl(this);
          }.bind(plotDetails)];

          evtFns.tooltip = [plotDetails.toolText];

          evtFns.click = [function () {
            clickEvtImpl(this, baseNode);
          }.bind(plotDetails)];

          hotItem = node.hotItem;
          if (hotItem) {
            rendererAPI.graphicPool(true, 'hotItem', hotItem, _rect);
          }

          // hotItem = node.hotItem = drawHotFn(plotDetails, evtFns);
          trackerConfig.push({
            node: node,
            key: 'hotItem',
            plotDetails: plotDetails,
            evtFns: evtFns,
            callback: drawHotFn
          });
          // Get the next node which will be plotted
          nextNode = dfItr.next(maxDepth);
          nodeDrawingArea = getNextAreaBase(nextNode, postNodeFetcher, options);

          // Recursively call the same function to draw the tree
          rec(nextNode, nodeDrawingArea);
        })(baseNode, canvasMeasurement);
      }
    },

    'squarified': {
      orderNodes: function orderNodes() {
        return this.sort(function (m, n) {
          return parseFloat(m.value, 10) < parseFloat(n.value, 10) ? 1 : -1;
        });
      },

      /**
        * Provides a more managed way to calculate space for child.
        * This takes minimum space configuration and applies it over all the subsequent calculation
        * @param {Integer} horizontalPadding  - space between parent and child in x direction
        * @param {Integer} verticalPadding  - space between parent and child in y direction
        * @return {Function} - A function to be called, everytime space for a new node needs
        *                      to be calculated
        */
      areaBaseCalculator: function areaBaseCalculator(horizontalPadding, verticalPadding) {
        var sx = horizontalPadding,
            sy = verticalPadding;

        /**
          * Provides the basic information of the tree so that the current node can use that and
          * calculate the space
          * @param {TreeNode} nodes - node which is the subject to calculation
          * @param {Function} posOffsetApplyFn - logic of calculation. This function is called with meta
          *       information, immediate left sibling (if any) and parent. The context of this function
          *       is changed with the one which is subject to calculation.
          * @param {Object} options - provides additional options to the calculation.
                                    Something like space for label.
          * @return {Object} - returns what ever posOffsetApplyFn returns.
          */
        return function (nodes, posOffsetApplyFn, options) {
          var parent,
              meta = {},
              eHeight,
              eWidth,
              textMargin = 0,
              negSpacesY = 0,
              anyNode,
              parentRect;

          if (!nodes || nodes.length === 0) {
            return;
          }

          if (options) {
            textMargin = options.textMargin || textMargin;
          }

          negSpacesY = textMargin;

          anyNode = nodes[0];
          parent = anyNode.getParent();

          if (parent) {
            parentRect = parent.rect;
            // Calculate the width and hight of the space where children will be drawn.
            // This ideally depend on the space that was passed when the outer most
            // function was called
            eHeight = parentRect.height - 2 * sy - negSpacesY;
            eWidth = parentRect.width - 2 * sx;

            /*
             * This is the inner logical rectangle where the child is drawn.
             * If horizontalPadding and verticalPadding is zero
             * it is as same as the outermost rectangle. Something like
             *
             *  Parent rect
             *  -----------------------
             * |  verticalPadding     s|
             * |  ------------------- p|
             * | | effective rect    |a|
             * | | where child will  |c|
             * | | be drawn          |e|
             * | |                   |x|
             */
            meta.effectiveRect = {
              height: eHeight,
              width: eWidth,
              x: parentRect.x + sx,
              y: parentRect.y + sy + negSpacesY
            };
            meta.effectiveArea = eHeight * eWidth;

            return posOffsetApplyFn.call(anyNode, meta, parent);
          } else {
            // If parent is not present the it is the root node. For root node use the original
            // canvas area. If parent is not present there is also no chance to have siblings
            // of the node. Since there can only be only one root node
            return null;
          }
        };
      },

      /**
        * The squarified algorithm is a recursive way to find the best aspect ratio of a node, given an
        * incremental state. Here we create layouts based on the aspect ratio of parent container.
        * Inside this layout the rects are placed one by one and is checked for best aspect ratio.
        * If at any given state the aspect ratio of a node increases than what it had before
        * the layout manager restores the previous state.
        * Here layout means the rectanglular plot inside which the new nodes are contained.
        */
      layoutManager: function () {
        /**
          * Creates a new layout depending on the value of width and height of the available area.
          */
        var RowLayout = function () {
          /**
            * constructor
            * @param {Object} root - parent rectangle of the current layout
            * @param {Integer} totalValue - total value of the parent which will be set in denominator
            *                               and is used when the plot assignment happens.
            */
          function RowLayout(root, totalValue) {
            _classCallCheck(this, RowLayout);

            this.totalValue = totalValue;
            this._rHeight = root.height;
            this._rWidth = root.width;
            this._rx = root.x;
            this._ry = root.y;
            this._rTotalArea = root.height * root.width;
            // Nodes which are placed in the current layout
            this.nodes = [];
            // Previous aspect ratio before the last node is added in the layout
            this._prevAR = undefined;

            if (this._rHeight < this._rWidth) {
              // If the height of parent rectangle is larger than the width then the layout is
              // formed in vertical direction.
              this._hSegmented = true;
            }
          }
          /**
            * Adds node the current layout then calculates and compares the aspect ratio.
            * @param {TreeNode} node  - node to be added in the current layout
            * @return {TreeNode | boolean} - if the new layout (affter addition of node) is not stable
            *                              (aspect ratio is more than the last one) return false, otherwise
            *                              return the last added node
            */


          RowLayout.prototype.addNode = function addNode(node) {
            var totalArea = this._rTotalArea,
                area,
                ratio,
                width,
                height,
                i,
                len,
                length,
                snVal,
                snArea,
                snHeight,
                snWidth,
                rect,
                _hSegmented = this._hSegmented,
                _x = this._rx,
                _y = this._ry,
                _nextX,
                _nextY,
                _rect,
                remainingHeight,
                remainingWidth,
                maxSide,
                minSide,
                valueSoFar = 0,
                cRect;

            // Push node in the current layout to calculate the current aspect ratio and to determine
            // whether it is larger than the previous one;
            this.nodes.push(node);

            for (i = 0, length = this.nodes.length; i < length; i++) {
              // The numeraic value of all the nodes which are in the layout stack currently.
              // Using this we can calculate the assignment of area of the complete layout stack unit.
              valueSoFar += parseFloat(this.nodes[i].getValue(), 10);
            }

            ratio = valueSoFar / this.totalValue;
            area = totalArea * ratio;

            if (_hSegmented) {
              // If width is greater than height of the parent rectangle, make vertical segmentation,
              // since we can reach close to 1 aspect ratio in this way
              height = this._rHeight;
              width = area / height;
              // Next point from where the next layout will be laid out
              _nextX = _x + width;
              _nextY = _y;

              // Remaining area for after the current layout is laid
              remainingHeight = this._rHeight;
              remainingWidth = this._rWidth - width;
            } else {
              // If width is less than height of the parent rectangle, make horizontal segmentation,
              // since we can reach close to 1 aspect ratio in this way
              width = this._rWidth;
              height = area / width;
              // Next point from where the next layout will be laid out
              _nextX = _x;
              _nextY = _y + height;

              // Remaining area for after the current layout is laid
              remainingHeight = this._rHeight - height;
              remainingWidth = this._rWidth;
            }

            for (i = 0, len = this.nodes.length; i < len; i++) {
              node = this.nodes[i];
              snVal = node.getValue();
              // Proportional area inside the layout
              snArea = snVal / valueSoFar * area;

              // Keeps reference to the measurement of previous rect so that in case the aspect ratio
              // is smaller than the previous one, we can restore the state
              node.hRect = node.rect || {};
              node._hRect = node._rect || {};

              // Holds information of the current rect
              rect = node.rect = {};
              if (_hSegmented) {
                rect.width = snWidth = width;
                rect.height = snHeight = snArea / snWidth;
                rect.x = _x;
                rect.y = _y;

                _y += snHeight;
              } else {
                rect.height = snHeight = height;
                rect.width = snWidth = snArea / snHeight;
                rect.x = _x;
                rect.y = _y;

                _x += snWidth;
              }

              // Calculates the aspect ratio
              maxSide = Math.max(rect.height, rect.width);
              minSide = Math.min(rect.height, rect.width);

              node.aspectRatio = maxSide / minSide;
            }

            if (this.nodes.length > 1) {
              if (this.prevAR < node.aspectRatio) {
                // If the previous aspect ratio is less than the current one, we infer the
                // old layout is more stable. Hence we restore to the previous state.
                this.nodes.pop().rect = {};
                for (i = 0, length = this.nodes.length; i < length; i++) {
                  // Restore all the newly calculated rect to the previous one.
                  if (length === 1 && this.nodes[i].firstPassed) {
                    this.nodes[i].rect = this.nodes[i]._hRect;
                  } else {
                    this.nodes[i].rect = this.nodes[i].hRect;
                  }
                  _rect = this.nodes[i]._rect = {};
                  cRect = this.nodes[i].rect;
                  _rect.width = cRect.width;
                  _rect.height = cRect.height;
                  _rect.x = cRect.x;
                  _rect.y = cRect.y;
                }
                // Forcefully return false to inform the caller that the old layout was stable and
                // the system has restored from the new state to the old state
                return false;
              }
            } else {
              if (node) {
                _rect = node._rect = {};
                cRect = node.rect;
                _rect.width = cRect.width;
                _rect.height = cRect.height;
                _rect.x = cRect.x;
                _rect.y = cRect.y;

                node.firstPassed = true;
              }
            }

            this.prevAR = node.aspectRatio;

            this.height = height;
            this.width = width;

            /**
              * Provides the measurement of the remaining area for the next layout to be laid out.
              * @return {Object} - {
              *      height: {Integer},
              *      width: {Integer},
              *      x: {Integer},
              *      y: {Integer},
              * }
              */
            this.getNextLogicalDivision = function () {
              return {
                height: remainingHeight,
                width: remainingWidth,
                x: _nextX,
                y: _nextY
              };
            };
            // Keep on returning the node last added if the layout is stable
            return node;
          };

          return RowLayout;
        }();

        return {
          RowLayout: RowLayout
        };
      }(),

      /*
        * Initializes the state required when the legend is dragged and effect to be applied
        * @param overrideEffect {Object} - style to be applied in key-value pair
        * @param rangeOutFn {Function} - Function to be executed when outliers are found
        * @return {Function} - Control function that operates on outliers by adjusting the range
        */
      applyShadeFiltering: function applyShadeFiltering(bucketInstance, overrideEffect, rangeOutFn) {
        bucketInstance.setRangeOutEffect(overrideEffect, rangeOutFn);

        this.applyShadeFiltering.reset = function () {
          bucketInstance.resetPointers();
        };

        /*
          * Control the effect to be executed on outliers.
          * @param limits {Object} - an simple javascript object containing the start and end limit of
          *                          the legend
          */
        return function (limits) {
          bucketInstance.moveLowerShadePointer(limits.start);
          bucketInstance.moveHigherShadePointer(limits.end);
        };
      },

      drawTree: function drawTree(algorithmAPI, dsStore, canvasMeasurement, rendererAPI) {
        var treeRoot = this,
            chart = dsStore.getFromEnv('chart'),
            config = dsStore.getFromEnv('chartConfig'),
            trackerConfig = config.trackerConfig || (config.trackerConfig = []),
            numberFormatter = dsStore.getFromEnv('number-formatter'),
            btns = dsStore.getFromEnv('toolbarBtns'),
            labelPadding = {
          x: 5,
          y: 5
        },
            lineHeight,
            xShift = canvasMeasurement.horizontalPadding,
            yShift = canvasMeasurement.verticalPadding,
            getNextAreaBase = algorithmAPI.areaBaseCalculator(xShift, yShift),
            RowLayout = algorithmAPI.layoutManager.RowLayout,
            smartLabel = dsStore.getFromEnv('smartLabel'),
            drawRectFn = rendererAPI.drawRect,
            drawTextFn = rendererAPI.drawText,
            drawHotFn = rendererAPI.drawHot,
            iterator = afAPI.iterator,
            itr = iterator(treeRoot),
            bfItr = itr.bf,
            baseNode,
            attrs = dsStore.conf,
            highlightParentsOnHover = attrs.highlightParentsOnHover,
            getTextConf,
            context = afAPI.context,
            colorRange = dsStore.conf.colorRange,
            localColorProvider = afAPI.mapColorManager(attrs, colorRange),
            abstractEvtReg = afAPI.abstractEventRegisterer(algorithmAPI, dsStore, canvasMeasurement, rendererAPI),
            clickEvtImpl = abstractEvtReg.click,
            mouseoverEvtImpl = abstractEvtReg.mouseover,
            mouseoutEvtImpl = abstractEvtReg.mouseout,
            _baseNode,
            _intSR = chart._intSR,
            backToParent,
            resetTree,
            visController = afAPI.visibilityController,
            stateContextId = 'ClickedState',
            visibleState = 'VisibileRoot',
            stateContext,
            clickedState,
            csNode;

        stateContext = context.getInstance(stateContextId);
        clickedState = stateContext.get(visibleState) || {};
        csNode = clickedState.node;

        if (clickedState.node && clickedState.state) {
          if (clickedState.state.toLowerCase() === DRILLUP) {
            if (csNode instanceof Array) {
              visController.controlPreAnimVisibility(csNode[0].virginNode, csNode[1]);
            } else {
              visController.controlPreAnimVisibility(csNode.virginNode);
            }
          } else {
            visController.displayAll(clickedState.node.virginNode);
          }
        }

        lineHeight = attrs.parentLabelLineHeight;
        getTextConf = afAPI.initConfigurationForlabel(labelPadding, lineHeight, attrs);

        // Get the root node
        // maximum level of tree traversal is set to the value incremented with the current node depth
        baseNode = bfItr.next(maxDepth = afAPI.setMaxDepth(treeRoot.getDepth() + depthIncrement));

        _baseNode = baseNode;
        while (_baseNode.getParent()) {
          _baseNode = _baseNode.getParent();
        }

        if (!attrs.showNavigationBar) {
          if (_baseNode != baseNode) {
            btns.home.show();
            btns.back.show();
          } else {
            btns.home.hide();
            btns.back.hide();
          }
        } else {
          btns.home.hide();
          btns.back.hide();
        }

        smartLabel.useEllipsesOnOverflow(chart.config.useEllipsesWhenOverflow);
        smartLabel.setStyle(attrs._setStyle = {
          fontSize: (attrs.labelFontSize || attrs.baseFontSize) + 'px',
          fontFamily: attrs.labelFont || attrs.baseFont,
          lineHeight: 1.2 * (attrs.labelFontSize || attrs.baseFontSize) + 'px'
        });

        // Save the state in reflow conf
        // reflowData.tree = baseNode;
        backToParent = _intSR.backToParent;
        resetTree = _intSR.resetTree;

        btns.back && btns.back.attachEventHandlers({
          'click': backToParent.bind(baseNode)
        });

        btns.home && btns.home.attachEventHandlers({
          'click': resetTree.bind(baseNode)
        });
        /*
          * This function recursively draws the tree using breadth first algorithm.
          * @param node {TreeMap} - node to be drawn;
          * @param drawingArea {Object} - ultimate drawing area of the node. By ultimate it means
          *                              no more operation will be performed
          */
        (function rec(node, drawingArea) {
          var rect,
              _rect = {},
              highlightItem,
              hotItem,
              labelItem,
              _textRect,
              textRect,
              nextNodes,
              textItem,
              index,
              length,
              totalValPlotted = 0,
              bfsQueue,
              bfsNode,
              plotItem,
              textConf,
              label,
              options = {},
              textConfObj,
              plotDetails = {},
              evtFns = {},
              hoverContextPointerName = 'hover',
              cssConf = {},
              colorDimension = '',

          //   colorValue,
          formattedValue,
              formattedsValue;

          if (!node) {
            return;
          }
          formattedValue = numberFormatter.yAxis(node.getValue());
          formattedsValue = numberFormatter.sYAxis(node.getColorValue());
          node.setPath();
          // cache the previous rectangular configurations for animating the rectangle.
          rect = node.__initRect;
          if (rect) {
            _rect.x = rect.x;
            _rect.y = rect.y;
            _rect.width = rect.width;
            _rect.height = rect.height;
          }
          _textRect = node.textRect || {};

          rect = node.rect = node.__initRect = {};
          textRect = node.textRect = {};

          // Get rectangle to draw the node
          rect.width = drawingArea.width;
          rect.height = drawingArea.height;
          rect.x = drawingArea.x;
          rect.y = drawingArea.y;

          // Draws the rectangle
          cssConf = localColorProvider(node);
          // plotItem = drawRectFn(rect, cssConf);
          plotItem = node.plotItem;
          // If plotItem exists, then its the interacted sub-tree which is updated with a
          // different animations
          if (plotItem) {
            // dispose the graphic rectangle for the selected node.
            rendererAPI.graphicPool(true, 'plotItem', plotItem, _rect);
          }

          plotItem = node.plotItem = drawRectFn(rect, cssConf, _rect, node.overAttr);
          node.cssConf = cssConf;

          // Get the configuration to draw text
          textConfObj = getTextConf(node, rect);
          textConf = textConfObj.conf;

          // Offset that will be used to plot the children
          options.textMargin = textConf.rectShiftY;
          textRect = node.textRect = textConf.textRect;
          // Get the normalized text
          label = smartLabel.getSmartText(textConf.label, textRect.width, textRect.height).text;
          labelItem = node.labelItem;

          if (labelItem) {
            highlightItem = node.highlightItem;
            rendererAPI.graphicPool(true, 'labelItem', labelItem, _rect);
            rendererAPI.graphicPool(true, 'highlightItem', highlightItem, _rect);
          } else {
            _textRect = _textRect || {};
          }
          textItem = drawTextFn(label, textRect, {
            textAttrs: textConfObj.attr,
            highlightAttrs: textConfObj.highlight
          }, _textRect, node.overAttr, node);

          node.labelItem = textItem.label;
          node.highlightItem = textItem.highlightMask;

          // Saves the reference so that the event listener can use it
          node.plotItem = plotItem;

          // Save all the references so that it can be used as context
          plotDetails.virginNode = node;
          plotDetails.plotItem = plotItem;
          plotDetails.textItem = textItem;
          // Save circular reference for query
          plotDetails.virginNode.dirtyNode = plotDetails;

          if (node.getColorValue()) {
            colorDimension = attrs.tooltipSeparationCharacter + formattedsValue;
          }

          if (attrs.showTooltip) {
            plotDetails.toolText = (0, _lib.parseTooltext)(attrs.plotToolText, [1, 2, 3, 119, 122], {
              label: node.getLabel(),
              formattedValue: formattedValue,
              formattedsValue: formattedsValue
            }, {
              value: node.getValue(),
              svalue: node.getColorValue()
            }) || node.getLabel() + attrs.tooltipSeparationCharacter + formattedValue + colorDimension;
          } else {
            plotDetails.toolText = _lib.BLANKSTRING;
          }

          plotDetails.rect = rect;

          evtFns.hover = [function (targetElementNew) {
            var elem = this,
                parentElem,
                targetElement,
                virginNode,
                hoverContext,
                css,
                maskRgba,
                hoverMaskAlpha = 60;

            // Get the context if created or create a new one and get
            hoverContext = context.getInstance(hoverContextPointerName);
            virginNode = elem.virginNode;

            if (highlightParentsOnHover && !virginNode.next) {
              // If all the sibling leaves to be hovered together attribute is set and
              // the node is really a leaf
              parentElem = virginNode.getParent();
              targetElement = parentElem || virginNode;
            } else {
              // Set hover effect on the child itself
              targetElement = elem.virginNode;
            }

            // Set it on context
            hoverContext.set('element', targetElement);

            css = targetElement.cssConf;
            maskRgba = (0, _lib.convertColor)(css.fill && getLightColor(css.fill, 80), hoverMaskAlpha);
            // targetElement.plotItem.tracker.attr({'fill' : maskRgba});
            targetElementNew.attr({ 'fill': maskRgba });
            mouseoverEvtImpl(this);
          }.bind(plotDetails), function (targetElementNew) {
            var hoverContext,
                targetElement,
                css,
                unmaskRgba,
                hoverMaskAlpha = 0;

            // Get the context, which is most definitely created during the mouseover
            hoverContext = context.getInstance(hoverContextPointerName);
            targetElement = hoverContext.get('element');

            css = targetElement.cssConf;
            unmaskRgba = (0, _lib.convertColor)(css.fill || '#fff', hoverMaskAlpha);
            // targetElement.plotItem.tracker.attr({'fill' : unmaskRgba});
            targetElementNew.attr({ 'fill': unmaskRgba });
            mouseoutEvtImpl(this);
          }.bind(plotDetails)];

          evtFns.tooltip = [plotDetails.toolText];

          evtFns.click = [function () {
            clickEvtImpl(this, baseNode);
          }.bind(plotDetails)];

          hotItem = node.hotItem;
          if (hotItem) {
            rendererAPI.graphicPool(true, 'hotItem', hotItem, _rect);
          }

          // hotItem = node.hotItem = drawHotFn(plotDetails, evtFns);
          trackerConfig.push({
            node: node,
            key: 'hotItem',
            plotDetails: plotDetails,
            evtFns: evtFns,
            callback: drawHotFn
          });

          // Get the next level (if it was in level n, the following function returns node of  n+1
          // level) of nodes which belongs to this parent
          nextNodes = maxDepth !== undefined ? node.getDepth() >= maxDepth ? undefined : node.getChildren() : node.getChildren();
          if (!nextNodes) {
            // If its a leaf node, no further level is possible hence return
            return;
          }

          // Get the nodes of next level which stable rect information. Which we canuse to call this
          // function recursively to draw the complete tree
          bfsQueue = getNextAreaBase(nextNodes, function (meta, parent) {
            var row,
                nodeLimit,
                nodeIndex = 0,
                node,
                layout,
                nextDiv,
                queue = [];

            // Logically create a new layout
            row = new RowLayout({
              width: meta.effectiveRect.width,
              height: meta.effectiveRect.height,
              x: meta.effectiveRect.x,
              y: meta.effectiveRect.y
            }, parent.getValue());

            nodeLimit = nextNodes.length;

            while (true) {
              if (nodeIndex++ === nodeLimit) {
                break;
              }

              node = nextNodes[nodeIndex - 1];
              // Adds node in the layout to calculate the stability
              layout = row.addNode(node);

              if (layout === false) {
                // The current layout is not stable. The layoutManager has already reverted the
                // changes. Get the remaining logical division so that a new layout is laid
                nextDiv = row.getNextLogicalDivision();
                // Create a new layout
                row = new RowLayout(nextDiv, parent.getValue() - totalValPlotted);
                nodeIndex--;
              } else {
                // Layout is stable, adds it in the queue
                totalValPlotted += parseFloat(node.getValue(), 10);
                queue.push(node);
              }
            }

            return queue;
          }, options);

          for (index = 0, length = bfsQueue.length; index < length; index++) {
            // For all nodes of level n andd common parent, call this function recursively
            bfsNode = bfsQueue[index];
            rec(bfsNode, bfsNode.rect);
          }
        })(baseNode, canvasMeasurement);
      }
    }
  };

  /**
    * Gives the full implementation of the AbstractTreeMaker. Ususally AbstractTreeMaker can be used directly
    * if the ordering is not intended. The more specific version of the treemap needs to have ordering of
    * nodes. TreeMaker at this movement only give that implementation.
    */

  var TreeMaker = function (_AbstractTreeMaker) {
    _inherits(TreeMaker, _AbstractTreeMaker);

    function TreeMaker() {
      _classCallCheck(this, TreeMaker);

      return _possibleConstructorReturn(this, _AbstractTreeMaker.apply(this, arguments));
    }

    /**
     * Provides the name of the chart extension
     *
     * @static
     * @return {string} The name of the chart extension
     */
    TreeMaker.getName = function getName() {
      return 'TreeMaker';
    };

    /**
      * Provides the order of the node. This order is algorithm specific. This function acts as a bridge to pass
      * the ordering logic from algorithm to AbstractTreeMaker. This is called from AbstractTreeMaker only.
      * @param {Array.<TreeNode>} children  - array of children at a praticular level for a particular parent.
      */
    // eslint-disable-next-line


    TreeMaker.prototype.order = function order(children) {
      var algorithmAPI = algo[algorithm],
          orderNodeFn = algorithmAPI.orderNodes;
      if (orderNodeFn) {
        return orderNodeFn.apply(children, [algorithmAPI]);
      }
      return children;
    };

    return TreeMaker;
  }(AbstractTreeMaker);

  /**
    * Initialize the algorithm factory by passing information regarding the algorithm.
    * @param {string} algoName  - name of the algorithm
    * @param {boolean} flag  - flag to inform treemaker whether it should form bucket of the leaf nodes.
    *                      Enable this if the legend is used
    * @param {number | undefined} permitterDepth  - The maximum depth of visual that can be seen in the tree at once
    * @return {Object} API for algo [squarified or sliceanddice]
    */


  function init(algoName, flag, permitterDepth) {
    algorithm = algoName;
    bucketIterationMode = flag;
    depthIncrement = afAPI.setMaxDepth(permitterDepth);

    return algo[algorithm];
  }

  /**
    * Takes the syle and operation to be applied / performed on the outliers if the legend is dragged.
    * @param {Object} css - key-value pair of the style to be applied on the outliers. Where the key is the
    *                      name of the syle (like fill, stroke-width) and value is the value associated.
    * @param {Function} shadeOutFN - function to be executed once new outliers are found. For every outliers
    *                              this function is called once
    * @return {Function} - a function that sets the range if legend is dragged to find the outliers. After
    *                      finding out the new outliers it executes the shadeOutFN on it function.
    */
  function applyShadeFiltering(css, shadeOutFN) {
    var algorithmAPI = algo[algorithm],
        args,
        shadeFilter;

    // Initializes the filter
    shadeFilter = algorithmAPI.applyShadeFiltering(treeMaker.getBucket(), css, shadeOutFN);

    // Sets the range, find the outliers and apply / perform operation on them.
    return function (limits) {
      // Modifies the argument object to send it to the filter implementation. As part of the modification
      // it pushes the limit in front of the argument object so that it become the first argument.
      args = Array.prototype.slice.call(arguments, 0);
      args.unshift(limits);
      shadeFilter.apply(treeMaker.getBucket(), args);
    };
  }

  /**
    * Create tree from the data given. It requires a root to start with.
    * @param  {Object}   nodes       - the configuration object of FusionCharts
    * @param  {Function} cleansingFn - function to get the number formatted values.
    * @param  {boolean}  update      - whether it is update state or not
    * @return {TreeNode}             - the root of the newly prepared tee
    */
  function makeTree(nodes, cleansingFn, update) {
    // todo cleansingFn should be defined when called from addData to get the number formatted values.
    var tempTree;
    treeMaker = new TreeMaker(nodes, bucketIterationMode, cleansingFn);
    tempTree = treeMaker.get();

    if (update !== false) {
      tree = tempTree;
    }
    afAPI.setVisibleRoot(tempTree);
    return tempTree;
  }

  /**
    * Prepares all the arguments and call the draw function of the algorithm in use.
    * This function can not be called from outside and needs another function to return it after making
    * use of initialization parameter and setting up all the algorithm related preprocessing.
    */
  function plotTree() {
    var algorithmAPI = algo[algorithm],
        args;
    // initialise the realTimeModule with the configurations for drawing the nodes.
    algorithmFactory.realTimeUpdate = realTimeUpdate.apply(this, arguments);
    // Prepares the arguments
    args = Array.prototype.slice.call(arguments, 0);
    args.unshift(algorithmAPI);

    // Calls the draw function of the algorithm
    algorithmAPI.drawTree.apply(afAPI.getVisibleRoot(), args);
  }
  /**
    * Adds or deletes the nodes dynamically to the chart.
    * @return {Function} - fn to handle realtime data update
    */
  function realTimeUpdate() {
    // Initialise the function with the drawing area and rendering API.
    var rendererAPI,
        args,
        algorithmAPI = algo[algorithm];

    // Prepares the arguments
    args = Array.prototype.slice.call(arguments, 0);
    args.unshift(algorithmAPI);
    rendererAPI = args.slice(-1)[0];
    return function () {
      // modifier can be either for add or delete.
      var _args = Array.prototype.slice.call(arguments, 0),
          _getCleanValue = _args.shift(),

      // modifier determines if to add or delete the nodes/ subTree.
      modifier = _args.shift(),
          api = treeOpt(tree, function (visibleRoot) {
        // Calls the draw function of the algorithm. Attached as a callback.
        algorithmAPI.drawTree.apply(visibleRoot || tree, args);
      }, rendererAPI, _getCleanValue);
      // api to add or delete the nodes from the tree.
      api[modifier].apply(this, _args);
    };
  }

  /**
    * Forcefully set the root of the tree. Try not to use it as this function was only created to keep state
    * over successive call of renderer.
    * @param {TreeNode} base - the root of the newly prepared tee
    * @return {TreeNode}     - the root of the newly prepared tee
    */
  function setTreeBase(base) {
    return base && (tree = base);
  }

  /**
    * Initermediate bridge function that performs the tree making operation and drawing area assignment.
    * @param {Object}   nodes - the root of the newly prepared tee
    * @param {Function} cleansingFn - function to return valid number or null if the value is invalid
    * @return {Function} - returns plotTree to call the draw the function of the algorithm
    */
  function plotOnCanvas(nodes, cleansingFn) {
    tree = makeTree(nodes, cleansingFn);
    //   drawingAreaMeasurement = drawingArea;
    return plotTree;
  }

  // AlgorithmFactory API
  algorithmFactory.init = init;
  algorithmFactory.plotOnCanvas = plotOnCanvas;
  algorithmFactory.applyShadeFiltering = applyShadeFiltering;
  algorithmFactory.setTreeBase = setTreeBase;
  algorithmFactory.realTimeUpdate = realTimeUpdate;
  algorithmFactory.makeTree = makeTree;

  return algorithmFactory;
},

/*
 * Does the additons / deletion operations on the tree
*/
treeOpt = function treeOpt(baseNode, drawTreeFn, rendererAPI, _getCleanValue) {
  // incremental change that needs to be updated in the rest of the tree due to additions/ deletions of
  // the node/subtree.
  var change;
  /**
    * Takes the path of the node to be fetched and return the node element.
    * @param {Array} path  - node reference wrt global node.
    * @return {nodeElement} node  - a particular node in the tree as per specified in the traversal path.
    */
  function getNode(path) {
    var childNode,
        index = 0,
        parentNode = baseNode;
    if (!path.length) {
      return baseNode;
    }
    while (parentNode) {
      childNode = searchSibling.call(parentNode, path[index]);
      if (index === path.length - 1 && childNode) {
        // sets the incremental change.
        change = childNode.getValue();
        return childNode;
      }
      parentNode = childNode;
      index += 1;
    }
  }
  /**
    * Searches for a node by its name amongst the siblings.
    * @param {string} label  - Label of the node being searched.
    * @return {nodeElement} node  - The node element amongst the siblings having the same label name.
    */
  function searchSibling(label) {
    var index,
        node,
        sibling,
        parentNode = this,
        childrenArr = parentNode.getChildren() || [],
        len = childrenArr.length,
        sanitized = function sanitized(str) {
      return str.toLowerCase().trim();
    };

    for (index = 0; index < len; index += 1) {
      sibling = childrenArr[index];
      if (sanitized(sibling.label) === sanitized(label)) {
        node = sibling;
        break;
      }
    }
    return node;
  }
  return {
    /*
     * Delete a node/ even a subTree from the original tree and redraw the tree if required.
     * @param path {Array} - Contains the information of the node/subtree to be deleted in reference to the
     global node.
     * @param draw {Boolean} - Whether to redraw the tree immediately after the change.
    */
    deleteData: function deleteData(path, draw) {
      // fetch the element to the corresonding path.
      var afAPI,
          // todo: RED-3367 commit refer.
      targetNode = getNode(path),
          itr = afAPI.iterator(targetNode),
          dfItr = itr.df,

      // detach the node element from the actual tree.
      parentNode = targetNode && targetNode.getParent(),
          leftSiblingCount = targetNode && targetNode.getSiblingCount('left'),
          childrenArr = parentNode && parentNode.getChildren(),
          visibleRoot = afAPI.getVisibleRoot();
      // incase the path specified is not a valid one or root node is asked to remove.
      if (!targetNode || !parentNode) {
        return;
      }
      // set parent node to undefined, to break the parent-child links.
      childrenArr.splice(leftSiblingCount, 1);
      if (targetNode === visibleRoot) {
        visibleRoot = targetNode.getParent() || visibleRoot;
      }
      // generically dispose the tree to be deleted.
      while (targetNode) {
        rendererAPI.disposeItems(targetNode);
        targetNode = dfItr.next();
      }
      // update the tree with the reduced value responsible for this detachment.
      while (parentNode) {
        // reduces the changed value from the existing value of the parent node.
        parentNode.setValue(-change, true);
        parentNode = parentNode.getParent();
      }
      if (draw) {
        // draw the tree as per the specified algorithim.
        drawTreeFn(visibleRoot);
      }
    },

    addData: function addData(nodes, path, draw, index) {
      var afAPI,
          // todo: RED-3367 commit refer.
      algorithmFactory,
          newNode,
          tree,
          parentNode,
          oldValue,

      //   childrenArr,
      change = 0,
          incremental = true,
          visibleRoot = afAPI.getVisibleRoot();
      while (nodes.length) {
        newNode = nodes.pop();
        tree = algorithmFactory.makeTree(newNode, _getCleanValue, false);
        change = tree.getValue();
        parentNode = getNode(path || []);
        // incase the path specified is not a valid one
        if (!parentNode) {
          continue;
        }
        // if there is no child node for the insertion node, its value is over-ridden by its inserted child.
        if (!parentNode.getChildren()) {
          // cache the old value for the insertion node before the add child operation.
          oldValue = parentNode.getValue();
          // flag to set the absolute value for the node.
          incremental = false;
        }
        parentNode.addChildren(tree, index);
        // update the tree with the added value responsible for this attachment.
        while (parentNode) {
          // increases the changed value from the existing value of the parent node.
          parentNode.setValue(change, incremental);
          if (oldValue) {
            change -= oldValue;
            oldValue = undefined;
            incremental = true;
          }
          parentNode = parentNode.getParent();
        }
      }

      if (draw) {
        // draw the tree as per the specified algorithim.
        drawTreeFn(visibleRoot);
      }
    }
  };
},

/**
  * Useful in managing the container elements and folding/unfolding of them.
  * @param  {Object}  afAPI             algorithm factory apis
  * @param  {Object}  containerManager  containerManagerCreator APIs [initially it is blank object]
  * @return {Object}                    contains containerManagerCreator APIs
  */
containerManagerCreator = function containerManagerCreator(afAPI, containerManager) {
  var datasetDefStore,
      drawTreeFn,
      metaInf,
      dsConf,
      rendererAPI,
      updateContainers,
      forceCSS = false,

  /**
    * Draw the navigation bars - both the navigation history or the stacked children bar.
    * @param  {Object}   drawingAreaMeasurement  - Entire drawing area information for the entire
    *                                              bar to be drawn.
    * @param  {boolean}  isStacked               - A flag to determine if the navigation bar is a stacked or not.
    */
  drawNavigation = function drawNavigation(drawingAreaMeasurement, isStacked) {
    var navigationPath,
        len,
        colorRange = dsConf.colorRange,

    // map the color range for fetching the css colors for drawing the bars.
    localColorProvider = afAPI.mapColorManager(dsConf, colorRange, true),

    /**
      * Responsible for setting the elements to be placed in the navigation bar. In stacked bar, it is
      * supposedly the childNodes, where as in the navigation History bar it is traversal path to reach
      * to that node.
      * @param {boolean} isStacked  - A flag to determine if the navigation bar is a stacked or not.
      */
    setNavigationPath = function setNavigationPath(isStacked) {
      // fetch the visible root for any drilled state.
      var visibleRoot = getVisibleRoot();
      if (!isStacked) {
        // fetches the traversal path of the visible root node element, i.e. fetch the traversal
        // path that was taken to reach the cuurent visible state of the tree.
        navigationPath = visibleRoot.getPath() || [].concat(visibleRoot);
      } else {
        // fetches the child nodes to construct the stacked bar.
        navigationPath = visibleRoot.getChildren();
      }
      navigationPath.pop();
      // sets the length for the navigation path
      len = navigationPath.length;
    },

    /**
      * Determine the width of indivual segments of the constituting elements inside the bar.
      * @return {Function} - A function to overwrite the segmentRectangle to attain the above
      *                      functionality
      */
    segmentRectangle = function () {
      // store the already allocated width, incremented after every segment is drawn.
      var allocatedWidth;
      return {
        /**
          * A function to fetch the rectangular area required by the segment element.
          * @param  {Object}   drawingAreaMeasurement - Entire drawing area information for the entire
          *                                             bar to be drawn.
          * @param  {number}   pos                    - The posiiton index of the segment element to be drawn.
          * @param  {boolean}  isStacked              - A flag to construct the stacked or navigation History bar
          * @return {Object}                          - The rectangular area configuration for the segmented element.
          */
        get: function get(drawingAreaMeasurement, pos, isStacked) {
          var segmentRect = {
            y: drawingAreaMeasurement.startY,
            height: drawingAreaMeasurement.effectiveHeight
          },
              node = navigationPath[pos],
              parentNode = node.getParent();
          // The segmentRectangle starts from the drawingAreMeasurement start point.
          if (allocatedWidth) {
            segmentRect._x = drawingAreaMeasurement.startX + drawingAreaMeasurement.effectiveWidth;
            segmentRect._width = 0;
          } else {
            segmentRect._x = drawingAreaMeasurement.startX;
            segmentRect._width = drawingAreaMeasurement.effectiveWidth;
          }

          segmentRect.x = allocatedWidth || (allocatedWidth = drawingAreaMeasurement.startX);
          // for stacked navigation path.
          if (!isStacked) {
            // incrementally add the allocated width.
            // All the elements are equispaced.
            allocatedWidth += segmentRect.width = drawingAreaMeasurement.effectiveWidth / len;
          } else {
            // for simple hierarchial navigation history bar.
            // the unit width is proportional to the value of the childnodes wrt the parent node.
            // increment the width allocation
            allocatedWidth += segmentRect.width = drawingAreaMeasurement.effectiveWidth * (node.getValue() / parentNode.getValue());
          }
          return segmentRect;
        },
        /**
          * Reset the allocated Width.
          */
        resetAllocation: function resetAllocation() {
          allocatedWidth = undefined;
        }
      };
    }(),
        fetchFlatnessPosition = function fetchFlatnessPosition(startIndex, endIndex) {
      var shape;
      if (endIndex === 1) {
        shape = 'both';
      } else if (startIndex === 0) {
        shape = 'left';
      } else if (startIndex < endIndex - 1) {
        shape = 'no';
      } else {
        shape = 'right';
      }
      return shape;
    },
        labelPadding = {
      x: 5,
      y: 5
    },
        lineHeight = dsConf.parentLabelLineHeight,

    // Gets label configuration
    getTextConf = afAPI.initConfigurationForlabel(labelPadding, lineHeight, dsConf),
        drawPathFn = rendererAPI.drawPolyPath,
        drawTextFn = rendererAPI.drawText,
        drawHotFn = rendererAPI.drawHot,
        STACKED_STR = 'stacked',
        navigationMapper = {
      navigationHistory: {
        path: 'polyPathItem',
        label: 'pathlabelItem',
        highlightItem: 'pathhighlightItem',
        hotItem: 'pathhotItem'
      }
    },
        chart = datasetDefStore.getFromEnv('chart'),
        trackerConfig = chart.config.trackerConfig,
        legend = datasetDefStore.getFromEnv('gradientLegend'),
        smartLabel = datasetDefStore.getFromEnv('smartLabel'),
        clickFn = function clickFn(node) {
      return function () {
        var context = afAPI.context,
            stateContextId = 'ClickedState',
            visibleState = 'VisibileRoot',
            stateContext = context.getInstance(stateContextId),
            clickedState = stateContext.get(visibleState) || {};

        trackerConfig.length = 0;
        clickedState.state = DRILLUP;
        clickedState.node = [{ virginNode: afAPI.getVisibleRoot() }, node];

        // Reset the legend once any traversal happens
        legend && legend.enabled && legend.resetLegend();
        containerManager.draw([node, node, node]);
      };
    },
        hoverInFn = function hoverInFn() {
      return function () {
        /* // set the height proportion.
        _heightProportion.set({
            treeMap: 0.9,
            navigationBar: 0,
            stackedNavigation: 0.1
        });
        // draw the container box.
        draw([node, fetchGlobalRoot(node), node]); */
      };
    },
        hoverOutFn = function hoverOutFn() {
      return function () {
        /* // set the height proportion.
        _heightProportion.set({
            treeMap: 0.9,
            navigationBar: 0.1,
            stackedNavigation: 0
        });
        // draw the container box.
        draw(); */
      };
    },
        toolTipFn = function toolTipFn(node) {
      return dsConf.showTooltip ? node.getLabel() : _lib.BLANKSTRING;
    },
        i,
        offset,
        pathObj,
        node,
        segmentRect,
        textConfObj,
        label,
        textConf,
        pathText,
        _setStyle = dsConf._setStyle,
        textRect,
        navigationRatio = _heightProportion.get().navigationBar,
        verticalPadding = 2 * _getVerticalPadding('navigationBar'),
        navigationHeight = navigationRatio * metaInf.effectiveHeight,
        logicalFontSize = Math.min(navigationHeight - (verticalPadding + 6), _setStyle.fontSize.replace(/\D+/g, '')),
        fontSizeStr = logicalFontSize + 'px';
    navigationMapper.stacked = {
      path: STACKED_STR + navigationMapper.navigationHistory.path,
      label: STACKED_STR + navigationMapper.navigationHistory.label,
      highlightItem: STACKED_STR + navigationMapper.navigationHistory.highlightItem,
      hotItem: STACKED_STR + navigationMapper.navigationHistory.hotItem
    };
    segmentRectangle.resetAllocation();
    // get the navigation history of the visibleRoot
    setNavigationPath(isStacked);
    smartLabel.setStyle({
      fontSize: fontSizeStr,
      lineHeight: fontSizeStr
    });
    for (i = 0; i < len; i += 1) {
      node = navigationPath[i];
      segmentRect = segmentRectangle.get(drawingAreaMeasurement, i, isStacked);
      offset = (pathObj = createNavigationPath(segmentRect, isStacked ? 'both' : fetchFlatnessPosition(i, len), undefined, node)).offset;
      node[navigationMapper[isStacked ? 'stacked' : 'navigationHistory'].path] = drawPathFn(pathObj, localColorProvider(node, true), node);
      // Get the configuration to draw text
      textConfObj = getTextConf(node, segmentRect, true);
      textConf = textConfObj.conf;
      textRect = textConf.textRect;
      textRect.width -= 2 * offset;
      // for vertically aligning the text.
      textRect.y = segmentRect.y + segmentRect.height / 2;
      label = smartLabel.getSmartText(textConf.label, textRect.width, Math.max(logicalFontSize, textRect.height)).text;

      pathText = drawTextFn(label, textRect, {
        textAttrs: textConfObj.attr,
        highlightAttrs: textConfObj.highlight
      }, {
        y: segmentRect.height / 10,
        'font-size': dsConf._setStyle.fontSize,
        'font-family': dsConf._setStyle.fontFamily
      }, (isStacked ? 'stacked' : '') + 'path', node);
      node[navigationMapper[isStacked ? 'stacked' : 'navigationHistory'].label] = pathText.label;
      node[navigationMapper[isStacked ? 'stacked' : 'navigationHistory'].highlightItem] = pathText.highlightMask;
      trackerConfig.push({
        node: node,
        key: navigationMapper[isStacked ? 'stacked' : 'navigationHistory'].hotItem,
        plotDetails: {
          rect: segmentRect
        },
        evtFns: {
          click: [clickFn(node, isStacked)],
          hover: [hoverInFn(node), hoverOutFn()],
          tooltip: [toolTipFn(node)]
        },
        callback: drawHotFn
      });
    }
  },

  /**
    * Fetch the drawing function for a container element.
    * @param  {string}    type  - Type of the container box
    * @return {Function}        - A function to fecth the drawing function for that type.
    */
  getDrawFn = function getDrawFn(type) {
    // map the type with the drawing functions.
    var drawFn = {
      'treeMap': drawTree,
      'navigationBar': drawNavigation,
      'stackedNavigation': drawStackedNavigation
    };
    // Returns the drawing function for a type of the container box.
    return drawFn[type];
  },

  /**
    * Set and retrive the height allocations for navigation, treemap and stacked bar.
    */
  _heightProportion = function () {
    // initial height allocations.
    var heightProportion = {
      'treeMap': 1,
      'navigationBar': 0,
      'stackedNavigation': 0
    };
    return {
      /**
        * sets the height allocation with the parameterised input value.
        * @param {boolean}   hasNavigationBar  - whether there is navigation bar or not
        */
      set: function set(hasNavigationBar) {
        var singleLineRatio,
            navigationRatio = (0, _lib.pluckNumber)(dsConf.navigationBarHeightRatio, dsConf.navigationBarHeight / metaInf.effectiveHeight, 0.15),
            maxFontSize = dsConf.labelFontSize ? Math.max(dsConf.labelFontSize, dsConf.baseFontSize) : dsConf.baseFontSize,
            verticalPadding = 2 * _getVerticalPadding('navigationBar');
        // 3 px gap is maintained vertically.
        singleLineRatio = (6 + maxFontSize + verticalPadding) / metaInf.effectiveHeight;
        navigationRatio = Math.max(singleLineRatio, navigationRatio);
        if (navigationRatio < 0.1) {
          navigationRatio = 0.1;
        } else if (navigationRatio > 0.15) {
          navigationRatio = 0.15;
        }
        dsConf.navigationBarHeightRatio = navigationRatio;
        if (hasNavigationBar) {
          heightProportion = {
            treeMap: 1 - navigationRatio,
            navigationBar: navigationRatio,
            stackedNavigation: 0
          };
        } else {
          heightProportion = {
            treeMap: 1,
            navigationBar: 0,
            stackedNavigation: 0
          };
        }
      },
      /**
        * Fetch the height allocation defination.
        * @return {Object} - the height proportion.
        */
      get: function get() {
        return heightProportion;
      }
    };
  }(),
      allocatedHeightProp = 0,
      _getVerticalPadding = function _getVerticalPadding(type) {
    var verticalPadding = dsConf.verticalPadding,
        plotBorderThickness = dsConf.plotBorderThickness,
        navigationBarBorderThickness = dsConf.navigationBarBorderThickness;
    return verticalPadding + (type === 'navigationBar' ? navigationBarBorderThickness : plotBorderThickness);
  },

  /**
    * Fectches the drawing area information for a particular type of container element.
    * @param {string} type  - type of the container element
    * @return {Function}    - a fucntion that takes type as input and calculate the area requirements using the
    *                         heightProportion mapping.
    */
  getDrawingArea = function getDrawingArea(type) {
    var width = metaInf.effectiveWidth,
        height = metaInf.effectiveHeight,
        verticalPadding = _getVerticalPadding(type),

    // maps the height requirements for each type of the container element.
    heightProportion = _heightProportion.get(),
        requiredHeightProp = heightProportion[type];
    if (allocatedHeightProp >= 1) {
      allocatedHeightProp = 0;
    }
    allocatedHeightProp += requiredHeightProp;
    // take the vertical padding as the seperator between the box elements.
    return {
      effectiveHeight: Math.round(requiredHeightProp * height * 100) / 100 - verticalPadding,
      effectiveWidth: width,
      startX: metaInf.startX,
      startY: metaInf.startY + verticalPadding + Math.round((allocatedHeightProp - requiredHeightProp) * height * 100) / 100
    };
  };
  /**
    * Container to draw the navigation bar or the treemap within it.
    */

  var Container = function () {
    function Container() {
      _classCallCheck(this, Container);
    }

    /**
      * Initialise the container box with drawing configurations
      * @param {Object}   configuration  - Contains the drawingAreaMeasurement and name for the container box element.
      * @param {Function} drawFn         - Set the draw function defined for that type of container element.
      */
    Container.prototype.init = function init(configuration, drawFn) {
      var container = this,
          containerConf = container.conf || (container.conf = {});
      containerConf.name = configuration.name;
      container.setDrawingArea(configuration.drawingAreaMeasurement);
      container.draw = container.draw(drawFn);
    };
    /**
      * sets the drawing area for the container element
      * @param {Object} drawingAreaMeasurement  - drawing area for the container element.
      */


    Container.prototype.setDrawingArea = function setDrawingArea(drawingAreaMeasurement) {
      var containerConf = this.conf;
      containerConf.drawingAreaMeasurement = drawingAreaMeasurement;
    };

    /**
     * drawing informations
     * @param {Function} drawFn  - Set the draw function defined for that type of container element
     * @return {Function} -
     */
    // eslint-disable-next-line


    Container.prototype.draw = function draw(drawFn) {
      return function () {
        var containerConf = this.conf,
            drawingAreaMeasurement = containerConf.drawingAreaMeasurement;
        if (drawingAreaMeasurement.effectiveHeight > 0) {
          drawFn(containerConf.drawingAreaMeasurement);
        }
      };
    };
    // eslint-disable-next-line


    Container.prototype.eventCallback = function eventCallback() {};

    return Container;
  }();

  /**
   * Initialise the containerManager
   */


  function init() {
    var type,
        containersArr = ['navigationBar', 'treeMap', 'stackedNavigation'],
        args = Array.prototype.slice.call(arguments, 0);
    datasetDefStore = args[0];
    metaInf = args[1];
    dsConf = datasetDefStore.conf;
    rendererAPI = args[2];
    // tree = args[3];
    drawTreeFn = args[4];
    if (updateContainers.get().length >= containersArr.length) {
      updateContainers.set();
    }

    while (containersArr.length) {
      type = containersArr.shift();
      updateContainers.set({
        type: type,
        drawFn: getDrawFn(type),
        drawingArea: getDrawingArea(type)
      });
    }
  }
  /**
    * Fetch the visible root.
    * @return {TreeRoot} - The visible root for the current view.
    */
  function getVisibleRoot() {
    return afAPI.getVisibleRoot();
  }
  /**
   * draws tree with specific treemap layout algorithm
   * @param {Object} drawingAreaMeasurement effective area to inform layout algorithm how much space is available
   */
  function drawTree(drawingAreaMeasurement) {
    var _temp = dsConf.plotBorderThickness;
    if (forceCSS) {
      dsConf.plotBorderThickness = 0;
    }
    drawTreeFn.apply(afAPI.getVisibleRoot(), [datasetDefStore, {
      width: drawingAreaMeasurement.effectiveWidth,
      height: drawingAreaMeasurement.effectiveHeight,
      x: drawingAreaMeasurement.startX,
      y: drawingAreaMeasurement.startY,
      horizontalPadding: dsConf.horizontalPadding,
      verticalPadding: dsConf.verticalPadding
    }, rendererAPI]);
    dsConf.plotBorderThickness = _temp;
  }
  /**
    * Creates a custom path for the navigation bar element.
    * @param  {Object} rect    - Holds the basic configuration for the custom path.
    * @param  {string} shape   - Decides the shape modification required.
    * @param  {number} _offset - Decides the strech of the central angle of the navigation bar seperator.
    * @return {Object}         - path is the actual custom required path._path is the path internally might be useful in
    *                            folding in/out of the navigation bar
    */
  function createNavigationPath(rect, shape, _offset) {
    var x = rect.x,
        y = rect.y,
        width = rect.width,
        height = rect.height,
        centerHalfAngle = dsConf.seperatorAngle / 2,
        init = ['M', x, y],
        offset = (0, _lib.pluckNumber)(centerHalfAngle ? height / 2 * (1 - Math.tan(centerHalfAngle)) : _offset, 15),
        _init = ['M', rect._x, y],
        pathFetcher = function pathFetcher(width) {
      return {
        'both': ['h', width, 'v', height / 2, 'v', height / 2, 'h', -width, 'v', -height / 2, 'v', -height / 2],
        'right': ['h', width, 'v', height / 2, 'v', height / 2, 'h', -width, 'l', offset, -height / 2, 'l', -offset, -height / 2],
        'no': ['h', width, 'l', offset, height / 2, 'l', -offset, height / 2, 'h', -width, 'l', offset, -height / 2, 'l', -offset, -height / 2],
        'left': ['h', width, 'l', offset, height / 2, 'l', -offset, height / 2, 'h', -width, 'v', -height / 2, 'v', -height / 2]
      };
    };
    return {
      path: init.concat(pathFetcher(width)[shape]),
      _path: _init.concat(pathFetcher(rect._width).both),
      offset: offset
    };
  }
  /**
    * function to draw stacked navigation bar
    */
  function drawStackedNavigation() {
    var args = Array.prototype.splice.call(arguments, 0);
    args.push(true);
    getDrawFn('navigationBar').apply(this, args);
  }

  updateContainers = function () {
    var containers = [];
    return {
      get: function get() {
        return containers;
      },
      set: function set(config) {
        var container;
        if (config) {
          container = new Container();
          container.init({
            name: config.type,
            drawingAreaMeasurement: config.drawingArea
          }, config.drawFn);
          containers.push(container);
        } else {
          containers.length = 0;
        }
        return containers;
      }
    };
  }();
  /**
    * Adds all the graphics element in a pool which is again reused.
    */
  function remove() {
    var visibleRoot = afAPI.getVisibleRoot();
    // dispose the elements
    visibleRoot && rendererAPI.disposeChild(visibleRoot);
  }
  /**
   * handles draw job of container
   * @param {Array} visibleRootArr  visible roots
   */
  function draw(visibleRootArr) {
    var i,
        containersArr,
        containerElement,
        visibleRoot = afAPI.getVisibleRoot();
    // dispose the elements
    rendererAPI.disposeChild(visibleRoot, visibleRootArr ? visibleRootArr[1] : visibleRoot);
    // The height proportions are set as per the target Root of the treemap container.
    visibleRootArr && (visibleRoot = visibleRootArr[1]);
    // no navigation bar if the target Node is the Global node.
    if (!visibleRoot.getParent()) {
      containerManager.heightProportion.set(false);
    } else if (dsConf.showNavigationBar) {
      // on every drill the height proportions are changed.
      containerManager.heightProportion.set(true);
    }
    // fetch the container elements.
    containersArr = updateContainers.get();
    for (i = 0; i < containersArr.length; i += 1) {
      containerElement = containersArr[i];
      containerElement.setDrawingArea(getDrawingArea(containerElement.conf.name));
      visibleRootArr && afAPI.setVisibleRoot(visibleRootArr[i]);
      containerElement.draw();
    }
  }
  containerManager.init = init;
  containerManager.draw = draw;
  containerManager.heightProportion = _heightProportion;
  containerManager.remove = remove;

  return containerManager;
},

/**
 * Returns the default color since no code is passed
 * @param   {string} hex color code
 * @return  {string}     a valid color code
 */
normalizeColorCode = function normalizeColorCode(hex) {
  if (!hex) {
    // Returns the default color since no code is passed
    return '#' + MOTHER_OF_ALL_COLOR;
  }

  return hex.replace(/^#*/, '#');
},
    MOTHER_OF_ALL_COLOR = 'E5E5E5',

/**
 * store refernece of APIs
 */
ref = function () {
  var afAPI = {},
      algorithmFactory = {},
      containerManager = {};

  return {
    afAPI: afAPICreator(afAPI, containerManager),
    algorithmFactory: algorithmFactoryCreator(afAPI, algorithmFactory, containerManager),
    containerManager: containerManagerCreator(afAPI, containerManager),
    treeOpt: treeOpt
  };
}();
/**
 * Nodes are resided in the bucket in a ascending order depending on their color value.
 * It applies range-out css on the nodes if it outlies of the range.
 */

var Bucket = function () {
  /**
   * constructor
   */
  function Bucket() {
    _classCallCheck(this, Bucket);

    this._b = [];
    this._css = undefined;
    // Default function to be operated on outliers.
    this.rangeOurEffectApplyFn = _lib.stubFN;

    // statePointers are simple object that remembers state. It has two properties which get updated when the
    // legend is dragged. The .value property is the value which the pointer is detecting. This value might not be
    // the one from the array elements. It can be any number between the first and last range. The .index property
    // is the index of the immediate element that just surpasses the value of .value

    // This initially points to the first element of the array. Since the array is sorted, this in turns points
    // the lowest value node. When the slider is dragged the lower pointer moves accordingly based on the value of
    // legend slider. Any nodes that resides left side of the slider are outliers.
    this.statePointerLow = {
      value: undefined,
      index: undefined
    };

    // This initially points to the last element of the array. Since the array is sorted, this in turns points
    // the highest value node. When the slider is dragged the higher pointer moves accordingly based on the value of
    // legend slider. Any nodes that resides right side of the slider are outliers.
    this.statePointerHigh = {
      value: undefined,
      index: undefined
    };
  }
  /**
   * resets statePointers
   */


  Bucket.prototype.resetPointers = function resetPointers() {
    this.statePointerLow = {
      value: undefined,
      index: undefined
    };

    this.statePointerHigh = {
      value: undefined,
      index: undefined
    };
  };

  /**
    * Sets what operation to be performed if a node remains in the outlier area.
    * @param {Object}   css                    - the style object to be applied
    * @param {Function} rangeOurEffectApplyFn  - the function to be executed. This function is called with the
    *                                            outlier node and css.
    */


  Bucket.prototype.setRangeOutEffect = function setRangeOutEffect(css, rangeOurEffectApplyFn) {
    this._css = css;
    this.rangeOurEffectApplyFn = rangeOurEffectApplyFn;
  };

  /**
    * Place node in the bucket cumulatively in sorted manner. This use binary search and insert policy.
    * @param {TreeNode} node  - node to be inserted. Make sure the node is leaf. This does not check if the node passed
    *                           is leaf node or not.
    */


  Bucket.prototype.addInBucket = function addInBucket(node) {
    var arr = this._b,
        val = node.getColorValue(),
        minIndex = 0,
        maxIndex = arr.length - 1,
        targetIndex;

    if (!val) {
      return;
    }

    // Get position where the current node will fit in the ascending array. This position is based on the value of
    // the node.
    targetIndex = function () {
      var _i, _elem, _elemVal;

      // Initially the whole array is the window. And continue until the window is shrinked to zero.
      while (minIndex <= maxIndex) {
        // Apply sort of divide and conquer to get the middle index (floored if the index is not integer). This
        // becomes the pivot element
        targetIndex = _i = (minIndex + maxIndex) / 2 | 0;

        _elem = arr[_i];
        _elemVal = _elem.getColorValue();

        if (_elemVal < val) {
          // If value of the element to be entered is greater than the current calculated pivot element value
          // shift the left hand of the window starting from the pivot element and recalculate.
          minIndex = _i + 1;
        } else if (_elemVal > val) {
          // If value of the element to be entered is less than the current calculated pivot element value
          // shift the right hand of the window starting from the pivot element and recalculate.
          maxIndex = _i - 1;
        } else {
          // Both are same. Return the current position.
          return _i;
        }
      }
      // Return the index which is ready for use in splice
      return ~maxIndex;
    }();

    // Add the element at that location
    arr.splice(Math.abs(targetIndex), 0, node);
  };

  /**
    * Moves the lowerStatePointer and perform operation on the outliers which resides at left side of the pointer.
    * @param {Integer} value  - value according to which the lowerStatePointer would be moved.
    */


  Bucket.prototype.moveLowerShadePointer = function moveLowerShadePointer(value) {
    var arr = this._b,
        index,
        bucketElem,
        _val,
        statePtr = this.statePointerLow,
        stateIndex = statePtr.index,
        stateVal = statePtr.value,
        pointerAheadFlag = false;

    // Assign a initial pointer state if legend is dragged for the first time otherwise resume the previous state
    index = stateIndex = stateIndex !== undefined ? stateIndex : 0;
    stateVal = stateVal !== undefined ? stateVal : Number.NEGATIVE_INFINITY;

    if (value === stateVal) {
      // Do not move the pointer if the last state value and the current one is same.
      return;
    }

    if (stateVal <= value) {
      // If the legend is moved further right from the the last position.
      while (true) {
        // Iterate over the new changed range to find the outliers.
        bucketElem = arr[index++];
        _val = bucketElem ? bucketElem.getColorValue() : 0;

        if (value < _val || !bucketElem) {
          // When no more outliers are to be iterated, break
          break;
        }

        // A flag to bring the pointer back to its correct position.
        pointerAheadFlag = true;
        // Apply style and execute the operation on outliers
        bucketElem.rangeOutEffect = this._css;
        this.rangeOurEffectApplyFn.call(bucketElem, this._css);
      }

      // Fix the pointer position
      index = pointerAheadFlag ? index - 2 : index - 1;
    } else {
      // If the legend is moved further left from the the last position.
      while (true) {
        // Remove some elements from outlier region. i.e. rollback the changes done when they were in outliers.
        bucketElem = arr[index--];
        _val = bucketElem ? bucketElem.getColorValue() : 0;

        if (value >= _val || !bucketElem) {
          break;
        }

        // Restore the previous style which was in use before it had become a outliers
        bucketElem.cssConf = bucketElem.cssConf || {};

        // A flag to bring the pointer back to its correct position.
        pointerAheadFlag = true;
        delete bucketElem.rangeOutEffect;
        // Forcefully made the opacity 1. This is against the guard that if the opacity is changed through
        // configuration during legend dragging
        bucketElem.cssConf.opacity = 1;
        this.rangeOurEffectApplyFn.call(bucketElem, bucketElem.cssConf);
      }

      // Fix the pointer position
      index = pointerAheadFlag ? index + 2 : index + 1;
    }

    // Saves the current state
    statePtr.index = index;
    statePtr.value = value;
  };

  /**
    * Moves the higherStatePointer and perform operation on the outliers which resides at right side of the pointer.
    * @param {Integer} value - value according to which the higherStatePointer would be moved.
    */


  Bucket.prototype.moveHigherShadePointer = function moveHigherShadePointer(value) {
    var arr = this._b,
        length = arr.length,
        index,
        bucketElem,
        _val,
        statePtr = this.statePointerHigh,
        stateIndex = statePtr.index,
        stateVal = statePtr.value,
        pointerAheadFlag = false;

    // Assign a initial pointer state if legend is dragged for the first time otherwise resume the previous state
    index = stateIndex = stateIndex !== undefined ? stateIndex : length - 1;
    stateVal = stateVal !== undefined ? stateVal : Number.POSITIVE_INFINITY;

    if (value === stateVal) {
      // Donot move the pointer if the last state value and the current one is same.
      return;
    }

    if (stateVal > value) {
      // If the legend is moved further left from the the last position.
      while (true) {
        // Iterate over the new changed range to find the outliers.
        bucketElem = arr[index--];
        _val = bucketElem ? bucketElem.getColorValue() : 0;

        if (value >= _val || !bucketElem) {
          // When no more outliers are to be iterated, break
          break;
        }

        // A flag to bring the pointer back to its correct position.
        pointerAheadFlag = true;
        // Apply style and execute the operation on outliers
        bucketElem.rangeOutEffect = this._css;
        this.rangeOurEffectApplyFn.call(bucketElem, this._css);
      }
      // Fix the pointer position
      index = pointerAheadFlag ? index + 2 : index + 1;
    } else {
      // If the legend is moved further right from the the last position.
      while (true) {
        // Remove some elements from outlier region. i.e. rollback the changes done when they were in outliers.
        bucketElem = arr[index++];
        _val = bucketElem ? bucketElem.getColorValue() : 0;

        if (value < _val || !bucketElem) {
          break;
        }

        // Restore the previous style which was in use before it had become a outliers
        bucketElem.cssConf = bucketElem.cssConf || {};

        // A flag to bring the pointer back to its correct position.
        pointerAheadFlag = true;
        delete bucketElem.rangeOutEffect;
        // Forcefully made the opacity 1. This is against the guard that if the opacity is changed through
        // configuration during legend dragging
        bucketElem.cssConf.opacity = 1;
        this.rangeOurEffectApplyFn.call(bucketElem, bucketElem.cssConf);
      }
      // Fix the pointer position
      index = pointerAheadFlag ? index - 2 : index - 1;
    }

    // Saves the current state
    statePtr.index = index;
    statePtr.value = value;
  };

  return Bucket;
}();
/**
  * Singular node in a tree. A node consists of label and value associated with it.
  * One single node can have two references. One to the children and one to the parent.
  * Using this references the complete tree can be traveresd.
  * If the the node is a leaf then reference to children (next) would be undefined.
  * If the node is the root node the refernce to the parent would be undefined.
  */


var TreeNode = function () {
  /**
   * connstructor function
   * @param {string}  label       - label of the node. Usually a catagory or specific item.
   * @param {Integer} value       - value of the node.
   * @param {Float}   colorValue  - color value as the range in which this node belongs to
   */
  function TreeNode(label, value, colorValue) {
    _classCallCheck(this, TreeNode);

    // Currently this label is unique (which should be the case ideally). This label serves the purpose of id.
    this.label = label;
    this.value = parseFloat(value, 10);
    this.colorValue = parseFloat(colorValue, 10);
    // Refernce to child nodes. The tree here is a generic tree. Hence can have any number of child, and is a array.
    this.next = undefined;
    // Reference to the parent of the current node. Single treenode element, since only one node can be parent.
    this.prev = undefined;
    // Stores the meta information specific to set level like back ground color
    this.meta = {};
  }
  /**
   * fetches css property
   * @return {Object} - css config
   */


  TreeNode.prototype.getCSSconf = function getCSSconf() {
    return this.cssConf;
  };
  /**
   * Fetches the path wrt the global root node.
   * @return {Array}  path
   */


  TreeNode.prototype.getPath = function getPath() {
    return this.path;
  };
  /**
    * Sets the path wrt the global root.
    */


  TreeNode.prototype.setPath = function setPath() {
    var node = this,
        parentNode = node.getParent();
    node.path = (parentNode ? parentNode.getPath() : []).concat(node);
  };

  /**
    * Adds a child to the existing list of children of the current node.
    * Link the child nodes with the ancestors. This linking is done one at a time.
    * Since the tree is a generic one, the links are saved as sorted array.
    * @param {TreeNode}         ref - reference to the next child
    * @return {Array.<TreeNode>}    - Array of all children
    */


  TreeNode.prototype.addChild = function addChild(ref) {
    if (ref instanceof TreeNode) {
      // Add at the end of the existing child. If no child is present create a list.
      this.next = this.next || [];
      [].push.call(this.next, ref);
      // Set the parent as well
      ref.setParent(this);
    }

    // Return the list of updated child
    return this.next;
  };

  /**
    * Get all the children of the current node.
    * @return {Array.<TreeNode>} - Array of all children
    */


  TreeNode.prototype.getChildren = function getChildren() {
    return this.next;
  };

  /**
    * add children to a specific node(parent node in this context) to a specified index.
    * Can be a multiple child insertions at a time.
    * Default index remains at the end of the object.
    * @param {TreeNode}   newNode   new tree node
    * @param {Integer}    index     index where to add the node in the node array
    */


  TreeNode.prototype.addChildren = function addChildren(newNode, index) {
    var parentNode = this,
        childrenArr = parentNode.getChildren() || (parentNode.next = []),
        len = childrenArr.length;
    // default place in the end
    if (!index) {
      index = len - 1;
    }
    // applying extreme conditions.
    index = index > len - 1 ? len - 1 : index < 0 ? 0 : index;
    childrenArr.splice(index, 0, newNode);
    newNode.setParent(this);
  };

  /**
    * Fetch the depth of the current node.
    * @return {number} - Depth of the node element in the tree structure.
    */


  TreeNode.prototype.getDepth = function getDepth() {
    return this.meta.depth;
  };
  /**
    * Check if the node is a leaf node.
    * @param  {number}   maxDepth  -  Depth Traversal restrictions.
    * @return {boolean}            - If the node is a leaf node keeping the imposed restrictions intact.
    */


  TreeNode.prototype.isLeaf = function isLeaf(maxDepth) {
    var node = this;
    //  if no depth restrictions being imposed, only node.next is used to determine its virginity
    return (maxDepth ? node.getDepth() < maxDepth : true) && node.next;
  };

  /**
    * Set a parent node of the current node
    * @param  {TreeNode}   ref - reference to the next child
    * @return {TreeNode}       - Current node with updated parent reference.
    */


  TreeNode.prototype.setParent = function setParent(ref) {
    if (ref instanceof TreeNode) {
      this.prev = ref;
    }
    return this;
  };

  /**
    * Get siblings' count of the current node
    * @param  {Enum}  side  - specifies the side from which siblings are to be counted. Can be either 'left' or 'right'
    * @return {Integer}       - sibling count including the current node
    */


  TreeNode.prototype.getSiblingCount = function getSiblingCount(side) {
    var parent,
        counter = 0,
        node = this,
        currentSibling = node;

    if (!(this instanceof TreeNode)) {
      // IF the instance is not of TreeNode which should not be case at any given point time.
      return;
    }

    // Traverse up the parent node, so that we get the reference to list of children
    parent = node.getParent();
    //  get sibling count specific to a particular side.
    if (side) {
      while (currentSibling) {
        currentSibling = currentSibling.getSibling(side);
        if (currentSibling) {
          counter += 1;
        }
      }
      return counter;
    }
    if (parent) {
      // If parent is present, which is not the case for the root node, return the count of children.
      // Which in turns is the count of sibling.
      return parent.getChildren().length;
    }
  };

  /**
    * Get the parent of the current node.
    * @return {TreeNode} - parent
    */


  TreeNode.prototype.getParent = function getParent() {
    return this.prev;
  };

  /**
    * Get the label of the current node.
    * @return {string} - label
    */


  TreeNode.prototype.getLabel = function getLabel() {
    return this.label;
  };

  /**
    * Get the value of the current node.
    * @return {Integer} - value
    */


  TreeNode.prototype.getValue = function getValue() {
    return this.value;
  };

  /**
    * Sets the value of the current node.
    * @param  {Integer} value        - The updated value for the node.
    * @param  {boolean} incremental  - A flag to update the value incrementally and not on absolute scale.
    */


  TreeNode.prototype.setValue = function setValue(value, incremental) {
    var node = this;
    if (incremental) {
      node.value += value;
    } else {
      node.value = value;
    }
  };

  /**
    * Get the colorValue of the current node.
    * @return {Integer} - value
    */


  TreeNode.prototype.getColorValue = function getColorValue() {
    return this.colorValue;
  };

  /**
    * Get the immediate sibling of the current node. The sibling can be retrieved either from the left side or right.
    * @param  {Enum} side  - specifies the side from which sibling to be retrieved. Can be either 'left' or 'right'
    * @return {TreeMap} - the sibling of the specified side
    */


  TreeNode.prototype.getSibling = function getSibling(side) {
    var nSideStr = side.toLowerCase(),
        parent = this.getParent(),
        label = this.getLabel(),
        children,
        index,
        tLabel,
        child;

    if (!parent) {
      // If the parent is not present, means the node is root node. Hence no sibling present.
      return;
    }

    // Retrieves all the sibling
    children = parent.getChildren();

    // Searches node by label as label name is most likely to be same in one category.
    for (index = 0; index < children.length; index++) {
      child = children[index];
      tLabel = child.getLabel();

      if (tLabel === label) {
        switch (nSideStr) {
          case 'left':
            return children[index - 1];

          case 'right':
            return children[index + 1];
        }
      }
    }
  };

  /**
    * Set the meta information. Like which is specific to a set label
    * @param {string}          key    - the key of the set label attr like color
    * @param {string | Object} value  - the value of the key
    */


  TreeNode.prototype.setMeta = function setMeta(key, value) {
    this.meta[key] = value;
  };

  /**
    * Set the depth information.
    * @param {number} depth  - The level at which the node is present in reference to the tree.
    */


  TreeNode.prototype.setDepth = function setDepth(depth) {
    this.meta.depth = depth;
  };

  /**
    * Get the meta information by key or completely. If the key is passed it returns back the value or the complete
    * meta information.
    * @param  {string} key  - the key of the set label attr like color
    * @return {string | Object | undefined} - the value of the key or if the key is not passed the complete meta obj.
    */


  TreeNode.prototype.getMeta = function getMeta(key) {
    if (!key) {
      return this.meta;
    }

    return this.meta[key];
  };

  return TreeNode;
}();

exports['default'] = ref;

/***/ })

},[359])["default"];
});
//# sourceMappingURL=fusioncharts.charts.js.map
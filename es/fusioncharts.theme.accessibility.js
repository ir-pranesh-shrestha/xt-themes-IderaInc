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

var css = "@font-face {\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2)\n    format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n\n@font-face {\n  font-family: \"Source Sans Pro Semi-Bold\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2)\n    format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}";
styleInject(css);

/*
 Accessibility Theme
 FusionCharts JavaScript Library

 Copyright FusionCharts, Inc.
 License Information at <http://www.fusioncharts.com/license>
*/

var themeObject = {
  name: 'accessibility',
  theme: {
    base: {
      chart: {
        showBorder: 0,
        showCanvasBorder: 0,
        patternType: "circle",
        bgColor: "#ffffff",
        canvasBgcolor: "#ffffff",
        showPlotBorder: 0,
        usePlotGradientColor: 0,
        showAlternateHGridColor: 0,
        showAlternateVGridColor: 0,
        divLineColor: "#545454",
        divLineAlpha: 100,
        divLineThickness: 1,
        paletteColors:
          "#5D62B5, #009E73, #F0E442, #56B4E9, #D55E00, #E69F00, #56B4E9",
        baseFont: "Source Sans Pro",
        baseFontSize: "0.875rem",
        baseFontColor: "#545454",
        outCnvBaseFont: "Source Sans Pro",
        outCnvBaseFontSize: "0.875rem",
        outCnvBaseFontColor: "#545454",
        captionFont: "Source Sans Pro Semi-Bold",
        captionFontColor: "#000000",
        captionFontSize: "1.5rem",
        captionFontBold: 0,
        subCaptionFont: "Source Sans Pro",
        subCaptionFontColor: "#545454",
        subCaptionFontSize: "1.25rem",
        subCaptionFontBold: 0,
        xAxisNameFont: "Source Sans Pro",
        yAxisNameFont: "Source Sans Pro",
        xAxisNameFontBold: 0,
        yAxisNameFontBold: 0,
        xAxisNameFontColor: "#000000",
        yAxisNameFontColor: "#000000",
        xAxisNameFontSize: "1rem",
        yAxisNameFontSize: "1rem",
        valueFont: "Source Sans Pro",
        valueFontBold: 0,
        valueFontSize: "1rem",
        showValues: 0,
        legendItemFont: "Source Sans Pro",
        legendItemFontBold: 0,
        legendItemFontSize: "1rem",
        legendItemFontColor: "#545454",
        drawCustomLegendIcon: 1,
        legendIconBgAlpha: "inherit",
        legendShadow: 0,
        legendBorderAlpha: 0,
        legendBorderThickness: 0,
        legendIconBorderThickness: 0,
        legendBgAlpha: 0,
        legendCaptionFontColor: "#000000",
        legendCaptionFontSize: "1.125rem",
        legendCaptionFontBold: 0,
        crossLineAnimation: 1,
        crossLineColor: "#545454",
        legendIconScale: 1.25,
        legendItemHiddenColor: "#545454",
        alignLegendWithCanvas: 1,
        toolTipBgColor: "#ffffff",
        toolTipBgAlpha: 100,
        toolTipColor: "#000000",
        showToolTipShadow: 0,
        tooltipBorderColor: "#545454",
        showShadow: 0,
        plotFillAlpha: 100
      }
    },

    // column2d chart
    column2d: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // column3d chart
    column3d: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // line2d chart
    line: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // area2d chart
    area2d: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // bar2d chart
    bar2d: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // bar3d chart
    bar3d: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // ms-column 2d
    mscolumn2d: {
      chart: {
        formatnumberscale: "1"
      }
    },
    // ms line 
    msline: {
      chart: {

        showhovereffect: "1",
        lineThickness: 2,
        anchorRadius: 4,
        anchorBgColor: "inherit",
        legendIconSides: 1
      }
    },
    // pie 2d
    pie2d: {
      chart: {
        use3DLighting: 0,
        showPercentValues: 1,
        showValues: 1,
        showPercentInTooltip: 0,
        showLegend: 1,
        legendIconSides: 1
      }
    },
    // doughnut2d chart
    doughnut2d: {
      chart: {
        centerLabelColor: "#000000",
        centerLabelFontSize: "1rem",
        showPercentInTooltip: 0,
        showLegend: 1,
        legendIconSides: 1,
        showValues: 1,
        showPercentValues: 1,
        use3DLighting: 0,
      }
    },
    // doughnut3d chart
    doughnut3d: {
      chart: {
        centerLabelColor: "#000000",
        centerLabelFontSize: "1rem"
      }
    },
    // pareto2d chart
    pareto2d: {
      chart: {
        paletteColors: "#5D62B5",
      }
    },
    // pareto3d chart
    pareto3d: {
      chart: {
        paletteColors: "#5D62B5",
      }
    },
    // multi-series area2d chart
    msarea: {
      chart: {
        plotFillAlpha: 60,
        showAnchors: 0,
        anchorRadius: 4,
        anchorBgColor: "inherit",
        legendIconSides: 1
      }
    },
    // gantt Chart
    gantt: {
      categories: [
        {
          baseFont: "Source Sans Pro",
          baseFontSize: "0.875rem",
          baseFontColor: "#545454"
        }
      ]
    },
    // funnel
    funnel: {
      chart: {
        is2D: 1,
        smartLineThickness: 1,
        smartLineColor: "#545454",
        smartLineAlpha: 100,
        useSameSlantAngle: 1,
        alignCaptionWithCanvas: 1,
        labelFontSize: "1rem"
      }
    },
    // Single-Series Spline 2D
    spline: {
      chart: {
        paletteColors: "#5D62B5"
      }
    },
    // Single-Series Spline Area 2D
    splinearea: {
      chart: {
        paletteColors: "#5D62B5",
      }
    },
    // drag-able Column 2D Chart
    dragcolumn2d: {
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ],
    },
    // drag-able Line 2D Chart
    dragline: {
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ],
    },
    // drag-able Area 2D Chart
    dragarea: {
      categories: [
        {
          category: [
            {
              fontItalic: "1"
            }
          ]
        }
      ]
    },
    // radar Chart
    radar: {
      chart: {
        anchorRadius: 4,
        anchorBgColor: "inherit",
        anchorBgAlpha: 60,
        anchorBorderAlpha: 60,
        plotFillAlpha: 60,
        legendIconSides: 1
      }
    },
    // Waterfall / Cascade Chart
    waterfall2d: {
      chart: {
        positiveColor: "#F0E442",
        negativeColor: "#D55E00"
      }
    },
    // timeseries
    timeseries: {
      chart: {
        paletteColors:
          "#5D62B5, #009E73, #F0E442, #56B4E9, #D55E00, #E69F00, #56B4E9",
        baseFont: "Source Sans Pro",
        multiCanvasTooltip: 1,
        style: {
          text: {
            "font-family": "Source Sans Pro",
            "font-size": "14px",
            fill: "#545454",
          },
          canvas: { stroke: "#545454", "stroke-width": 1 },
        },
      },
      caption: {
        style: {
          text: {
            "font-size": "24px",
            "font-family": "Source Sans Pro Semi-Bold",
            fill: "#000000",
          },
        }
      },
      subcaption: {
        style: {
          text: {
            "font-size": "20px",
            "font-family": "Source Sans Pro",
            fill: "#545454",
            "font-weight": 400,
          },
        },
      },
      crossline: {
        style: {
          line: {
            stroke: "#545454",
            "stroke-width": 1,
            opacity: 0.5,
          },
        },
      },
      tooltip: {
        style: {
          container: {
            "background-color": "#FFFFFF",
            opacity: 1,
            border: "1px solid #545454",
            "border-radius": "0px",
            padding: "6px",
          },
          text: { "font-size": "14px", color: "#545454" },
          header: {
            color: "#000000",
            "font-family": "Source Sans Pro",
            "font-size": "16px",
            padding: "0px",
          },
          body: { padding: "0px" },
        },
      },
      legend: {
        style: {
          text: {
            fill: "#545454",
            "font-size": "16px",
            "font-family": "Source Sans Pro",
          },
        },
      },
      navigator: {
        text: {
          style: {
            fill: "#ff0000",
          },
        },
        scrollbar: {
          style: {
            button: {
              fill: "rgba(84, 84, 84, 0.2)",
            },
            track: {
              fill: "#ededed",
            },
            scroller: {
              fill: "rgba(84, 84, 84, 0.2)",
            },
          },
        },
        window: {
          style: {
            handle: { fill: "rgba(84, 84, 84, 0.2)" },
            mask: {
              opacity: 1,
              stroke: "#rgba(84, 84, 84, 0.2)",
              "stroke-width": 1,
            },
          },
        },
      },
      extensions: {
        standardRangeSelector: {
          style: {
            "button-text": {
              fill: "#545454",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "button-text:hover": {
              fill: "#000000",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "button-text:active": {
              fill: "#000000",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            separator: {
              stroke: "#545454",
            },
          },
        },
        customRangeSelector: {
          style: {
            "title-text": {
              "font-family": "Source Sans Pro",
              "font-size": "16px",
              fill: "#ff0000",
            },
            "title-icon": {
              "font-family": "Source Sans Pro",
              "font-size": "16px",
              fill: "#000000",
            },
            label: {
              color: "#545454",
              "font-family": "Source Sans Pro",
              "font-size": "14px",
            },
            input: {
              "background-color": "#fcfcfc",
              color: "#545454",
              "font-family": "Source Sans Pro",
              "font-size": "14px",
            },
            "button-apply": {
              color: "#FFFFFF",
              "background-color": "#5D62B5",
              border: "none",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "button-cancel": {
              color: "#545454",
              "background-color": "#ffffff",
              border: "none",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "button-cancel:hover": { color: "#000000" },
            "cal-header": {
              "background-color": "#5D62B5",
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "cal-navprev": {
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "cal-navnext": {
              "font-family": "Source Sans Pro",
              "font-size": "16px",
            },
            "cal-weekend": { "background-color": "#e2e3f2" },
            "cal-days": {
              color: "#000000",
              "font-family": "Source Sans Pro",
              "font-size": "14px",
            },
            "cal-date": {
              color: "#545454",
              "font-family": "Source Sans Pro",
              "font-size": "14px",
            },
            "cal-date:hover": {
              "background-color": "#5D62B5",
              color: "#FFFFFF",
              "font-family": "Source Sans Pro",
              border: "none",
            },
            "cal-selecteddate": {
              "background-color": "#5D62B5",
              color: "#FFFFFF",
              "font-family": "Source Sans Pro",
              border: "none",
            },
            "cal-disableddate": {
              color: "rgba(84, 84, 84, 0.5)",
              "font-family": "Source Sans Pro",
            },
          },
        },
      },
      xaxis: {
        style: {
          title: {
            "font-size": 16,
            "font-family": "Source Sans Pro",
            fill: "#000000",
          },
          "grid-line": {
            stroke: "#545454",
            "stroke-width": 1,
          },
          "tick-mark-major": {
            stroke: "#545454",
            "stroke-width": 1,
          },
          "tick-mark-minor": {
            stroke: "#545454",
            "stroke-width": 0.75,
          },
          "label-major": {
            color: "#545454",
            "font-size": 14,
            "font-family": "Source Sans Pro",
          },
          "label-minor": {
            color: "#545454",
            "font-size": 14,
            opacity: 0.75,
            "font-family": "Source Sans Pro",
          },
          "label-context": {
            color: "#545454",
            "font-size": 14,
            "font-family": "Source Sans Pro",
          },
        },
      },
      yaxis: [
        {
          style: {
            title: {
              "font-size": "16",
              "font-family": "Source Sans Pro",
              fill: "#000000",
            },
            "tick-mark": {
              stroke: "#545454",
              "stroke-width": 1,
            },
            "grid-line": {
              stroke: "#545454",
              "stroke-width": 1,
            },
            label: {
              color: "#545454",
              "font-size": 14,
              "font-family": "Source Sans Pro",
            },
          },
          plot: [
            {
              value: "Downloads",
              type: "column",
            },
            {
              value: "Web Visits",
              type: "line",
            },
          ],
        },
      ],
    }
  }
};

var index = {
  extension: themeObject,
  name: 'accessibilityTheme',
  type: 'theme'
};

export default index;

/*
 Boilerplate Theme v0.0.4
 FusionCharts JavaScript Library

 This theme file includes the following theme variants:
 - boilerplate-basic
 - boilerplate-extended

 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b.addDep({extension:[{name:"boilerplate-basic",theme:{base:{chart:{labelDisplay:"stagger !important",caption:"Theme Caption \\!important",canvasBgColor:"#56EF22",borderThickness:"5 !important",borderColor:"#E60539",baseFontColor:"#781129"},categories:[{fontColor:"#0F4F40",fontSize:15,category:function(a){return{showLabel:a%2?0:1}},vline:{color:"#000000",thickness:2}}],dataset:[{color:"#8C3146",
data:function(a,b){8==a&&(b.value="");return{color:32E3>Number(b.value)?"#8C3146":"#FF0000",alpha:"100"}}}],trendlines:[{line:function(a){return a?{color:"#ff0000",thickness:3}:{color:"#ffff00",thickness:3}}}]},pie2d:{chart:{bgColor:"#FF0000"}},msline:{chart:{canvasBgColor:"#FF0000"}}}},{name:"boilerplate-extended",theme:{base:{chart:{labelDisplay:"rotate",showValues:1,rotateYAxisName:0,canvasBgColor:"#f0ff00",borderThickness:1},categories:{fontColor:"#ff0000",fontSize:15,category:function(a){return{showLabel:a%
2?1:0}},vline:{color:"#000000",thickness:2}},dataset:[{color:"#00ffff",data:function(a){return{color:a%2?"#0FF000":"#ffffff",alpha:"100"}}}]}}}],name:"boilerplateTheme",type:"theme"})});

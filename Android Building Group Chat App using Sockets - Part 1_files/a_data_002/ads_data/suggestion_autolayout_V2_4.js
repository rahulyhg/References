(function(){var a=function(b,d,h,k){if(4!=h.length)throw Error("The anchors should be an array of length 4.");b={type:"element",spec:{element:b}};d&&(b.alignments=d);d=["top","right","bottom","left"];for(var e=0;e<d.length;++e)h[e]&&(b[d[e]]=h[e]);void 0!==k&&(b.z_index=k);return b};var c={elements:{canvas:{type:"shape",node_id:"adContent",background_color_ids:"back1MCColor"},logoMCImage:{type:"logo",node_id:"logo-image",priority:2},text1TFText:{type:"text",font_level:1,component_type:"headline",node_id:"headline",font_color_id:"text1TFTextColor",background_color_ids:"back1MCColor"},text2TFText:{type:"text",font_level:2,component_type:"description",node_id:"description",font_color_id:"text2TFTextColor",background_color_ids:"back1MCColor"},clickTFText:{type:"button",node_id:"button",
font_color_id:"clickTFTextColor",background_color_ids:"clickTFBackColor",weight:1/28,priority:1}},variations:{square:{text1:a("text1TFText","top",["","","65%",""]),text2:a("text2TFText","",["text1 5%","","logoAndButton 5%",""]),logoAndButton:{type:"horizontal-list",spec:{elements:["logoMCImage","clickTFText"],margin:"even_left_extra",alignments:"bottom"},alignments:"bottom",top:"70%",bottom:"10%",left:"5%",right:"5%"}},tower:{calibrations:["AspectRatioGE 1 0.5"],text1:a("text1TFText","top",["","",
"",""]),text2:a("text2TFText","",["text1","5%","buttonAndLogo 10%","5%"]),buttonAndLogo:{type:"vertical-list",spec:{elements:["clickTFText","logoMCImage"],margin:"auto",alignments:"bottom"},alignments:"bottom",top:"70%"}},banner1:{calibrations:["AspectRatioLE 1.5 0.5"],texts:{type:"vertical-list",spec:{elements:["text1TFText","text2TFText"],margin:"even_left_extra"},left:"logo",right:"button"},logo:a("logoMCImage","left",["","70%","",""]),button:a("clickTFText","right",["","","","60%"])},banner2:{calibrations:["AspectRatioLE 1.5 0.5"],
logo:a("logoMCImage","left",["","70%","",""]),text1:a("text1TFText","left",["","50%","","logo 4%"]),text2:a("text2TFText","",["7%","button","7%","text1 4%"]),button:a("clickTFText","left right",["","","","80%"])},smallSquare1:{styles:{clickTFText:{displayType:"nessieButton"}},text1:a("text1TFText","",["","","buttonAndLogo 10%",""]),text2:a("text2TFText","",["","","buttonAndLogo 10%",""],1),buttonAndLogo:{type:"vertical-list",spec:{elements:["clickTFText","logoMCImage"],margin:"auto",alignments:"bottom"},
alignments:"bottom",top:"70%"}},smallSquare2:{styles:{clickTFText:{displayType:"nessieButton"}},text1:a("text1TFText","",["","","logoAndButton 15%",""]),text2:a("text2TFText","",["","","logoAndButton 15%",""],1),logoAndButton:{type:"horizontal-list",spec:{elements:["logoMCImage","clickTFText"],margin:"even_left_extra",alignments:"bottom"},alignments:"bottom",top:"70%"}},smallBanner1:{styles:{clickTFText:{displayType:"nessieButton"}},logo:a("logoMCImage","left",["","button","",""]),text1:a("text1TFText",
"left",["","button","","logo"]),text2:a("text2TFText","left",["","button","","logo"],1),button:a("clickTFText","right",["","","","70%"])}}},f=function(b){b.google_template_data.adData[0].siriusFlagEnableSingleCss="true";window.renderAd(b,c)},g=["onAdData"],l=this;g[0]in l||!l.execScript||l.execScript("var "+g[0]);for(var m;g.length&&(m=g.shift());)g.length||void 0===f?l=l[m]?l[m]:l[m]={}:l[m]=f;})()
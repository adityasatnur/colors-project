(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,a,o){},201:function(e,a,o){e.exports=o(412)},206:function(e,a,o){},207:function(e,a,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},208:function(e,a,o){},212:function(e,a,o){},412:function(e,a,o){"use strict";o.r(a);var r=o(0),n=o.n(r),t=o(4),l=o.n(t),c=o(54),i=(o(206),o(29)),m=o(19),s=o(31),u=o(30),d=o(32),f=o(26),p=(o(207),o(208),o(186)),h=(o(212),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={copied:!1},o.changeCopyState=function(){o.setState({copied:!0},function(){setTimeout(function(){console.log("1"),o.setState({copied:!1}),console.log("1500")},1500)})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,o=e.background,r=this.state.copied;return n.a.createElement(p.CopyToClipboard,{text:o,onCopy:this.changeCopyState},n.a.createElement("div",{className:"ColorBox",style:{background:o}},n.a.createElement("div",{className:"copy-overlay ".concat(r&&"show"),style:{background:o}}),n.a.createElement("div",{className:"copy-msg ".concat(r&&"show")},n.a.createElement("h1",null,"COPIED!!"),n.a.createElement("p",null,o)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:"box-content"},n.a.createElement("span",null,a)),n.a.createElement("button",{className:"copy-button"},"Copy")),n.a.createElement(c.b,{to:this.props.moreUrl,onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:"see-more"},"MORE"))))}}]),a}(r.Component)),b=(o(130),o(194)),g=o(442),v=o(446),C=o(444),E=o(441),y=o(193),B=o.n(y),F=(o(270),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={format:"hex",open:!1},o.handleChange=function(e){o.setState({format:e.target.value,open:!0},function(){o.props.handleChange(o.state.format)})},o.closeSnackBar=function(){o.setState({open:!1})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("header",{className:"Navbar"},n.a.createElement("div",{className:"logo"},n.a.createElement(c.b,{to:"/"},"React Color Picker")),n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"level: ",this.props.level)),n.a.createElement("div",{className:"slider"},n.a.createElement(b.a,{defaultValue:this.props.level,min:100,max:900,step:100,onAfterChange:this.props.changeLevel})),n.a.createElement("div",{className:"select-container",style:{marginLeft:"auto",marginRight:"1rem"}},n.a.createElement(g.a,{value:this.state.format,onChange:this.handleChange},n.a.createElement(v.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(v.a,{value:"rgb"},"rgb - rgb(255,255,255)"),n.a.createElement(v.a,{value:"rgba"},"rgba - rgba(255,255,255, 1.0)"))),n.a.createElement(C.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:1e3,message:n.a.createElement("span",null,"Format Changed to ",this.state.format.toUpperCase()),onClose:this.closeSnackBar,action:n.a.createElement(E.a,{color:"inherit",onClick:this.closeSnackBar},n.a.createElement(B.a,null))}))}}]),a}(r.Component)),k=(o(279),function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={level:500,format:"hex"},o.changeLevel=function(e){o.setState({level:e})},o.changeFormat=function(e){o.setState({format:e})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.palette.colors[this.state.level].map(function(a){return n.a.createElement(h,{background:a[e.state.format],key:a.id,name:a.name,moreUrl:"/palette/".concat(e.props.palette.id,"/").concat(a.id)})});return n.a.createElement("div",{className:"Palette"},n.a.createElement(F,{level:this.state.level,handleChange:this.changeFormat,changeLevel:this.changeLevel}),n.a.createElement("div",{className:"Palette-colors"},a))}}]),a}(r.Component)),S=o(413),j=Object(S.a)({root:{background:"#fff",borderRadius:"5px",padding:"0.5rem",border:"1px solid black",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{background:"#dae1e4",height:"100px",overflow:"hidden",borderRadius:"3px"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:0,color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",marginBottom:"-3.5px"}})(function(e){var a=e.classes,o=e.paletteName,r=e.emoji,t=e.colors.map(function(e){return n.a.createElement("div",{className:a.miniColor,style:{background:e.color},key:e.name})});return n.a.createElement("div",{className:a.root,onClick:e.handleClick},n.a.createElement("div",{className:a.colors},t),n.a.createElement("div",{className:a.title},o," ",n.a.createElement("span",null,r)))}),O=function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={},o.goToPalette=function(e){o.props.history.push("/palette/".concat(e))},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return n.a.createElement("div",{className:a.root},n.a.createElement("div",{className:a.container},n.a.createElement("div",{className:a.nav},n.a.createElement("h1",null,"React Colors")),n.a.createElement("div",{className:a.palettes},this.props.palette.map(function(a){return n.a.createElement(j,Object.assign({},a,{handleClick:function(){return e.goToPalette(a.id)}}))}))))}}]),a}(r.Component),P=Object(S.a)({root:{background:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between"},palettes:{boxSizing:"border-box",width:"100%",gridTemplateColumns:"repeat(3,30%)",gridGap:"5%",display:"grid"}})(O),w=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],N=function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"hey")}}]),a}(r.Component),A=o(74),x=o.n(A),D=[50,100,200,300,400,500,600,700,800,900];function G(e){for(var a={name:e.paletteName,id:e.id,emoji:e.emoji,colors:[]},o=0,r=D;o<r.length;o++){var n=r[o];a.colors[n]=[]}var t,l,c=!0,i=!1,m=void 0;try{for(var s,u=e.colors[Symbol.iterator]();!(c=(s=u.next()).done);c=!0){var d=s.value,f=(t=d.color,l=10,x.a.scale(function(e){return[x()(e).darken(1.4).hex(),e,"#fff"]}(t)).mode("lab").colors(l)).reverse();for(var p in f)a.colors[D[p]].push({name:"".concat(d.name," ").concat(D[p]),id:d.name.toLowerCase().replace(/ /,"-"),hex:f[p],rgb:x()(f[p]).css(),rgba:x()(f[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i=!0,m=h}finally{try{c||null==u.return||u.return()}finally{if(i)throw m}}return a}var R=function(e){function a(){var e,o;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).findPalette=function(e){return w.find(function(a){return a.id===e})},o}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(P,Object.assign({palette:w},e))}}),n.a.createElement(f.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(k,{palette:G(e.findPalette(a.match.params.id))})}}),n.a.createElement(f.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(){return n.a.createElement(N,null)}}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,null,n.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,1,2]]]);
//# sourceMappingURL=main.020aa0d1.chunk.js.map
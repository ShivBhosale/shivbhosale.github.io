(window.webpackJsonpshiv=window.webpackJsonpshiv||[]).push([[0],{111:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},112:function(e,t,n){},146:function(e){e.exports=JSON.parse('{"blog_keys":{"RecursionForDummies":{"title":"Recursion for Dummies","cover_img_url":"https://pbs.twimg.com/media/DnT_X9qXgAYyTOz.jpg","subtitle":"Recursion for those who don\'t understand it","nb_url":"https://raw.githubusercontent.com/ShivBhosale/blgs/master/notebooks/RecursionForDummies.ipynb","tags":["algorithms","math"]}}}')},161:function(e,t,n){e.exports=n(334)},167:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);n(162);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),l=(n(167),n(110),n(111),n(112),n(42)),s=n(16),c=n.n(s),m=n(36),u=n(26),p=n(27),h=n(30),d=n(28),g=n(29),b=n(344),v=n(343),_=n(48),w=n.n(_);n(176),n(118);function f(e){return new Promise((function(t){return setTimeout(t,e)}))}var y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={dims:window.screen.width>600?[20,7]:[10,10],col_pegs:[],col_pregs_dest:[],interm_pegs:[],screenWidth:window.screen.availWidth,screenHeight:window.screen.availHeight>window.screen.availWidth?window.screen.availHeight/2:window.screen.availHeight,easter_count:0},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"transformTriangle",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,n,a,r,o,i,l,s,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[.02,.06,.14,.3,.7,.86,.94,.98,1],n=this.state.col_pegs,e.next=4,this.generateGrid();case 4:a=e.sent,this.setState({col_pregs_dest:a}),e.t0=c.a.keys(t);case 7:if((e.t1=e.t0()).done){e.next=18;break}for(i in r=e.t1.value,o=[],n){for(s in l=[],n[i])m=a[i][s]-n[i][s],l.push(n[i][s]+m*t[r]);o.push(l)}return this.setState({col_pegs:o}),e.next=14,this.renderTraingles();case 14:return e.next=16,f(1);case 16:e.next=7;break;case 18:this.setState({col_pegs:a});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateGrid",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,n,a,r,o,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for([30,50,40,15,20],t=[],n=0;n<=this.state.dims[0];n++){for(a=this.state.screenHeight,r=[],o=0,i=0;i<this.state.dims[1];i++)l=this.getRandomInt(5,21),r.push(o+a*(l/100)),o+=a*(l/100),a*=1-l/100;t.push(r)}return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTraingles",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,n,a,r,o,i,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in t=this.state.col_pegs,n=document.getElementById("triangulationCanvas"),(a=n.getContext("2d")).clearRect(0,0,n.width,n.height),a.strokeStyle="#559e89",a.fillStyle="#FF0000",a.beginPath(),r=0,o=this.state.screenWidth/this.state.dims[0],r=0,t){for(s in l=0,t[i])l=t[i][s],a.moveTo(r,l),a.lineTo(r,t[i][s-1]),a.stroke(),0!=i&&(a.moveTo(r,l),a.lineTo(r-o,t[i-1][s]),a.stroke(),i%2==0?(a.moveTo(r,l),a.lineTo(r-o,t[i-1][s-1]),a.stroke()):(a.moveTo(r,t[i][s-1]),a.lineTo(r-o,t[i-1][s]),a.stroke()));r+=o}case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(m.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.generateGrid();case 3:return e.t1=e.sent,e.t2=window.screen.availWidth,e.t3=window.screen.availHeight>window.screen.availWidth?window.screen.availHeight/2:window.screen.availHeight,e.t4={col_pegs:e.t1,screenWidth:e.t2,screenHeight:e.t3},e.t0.setState.call(e.t0,e.t4),e.next=10,this.renderTraingles();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,8==this.state.easter_count?r.a.createElement("center",null,r.a.createElement(b.a,{icon:"close",type:"primary",onClick:function(){e.setState({easter_count:0})}},"Close"),r.a.createElement("br",null),r.a.createElement(w.a,{placeholder:"Placeholder Text",mode:"javascript",theme:"monokai",name:"triangulation_source",style:{maxWidth:"100%"},fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:"\n/*################################################################## \n* HEY! YOU HAVE UNLOCKED THE EASTER EGG!  \n* THIS IS THE SOURCE CODE FOR THE \n* BACKGROUND ANIMATION THAT I WROTE.\n* FEEL FREE TO USE IT!\n*###################################################################\n*/\nimport React from 'react';\nimport {\n    Tabs, Icon, Carousel, Card, Row, Col, Collapse,\n    Button, Modal, TreeSelect, Divider, Tooltip\n} from 'antd';\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nexport default class Triangulation extends React.Component {\n    state = {\n        dims: window.screen.width > 600 ? [20, 7] : [10, 10],\n        col_pegs: [],\n        col_pregs_dest: [],\n        interm_pegs: [],\n        screenWidth: window.screen.availWidth,\n        screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight\n    }\n\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive\n    }\n\n    async transformTriangle() {\n        const steps = [0.02, 0.06, 0.14, 0.30, 0.70, 0.86, 0.94, 0.98, 1.0]\n        const col_pegs = this.state.col_pegs\n        const new_col_pegs = await this.generateGrid()\n\n        this.setState({\n            col_pregs_dest: new_col_pegs\n        });\n        for (var p in steps) {\n            var intermediate_pegs = [];\n            for (var obj in col_pegs) {\n                var intermediate_col = [];\n                for (var spl in col_pegs[obj]) {\n                    var delta = new_col_pegs[obj][spl] - col_pegs[obj][spl]\n                    intermediate_col.push(col_pegs[obj][spl] + (delta * steps[p]))\n                }\n                intermediate_pegs.push(intermediate_col)\n            }\n            this.setState({\n                col_pegs: intermediate_pegs\n            })\n            await this.renderTraingles()\n            await sleep(1)\n        }\n        this.setState({\n            col_pegs: new_col_pegs\n        })\n    }\n\n    async generateGrid() {\n        const splits = [30, 50, 40, 15, 20]\n        var col_pegs = [];\n        for (var j = 0; j <= this.state.dims[0]; j++) {\n            var col_height = this.state.screenHeight;\n            var temp_col = []\n            var prev = 0\n            for (var i = 0; i < this.state.dims[1]; i++) {\n                var rand_split = this.getRandomInt(5, 21);\n                temp_col.push(prev + col_height * (rand_split / 100))\n                prev += col_height * (rand_split / 100)\n                col_height = col_height * (1 - (rand_split / 100))\n            }\n            col_pegs.push(temp_col)\n        }\n        return col_pegs\n    }\n\n    async renderTraingles() {\n        var col_pegs = this.state.col_pegs;\n        var c = document.getElementById('triangulationCanvas');\n        var ctx = c.getContext('2d');\n        ctx.clearRect(0, 0, c.width, c.height);\n        ctx.strokeStyle = '#559e89';\n        ctx.fillStyle = '#FF0000';\n\n        ctx.beginPath();\n        var colStart = 0\n        var colOffset = this.state.screenWidth / this.state.dims[0];\n        colStart = 0;\n        for (var obj in col_pegs) {\n            var lower_coord = 0\n            for (var spl in col_pegs[obj]) {\n                lower_coord = col_pegs[obj][spl]\n                ctx.moveTo(colStart, lower_coord);\n                ctx.lineTo(colStart, col_pegs[obj][spl - 1]);\n                ctx.stroke();\n                if (obj != 0) {\n                    ctx.moveTo(colStart, lower_coord);\n                    ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);\n                    ctx.stroke();\n                    if (obj % 2 == 0) {\n                        ctx.moveTo(colStart, lower_coord);\n                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl - 1]);\n                        ctx.stroke();\n                    }\n                    else {\n                        ctx.moveTo(colStart, col_pegs[obj][spl - 1]);\n                        ctx.lineTo(colStart - colOffset, col_pegs[obj - 1][spl]);\n                        ctx.stroke();\n                    }\n                }\n            }\n            colStart += colOffset;\n        }\n    }\n\n    async componentDidMount() {\n        this.setState({\n            col_pegs: await this.generateGrid(),\n            screenWidth: window.screen.availWidth,\n            screenHeight: window.screen.availHeight > window.screen.availWidth ? window.screen.availHeight / 2 : window.screen.availHeight\n        })\n        await this.renderTraingles();\n    }\n\n    render() {\n        return (\n            <div\n                onClick={\n                    async () => {\n                        await this.renderTraingles();\n                        this.transformTriangle();\n                    }}>\n                <canvas id='triangulationCanvas'\n                    style={{\n                        position: 'fixed',\n                        marginTop: window.screen.availHeight > window.screen.availWidth ? '20%' : '0%',\n                        textAlign: 'none',\n                        backgroundColor: '#282C34'\n                    }}\n                    width={window.screen.availWidth}\n                    height={window.screen.availHeight}\n                ></canvas>\n            </div>\n        )\n    }\n}",readOnly:!0,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})):r.a.createElement("div",null),r.a.createElement("canvas",{id:"triangulationCanvas",onClick:Object(m.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.renderTraingles();case 2:e.transformTriangle(),n=e.state.easter_count,e.setState({easter_count:n+1}),8==e.state.easter_count&&(v.a.destroy(),v.a.success("Awesome! You found the source code!")),3==e.state.easter_count&&(v.a.destroy(),v.a.info("Hmmm something is happening!"));case 7:case"end":return t.stop()}}),t)}))),style:{position:"fixed",marginTop:window.screen.availHeight>window.screen.availWidth?"20%":"0%",textAlign:"none",backgroundColor:"#282C34"},width:window.screen.availWidth,height:window.screen.availHeight}))}}]),t}(r.a.Component),E=n(339),x=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"AboutMe",id:"AboutMe"},r.a.createElement("center",null,r.a.createElement(E.a.Paragraph,{style:{color:"white",maxWidth:"350px"}},"Good at building data intensive software. My tech inventory is a mixed bag of Python, Apache Spark, React, Golang and a couple of ML frameworks. In my free time I read, build software or do math. Check out my projects to know more about my work.")))}}]),t}(r.a.Component),k=n(338),S=n(335),O=n(341),j=n(13),C=n(340),T=n(345),L=n(82),R=n(58),A=n(25),W=n(336),H=(n(223),n(224),n(225),n(226)),I=(k.a.Meta,function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={fpath:"",fbase_path:"",ed_theme:"darkTheme",text_ed_theme:"monokai",background_theme:"black",background_text_theme:"white",background_input_theme:"#272822",background_output_theme:"#2F3129",loading:!0,notebook_json:null,placeholder_component:"Loading....",gutterVisible:!1},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.file){e.next=6;break}return(t=this.props.file.split("/")).pop(),this.setState({fpath:this.props.file,fbase_path:t.join("/")+"/"}),e.next=6,fetch(this.props.file).then((function(e){return e.text()})).then(function(){var e=Object(m.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=JSON.parse(t),n.setState({notebook_json:a,loading:!1,placeholder_component:"Notebook loaded"})}catch(r){alert("OOps! Unable to load json"),n.setState({notebook_json:{message:"Unable to parse .ipynb file"},loading:!1,placeholder_component:"Oops! We have problem opening the notebook"})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"praseSource",value:function(e){var t="";for(var n in e)t+=e[n];return t}},{key:"parseMD",value:function(e){var t="";for(var n in e){var a=new RegExp(/src="(.*?)"/),r=e[n],o=e[n].match(a);if(o&&!this.validURL(o[1]))r=e[n].replace(/src="(.*?)"/,'src="'+this.state.fbase_path+o[1]+'"');else{var i=new RegExp(/\!\[(.*?)\]\((.*?)[\s|\)]/),l=e[n].match(i);l&&!this.validURL(l[2])&&(r=r.replace(l[2],this.state.fbase_path+l[2]))}t+=r}return t}},{key:"praseOutputs",value:function(e){if(0==e.length)return"";var t="",n="",a="",o="data:image/png;base64,",i=!1,l=!1,s=!1,c=!1,m=3,u=3,p=3;for(var h in e){if("data"in e[h]){if("text/plain"in e[h].data){for(var d in e[h].data["text/plain"])t+=e[h].data["text/plain"][d];l=!0,u=e[h].data["text/plain"].length}"image/png"in e[h].data&&(o+=e[h].data["image/png"],c=!0)}if("name"in e[h]){for(var d in e[h].text)n+=e[h].text[d];i=!0,m=e[h].text.length}"ename"in e[h]&&(a+=e[h].ename+"\n"+e[h].evalue+"\n",s=!0,p=e[h].traceback.length)}return r.a.createElement("div",null,r.a.createElement("div",{style:{padding:"5px 3px",display:i?"":"none"}},r.a.createElement(T.a,{color:"#2db7f5"},"stdout"),r.a.createElement("br",null),r.a.createElement(w.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"stdout",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:m+1,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:n,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})),r.a.createElement("div",{style:{padding:"5px 3px",display:l?"":"none"}},r.a.createElement(T.a,{color:"#87d068"},"data:text/plain"),r.a.createElement("br",null),r.a.createElement(w.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"text",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:u,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:t,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})),r.a.createElement("div",{style:{display:c?"":"none"}},r.a.createElement(T.a,{color:"#87d068"},"data:image/png"),r.a.createElement("br",null),r.a.createElement("img",{src:o,style:{display:c?"":"none",width:"100%",backgroundColor:"white"}})),r.a.createElement("div",{style:{padding:"5px 3px",display:s?"":"none"}},r.a.createElement(T.a,{color:"#f50"},"error"),r.a.createElement("br",null),r.a.createElement(w.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"error",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:p,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:a,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})))}},{key:"themeChanger",value:function(e){e?this.setState({ed_theme:"darkTheme",text_ed_theme:"monokai",background_theme:"black",background_text_theme:"white",background_input_theme:"#272822",background_output_theme:"#2F3129"}):this.setState({ed_theme:"lightTheme",text_ed_theme:"kuroir",background_theme:"white",background_text_theme:"black",background_input_theme:"#E8E9E8",background_output_theme:"#F1F1F2"})}},{key:"gutterChanger",value:function(e){e?this.setState({gutterVisible:!0}):this.setState({gutterVisible:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(S.a,{spinning:this.state.loading},r.a.createElement("center",null,r.a.createElement("div",{class:this.state.ed_theme},r.a.createElement(k.a,{bodyStyle:{padding:"30px 10px",backgroundColor:this.state.background_output_theme},style:{width:"100%",maxWidth:"800px",border:"none"}},r.a.createElement(R.a,null,r.a.createElement(A.a,{span:1}),r.a.createElement(A.a,{span:22},r.a.createElement(E.a.Title,{strong:!0,style:{color:this.state.background_text_theme,wordWrap:"break-word",width:"100%"}},this.props.title),r.a.createElement(E.a.Title,{level:4,style:{color:this.state.background_text_theme,wordWrap:"break-word",width:"100%",display:this.props.subtitle?"":"none"}},this.props.subtitle)),r.a.createElement(A.a,{span:1})),r.a.createElement(R.a,null,r.a.createElement(A.a,{span:1}),r.a.createElement(A.a,{span:22},r.a.createElement("img",{alt:"No Cover Image Found",style:{display:this.props.coverImg?"":"none",width:"100%"},src:this.props.coverImg?this.props.coverImg:"http://eskipaper.com/images/simple-silver-wallpaper-1.jpg"})),r.a.createElement(A.a,{span:1})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R.a,null,r.a.createElement(A.a,{span:1}),r.a.createElement(A.a,{span:20},r.a.createElement(T.a,{color:"blue",style:{float:"left"}},this.state.loading?"Unknown":this.state.notebook_json.metadata.kernelspec.display_name),r.a.createElement(W.a,{style:{margin:"0px 5px"},defaultChecked:!0,checkedChildren:"dark theme",unCheckedChildren:"light theme",onChange:this.themeChanger.bind(this)}),r.a.createElement(W.a,{style:{margin:"0px 5px"},checkedChildren:"gutter visilbe",unCheckedChildren:"gutter hidden",onChange:this.gutterChanger.bind(this)})),r.a.createElement(A.a,{span:1})))),this.state.loading?r.a.createElement("div",null):this.state.notebook_json.cells.map((function(t){var n;return r.a.createElement(k.a,{bodyStyle:{padding:"0px 10px",backgroundColor:e.state.background_output_theme},style:{width:"100%",maxWidth:"800px",border:"none"}},r.a.createElement(R.a,{style:{backgroundColor:e.state.background_output_theme}},r.a.createElement(A.a,{span:e.state.gutterVisible?3:1},r.a.createElement("div",{style:{display:e.state.gutterVisible?"":"none"}},r.a.createElement(E.a.Text,{style:(n={color:e.state.background_text_theme,float:"left",padding:"5px"},Object(L.a)(n,"color","#56ACBC"),Object(L.a)(n,"display","code"==t.cell_type?"":"none"),n)},"I [ ",t.execution_count," ]:"))),r.a.createElement(A.a,{span:e.state.gutterVisible?20:22,style:{textAlign:"left"}},"code"==t.cell_type?r.a.createElement("div",{style:{padding:"5px 0px",borderStyle:"solid",borderWidth:"1px",backgroundColor:e.state.background_input_theme}},r.a.createElement(w.a,{readOnly:!0,placeholder:"---",mode:"python",theme:e.state.text_ed_theme,name:"code",style:{maxWidth:"700px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:0==t.source.length?1:t.source.length+1,onLoad:e.onLoad,onChange:e.onChange,fontSize:14,showGutter:!0,highlightActiveLine:!0,value:e.praseSource(t.source),setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})):r.a.createElement("div",{class:"MDImg"},r.a.createElement("div",{class:e.state.ed_theme,style:{margin:"0px 0px",padding:"10px"}},r.a.createElement(H,{style:{float:"left"},source:e.parseMD(t.source),escapeHtml:!1})))),r.a.createElement(A.a,{span:1})),"markdown"==t.cell_type?r.a.createElement("div",null):r.a.createElement(R.a,{style:{display:0==!!t.outputs.length?"none":"visible",backgroundColor:e.state.background_output_theme}},r.a.createElement(A.a,{span:e.state.gutterVisible?3:1},r.a.createElement(E.a.Text,{style:Object(L.a)({display:e.state.gutterVisible?"":"none",color:e.state.background_text_theme,float:"left",padding:"5px"},"color","#E5496A")},"O [ ",t.execution_count," ]:")),r.a.createElement(A.a,{span:e.state.gutterVisible?20:22,style:{textAlign:"left",color:"white"}},e.praseOutputs(t.outputs)),r.a.createElement(A.a,{span:1})))})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{color:"white"}},"Wanna use this notebook viewer? Star it on my ",r.a.createElement("a",{href:"https://github.com/ShivBhosale/React-Jupyter-Viewer",target:"_blank"},"Github! ",r.a.createElement(j.a,{type:"github"})," ")),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component)),M=n(146),U=k.a.Meta,B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,placement:"right",bmodal_visible:!1,bmodal_title:"Loading...",bmodal_cover:"",bmodal_subtitle:"",bmodal_subtext:"",bmodal_nb_url:"",nb_view:r.a.createElement("center",null,r.a.createElement(S.a,null))},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.onChange=function(e){n.setState({placement:e.target.value})},n.onCloseBlog=function(){window.location=window.location.origin,n.setState({bmodal_visible:!1})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"openBlogDrawer",value:function(e){this.setState({bmodal_visible:!0,bmodal_title:e.title,bmodal_cover:e.cover_img_url,bmodal_subtitle:e.subtitle,bmodal_subtext:e.subtitle,bmodal_nb_url:e.nb_url,nb_view:r.a.createElement("center",null,r.a.createElement(I,{title:e.title,subtitle:e.subtitle,coverImg:e.cover_img_url,file:e.nb_url}))})}},{key:"parseURLParams",value:function(e){var t,n,a,r,o=e.indexOf("?")+1,i=e.indexOf("#")+1||e.length+1,l=e.slice(o,i-1),s=l.replace(/\+/g," ").split("&"),c={};if(l!==e&&""!==l){for(t=0;t<s.length;t++)r=s[t].split("=",2),n=decodeURIComponent(r[0]),a=decodeURIComponent(r[1]),c.hasOwnProperty(n)||(c[n]=[]),c[n].push(2===r.length?a:null);return c}}},{key:"componentDidMount",value:function(e){var t=this.parseURLParams(window.location.href);if(t)if("id"in t)if(t.id in M.blog_keys){var n=M.blog_keys[t.id];this.setState({bmodal_visible:!0,nb_view:r.a.createElement("center",null,r.a.createElement(I,{title:n.title,subtitle:n.subtitle,coverImg:n.cover_img_url,file:n.nb_url}))})}else v.a.warning("No Blog found on the intended URL"),this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(O.a,{icon:r.a.createElement(j.a,{type:"frown",theme:"twoTone"}),title:r.a.createElement("div",{style:{color:"white"}},"Oops! No Notebook on this URL!")}))});else this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(O.a,{icon:r.a.createElement(j.a,{type:"frown",theme:"twoTone"}),title:r.a.createElement("div",{style:{color:"white"}},"Oops! No Notebook on this URL!")}))});else this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(I,{title:"Jupyter as Blogs!",subtitle:"This React component lets you use a jupyter notebook as a blog",coverImg:"https://pbs.twimg.com/media/DnT_X9qXgAYyTOz.jpg",file:"https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"inline-table"}},r.a.createElement(j.a,{style:{color:"white"},type:"book"}),r.a.createElement("a",{style:{marginLeft:"10px"},type:"primary",onClick:this.showDrawer},"blog"),r.a.createElement(C.a,{title:"My Blogs",placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible,width:"350px",bodyStyle:{padding:"5px"}},Object.keys(M.blog_keys).map((function(t){return r.a.createElement(k.a,{onClick:function(){window.history.pushState("page2","Shiv 200","/?id="+t),e.openBlogDrawer.bind(e)(M.blog_keys[t])},hoverable:!0,cover:r.a.createElement("img",{alt:"example",src:M.blog_keys[t].cover_img_url}),style:{backgroundColor:"#efefef"}},r.a.createElement(U,{title:M.blog_keys[t].title,description:M.blog_keys[t].subtitle}),r.a.createElement("br",null),M.blog_keys[t].tags?M.blog_keys[t].tags.map((function(e){return r.a.createElement(T.a,{color:"cyan"},e)})):r.a.createElement("div",null))}))),r.a.createElement(C.a,{title:"Opened Blog",placement:this.state.placement,closable:!0,onClose:this.onCloseBlog,visible:this.state.bmodal_visible,width:"100%",bodyStyle:{padding:"0px",backgroundColor:"#515151"}},r.a.createElement("center",null,this.state.nb_view)))}}]),t}(r.a.Component),N=n(342),D=n(337);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,null),r.a.createElement("center",null,r.a.createElement(E.a.Title,{style:{color:"white",paddingTop:"7%"}},"SHIV."),r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(D.a,{type:"vertical"}),r.a.createElement(j.a,{style:{color:"white"},type:"github"}),r.a.createElement("a",{style:{marginLeft:"10px"},href:"https://github.com/ShivBhosale",target:"_blank"},"github"),r.a.createElement(D.a,{type:"vertical"}),r.a.createElement(j.a,{style:{color:"white"},type:"robot"}),r.a.createElement("a",{style:{marginLeft:"10px"},href:"https://twitter.com/artstylebot",target:"_blank"},"AI bot"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(x,null))),r.a.createElement(y,null))},P=n(75),G=n(146),F=(k.a.Meta,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).onCloseBlog=function(){n.setState({bmodal_visible:!1})},n.state={visible:!1,placement:"right",bmodal_visible:!1,bmodal_title:"Loading...",bmodal_cover:"",bmodal_subtitle:"",bmodal_subtext:"",bmodal_nb_url:"",nb_view:r.a.createElement("center",null,r.a.createElement(S.a,null))},n.parseURLParams=n.parseURLParams.bind(Object(P.a)(n)),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(e){var t=this.parseURLParams(window.location.href);if(t)if("id"in t)if(t.id in G.blog_keys){var n=G.blog_keys[t.id];this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(I,{title:n.title,subtitle:n.subtitle,coverImg:n.cover_img_url,file:n.nb_url}))})}else this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(O.a,{icon:r.a.createElement(j.a,{type:"frown",theme:"twoTone"}),title:r.a.createElement("div",{style:{color:"white"}},"Oops! No Notebook on this URL!")}))});else this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(O.a,{icon:r.a.createElement(j.a,{type:"frown",theme:"twoTone"}),title:r.a.createElement("div",{style:{color:"white"}},"Oops! No Notebook on this URL!")}))});else this.setState({nb_view:r.a.createElement("center",null,r.a.createElement(I,{title:"Jupyter as Blogs!",subtitle:"This React component lets you use a jupyter notebook as a blog",coverImg:"https://pbs.twimg.com/media/DnT_X9qXgAYyTOz.jpg",file:"https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"}))})}},{key:"parseURLParams",value:function(e){var t,n,a,r,o=e.indexOf("?")+1,i=e.indexOf("#")+1||e.length+1,l=e.slice(o,i-1),s=l.replace(/\+/g," ").split("&"),c={};if(l!==e&&""!==l){for(t=0;t<s.length;t++)r=s[t].split("=",2),n=decodeURIComponent(r[0]),a=decodeURIComponent(r[1]),c.hasOwnProperty(n)||(c[n]=[]),c[n].push(2===r.length?a:null);return c}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement(b.a,{type:"primary",icon:"home",onClick:function(){window.location=window.location.origin}},"Home"),this.state.nb_view))}}]),t}(r.a.Component));var V=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:z}),r.a.createElement(l.a,{exact:!0,path:"/n",component:F}),r.a.createElement(l.a,{component:z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(74);i.a.render(r.a.createElement(J.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[161,1,2]]]);
//# sourceMappingURL=main.be130f69.chunk.js.map
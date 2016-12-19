webpackJsonp([48],{773:function(t,e,l){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=l(1),o=(a(n),l(2));a(o);t.exports={content:["article",{},["p","\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u63a8\u8350\u5148\u5b66\u4e60 ",["a",{title:null,href:"http://facebook.github.io/react/"},"React"]," \u548c ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"ES2015"],"\u3002"],["h2","\u6807\u51c6\u5f00\u53d1"],["p","\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4f60\u4f1a\u9700\u8981\u5bf9 ES2015 \u548c JSX \u4ee3\u7801\u7684\u6784\u5efa\u3001\u8c03\u8bd5\u3001\u4ee3\u7406\u3001\u6253\u5305\u90e8\u7f72\u7b49\u4e00\u7cfb\u5217\u5de5\u7a0b\u5316\u7684\u9700\u6c42\u3002\n\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u5957 ",["code","npm"]," + ",["code","webpack"]," \u7684\u5f00\u53d1\u5de5\u5177\u94fe\u6765\u8f85\u52a9\u5f00\u53d1\uff0c\u4e0b\u9762\u6211\u4eec\u7528\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u6765\u8bf4\u660e\u3002"],["h3","1. \u5b89\u88c5\u5de5\u5177"],["p","\u786e\u8ba4 ",["a",{title:null,href:"https://nodejs.org/en/"},"Node.js"]," \u5df2\u7ecf\u5347\u7ea7\u5230 v4.x \u6216\u4ee5\u4e0a\u3002"],["p","\u53ef\u4ee5\u4f7f\u7528\u8682\u8681\u63d0\u4f9b\u7684",["a",{title:null,href:"http://ant-tool.github.io/"},"\u5f00\u53d1\u5de5\u5177\u6587\u6863"]],["h3","2. \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"],["p","\u624b\u52a8\u4ece\u811a\u624b\u67b6\u5de5\u5177\u91cc\u62f7\u8d1d ",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/boilerplates/MobileDemo"},"MobileDemo"]],["h3","3. \u4f7f\u7528\u7ec4\u4ef6"],["p",["a",{title:null,href:"/docs/react/introduce#\u4f7f\u7528"},"\u89c1\u6b64\u4f7f\u7528\u793a\u4f8b"]],["h3","4. \u5f00\u53d1\u8c03\u8bd5"],["p","\u4e00\u952e\u542f\u52a8\u8c03\u8bd5\uff0c\u8bbf\u95ee ",["a",{title:null,href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000"]," \u67e5\u770b\u6548\u679c\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> start'},["code","$ npm start"]],["h3","5. \u6784\u5efa\u548c\u90e8\u7f72"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","\u5165\u53e3\u6587\u4ef6\u4f1a\u6784\u5efa\u5230 ",["code","dist"]," \u76ee\u5f55\u4e2d\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u90e8\u7f72\u5230\u4e0d\u540c\u73af\u5883\u4e2d\u8fdb\u884c\u5f15\u7528\u3002"],["blockquote",["p","\u4e0a\u8ff0\u4f8b\u5b50\u7528\u4e8e\u5e2e\u52a9\u4f60\u7406\u89e3 Ant Design React \u7684\u4f7f\u7528\u6d41\u7a0b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u5f00\u53d1\u8fc7\u7a0b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9879\u76ee\u5f00\u53d1\u6d41\u7a0b\u8fdb\u884c\u63a5\u5165\u3002"]],["h2","\u81ea\u884c\u6784\u5efa"],["p","\u5982\u679c\u60f3\u81ea\u5df1\u7ef4\u62a4\u5de5\u4f5c\u6d41\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," \u8fdb\u884c\u6784\u5efa\u548c\u8c03\u8bd5\u3002\u7406\u8bba\u4e0a\u4f60\u53ef\u4ee5\u5229\u7528 React \u751f\u6001\u5708\u4e2d\u7684 ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"\u5404\u79cd\u811a\u624b\u67b6"]," \u8fdb\u884c\u5f00\u53d1\uff0c\u5982\u679c\u9047\u5230\u95ee\u9898\u53ef\u53c2\u8003\u6211\u4eec\u6240\u4f7f\u7528\u7684 ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"webpack \u914d\u7f6e"]," \u8fdb\u884c ",["a",{title:null,href:"http://ant-tool.github.io/webpack-config.html"},"\u5b9a\u5236"],"\u3002"],["h2","\u5c0f\u751c\u70b9"],["ul",["li",["p","\u4f60\u53ef\u4ee5\u4eab\u7528 ",["code","npm"]," \u751f\u6001\u5708\u91cc\u7684\u6240\u6709\u6a21\u5757\u3002"]],["li",["p","\u6211\u4eec\u4f7f\u7528\u4e86 ",["code","babel"],"\uff0c\u8bd5\u8bd5\u7528 ",["a",{title:null,href:"http://babeljs.io/blog/2015/06/07/react-on-es6-plus"},"ES2015"]," \u7684\u5199\u6cd5\u6765\u63d0\u5347\u7f16\u7801\u7684\u6109\u60a6\u611f\u3002"]]]],meta:{order:1,title:"\u5feb\u901f\u4e0a\u624b",filename:"docs/react/getting-started.zh-CN.md"},description:["section",["p","Ant Design React \u81f4\u529b\u4e8e\u63d0\u4f9b\u7ed9\u7a0b\u5e8f\u5458",["strong","\u6109\u60a6"],"\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"]],toc:["ul",["li",["a",{href:"#\u6807\u51c6\u5f00\u53d1"},"\u6807\u51c6\u5f00\u53d1"]],["li",["a",{href:"#\u81ea\u884c\u6784\u5efa"},"\u81ea\u884c\u6784\u5efa"]],["li",["a",{href:"#\u5c0f\u751c\u70b9"},"\u5c0f\u751c\u70b9"]]]}}});
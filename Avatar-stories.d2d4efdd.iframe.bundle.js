/*! For license information please see Avatar-stories.d2d4efdd.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_eventful_ph_stark=self.webpackChunk_eventful_ph_stark||[]).push([[387],{"./src/stories/Avatar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconAvatar:function(){return IconAvatar},ImageAvatar:function(){return ImageAvatar},TextAvatar:function(){return TextAvatar},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Avatar_stories}});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),RemixIcon=__webpack_require__("./src/components/molecules/RemixIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Avatar=function Avatar(_ref){var icon=_ref.icon,image=_ref.image,text=_ref.text,size=_ref.size,sizeClasses=function getSizeClasses(){switch(size){case"tiny":return{avatar:"w-[16px] h-[16px] border-none border-white",font:"text-[6px]",icon:"text-[16px]"};case"small":return{avatar:"w-[32px] h-[32px] border-2 border-white shadow-md ",font:"text-[10px]",icon:"text-[24px]"};case"large":return{avatar:"w-[60px] h-[60px] border-4 border-white shadow-md ",font:"text-[20px]",icon:"text-[40px]"};case"xlarge":return{avatar:"w-[80px] h-[80px] border-4 border-white shadow-md ",font:"text-[24px]",icon:"text-[60px]"};default:return{avatar:"w-[40px] h-[40px] border-4 border-white shadow-md ",font:"text-[12px]",icon:"text-[28px]"}}}();return(0,jsx_runtime.jsx)("div",{className:"flex items-center justify-center overflow-hidden rounded-[100%] ".concat(sizeClasses.avatar," ").concat(text?"bg-primary-base":"bg-primary-muted"),children:function renderContent(){if(icon)return(0,jsx_runtime.jsx)("span",{className:"text-primary-base ".concat(sizeClasses.icon),children:icon});if(image)return(0,jsx_runtime.jsx)("div",{alt:"avatar",className:"w-full h-full bg-cover bg-center",style:{backgroundImage:"url(".concat(image,")")}});if(text){var truncatedText=text.length>2?text.slice(0,2):text;return(0,jsx_runtime.jsx)("span",{className:"font-bold tracking-wider text-white ".concat(sizeClasses.font),children:truncatedText})}return(0,jsx_runtime.jsx)("span",{className:"text-primary-base ".concat(sizeClasses.icon),children:(0,jsx_runtime.jsx)(RemixIcon.Z,{name:"account-circle-fill"})})}()})};Avatar.displayName="Avatar",Avatar.propTypes={icon:prop_types_default().node,image:prop_types_default().string,text:prop_types_default().string,size:prop_types_default().oneOf(["tiny","small","large","xlarge"])},Avatar.defaultProps={icon:null,image:null,text:null,size:"default"},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},image:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"",type:{name:"enum",value:[{value:'"tiny"',computed:!1},{value:'"small"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1}]},required:!1}}};var _TextAvatar$parameter,_TextAvatar$parameter2,_IconAvatar$parameter,_IconAvatar$parameter2,_ImageAvatar$paramete,_ImageAvatar$paramete2,molecules_Avatar=Avatar;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Avatar_stories={title:"Molecule/Avatar",component:molecules_Avatar},Template=function Template(args){return(0,jsx_runtime.jsx)(molecules_Avatar,_objectSpread({},args))};Template.displayName="Template";var ImageTemplate=function ImageTemplate(args){return(0,jsx_runtime.jsx)(molecules_Avatar,_objectSpread(_objectSpread({},args),{},{image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}))};ImageTemplate.displayName="ImageTemplate";var TextAvatar=Template.bind({});TextAvatar.args={size:"large",text:"MN"};var IconAvatar=Template.bind({});IconAvatar.args={size:"large",icon:(0,jsx_runtime.jsx)(RemixIcon.Z,{name:"account-circle-fill"})};var ImageAvatar=ImageTemplate.bind({});ImageAvatar.args={size:"large"},TextAvatar.parameters=_objectSpread(_objectSpread({},TextAvatar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextAvatar$parameter=TextAvatar.parameters)||void 0===_TextAvatar$parameter?void 0:_TextAvatar$parameter.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_TextAvatar$parameter2=TextAvatar.parameters)||void 0===_TextAvatar$parameter2||null===(_TextAvatar$parameter2=_TextAvatar$parameter2.docs)||void 0===_TextAvatar$parameter2?void 0:_TextAvatar$parameter2.source)})}),IconAvatar.parameters=_objectSpread(_objectSpread({},IconAvatar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IconAvatar$parameter=IconAvatar.parameters)||void 0===_IconAvatar$parameter?void 0:_IconAvatar$parameter.docs),{},{source:_objectSpread({originalSource:"args => <Avatar {...args} />"},null===(_IconAvatar$parameter2=IconAvatar.parameters)||void 0===_IconAvatar$parameter2||null===(_IconAvatar$parameter2=_IconAvatar$parameter2.docs)||void 0===_IconAvatar$parameter2?void 0:_IconAvatar$parameter2.source)})}),ImageAvatar.parameters=_objectSpread(_objectSpread({},ImageAvatar.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ImageAvatar$paramete=ImageAvatar.parameters)||void 0===_ImageAvatar$paramete?void 0:_ImageAvatar$paramete.docs),{},{source:_objectSpread({originalSource:'args => <Avatar {...args} image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />'},null===(_ImageAvatar$paramete2=ImageAvatar.parameters)||void 0===_ImageAvatar$paramete2||null===(_ImageAvatar$paramete2=_ImageAvatar$paramete2.docs)||void 0===_ImageAvatar$paramete2?void 0:_ImageAvatar$paramete2.source)})});var __namedExportsOrder=["TextAvatar","IconAvatar","ImageAvatar"]},"./src/components/molecules/RemixIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/remixicon/fonts/remixicon.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["name","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var RemixIcon=function RemixIcon(_ref){var name=_ref.name,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,otherProps=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:"ri-".concat(name," ").concat(className)},otherProps))};RemixIcon.displayName="RemixIcon",__webpack_exports__.Z=RemixIcon;try{RemixIcon.displayName="RemixIcon",RemixIcon.__docgenInfo={description:"",displayName:"RemixIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/RemixIcon.tsx#RemixIcon"]={docgenInfo:RemixIcon.__docgenInfo,name:"RemixIcon",path:"src/components/molecules/RemixIcon.tsx#RemixIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/remixicon/fonts/remixicon.css":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./node_modules/remixicon/fonts/remixicon.css"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_use_2_remixicon_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);
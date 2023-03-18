"use strict";(self.webpackChunkwin11react_docs=self.webpackChunkwin11react_docs||[]).push([[204],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4767:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s=void 0,u={unversionedId:"applications/Camera",id:"applications/Camera",title:"Camera",description:"This is a React component for a camera application that allows users to take photos and capture video through their device's camera. The component is using Redux to manage its state and the react-i18next library for internationalization.",source:"@site/docs/applications/Camera.md",sourceDirName:"applications",slug:"/applications/Camera",permalink:"/docs/applications/Camera",editUrl:"https://github.com/win11react/docs/edit/main/docs/applications/Camera.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calculator",permalink:"/docs/applications/Calculator"},next:{title:"Store",permalink:"/docs/applications/store"}},l={},p=[],m={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a React component for a camera application that allows users to take photos and capture video through their device's camera. The component is using Redux to manage its state and the react-i18next library for internationalization."),(0,o.kt)("p",null,"The useSelector hook is used to retrieve the camera state from the Redux store, which includes information such as the size and position of the camera window, as well as whether it is currently hidden or not. The useState hook is used to manage the stream state, which represents the video stream from the user's camera."),(0,o.kt)("p",null,"The capture function is called when the user clicks on the camera icon, and it uses the HTML canvas element to capture the current frame from the video stream and save it as an image."),(0,o.kt)("p",null,"The useEffect hook is used to initialize the camera when the component is mounted or when the hide state changes. If the camera is not hidden, it requests access to the user's camera using the getUserMedia method, which returns a MediaStream object that is set as the source of the camvideo element using the srcObject property. If the camera is hidden, the stop method is called on the MediaStream object to release the camera resources, and the stream state is set to null."),(0,o.kt)("p",null,"The component also includes a toolbar and other UI elements to control the camera and display the video stream."))}h.isMDXComponent=!0}}]);
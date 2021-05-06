(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{3880:function(e,r,n){"use strict";n.d(r,{E:function(){return d}});var t=n(63),i=n(5643),a=n(4651),s=n(3808),c=n(7294),l=n(4461).jU?c.useLayoutEffect:c.useEffect;function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var f=c.forwardRef(((e,r)=>{var{htmlWidth:n,htmlHeight:t,alt:i}=e,a=u(e,["htmlWidth","htmlHeight","alt"]);return c.createElement("img",o({width:n,height:t,ref:r,alt:i},a))})),d=(0,t.G)(((e,r)=>{var{fallbackSrc:n,fallback:t,src:s,align:d,fit:h,loading:g,ignoreFallback:m,crossOrigin:p}=e,b=u(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),j=null!=g||m,x=function(e){var{src:r,srcSet:n,onLoad:t,onError:i,crossOrigin:a,sizes:s,ignoreFallback:o}=e,[u,f]=(0,c.useState)("pending");(0,c.useEffect)((()=>{f(r?"loading":"pending")}),[r]);var d=(0,c.useRef)(),h=(0,c.useCallback)((()=>{if(r){g();var e=new Image;e.src=r,a&&(e.crossOrigin=a),n&&(e.srcset=n),s&&(e.sizes=s),e.onload=e=>{g(),f("loaded"),null==t||t(e)},e.onerror=e=>{g(),f("failed"),null==i||i(e)},d.current=e}}),[r,a,n,s,t,i]),g=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return l((()=>{if(!o)return"loading"===u&&h(),()=>{g()}}),[u,h,o]),o?"loaded":u}(o({},e,{ignoreFallback:j})),v=o({ref:r,objectFit:h,objectPosition:d},j?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==x?t||c.createElement(i.m$.img,o({as:f,className:"chakra-image__placeholder",src:n},v)):c.createElement(i.m$.img,o({as:f,src:s,crossOrigin:p,loading:g,className:"chakra-image"},v))}));s.Ts&&(d.displayName="Image")},7922:function(e,r,n){"use strict";n.d(r,{E:function(){return f}});var t=n(63),i=n(2326),a=n(5284),s=n(5643),c=n(4461),l=n(3808),o=n(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,t.G)(((e,r)=>{var n=(0,i.m)("Code",e),t=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}((0,a.Lr)(e),["className"]);return o.createElement(s.m$.code,u({ref:r,className:(0,c.cx)("chakra-code",e.className)},t,{__css:u({display:"inline-block"},n)}))}));l.Ts&&(f.displayName="Code")},7752:function(e,r,n){"use strict";var t=n(5893),i=n(3391),a=n(7294),s=n(3850),c=n(336),l=n(4096),o=n(5658),u=n(8496),f=n(8017),d=n(1664);r.Z=function(e){var r=e.CrumbItem,n=e.children,h=a.useState(),g=(0,i.Z)(h,2),m=g[0],p=g[1];return(0,t.jsxs)(s.W,{as:"main",my:6,maxW:"container.lg",children:[(0,t.jsx)(c.X,{as:"h1",mb:4,children:"Accessibility Demo"}),(0,t.jsxs)(l.k,{my:4,pb:4,borderBottom:"1px solid #efefef",justifyContent:"space-between",children:[(0,t.jsxs)(o.aG,{children:[(0,t.jsx)(o.gN,{children:(0,t.jsx)(o.At,{as:d.default,href:"/",children:"Home"})}),r]}),(0,t.jsx)(u.z,{onClick:function(){return p(!m)},children:"Toggle Opacity"})]}),(0,t.jsx)(f.xu,{position:"absolute",w:"100%",h:m?"100%":"0px",bg:"#fff",zIndex:"10",opacity:m?.9:0}),n]})}},667:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f}});var t=n(5893),i=n(9008),a=(n(1664),n(5658)),s=n(336),c=n(3880),l=n(7922),o=n(7752),u=(0,t.jsx)(a.gN,{isCurrentPage:!0,children:(0,t.jsx)(a.At,{href:"#",children:"Single image"})});function f(){return(0,t.jsxs)(o.Z,{CrumbItem:u,children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Single Image - accessibility Demo"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(s.X,{as:"h2",size:"lg",mb:4,children:"Single image"}),(0,t.jsx)(c.E,{src:"https://picsum.photos/800/600"}),(0,t.jsx)(l.E,{children:'<img src="https://picsum.photos/800/600" />',my:4})]})}},1034:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/single-image",function(){return n(667)}])}},function(e){e.O(0,[774,351,676,844],(function(){return r=1034,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
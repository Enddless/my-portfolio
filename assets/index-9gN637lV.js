import{j as t,r as i}from"./react-CR1DJmsT.js";import{T as u}from"./index-CtvIpgt9.js";import{L as x,u as h,S as j}from"./index-CoTTqD-c.js";import{a as f}from"./react-redux-C-esxX_w.js";import"./react-dom-BPGXo9ir.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-KkjoDBGO.js";import"./react-router-CB7Vnl-7.js";import"./@remix-run-CLdd7_31.js";import"./gsap-CQRXBOcR.js";import"./@firebase-CjYIGFut.js";import"./idb-BXWtuYvb.js";import"./firebase-h0QoVA0y.js";import"./@reduxjs-DVdFRU_h.js";import"./redux-DITMfSWq.js";import"./immer-BWU1mfoO.js";import"./reselect-BeKUwQU7.js";import"./redux-thunk-ClJT1hhx.js";import"./web-vitals-CFZQyNxb.js";import"./use-sync-external-store-CMTFWgZY.js";function _({project:e}){return t.jsxs(t.Fragment,{children:[t.jsx("picture",{className:"component__item-photo",children:t.jsx("img",{src:e.mainPhoto,srcSet:e.sources,alt:e.alt,height:300,width:680,decoding:"async"})}),t.jsx("div",{className:"component__item-description",children:t.jsx(x,{data:e})})]})}const q=()=>{const e=f(s=>s.portfolioData.components),[a,m]=i.useState(!1),[r,c]=i.useState([]),[o,p]=i.useState(!0);i.useEffect(()=>{e.length&&(c(e),m(!0))},[e]);const n=i.useRef([]);n.current=[],h({refs:n,dataLoaded:a,options:r.length,isOpen:o});const l=s=>{s&&!n.current.includes(s)&&n.current.push(s)},d=()=>{p(s=>!s),o||(n.current=[])};return t.jsx("section",{className:"section components",id:"Components",children:t.jsxs("div",{className:"components__inner  container",children:[t.jsxs("div",{className:"components__title",onClick:d,children:[t.jsx(u,{text:"Components"}),t.jsxs("div",{className:`toggle-icon ${o?"open":""}`,children:[t.jsx("div",{className:"line line1"}),t.jsx("div",{className:"line line2"})]})]}),t.jsx("div",{className:`projects__template ${o?"projects__template--disabled":""} `,children:t.jsx("p",{children:"Здесь можно посмотреть небольшие компоненты"})}),o&&t.jsx(t.Fragment,{children:!a&&!r.length?t.jsx(j,{}):t.jsx("ul",{className:"components__list component grid grid--12",children:r.map(s=>t.jsx("li",{className:"component__item",ref:l,children:t.jsx(_,{project:s})},s.id))})})]})})};export{q as default};
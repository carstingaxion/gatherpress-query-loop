var gpql;(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{GPQL:()=>w,GPQLControls:()=>c,GPQLControlsInheritedQuery:()=>m});const r=window.wp.blocks,o=window.wp.i18n,a=window.React,s=window.wp.hooks,n=window.wp.blockEditor,l=window.wp.components,{Fill:u,Slot:i}=(0,l.createSlotFill)("GPQLControls"),p=({children:e})=>(0,a.createElement)(u,null,e);p.Slot=({fillProps:e})=>(0,a.createElement)(i,{fillProps:e},(e=>e.length?e:null));const c=p,{Fill:g,Slot:y}=(0,l.createSlotFill)("GPQLControlsInheritedQuery"),d=({children:e})=>(0,a.createElement)(g,null,e);d.Slot=y;const m=d,h=({attributes:e,setAttributes:t})=>{const{query:{perPage:r,offset:s=0}={}}=e;return(0,a.createElement)(l.RangeControl,{label:(0,o.__)("Events Per Page","gatherpress-query-loop"),min:1,max:50,onChange:r=>{t({query:{...e.query,perPage:r,offset:s}})},value:r})},q=window.wp.data,_=({attributes:e,setAttributes:t})=>{const{query:{exclude_current:r}={}}=e,s=(0,q.useSelect)((e=>e("core/editor").getCurrentPost()),[]);return s?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.ToggleControl,{label:(0,o.__)("Exclude Current Event","gatherpress-query-loop"),checked:!!r,onChange:r=>{t({query:{...e.query,exclude_current:r?s.id:0}})}})):(0,a.createElement)("div",null,(0,o.__)("Loading…","gatherpress-query-loop"))},b=({attributes:e,setAttributes:t})=>{const{query:{gatherpress_events_query:r="upcoming"}={}}=e;return(0,q.useSelect)((e=>e("core/editor").getCurrentPost()),[])?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.ToggleControl,{label:(0,o.__)("Upcoming or past events.","gatherpress-query-loop"),help:(0,o.sprintf)(/* translators: %s: 'upcoming' or 'past' */ /* translators: %s: 'upcoming' or 'past' */
(0,o._x)("Currently shows %s events.","'upcoming' or 'past'","gatherpress-query-loop"),r),checked:"past"===r,onChange:r=>{t({query:{...e.query,gatherpress_events_query:r?"past":"upcoming"}})}})):(0,a.createElement)("div",null,(0,o.__)("Loading…","gatherpress-query-loop"))},v=({attributes:e,setAttributes:t})=>{const{query:{offset:r=0}={}}=e;return(0,a.createElement)(l.RangeControl,{label:(0,o.__)("Event Offset","gatherpress-query-loop"),min:0,max:50,value:r,onChange:r=>{t({query:{...e.query,offset:r}})}})},E=({attributes:e,setAttributes:t})=>{const{query:{order:r,orderBy:s}={}}=e,n="asc"===r?(0,o.__)("Ascending Order","gatherpress-query-loop"):(0,o.__)("Descending Order","gatherpress-query-loop");return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.SelectControl,{label:(0,o.__)("Post Order By","gatherpress-query-loop"),value:s,help:"meta_value"===s||"meta_value_num"===s?(0,o.__)("Meta Value and Meta Value Num require that Meta Key is set in the Meta Query section.","gatherpress-query-loop"):"",options:[{label:(0,o.__)("Date","gatherpress-query-loop"),value:"date"},{label:(0,o.__)("Last Modified Date","gatherpress-query-loop"),value:"modified"},{label:(0,o.__)("Title","gatherpress-query-loop"),value:"title"},{label:(0,o.__)("Random","gatherpress-query-loop"),value:"rand"},{label:(0,o.__)("Post ID","gatherpress-query-loop"),value:"id"}],onChange:r=>{t({query:{...e.query,orderBy:r}})}}),(0,a.createElement)(l.ToggleControl,{label:n,checked:"asc"===r,onChange:()=>{t({query:{...e.query,order:"asc"===r?"desc":"asc"}})}}))};(0,s.addFilter)("editor.BlockEdit","core/query",(e=>t=>{if(!(e=>{const{attributes:{namespace:t}}=e;return t&&t===w})(t))return(0,a.createElement)(e,{...t});const r=function(e=null){return"gatherpress_event"===(e||(0,q.select)("core/editor").getCurrentPostType())}(),{attributes:s}=t;return!1===s.query.inherit?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,o.__)("GatherPress Query Settings","gatherpress-query-loop")},(0,a.createElement)(b,{...t}),r&&(0,a.createElement)(_,{...t}),(0,a.createElement)(h,{...t}),(0,a.createElement)(v,{...t}),(0,a.createElement)(E,{...t}),(0,a.createElement)(c.Slot,{fillProps:{...t}})))):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(e,{...t}),(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(l.PanelBody,{title:(0,o.__)("GatherPress Query Settings","gatherpress-query-loop")},(0,a.createElement)(E,{...t}),(0,a.createElement)(m.Slot,{fillProps:{...t}}))))}));const w="gatherpress-query-loop",C={namespace:w,query:{perPage:3,pages:0,offset:0,postType:"gatherpress_event",gatherpress_events_query:"upcoming",order:"desc",orderBy:"date",inherit:!1}};(0,r.registerBlockVariation)("core/query",{name:w,title:(0,o.__)("GatherPress Query Loop","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries","gatherpress-query-loop"),category:"gatherpress",icon:"nametag",isActive:["namespace","scope"],attributes:{...C},allowedControls:["inherit","taxQuery"],scope:["inserter","transform"],example:{attributes:{...C},innerBlocks:[{name:"core/post-template",attributes:{},innerBlocks:[{name:"gatherpress/event-date"},{name:"core/post-title"},{name:"gatherpress/venue",attributes:{mapShow:!1}}]}]}}),(0,r.registerBlockVariation)("core/query",{name:"gatherpress-query-loop-map-date",title:(0,o.__)("Map & Event-Date","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Map & Date","gatherpress-query-loop"),icon:"nametag",isActive:["namespace","scope"],attributes:{...C},allowedControls:["inherit","taxQuery"],scope:["block"],innerBlocks:[["core/post-template",{},[["gatherpress/venue"],["gatherpress/event-date"]]],["core/query-pagination"],["core/query-no-results"]]}),(0,r.registerBlockVariation)("core/query",{name:"gatherpress-query-loop-date-title",title:(0,o.__)("Event-Date & Title","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Event-Date & Title","gatherpress-query-loop"),icon:"nametag",isActive:["namespace","scope"],attributes:{...C},allowedControls:["inherit","taxQuery"],scope:["block"],innerBlocks:[["core/post-template",{},[["gatherpress/event-date"],["core/post-title"]]],["core/query-pagination"],["core/query-no-results"]]}),(0,r.registerBlockVariation)("core/query",{name:"gatherpress-query-loop-date-address",title:(0,o.__)("Event-Date & Address","gatherpress-query-loop"),description:(0,o.__)("Create gatherpress queries with Event-Date & Address","gatherpress-query-loop"),icon:"nametag",isActive:["namespace","scope"],attributes:{...C},allowedControls:["inherit","taxQuery"],scope:["block"],innerBlocks:[["core/post-template",{},[["gatherpress/event-date"],["gatherpress/venue",{mapShow:!1}]]],["core/query-pagination"],["core/query-no-results"]]}),gpql=t})();
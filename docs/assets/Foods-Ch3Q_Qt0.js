import{r as a,M as h,j as e,a as S,l as C}from"./index-CT6ka3dK.js";function v({food:s}){const[n,o]=a.useState(1),[t,c]=a.useState(""),[l,d]=a.useState(""),[x,m]=a.useState(!1),[p,i]=a.useState(!1),{setIsChooseFoodPage:j}=a.useContext(h),u=a.useMemo(()=>n*s.price,[n]),g=async()=>{if(!t||!l||!n)return;const r={name:t,phone:l,article:s.name,quantity:n,price:u};s.quantity-n<0?alert("No hay existencias del producto"):(i(!0),S(r).then(()=>{i(!1)}).then(()=>{const f=s.id,y=s.quantity-n;C(f,y),m(!0)}).then(()=>{c(""),d(""),o(1)}).finally(()=>{i(!1)}))};return e.jsxs("article",{children:[e.jsxs("header",{children:[e.jsxs("h2",{children:[s.name," - ",s.desc]}),e.jsx("h4",{children:u}),e.jsx("label",{htmlFor:"quantity",children:" Cantidad"}),e.jsx("input",{type:"number",id:"quantity",value:n,onChange:r=>o(Number(r.target.value))})]}),e.jsx("input",{type:"text",value:t,placeholder:"Tu nombre",onChange:r=>c(r.target.value)}),e.jsx("input",{type:"text",value:l,placeholder:"Tu número de teléfono",onChange:r=>d(r.target.value)}),e.jsxs("section",{role:"group",children:[e.jsx("button",{onClick:g,children:"Enviar producto"}),e.jsx("button",{onClick:()=>j(!1),children:"Volver al menú"})]}),x&&e.jsx("span",{style:{color:"green"},children:"Pedido enviado. Recibirá un SMS una vez esté listo para recoger"}),p&&e.jsx("span",{style:{color:"green"},children:"Procesando pedido."})]})}function I(){const[s,n]=a.useState(),{menuItems:o}=a.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("h4",{className:"foodTitle",children:"Choose from our Menu"}),e.jsx("ul",{className:"ulFoods",children:o.map(t=>e.jsxs("article",{className:"liFoods",onClick:()=>n(t),children:[e.jsx("header",{children:e.jsx("img",{className:"foodImg",src:`/tienda-comida/images/${t.image}`,alt:t.name,style:{height:"100px"}})}),e.jsxs("div",{className:"foodItem",children:[e.jsx("p",{className:"foodDesc",children:t.desc}),e.jsxs("p",{className:"foodPrice",children:[t.price,"$"]})]}),e.jsx("footer",{children:(s==null?void 0:s.id)===t.id&&e.jsx(v,{food:s})})]},t.id))})]})}export{I as default};

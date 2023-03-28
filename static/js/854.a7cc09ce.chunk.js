"use strict";(self.webpackChunknode_project_front=self.webpackChunknode_project_front||[]).push([[854],{3566:function(n,e,t){t.d(e,{p:function(){return b}});var i,r,o,a,l=t(1087),p=t(168),c=t(7691),s=t(1777),d=c.ZP.div(i||(i=(0,p.Z)(["\n  display: none;\n"]))),h=c.ZP.div(r||(r=(0,p.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  color: ",";\n  padding: 16px;\n  background-color: ",";\n  position: absolute;\n  top: 245px;\n  left: 18px;\n  border-radius: 8px;\n  width: calc(100% - 36px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  :hover + "," {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    max-width: 100%;\n    margin-top: -25px;\n    border-radius: 5px;\n    padding: 4px;\n    font-family: ",";\n    color: ",";\n    background-color: #8baa36;\n\n    p {\n      width: 100%;\n      padding: 5px;\n    }\n\n    @media (min-width: 1440px) {\n      margin-top: 8px;\n    }\n  }\n"])),s.r.fonts.main,(function(n){return n.theme.colors.mainHeaderText}),(function(n){return n.theme.colors.recipeBlockBg}),d,(function(n){return n.theme.fonts.main}),(function(n){return n.theme.colors.mainHeaderText})),u=c.ZP.img(o||(o=(0,p.Z)(["\n  height: 323px;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n  transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),x=c.ZP.li(a||(a=(0,p.Z)(["\n  width: 343px;\n  height: 323px;\n  border-radius: 8px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    width: calc((100% - 32px) / 2);\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 42px) / 4);\n  }\n\n  a {\n    display: block;\n    overflow: hidden;\n    border-radius: 8px;\n\n    :hover img {\n      transform: scale(1.25);\n      filter: contrast(130%);\n    }\n  }\n"]))),m=t(4161),g=t(2911),f=t(184),b=function(n){var e=n.meal;return(0,f.jsx)(x,{children:(0,f.jsxs)(l.rU,{to:"/recipe/".concat(e.idMeal),onClick:g.k,children:[(0,f.jsx)(u,{src:e.strMealThumb?e.strMealThumb:{NoImage:m},alt:e.strMeal}),(0,f.jsx)(h,{"data-tooltip-id":e.idMeal,children:e.strMeal}),e.strMeal.length>30&&(0,f.jsx)(d,{children:(0,f.jsx)("p",{children:e.strMeal})})]})})}},1047:function(n,e,t){t.d(e,{R:function(){return p}});var i,r=t(2958),o=t(168),a=t(7691).ZP.div(i||(i=(0,o.Z)(["\n  position: relative;\n  max-width: 275px;\n  width: fit-content;\n  box-sizing: border-box;\n  height: 51px;\n  margin: 0 auto;\n  margin-top: 50px;\n  padding: 12px 26px;\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  box-shadow: ",";\n  border-radius: ",";\n\n  & nav {\n    max-width: 100%;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 324px;\n    height: 55px;\n    padding: 14px 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 436px;\n    padding: 14px 24px;\n  }\n\n  & .MuiPagination-ul {\n    margin-top: 0;\n    display: flex;\n    max-width: 100%;\n    flex-wrap: nowrap;\n    gap: 0px;\n    color: ",";\n  }\n\n  & .MuiPaginationItem-page {\n    color: ",";\n    padding: 0;\n    min-width: 27px;\n  }\n\n  & .MuiPaginationItem-icon {\n    fill: ",";\n  }\n\n  & .MuiPaginationItem-ellipsis {\n    color: ",";\n  }\n\n  & .MuiPaginationItem-page.Mui-selected {\n    background-color: ",";\n    transition: ",";\n    color: ",";\n    width: 27px;\n    height: 27px;\n\n    &:hover,\n    &:focus {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.recipeBlockBg}),(function(n){return n.theme.colors.paginationShadow}),(function(n){return n.theme.radii.pagination}),(function(n){return n.theme.colors.paginationText}),(function(n){return n.theme.colors.paginationText}),(function(n){return n.theme.colors.paginationText}),(function(n){return n.theme.colors.paginationText}),(function(n){return n.theme.colors.paginationBg}),(function(n){return n.theme.transitions.main}),(function(n){return n.theme.colors.mainDark}),(function(n){return n.theme.colors.btnHoverBg}),(function(n){return n.theme.colors.mainLight})),l=t(184),p=function(n){var e=n.count,t=n.page,i=n.handleChange;return(0,l.jsx)(a,{children:(0,l.jsx)(r.Z,{siblingCount:0,count:e,page:t,onChange:i})})}},7683:function(n,e,t){t.d(e,{U:function(){return p}});var i=t(9439),r=t(1877),o=t(2791),a=t(380),l=t(184),p=function(n){var e=n.handleOnSubmit,t=n.type,p=void 0===t?"title":t,c=n.styled,s=n.startQuery,d=(0,o.useState)(null!==s&&void 0!==s?s:""),h=(0,i.Z)(d,2),u=h[0],x=h[1];return(0,l.jsx)(a.w2,{children:(0,l.jsxs)(a.dv,{onSubmit:function(n){n.preventDefault(),e(u,p)},children:[(0,l.jsx)(a.Mj,{type:"text",value:u,onChange:function(n){x(n.target.value)}}),(0,l.jsx)(r.M,{type:"submit",text:"Search",styled:c})]})})}},380:function(n,e,t){t.d(e,{Mj:function(){return h},dv:function(){return d},w2:function(){return s}});var i,r,o,a=t(168),l=t(1737),p=t(7691),c=t(1777),s=p.ZP.div(i||(i=(0,a.Z)(["\n  width: 295px;\n  height: 52px;\n  background-color: ",";\n  border-top-left-radius: 30px;\n  border-top-right-radius: 80px;\n  border-bottom-left-radius: 80px;\n  border-bottom-right-radius: 30px;\n  margin: 0 24px 83px;\n  border: ",";\n  color: ",";\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  position: relative;\n\n  @media (min-width: 768px) {\n    width: 369px;\n    height: 59px;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0 0 195px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 510px;\n    height: 71px;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  "," {\n    width: 113px;\n    height: 52px;\n    position: absolute;\n    top: -0.5px;\n    right: -0.5px;\n  }\n\n  @media (min-width: 768px) {\n    "," {\n      width: 161px;\n      height: 59px;\n    }\n  }\n\n  @media (min-width: 1440px) {\n    "," {\n      width: 161px;\n      height: 70px;\n    }\n  }\n"])),(function(n){return n.theme.colors.mainSearchInput}),(function(n){return n.theme.borders.mainSearchInput}),c.r.colors.disabledGrey,c.r.fonts.main,l.h,l.h,l.h),d=p.ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  border-radius: 30px, 80px;\n  height: 100%;\n"]))),h=p.ZP.input(o||(o=(0,a.Z)(["\n  width: 100%;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 80px;\n  border: none;\n  background-color: transparent;\n  font-family: ",";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  padding-left: 32px;\n  color: ",";\n  @media (min-width: 768px) {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  &:hover {\n    border: none;\n    outline: none;\n  }\n  &:active {\n    border: none;\n    outline: none;\n  }\n  &:focus {\n    border: none;\n    outline: none;\n  }\n\n  &::placeholder {\n    font-family: ",";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: ",";\n  }\n"])),c.r.fonts.main,c.r.colors.disabledGrey,c.r.fonts.main,c.r.colors.disabledGrey)},9854:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var i,r,o,a,l=t(9439),p=t(5834),c=t(1192),s=t(1047),d=t(168),h=t(380),u=t(7691),x=u.ZP.div(i||(i=(0,d.Z)(["\n  padding-bottom: 100px;\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 204px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-bottom: 203px;\n  }\n\n  "," {\n    margin: 0 auto;\n  }\n\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    gap: 28px;\n    margin-top: 42px;\n\n    @media (min-width: 768px) {\n      gap: 32px;\n      margin-top: 40px;\n    }\n\n    @media (min-width: 1440px) {\n      gap: 14px;\n      row-gap: 100px;\n      margin-top: 90px;\n    }\n  }\n"])),h.w2),m=t(4848),g=t(3566),f=t(7683),b=u.ZP.div(r||(r=(0,d.Z)(["\n  "," {\n    margin-bottom: 24px;\n    @media screen and (min-width: 768px) {\n      margin-bottom: 28px;\n      margin-top: -32px;\n    }\n    @media screen and (min-width: 1440px) {\n      margin-top: -50px;\n    }\n  }\n"])),h.w2),w=t(8639),v=u.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  text-align: center;\n\n  span {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: -0.24px;\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n      font-size: 14px;\n      line-height: 18px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      font-size: 18px;\n      line-height: 24px;\n    }\n  }\n"])),(function(n){return n.theme.colors.sectionHeader})),y=(0,u.ZP)(w.ZP)(a||(a=(0,d.Z)(["\n  & .react-select__control {\n    background-color: ",";\n    border: ",";\n    outline: none;\n    box-shadow: none;\n    border-radius: ",";\n    width: 146px;\n    height: 34px;\n    font-size: 12px;\n    line-height: 18px;\n    letter-spacing: ",";\n    color: ",";\n\n    &--is-focused,\n    &--menu-is-open {\n      outline: none;\n      border: 1px solid transparent;\n    }\n\n    &:focus,\n    &:active,\n    &:hover,\n    &::selection {\n      outline: none;\n      border-color: transparent;\n      box-shadow: 0 0 0 1px transparent;\n     \n    }\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n      line-height: 21px;\n      width: 175px;\n      height: 41px;\n    }\n    & .react-select__value-container {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      & .react-select__single-value {\n        display: flex;\n        align-items: center;\n        height: 21px;\n      }\n    }\n  }\n\n  & .react-select__single-value {\n    font-family: ",";\n    font-weight: ",";\n    text-align: left;\n    font-size: 12px;\n    line-height: 18px;\n    letter-spacing: ",";\n    color: ",";\n    @media (min-width: 768px) {\n      font-size: 14px;\n      line-height: 21px;\n    }\n  }\n\n  & .react-select-contanier {\n    box-shadow: none;\n    outline: none;\n    border-color: transparent;\n\n    &:focus,\n    &:active,\n    &:hover,\n    &::selection {\n      outline: none;\n      border-color: transparent;\n      box-shadow: 0 0 0 1px transparent;\n      \n    }\n  }\n\n  & .react-select__menu-list {\n    background-color: ",";\n    border-radius: 0px 0px 6px 6px;\n    ",";\n    font-size: 12px;\n    line-height: 18px;\n    text-align: left;\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n      line-height: 21px;\n    }\n\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n\n  & .react-select__option {\n    background-color: ",";\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  & .react-select__dropdown-indicator {\n    color: ",";\n  }\n\n  & .react-select__indicator-separator {\n    display: none;\n  }\n\n  & .react-select__menu {\n    margin: 0;\n    border-radius: 0px 0px 6px 6px;\n  }\n\n  & .react-select__placeholder {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"])),(function(n){return n.theme.colors.searchSelectBg}),(function(n){return n.theme.borders.searchInput}),(function(n){return n.theme.radii.searchSelectBg}),(function(n){return n.theme.letterSpacings.content}),(function(n){return n.theme.colors.searchSelectText}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights[0]}),(function(n){return n.theme.letterSpacings.content}),(function(n){return n.theme.colors.searchSelectText}),(function(n){return n.theme.colors.searchDropDownBg}),(function(n){return n.theme.letterSpacings.content}),(function(n){return n.theme.colors.searchDropDownBg}),(function(n){return n.theme.colors.mainAccent})),j=t(2791),Z=t(184),S=function(n){var e=n.typeSubmit,t=n.startType,i=(0,j.useState)({value:t,label:t}),r=(0,l.Z)(i,2),o=r[0],a=r[1];return(0,j.useEffect)((function(){e(o)}),[o,e]),(0,Z.jsxs)(v,{children:[(0,Z.jsx)("span",{children:"Search by:"}),(0,Z.jsx)(y,{defaultValue:{value:t,label:t.charAt(0).toUpperCase()+t.slice(1)},onChange:a,options:[{value:"title",label:"Title"},{value:"ingredients",label:"Ingredients"}],isSearchable:!1,classNamePrefix:"react-select"})]})},_=function(n){var e=n.handleOnSubmit,t=n.startType,i=n.startQuery,r=(0,j.useState)(""),o=(0,l.Z)(r,2),a=o[0],p=o[1];return(0,Z.jsxs)(b,{children:[(0,Z.jsx)(f.U,{styled:"olive",type:a,handleOnSubmit:e,startQuery:i}),(0,Z.jsx)(S,{startType:t,typeSubmit:function(n){var e=n.value;p(e)}})]})},k=t(1087),P=t(9434),T=t(6174),M=t(9605),z=t(7040),C=t(2407),I=t(2911),B=t(966),D=t(5985),O=function(){var n,e,t,i,r=(0,k.lr)(),o=(0,l.Z)(r,2),a=o[0],d=o[1],h=(0,P.I0)(),u=null!==(n=a.get("query"))&&void 0!==n?n:"",f=null!==(e=a.get("type"))&&void 0!==e?e:"",b=(0,j.useState)(!1),w=(0,l.Z)(b,2),v=w[0],y=w[1],S=(0,j.useState)(1),O=(0,l.Z)(S,2),H=O[0],R=O[1],U=(0,C.n)(),A=(U.isTablet,U.isDesktop),E=(0,P.v9)(z.uB),N=(0,P.v9)(z.$u),Q=E.totalHits,q=(0,P.v9)((function(n){return n.outerRecipes.isCategoryFetching}));i=A?12:6;return(0,j.useEffect)((function(){""!==u&&""!==f&&("title"===f?(h((0,T.LY)({query:u,page:H,per_page:i})),y(!0)):(h((0,M.w_)({ingredient:u,page:H,per_page:i})),y(!0)))}),[h,f,u,H,i]),(0,Z.jsx)(x,{children:(0,Z.jsxs)(p.W,{children:[(0,Z.jsx)(c.D,{children:"Search"}),(0,Z.jsx)(_,{handleOnSubmit:function(n,e){""!==n?(d(new URLSearchParams({query:n,type:e})),R(1)):D.Am.error("You didn't enter anything to search",{position:D.Am.POSITION.TOP_CENTER})},startType:f,startQuery:u}),q?(0,Z.jsx)(B.a,{}):(0,Z.jsx)("ul",{children:null===E||void 0===E||null===(t=E.meals)||void 0===t?void 0:t.map((function(n){return(0,Z.jsx)(g.p,{meal:n},n.idMeal)}))}),Q>0&&(0,Z.jsx)(s.R,{count:Math.ceil(Q/i),page:H,handleChange:function(n,e){R(e),(0,I.k)()}}),!v&&(0,Z.jsx)(m.i,{text:"You haven't searched anything yet"}),N&&(0,Z.jsx)(m.i,{text:"Try looking for something else..."})]})})}}}]);
//# sourceMappingURL=854.a7cc09ce.chunk.js.map
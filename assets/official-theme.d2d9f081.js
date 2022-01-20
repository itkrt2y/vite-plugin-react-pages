var d=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var l=(t,a,n)=>a in t?d(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,p=(t,a)=>{for(var n in a||(a={}))i.call(a,n)&&l(t,n,a[n]);if(r)for(var n of r(a))s.call(a,n)&&l(t,n,a[n]);return t},u=(t,a)=>g(t,h(a));var m=(t,a)=>{var n={};for(var o in t)i.call(t,o)&&a.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&r)for(var o of r(t))a.indexOf(o)<0&&s.call(t,o)&&(n[o]=t[o]);return n};import{c as e}from"./clientRender.eff25831.js";var f=`import type { MenuConfig } from './Layout/renderMenu'
import type {
  LoadState,
  PagesLoaded,
} from 'vite-plugin-react-pages/clientTypes'

export interface ThemeConfig {
  /**
   * Logo at top bar
   */
  logo?: React.ReactNode
  /**
   * Logo link path
   * @defaultValue "/"
   */
  logoLink?: string | null
  /**
   * Navigation menu at top bar.
   */
  topNavs?: ReadonlyArray<MenuConfig>
  /**
   * Side menu.
   */
  sideNavs?:
    | ReadonlyArray<MenuConfig>
    | ((ctx: SideNavsContext) => ReadonlyArray<MenuConfig> | null | undefined)
  /**
   * Extra area at top bar.
   */
  TopBarExtra?: React.ComponentType
  /**
   * view to be rendered when app in 404 state
   * (url not matching any page)
   */
  Component404?: React.ComponentType
}

export interface SideNavsContext {
  readonly loadState: LoadState
  readonly loadedData: PagesLoaded
  readonly staticData: Record<string, any>
}
`;const y=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",p({},n))},N=y("FileText"),b={},x="wrapper";function c(n){var o=n,{components:t}=o,a=m(o,["components"]);return e(x,u(p(p({},b),a),{components:t,mdxType:"MDXLayout"}),e("h1",null,"Official Theme"),e("p",null,e("inlineCode",{parentName:"p"},"vite-pages-theme-doc")," is an official theme of vite-pages. It should satisfy most users' needs. This document site is powered by this theme."),e("h2",null,"How to use"),e("p",null,"You should config the theme in ",e("inlineCode",{parentName:"p"},"_theme.tsx"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`// _theme.tsx
import React from 'react'
import { createTheme } from 'vite-pages-theme-doc'

export default createTheme({
  topNavs: [
    { label: 'index', path: '/' },
    { label: 'Vite', href: 'https://github.com/vitejs/vite' },
  ],
  logo: 'Vite Pages',
  // Other configs...
})
`)),e("p",null,e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/packages/playground/use-theme-doc"},"Here is a complete example"),"."),e("h2",null,"Auto side menu generation"),e("p",null,"Doc theme can generation a side menu automatically, based on the pages information."),e("p",null,"You can control the title/sorting/grouping of the side menu, by notating these ",e("a",{parentName:"p",href:"/page-data#static-data"},"page static data"),":"),e("ul",null,e("li",{parentName:"ul"},"title"),e("li",{parentName:"ul"},"order (default order is 1)"),e("li",{parentName:"ul"},"group (explain later)"),e("li",{parentName:"ul"},"subGroup (explain later)")),e("h3",null,"How side menu generation works"),e("p",null,"For example, if your site has these pages:"),e("pre",null,e("code",{parentName:"pre"},`/
/playground
/components
/components/button
/components/card
/references/glossary
/references/apis/api1
/references/apis/api2
/references/error-codes/code1
/references/error-codes/code2
`)),e("p",null,"Firstly, the theme will divide pages into ",e("inlineCode",{parentName:"p"},"group"),"s based on the ",e("strong",{parentName:"p"},"first segment")," of page path:"),e("pre",null,e("code",{parentName:"pre"},`group /:
  /
  /playground

group components:
  /components
  /components/button
  /components/card

group references:
  /references/glossary
  /references/apis/api1
  /references/apis/api2
  /references/error-codes/code1
  /references/error-codes/code2
`)),e("p",null,"You can customize ",e("inlineCode",{parentName:"p"},"group")," in page static data. For example:"),e("pre",null,e("code",{parentName:"pre"},`Put this at top of a markdown page:
---
group: references
---
Or put this at top of a tsx/jsx page:
/**
 * @group references
 */
`)),e("p",null,"Then, the theme will divide pages into ",e("inlineCode",{parentName:"p"},"subGroup"),"s based on the ",e("strong",{parentName:"p"},"second segment")," of pages' path:"),e("pre",null,e("code",{parentName:"pre"},`group /:
  subGroup /:
    /
    /playground

group components:
  subGroup /:
    /components
    /components/button
    /components/card

group references:
  subGroup /:
    /references/glossary
  subGroup apis:
    /references/apis/api1
    /references/apis/api2
  subGroup error-codes:
    /references/error-codes/code1
    /references/error-codes/code2
`)),e("p",null,e("inlineCode",{parentName:"p"},"subGroup")," can also be customized in page static data, just like ",e("inlineCode",{parentName:"p"},"group")," does."),e("p",null,"What is the meanings of ",e("inlineCode",{parentName:"p"},"group")," and ",e("inlineCode",{parentName:"p"},"subGroup"),"?"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"group")," is a site isolation boundary: we only display ",e("strong",{parentName:"li"},"one")," ",e("inlineCode",{parentName:"li"},"group")," at a time. If a user open a page in group ",e("inlineCode",{parentName:"li"},"references"),", he/she will ",e("strong",{parentName:"li"},"only see side menu items from that group"),". He/She will not see menu items from ",e("inlineCode",{parentName:"li"},"components")," group."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"subGroup")," decide how the theme sort side menu items. All side menu items with same ",e("inlineCode",{parentName:"li"},"subGroup")," will be rendered adjacently. This document site is an example.")),e("h2",null,"Theme configs"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"createTheme")," exported by ",e("inlineCode",{parentName:"p"},"vite-pages-theme-doc")," accepts ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/blob/main/packages/theme-doc/src/index.tsx"},"these options"),":"),e(N,{text:f,syntax:"ts",mdxType:"FileText"}),e("h2",null,"Fully theme customization"),e("p",null,"If the basic theme doesn't satisfy your need, you can ",e("a",{parentName:"p",href:"/theme-customization"},"create your own theme"),"."),e("blockquote",null,e("p",{parentName:"blockquote"},"Contributions to ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/packages/theme-doc"},"the theme")," are always welcomed.")))}c.isMDXComponent=!0;var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c});const v={};v.main=C;export{v as default};
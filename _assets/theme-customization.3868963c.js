var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=Object.assign;import{c as o,L as r}from"./clientRender.02544690.js";import{M as s}from"./theme-interface.8de31c95.js";const i={};function p(p){var{components:l}=p,u=((n,o)=>{var r={};for(var s in n)e.call(n,s)&&o.indexOf(s)<0&&(r[s]=n[s]);if(null!=n&&t)for(var s of t(n))o.indexOf(s)<0&&a.call(n,s)&&(r[s]=n[s]);return r})(p,["components"]);return o("wrapper",n(n(n({},i),u),{components:l,mdxType:"MDXLayout"}),o("h1",null,"Theme customization"),o("blockquote",null,o("p",{parentName:"blockquote"},"This is an advance guide about how to make a theme by yourself. If there is already themes that meet your needs(.e.g ",o(r,{to:"/basic-theme",mdxType:"Link"},"the basic theme"),"), you don't need to read this guide now!")),o("p",null,"Vite-pages itself doesn't render any concrete DOM node. Users can customize ",o("strong",{parentName:"p"},"anything")," on the page with theme. That's why theme is so powerful."),o("p",null,"To use a theme, users should export their theme from ",o("inlineCode",{parentName:"p"},"_theme.tsx"),". It should export a React compoent. It will be rendered by vite-pages core, and get useful info from props:"),o("ul",null,o("li",{parentName:"ul"},"All pages' static data"),o("li",{parentName:"ul"},"All runtime data that is already loaded"),o("li",{parentName:"ul"},"The current loading state of the app")),o("p",null,"Here is the interface of a theme:"),o(s,{mdxType:"ThemeInterface"}),o("p",null,'You can learn more about the "data" received by the render functions in ',o(r,{to:"/page-data",mdxType:"Link"},"the page data doc"),"."),o("p",null,"This is probably ",o("a",n({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/basic/pages/_theme.tsx"}),"the simplest theme"),":"),o("pre",null,o("code",n({parentName:"pre"},{className:"language-tsx"}),"import React, { useMemo } from 'react'\nimport type { ITheme } from 'vite-plugin-react-pages'\n\nconst Theme: ITheme = ({ staticData, loadedData, loadState }) => {\n  console.log('#Theme', staticData, loadedData, loadState)\n\n  // You can generate side nav menu from staticData\n  // const sideMenuData = useMemo(() => generateSideMenu(staticData), [staticData])\n\n  if (loadState.type === '404') return <p>Page not found.</p>\n  if (loadState.type === 'load-error') return <p>Load error!</p>\n  if (loadState.type === 'loading') return <p>Loading...</p>\n\n  // loadState.type === 'loaded'\n  // Runtime page data for current page\n  const pageData = loadedData[loadState.routePath]\n  // the default export of the main module\n  const Component = pageData.main.default\n  return <Component />\n}\n\nexport default Theme\n")),o("blockquote",null,o("p",{parentName:"blockquote"},"Here is a more useful theme: ",o("a",n({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages/blob/master/packages/theme-basic/src/index.tsx"}),"vite-pages-theme-basic"),". ",o("a",n({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/use-theme/pages/_theme.tsx"}),"This fixture")," demonstrate how to use it.")),o("p",null,"You can customize every bits of UI with theme. Welcome to share your theme with a npm package!"),o("h2",null,"Suggestions"),o("h3",null,"To theme providers: make your theme easier to use"),o("p",null,"We encourage theme providers to export your theme as ",o("strong",{parentName:"p"},"a config function")," that receive user config and return a ",o("inlineCode",{parentName:"p"},"ITheme"),"."),o("p",null,"For example, the theme provider can export theme like this:"),o("pre",null,o("code",n({parentName:"pre"},{className:"language-tsx"}),"// The theme config function accepts navs config\nexport default function createTheme({ navs }: IOption = {}): ITheme {\n  return ({ loadedData, loadState }) => {\n    if (loadState.type !== 'loaded')\n      return (\n        <Layout navs={navs}>\n          <p>Loading...</p>\n        </Layout>\n      )\n    // Runtime page data for current page\n    const pageData = loadedData[loadState.routePath]\n    // the default export of the main module\n    const Component = pageData.main.default\n    return (\n      <Layout navs={navs}>\n        <Component />\n      </Layout>\n    )\n  }\n}\n")),o("p",null,"Theme consumers can use it to config their navs menu:"),o("pre",null,o("code",n({parentName:"pre"},{className:"language-tsx"}),"// Theme users can configure sideMenu in `/_theme.tsx`:\nimport createTheme from 'theme-pkg'\nexport default createTheme({\n  navs: [\n    { path: '/guides/guide1', label: 'guide1' },\n    { path: '/guides/guide2', label: 'guide1' },\n  ],\n})\n")),o("p",null,"As you can see, the theme is easier to use because ",o("strong",{parentName:"p"},"theme consumers don't need to know about the ",o("inlineCode",{parentName:"strong"},"ITheme")," API from vite-pages"),". They only need to know about ",o("inlineCode",{parentName:"p"},"createTheme")," API from the theme. Users should be talking to the theme, instead of talking directly to vite-pages framework."),o("p",null,"For this reason, we encourage theme providers to export config function like the ",o("inlineCode",{parentName:"p"},"createTheme")," above."),o("h4",null,"Releases the power of Typescript"),o("p",null,'The above example show another benefit for users: theme users can get Typescript type-check and intelliSense when they are writing theme config. This is because users are calling the theme config function, instead of "exporting some configs".'),o("h2",null,"Share your theme!"),o("p",null,"It is easy to write a theme that is sharable and configurable."),o("p",null,"If you have design and implement a theme(.e.g a blog theme, a document site theme), welcome to share your theme with a npm package, or contribute it to ",o("a",n({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages/tree/master/packages"}),"the vite-pages repo"),"!"))}p.isMDXComponent=!0;var l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p});const u={};u.main=l;export default u;

var d=Object.defineProperty,g=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(t,a,i)=>a in t?d(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,r=(t,a)=>{for(var i in a||(a={}))l.call(a,i)&&s(t,i,a[i]);if(o)for(var i of o(a))p.call(a,i)&&s(t,i,a[i]);return t},m=(t,a)=>g(t,h(a));var u=(t,a)=>{var i={};for(var n in t)l.call(t,n)&&a.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&o)for(var n of o(t))a.indexOf(n)<0&&p.call(t,n)&&(i[n]=t[n]);return i};import{c as e}from"./clientRender.eff25831.js";const y={},b="wrapper";function c(i){var n=i,{components:t}=n,a=u(n,["components"]);return e(b,m(r(r({},y),a),{components:t,mdxType:"MDXLayout"}),e("h1",null,"\u{1F4D8} vite-plugin-react-page"),e("p",null,e("a",{href:"https://www.npmjs.com/package/vite-plugin-react-pages",target:"_blank",rel:"noopener"},e("img",{src:"https://img.shields.io/npm/v/vite-plugin-react-pages.svg",alt:"npm package"}))),e("p",null,e("a",{parentName:"p",href:"https://github.com/vitejs/vite-plugin-react-pages"},"vite-plugin-react-page")," (vite-pages) is a React app framework powered by ",e("a",{parentName:"p",href:"https://github.com/vitejs/vite"},"vite"),". It is very suitable for:"),e("ul",null,e("li",{parentName:"ul"},"blog site"),e("li",{parentName:"ul"},"documentation site for your library or product"),e("li",{parentName:"ul"},"stories/demos/playgrounds for your React components or libraries (like ",e("a",{parentName:"li",href:"https://storybook.js.org/"},"storybook"),")")),e("p",null,"It provides many features that help developers ",e("strong",{parentName:"p"},"build a React App quickly"),":"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Fantastic development experience"),". Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit your code."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Filesystem based routing"),". By following a ",e("a",{parentName:"li",href:"/fs-routing"},"simple filesystem routing convention"),", It is easy to create, locate and develop pages. You don't need to worry about routing configuration. For advanced users, you can ",e("a",{parentName:"li",href:"/advanced-fs-routing"},"tell vite-pages how to find page files"),", so that vite-pages can work with any project file structure."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Support Mdx"),'. You can write content with either "normal React" or ',e("a",{parentName:"li",href:"https://mdxjs.com/"},"Mdx"),". Normal Reactjs is more flexible and composable. While Mdx is more readable and easier to edit. You can choose the proper format for your task. These formats can import each other like normal esModules."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Powerful ",e("a",{parentName:"strong",href:"/theme"},"theme customization")),". Vite-pages itself doesn't render any concrete DOM node. You can customize ",e("strong",{parentName:"li"},"anything")," on the page with theme. It is easy to write a theme that is sharable and configurable. If you use typescript, the users of your theme will get type-check and intelliSense."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Automatic code splitting based on pages"),". Visitors don't need to download the whole app, they only load page data as needed."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"Support static site generation out of the box"),". By pre-rendering your app into HTML at buildtime, users can see the content before any JS is loaded. With this feature, you can ",e("a",{parentName:"li",href:"https://github.com/vitejs/vite-plugin-react-pages/tree/main/doc-site"},"deploy your single page apps on GitHub Pages"),"(which ",e("a",{parentName:"li",href:"https://www.google.com/search?q=github+pages+single+page+apps&oq=github+pages+single+page+apps"},"doesn't natively support single page apps"),").")),e("h2",null,"Getting stated"),e("h3",null,"Play with demo projects in your browser"),e("p",null,"Thanks to ",e("a",{parentName:"p",href:"https://blog.stackblitz.com/posts/introducing-webcontainers/"},"StackBlitz WebContainers"),", you can run vite-pages projects entirely in your browser! Checkout ",e("a",{parentName:"p",href:"https://stackblitz.com/fork/github/vitejs/vite-plugin-react-pages/tree/main/packages/create-project/template-app?file=README.md&terminal=dev"},"vite-pages app demo")," or ",e("a",{parentName:"p",href:"https://stackblitz.com/fork/github/vitejs/vite-plugin-react-pages/tree/main/packages/create-project/template-lib?file=README.md&terminal=dev"},"vite-pages library demo"),"."),e("h3",null,"Initialize a demo project locally"),e("ol",null,e("li",{parentName:"ol"},"Initialize a vite-pages project (with npm 7+):",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"execute ",e("inlineCode",{parentName:"li"},"npm init vite-pages app-demo -- --template app")," to initialize an app project, or"),e("li",{parentName:"ul"},"execute ",e("inlineCode",{parentName:"li"},"npm init vite-pages library-demo -- --template lib")," to initialize a library project, or"),e("li",{parentName:"ul"},"execute ",e("inlineCode",{parentName:"li"},"npm init vite-pages library-monorepo-demo -- --template lib-monorepo")," to initialize a library project with monorepo setup."),e("li",{parentName:"ul"},"If you are using ",e("strong",{parentName:"li"},"npm 6.x"),", the extra double-dash before ",e("inlineCode",{parentName:"li"},"--template")," should be deleted. For example, ",e("inlineCode",{parentName:"li"},"npm init vite-pages app-demo --template app"),"."))),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"npm install")),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"npm run dev")," and play with the local dev envirenment."),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"npm run build"),"."),e("li",{parentName:"ol"},e("inlineCode",{parentName:"li"},"npm run ssr"),". You can ",e("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/javascript/disable"},"disable javascript in your browser"),", to verify if it can still render.")),e("h3",null,"Read the documentation"),e("p",null,"Read ",e("a",{parentName:"p",href:"https://vitejs.github.io/vite-plugin-react-pages/"},"the documentation of vite-plugin-react-pages"),"."))}c.isMDXComponent=!0;var f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c});const v={};v.main=f;export{v as default};
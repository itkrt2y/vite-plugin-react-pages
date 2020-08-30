import {c as createElement} from "./d2371593.js";
const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return /* @__PURE__ */ createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `/** The type of a theme. */
export type ITheme = React.ComponentType<IThemeProps>

export interface IThemeProps {
  staticData: IPagesStaticData
  loadedData: IPagesLoaded
  loadState: ILoadState
}

/**
 * All pages' static data.
 */
export interface IPagesStaticData {
  /**
   * For each page, its static data is indexed by keys.
   */
  [routePath: string]: Record<string, any>
}

/**
 * All runtime data that is already loaded.
 */
export interface IPagesLoaded {
  [routePath: string]: IPageLoaded
}

/**
 * The runtime data of a page is a module.
 * Normally, it has a \`default\` property,
 * which is the main component of the page.
 */
export type IPageLoaded = any

/**
 * The current loading state of the app.
 */
export type ILoadState =
  | {
      type: 'loading' | 'loaded' | '404'
      routePath: string
    }
  | {
      type: 'load-error'
      routePath: string
      error?: any
    }
`)));
}
MDXContent.isMDXComponent = true;
export {MDXContent as M};

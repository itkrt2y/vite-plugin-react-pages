/// <reference types="vite/hmr" />

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageLoader from './PageLoader'
import pages from '/@generated/pages'

let routes = getRouteFromPagesData(pages)

const App: React.FC = () => {
  return <Switch>{routes}</Switch>
}

export default App

function getRouteFromPagesData(pages: IPagesInternal) {
  return Object.keys(pages).map((path) => {
    return (
      <Route
        // avoid re-mount layout component
        // https://github.com/ReactTraining/react-router/issues/3928#issuecomment-284152397
        key="same"
        exact
        path={path}
      >
        <PageLoader pages={pages} path={path} />
      </Route>
    )
  })
}

if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.acceptDeps('/@generated/pages', (mod) => {
    routes = getRouteFromPagesData(mod.default)
  })
}

export interface IPages {
  [path: string]: {
    staticData: any
  }
}

export interface IPagesInternal {
  [path: string]: {
    _importFn: () => Promise<IPageLoaded>
    staticData: any
  }
}

export interface IPageLoaded {
  /** All exports of page module. */
  pageData: any
  /** The nearest _render.tsx from the page module */
  renderPage: IRenderPage
}

export type IRenderPage = (
  pageData: any,
  pages: IPages
) => React.ReactElement | null
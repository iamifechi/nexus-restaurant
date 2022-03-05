import React from "react"
import "./layout.css"
import Header from './Header'
import {GlobalStyle} from '../styles/GlobalStyles'

function Layout({ children }) {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout

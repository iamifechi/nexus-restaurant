import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import MovieSection from "../components/sections/MovieSection"

function SecondPage() {
  return (
    <Layout>
      <SEO title="Page two" />
      <MovieSection/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

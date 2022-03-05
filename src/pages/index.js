import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
// import HeroSection from "../components/sections/HeroSection"
import Hero from "../components/sections/Hero"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <HeroSection/> */}
      <Hero/>
    </Layout>
  )
}

export default IndexPage

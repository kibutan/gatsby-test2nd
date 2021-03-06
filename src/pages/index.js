// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home page"}>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <p>https://www.gatsbyjs.com/docs/tutorial/part-4/#task-create-some-mdx-blog-posts</p>
        <StaticImage alt="Mountain" src="..\images\mountain.jpg" />
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
//Step 1 :import react
import * as React from "react"
// import { Link } from 'gatsby'
import Layout from "../components/layout"

//Step2 : Define your component
const AboutPage =()=>{
    return(
        <main>
            <Layout pageTitle={"About Me"}>
                <p>Hi there! I'm proud creator of this site, which I built by gatsby.</p>
            </Layout>
        </main>
    )
}

export default AboutPage
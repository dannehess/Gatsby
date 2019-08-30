import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import '../pages/fonts.css';

export default ({data}) => (

  <Layout>
    <div>
    <section className={styles.section}>
      


<h1
          css={css`
            display: inline-block;
            font-family: 'Montserrat';
            font-size: 4rem;
          `}
        >
          Work
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                font-family: 'Montserrat';
                color: inherit;
              `}
            >
              <br></br>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  font-family: 'Montserrat';
                  font-size: 2rem;
                  background-color: black;
                  padding: 20px;
                  width: auto;
                  color: white;
                  display: inline-block;
                  margin-left: 40px;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                    font-family: 'Montserrat';
                  `}
                >

                </span>
              </h3>
            </Link>
          </div>
))}

  </section>
  </div>
  </Layout>

) 
        
export const query = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
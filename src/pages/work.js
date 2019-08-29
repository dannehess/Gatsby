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
                color: inherit;
              `}
            >
              <br></br>
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                  font-family: 'Montserrat';
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {node.frontmatter.date}
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
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
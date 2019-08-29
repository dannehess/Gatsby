import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({data}) => (

  <Layout>
    <div>
    <section className={styles.section}>
        <h1 style={{ marginTop: `0`, fontSize: `3rem`,  }}>Hi!</h1>
        <p>
            My name is Daniel Hessling and I am currently studying Front-End Development at Nackademin in Stockholm, Sweden.
        </p>
        </section>
        <section className={styles.section}>
        <p>
The purpose of this website is to show who I am, projects I have done by myself or being a part of, at Nackademin.
</p>
</section>

<section className={styles.section}>



<h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
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
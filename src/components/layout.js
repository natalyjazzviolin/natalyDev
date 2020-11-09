import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import DesktopMenu from "./Navigation/desktopMenu";
import Footer from "../components/Navigation/footer"
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }


  const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={'title'}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
          </Helmet>
          <DesktopMenu menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div

            style={{
              margin: '0  1.5rem 0',
              padding: '0px .5rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </React.Fragment>
      )}
    />
  )

  Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
import React from "react";
import Image from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

import "./index.scss";

const Bio = () => {
  const onClick = (githubUrl) => {
    window.open(githubUrl, "_blank");
  };

  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, bio, githubUrl } = data.site.siteMetadata;

        return (
          <div className="bioContainer">
            <Image
              className="bioImage"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              fadeIn={true}
            />
            <div className="bioContent">
              <div>
                <span className="bioLink" onClick={() => onClick(githubUrl)}>
                  @{author}
                </span>
              </div>
              <p className="bioText">{bio}</p>
            </div>
          </div>
        );
      }}
    />
  );
};
export default Bio;

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { regex: "/moon.jpeg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        bio
        githubUrl
      }
    }
  }
`;

import React from 'react'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import './index.scss'

const Bio = () => {

  const onClick = githubUrl => {
    window.open(githubUrl, '_blank')
  }

  return <StaticQuery
    query={bioQuery}
    render={
      data => {
        const { author, bio, githubUrl } = data.site.siteMetadata
        
        return (
          <div className='bio'>
              <Image
                className="bio-image"
                fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              fadeIn={true}
                style={{
                  borderRadius: `100%`,
                }}
              />
                <div className='bio-content'>
                  <span className='bio-link' onClick={()=>onClick(githubUrl)}>@{author}</span>
                  <p className='bio-quote'>{bio}</p>
                </div>
              </div>
        )
      }
    }
  />


 
}
export default Bio

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
  }`


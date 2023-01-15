import React from 'react'
import './index.scss'
import Image from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

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
                    className='bio-image'
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
    site {
      siteMetadata {
        author
        bio
        githubUrl
      }
    }
  }`


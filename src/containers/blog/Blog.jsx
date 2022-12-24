import React from 'react'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

function Blog() {
  return (
    <div className='blog section-padding' id='blog'>
      <div className="blog-heading">
        <h1 className="gradient-text"> A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article 
            imageUrl={blog01}
            date="Oct 24, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
        <div className="blog-container-groupB">
          <Article 
            imageUrl={blog02}
            date="Oct 24, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article 
            imageUrl={blog03}
            date="Oct 24, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article 
            imageUrl={blog04}
            date="Oct 24, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?" />
          <Article
            imageUrl={blog05}
            date="Oct 24, 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
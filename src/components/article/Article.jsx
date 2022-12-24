import React from 'react'
import './article.css';

function Article({imageUrl, date, title}) {
  return (
    <div className='blog-article-container'>
      <div className="blog-article-container-image">
        <img src={imageUrl} alt="blog_image" />
      </div>
      <div className="blog-article-container-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
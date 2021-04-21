import React from 'react'

const NewsItem = ({newsArticle , onClickHandler , index}) => {
    return (
        <div>
            <div className = 'card'>
                <img src = {newsArticle.urlToImage} alt = {newsArticle.title}></img>
                <a href = {newsArticle.url} target = 'blank'><h2 className='text-primary'>{newsArticle.title}</h2></a>
                <h3>Author: {newsArticle.author}</h3>
                <button 
                className = 'btn btn-block btn-primary my-2' 
                onClick = {onClickHandler}
                id={index}
                >Save</button>
            </div>
        </div>
    )
}

export default NewsItem

import React from 'react'

const SavedNewsItem = ({newsArticle , onClickHandler , index}) => {
    return (
        <div>
            <div className = 'card'>
                <img src = {newsArticle.urlToImage} alt = {newsArticle.title}></img>
                <a href = {newsArticle.url} target = 'blank'><h2 className='text-primary'>{newsArticle.title}</h2></a>
                <h3>Author: {newsArticle.author}</h3>
                <button 
                className = 'btn btn-block btn-danger my-2' 
                onClick = {onClickHandler}
                id={index}
                >Delete</button>
            </div>
        </div>
    )
}

export default SavedNewsItem

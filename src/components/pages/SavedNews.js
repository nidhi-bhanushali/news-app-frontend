import React,{ Fragment , useContext } from 'react'
import NewsContext from '../../context/news/newsContext'

const SavedNews = () => {
    const newsContext = useContext(NewsContext); 

    const { news } = newsContext; 

    return (
        <Fragment>
            {news.map(news => (
                <h3>{news.title}</h3>
            ))}
        </Fragment>
    )
}

export default SavedNews

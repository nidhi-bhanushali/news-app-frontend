import React,{ Fragment , useContext } from 'react'
import NewsContext from '../../context/news/newsContext'

const SavedNews = () => {
    const newsContext = useContext(NewsContext); 

    const { news } = newsContext; 

    return (
        <Fragment>
            {news.map((news , index) => (
                <div key = {index}>
                <h3>{news.title}</h3>
                </div>
            ))}
        </Fragment>
    )
}

export default SavedNews

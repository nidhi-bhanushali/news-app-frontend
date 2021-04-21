import React,{ useContext, useEffect } from 'react'
import NewsContext from '../../context/news/newsContext'
import Spinner from '../layout/Spinner'
import SavedNewsItem from '../pages/SavedNewsItem'

const SavedNews = () => {
    const newsContext = useContext(NewsContext); 

    const { news , getNews, loading } = newsContext;
    
    useEffect(() => {
        getNews()
        // eslint-disable-next-line
    }, []);

    return (
        <div className = 'grid-3'>
            {news !== null && !loading ? 
            (news.map((news , index) => (
                <div key = {index}>
                <SavedNewsItem newsArticle = {news}/>
                </div>
            ))) : 
            <Spinner/>
            }
        </div>
    )
}

export default SavedNews

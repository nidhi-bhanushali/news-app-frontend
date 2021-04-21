import React , { useState , useEffect } from 'react';
import NewsItem from './NewsItem'

const News = () => {
    const [newsArticles , setNewsArticles] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        const getNewsArticles = () => {
            try {
                setLoading(true)
                fetch('https://server-backend-news.herokuapp.com/')
                .then(res => res.json()).then(({articles}) => {
                    setNewsArticles(articles)
                    setLoading(false)
                    console.log(articles)
                })
            } catch (error) {
                console.error(error.message);
            }
        }

        getNewsArticles()
    }, [])

    const onClickHandler = () => {
        console.log('Button clicked');
    }

    return (
        <div className = 'grid-3'>
            {
                (newsArticles && loading) ? <h3>Loading...</h3>:(
                    newsArticles.map((newsArticle , index) => (
                        <div key = {index}>
                        <NewsItem 
                        newsArticle = {newsArticle} 
                        onClickHandler = {onClickHandler}/>
                        </div>
                    ))
                ) 
            }
        </div>
    )
}

export default News

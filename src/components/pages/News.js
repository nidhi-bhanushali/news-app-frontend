import React , { useState , useEffect, useContext } from 'react';
import NewsItem from './NewsItem'
import NewsContext from '../../context/news/newsContext'


const News = () => {
    const [newsArticles , setNewsArticles] = useState([])
    const [loading , setLoading] = useState(false)

    const newsContext = useContext(NewsContext)
    const { addNews } = newsContext

    useEffect(() => {
        const getNewsArticles = () => {
            try {
                setLoading(true)
                fetch('https://server-backend-news.herokuapp.com/')
                .then(res => res.json()).then(({articles}) => {
                    setNewsArticles(articles)
                    setLoading(false)
                    // console.log(articles)
                })
            } catch (error) {
                console.error(error.message);
            }
        }

        getNewsArticles()
    }, [])

    const onClickHandler = (e) => {
        e.preventDefault()
        // console.log(e.target.id)
        let newsArticlesEl = newsArticles.filter((article , index) => index === Number(e.target.id))
        newsArticlesEl = newsArticlesEl[0]
        // console.log(newsArticlesEl)
        addNews(newsArticlesEl)
        // console.log('Button clicked');
    }

    return (
        <div className = 'grid-3'>
            {
                (newsArticles && loading) ? <h3>Loading...</h3>:(
                    newsArticles.map((newsArticle , index) => (
                        <div key = {index}>
                        <NewsItem 
                        newsArticle = {newsArticle} 
                        onClickHandler = {onClickHandler}
                        index = {index}/>
                        </div>
                    ))
                ) 
            }
        </div>
    )
}

export default News

import React , { useState , useEffect } from 'react';
import NewsItem from './NewsItem';


const Home = () => {
    const [newsArticles , setNewsArticles] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        const getNewsArticles = () => {
            try {
                setLoading(true)
                fetch('https://api.jsonbin.io/b/607ee47cf099765deef85e5d')
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
                        <NewsItem 
                        newsArticle = {newsArticle} 
                        key = {index}
                        onClickHandler = {onClickHandler}/>
                    ))
                ) 
            }
        </div>
    )
}

export default Home

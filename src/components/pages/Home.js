import React , { useState , useEffect } from 'react';


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
    return (
        <div>
            {
                (newsArticles && loading) ? <h3>Loading...</h3>:(
                    newsArticles.map((newsArticle , index) => (
                        <div key = {index} className = 'card'>
                        <img src = {newsArticle.urlToImage} alt = {newsArticle.title}></img>
                        <a href = {newsArticle.url} target = 'blank'><h2 className='text-primary'>{newsArticle.title}</h2></a>
                        <h3>Author: {newsArticle.author}</h3>
                        </div>
                    ))
                ) 
            }
        </div>
    )
}

export default Home

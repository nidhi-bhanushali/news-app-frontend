import React , { useReducer } from 'react';
import NewsContext from './newsContext';
import newsReducer from './newsReducer';
import axios from 'axios';
import {
    ADD_NEWS,
    DELETE_NEWS,
    NEWS_ERROR,
    FILTER_NEWS,
    CLEAR_FILTER,
    GET_NEWS,
} from '../types';

const NewsState = props => {
    const initialState = {
        news : [],
        filtered : null,
        error:null
    };

    const [state, dispatch] = useReducer(newsReducer , initialState);

    // Get news
    const getNews = async () => {
        try {
            const res = await axios.get('/api/news');

            dispatch({ type: GET_NEWS , payload: res.data });
        } catch (err) {
            dispatch({ type: NEWS_ERROR, payload: err.message })
        }
    }

    // Add news
    const addNews = async news => {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/news' , news, config);

            dispatch({ type: ADD_NEWS , payload: res.data });
        } catch (err) {
            dispatch({ type: NEWS_ERROR, payload: err.message })
        }
    };

    // Filter news
    const filterNews = text => {
        dispatch({ type: FILTER_NEWS , payload: text });
    };

    // Clear Filter
    const clearFilter = news => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <NewsContext.Provider  
        value= {{
            news: state.news,
            filtered: state.filtered,
            error:state.error,
            addNews ,
            filterNews,
            clearFilter,
            getNews  
        }}>
            { props.children }
        </NewsContext.Provider>
    )
};

export default NewsState;


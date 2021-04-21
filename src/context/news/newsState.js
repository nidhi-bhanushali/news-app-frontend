import React , { useReducer } from 'react';
import NewsContext from './newsContext';
import newsReducer from './newsReducer';
import axios from 'axios';
import {
    ADD_NEWS,
    DELETE_NEWS,
    NEWS_ERROR,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_NEWS,
    CLEAR_FILTER
} from '../types';

const NewsState = props => {
    const initialState = {
        news : [],
        current: null,
        filtered : null,
        error:null
    };

    const [state, dispatch] = useReducer(newsReducer , initialState);

    // Add news
    const addNews = async news => {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = axios.post('/api/news' , news, config);

            dispatch({ type: ADD_NEWS , payload: res.data });
        } catch (err) {
            dispatch({ type: NEWS_ERROR, payload: err.message })
        }
    };

    // Delete news
    const deleteNews = id => {
        dispatch({ type: DELETE_NEWS , payload: id });
    };

    // Set Current news
    const setCurrent = news => {
        dispatch({ type: SET_CURRENT , payload: news });
    };

    // Clear Current news
    const clearCurrent = news => {
        dispatch({ type: CLEAR_CURRENT });
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
            current: state.current,
            filtered: state.filtered,
            error:state.error,
            addNews ,
            deleteNews,
            setCurrent,
            clearCurrent,
            filterNews,
            clearFilter  
        }}>
            { props.children }
        </NewsContext.Provider>
    )
};

export default NewsState;


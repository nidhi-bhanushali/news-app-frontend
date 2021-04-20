import React , { useReducer } from 'react';
import {v4 as uuid} from 'uuid';
import NewsContext from './newsContext';
import newsReducer from './newsReducer';
import {
    ADD_NEWS,
    DELETE_NEWS,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_NEWS,
    CLEAR_FILTER
} from '../types';

const NewsState = props => {
    const initialState = {
        news : [
           { 
            id: 1,
            author:'xyz',
            title: 'something related to tech',
        },
        { 
            id: 2,
            name:'abc',
            title: 'technology',
            
        },
        { 
            id: 3,
            author:'mno',
            title: 'bjbkjhnlknlk'
        }
    ],
    current: null,
    filtered : null
    };

    const [state, dispatch] = useReducer(newsReducer , initialState);

    // Add news
    const addNews = news => {
        news.id = uuid();
        dispatch({ type: ADD_NEWS , payload: news });
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


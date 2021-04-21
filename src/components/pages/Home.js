import React , {useContext , useEffect} from 'react';
import News from './News';
// import NewsItem from './NewsItem';
import AuthContext from '../../context/auth/authContext'


const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();

        // eslint-disable-next-line
    },[])

    return (
        <>
        <News/>
        </>
    )
}

export default Home

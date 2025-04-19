import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';



const CategoryNews = () => {
    const {data:news} =  useLoaderData()
    console.log(news)
    
    return (
        <div>
            category
            {news.length}
            <div>
                {news.map((singleNews) =><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;
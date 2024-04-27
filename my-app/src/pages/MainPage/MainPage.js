import React from 'react';
import Description from "../../components/Description/Description";
import './mainPage.module.css'

const MainPage = () => {
    const mainPageProps = {
        title: "Title",
        description: "Description"
    }
    return (
        <div className="main_page">
            <h1>Main Page</h1>
            <Description {...mainPageProps}/>
        </div>
    );
};

export default MainPage;
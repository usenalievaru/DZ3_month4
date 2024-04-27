import React from 'react';
import Description from "../../components/Description/Description";
import classes from './aboutPage.module.css'

const AboutPage = () => {
    const aboutPageProps = {
        title: "Title 2",
        description: "Description 2"
    };
    return (
        <div>
            <h1 className={classes.aboutPage}>About Page</h1>
            <Description {...aboutPageProps}/>
        </div>
    );
};

export default AboutPage;
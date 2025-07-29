import html from '../../assets/htmlImage.png';
import css from '../../assets/cssImage.png';
import js from '../../assets/jsImage.png';
import react from '../../assets/reactImage.png';
import redux from '../../assets/reduxImage.png';
import bootstrap from '../../assets/bootstrapImage.png';
import tailwind from '../../assets/tailwindImage.png';
import jwt from '../../assets/jwtImage.png';
import MongoDB from '../../assets/MongoDBImage.png';
import nodejs from '../../assets/nodejs.png';
import express from '../../assets/expressImage.png';
import vercel from '../../assets/vercel.png';
import render from '../../assets/render.png';
import github from '../../assets/githubImage.png';
import java from '../../assets/javaImage.png';
import python from '../../assets/pythonImage.png';
import postman from '../../assets/postmanImage.png';
import netlify from '../../assets/netlifyImage.png';
import git from '../../assets/gitImage.png';
export const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { image:html, name: 'HTML' },
            { image:css , name: 'CSS' },
            { image: js, name: 'JavaScript' },
            { image: react, name: 'React.js' },
            { image: redux, name: 'Redux' },
            { image: bootstrap, name: 'Bootstrap' },
            { image: tailwind, name: 'Tailwind CSS' },
        ]
    },

    {
        category: 'Backend',
        skills: [
            { image: nodejs, name: 'Node.js' },
            { image: express, name: 'Express.js' },
            { image: MongoDB, name: 'MongoDB' },
            { image: jwt, name: 'JWT Authentication' },
        ]
    },

    {
        category: 'Languages',
        skills: [
            { image: java, name: 'Java' },
            { image: js, name: 'JavaScript' },
            { image: python, name: 'Python' },
        ]
    },

    {
        category: 'Tools',
        skills: [
            { image: git, name: 'Git' },
            { image: github, name: 'GitHub' },
            { image: postman, name: 'Postman' },
            { image: vercel, name: 'Vercel' },
            { image: render, name: 'Render' },
            { image: netlify, name: 'netlify' },
        ]
    },

]
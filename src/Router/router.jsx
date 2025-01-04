import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import AboutMe from '../Pages/AboutMe/AboutMe';
import Skill from '../Pages/Skill/Skill';
import MyProjects from '../Pages/MyProjects/MyProjects';
import ContactMe from '../Pages/ContactMe/ContactMe';
import Details from '../Pages/ProjectDetails/Details';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about-me',
                element:<AboutMe/>
            },
            {
                path:'/skills',
                element:<Skill/>
            },
            {
                path:'/projects',
                element:<MyProjects/>
            },
            ,
            {
                path:'/project-details/:id',
                element:<Details/>
            },
            {
                path:'/contact-me',
                element:<ContactMe/>
            },
        ]
    }
])

export default router;
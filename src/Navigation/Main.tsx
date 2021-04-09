import React from 'react'
import { Route, Redirect } from 'react-router'
import Blog from '../Pages/Blog'

// components
import Home from '../Pages/Home'
import Jobs from '../Pages/Jobs'
import Skills from '../Pages/Skills'
import Experiences from '../Pages/Experineces'

export default function Main() {
    return (
        <>  
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/skills" component={Skills} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/blog" component={Blog} />
        </>
    )
}

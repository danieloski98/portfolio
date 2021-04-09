import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Sidebar from '../Components/GlobalComponents/Sidebar'
import MainComponent from '../Components/MainComponent'
import Main from './Main'

export default function Index() {
    return (
        <div className="w-full h-screen flex">
            <div className="w-64 h-full shadow-xl z-10">
                <Sidebar />
            </div>
            <div className="flex-1 bg-gray-100 overflow-y-auto overflow-x-hidden">
                <MainComponent />
            </div>
        </div>
    )
}

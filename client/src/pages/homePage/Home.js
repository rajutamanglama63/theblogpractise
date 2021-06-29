import React from 'react'
import HomeContent from '../../components/homeContent/HomeContent'
import './home.css'

const Home = () => {
    return (
        <div>
            <div className="home">
                <HomeContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Home

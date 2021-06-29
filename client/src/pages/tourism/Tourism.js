import React from 'react'
import TourismContent from '../../components/tourismContent/TourismContent'
import './tourism.css'

const Tourism = () => {
    return (
        <div>
            <div className="home">
                <TourismContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Tourism

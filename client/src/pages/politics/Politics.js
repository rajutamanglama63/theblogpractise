import React from 'react'
import PoliticsContent from '../../components/politicsContent/PoliticsContent'
import './politics.css'

const Politics = () => {
    return (
        <div>
            <div className="home">
                <PoliticsContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Politics

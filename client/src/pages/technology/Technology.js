import React from 'react'
import TechnologyContent from '../../components/technologyContent/TechnologyContent'
import './technology.css'

const Technology = () => {
    return (
        <div>
            <div className="home">
                <TechnologyContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Technology

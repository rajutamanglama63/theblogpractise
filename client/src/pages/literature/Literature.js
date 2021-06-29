import React from 'react'
import LiteratureContent from '../../components/literatureContent/LiteratureContent'
import './literature.css'

const Literature = () => {
    return (
        <div>
            <div className="home">
                <LiteratureContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Literature

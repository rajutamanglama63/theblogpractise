import React from 'react'
import EducationContent from '../../components/educationContent/EducationContent'
import './education.css'

const Education = () => {
    return (
        <div>
            <div className="home">
                <EducationContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Education
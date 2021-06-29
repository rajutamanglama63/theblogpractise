import React from 'react'
import DetailContent from '../../components/detailContent/DetailContent'
import './detail.css'

const Detail = () => {
    return (
        <div>
            <div className="single_page">
                <DetailContent />
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default Detail
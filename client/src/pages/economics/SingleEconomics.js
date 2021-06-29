import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getEcoBlogsDetail} from '../../redux/actions/economics'
import SingleEconomicContent from '../../components/economicsContent/SingleEconomicContent'
import './SingleEconomics.css'

const SingleEconomics = () => {
    const dispatch = useDispatch();
    const economics = useSelector(state => state.economic);

    useEffect(() => {
        dispatch(getEcoBlogsDetail(economics._id));
    }, [dispatch]);
    return (
        <div>
            <div className="single_page">
                {economics.map((eco) => (
                    <SingleEconomicContent key={eco._id} eco={eco} />
                ))}
                <div className="footer">
                    <h2>The blog</h2>
                    <p style={{fontSize: "small"}}>created by Raju.</p>
                    <span style={{fontSize: "small"}}>All rights reserved.2021</span>
                </div>
            </div>
        </div>
    )
}

export default SingleEconomics

import React, {useEffect} from 'react'
import EconomicsContent from '../../components/economicsContent/EconomicsContent'
import './economics.css'
import {getEcoBlogs} from '../../redux/actions/economics'
import {useSelector, useDispatch} from 'react-redux'

const Economics = () => {
    const dispatch = useDispatch();
    const economics = useSelector(state => state.economic);

    useEffect(() => {
        dispatch(getEcoBlogs());
    }, [dispatch]);

    return (
        <div>
            <div className="home">
                {economics.map((economic) => (
                    <EconomicsContent key={economic._id} economic={economic} />
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

export default Economics

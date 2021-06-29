import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArtsBlogs} from '../../redux/actions/artsAction'
import ArtsContent from '../../components/artsContent/ArtsContent'
import './arts.css'

const Arts = () => {
    const dispatch = useDispatch();
    const arts = useSelector(state => state.art);
    console.log(arts);

    useEffect(() => {
        dispatch(getArtsBlogs());
    }, [dispatch]);

    return (
        <div>
            <div className="home">
                {arts.map((art) => (
                    <ArtsContent key={art._id} art={art} />
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

export default Arts

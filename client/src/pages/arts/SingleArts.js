import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getArtsBlogsDetail} from '../../redux/actions/artsAction'
import SingleArtContent from '../../components/artsContent/SingleArtContent'
import './singleArts.css'

const SingleArts = () => {
    const dispatch = useDispatch();
    const arts = useSelector(state => state.art);

    useEffect(() => {
        dispatch(getArtsBlogsDetail(arts._id));
    }, [dispatch]);
    return (
        <div>
            <div className="single_page">
                {arts.map((art) => (
                    <SingleArtContent key={art._id} art={art} />
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

export default SingleArts

import React from 'react'
import style from './Cards.module.css';

export default function Cards(props) {
    //console.log(props.popularData);
    return (
        <div className={style.Parent}>
            <div className="container">
                <div className="row">
                    {props.Data.slice(0, 9).map((Currency) => (
                        <div className={style.Item}>
                            <h1>{Currency}</h1>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}





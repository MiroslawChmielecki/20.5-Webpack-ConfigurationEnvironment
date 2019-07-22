import React from 'react';
import style from './Title.css';


const Title = props => 
    <div className={style.TitleItem}>
        <h1>{props.title}</h1> 
        <p>Number: {props.taskNumber}</p>
    </div>

export default Title;
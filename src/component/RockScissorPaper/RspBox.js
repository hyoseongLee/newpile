import React from 'react'

const RspBox = (props) => {
    let result;
    if (props.title === 'computer' &&
        props.result !== 'tie' &&
        props.result !== ''
    ) {
        result = props.result === 'win' ? 'win' : 'lose'
    } else {
        result = props.result;
    } if (props.title === "computer") {
        console.log("computer", result);
    }

    return (
        <div className={`rsp-box ${result}`}>
            <h1>{props.title}</h1>
            <img className='rsp-img' src={props.item && props.item.img} alt='게임 시작하기' />
            <h2> {result} </h2>
        </div>
    )
}

export default RspBox

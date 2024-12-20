import React, { useState } from 'react';
import '../CssComponent/RockScissorPaper.css';
import RspBox from '../component/RockScissorPaper/RspBox';
import {useNavigate} from 'react-router-dom';

const choice = {
    rock: {
        name: 'rock',
        img: 'https://i.namu.wiki/i/glrJeSXEa_DZMvOEb8bkp0ILulY0Gdxes7AjSFir9vx0mlKIbqasZOdyhNwc1X1iDgJgkHh-Bm5QizlD6Hwcfw.webp',
    },
    scissor: {
        name: 'scissor',
        img: 'https://mblogthumb-phinf.pstatic.net/MjAyMzEwMjlfMTY3/MDAxNjk4NTg1MTQzNjA1.N1jDapcSO307CLOcLyMmL4Er7v7-xOdy7I5XW6C5wbkg.-1xU1_Cd1yk_R9Y7f_LRVjzkiFKjlAGA6uUNX1yWu2og.PNG.saontsdkss119/image.png?type=w800',
    },
    paper: {
        name: 'paper',
        img: 'https://cdn2.colley.kr/item_406825_1_2_title_2.jpeg',
    },
}

const RockScissorPaper = () => {
    const [userSelect, setUserSelect] = useState(null)
    const [computerSelect, setComputerSelect] = useState(null)
    const [result, setResult] = useState("")
    const navigate = useNavigate()

    const goToHome = () => {
        navigate ('/')
    }

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice()
        setComputerSelect(computerChoice)
        setResult(judgment(choice[userChoice], computerChoice))
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice)
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
    }

    const judgment = (user, computer) => {
        if (user.name === computer.name) {
            return ("tie")
        }
        else if (user.name === 'rock') return computer.name === 'scissor' ? 'win' : 'lose'
        else if (user.name === 'scissor') return computer.name === 'paper' ? 'win' : 'lose'
        else if (user.name === 'paper') return computer.name === 'rock' ? 'win' : 'lose'
    }

    return (
        <div>
            <div className='rsp-header' onClick={goToHome}> 가위 바위 보 게임</div>
            <div className='rsp-main'>
                <RspBox title="You" item={userSelect} result={result} />
                <RspBox title="Computer" item={computerSelect} result={result} />
            </div>
            <div className='rsp-main'>
                <button onClick={() => play('rock')}>가위</button>
                <button onClick={() => play('scissor')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    )
};

// 가위 바위 보 박스 만들기 ( 헤더, 박스 두개,이미지 )
// 버튼을 만들기 버튼을 누르면 이미지가 바뀜
// 유저 만들고 컴퓨터 choice 만들기 컴퓨터는 랜덤값
// 이기면 승 지면 패 result값 이용하기기
// 이기거나 무승부거나 지면 색 다르게 하기 classname에 함수넣기기

export default RockScissorPaper;
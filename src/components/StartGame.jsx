import styled from 'styled-components';

const StartGame = ()=>{
    return(
        <>
        <Container>
            <div><img src="./images/dices.png" alt="dices" /></div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button>Play Now</Button>
            </div>
        </Container>
        </>
    )
}
export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`
const Button = styled.button`
    cursor: pointer;
    min-width: 220px;
    padding: 10px 18px;
    color: white;
    background-color: #000000;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;
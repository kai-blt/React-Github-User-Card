import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: space-between;
    border-radius: 10px;
    background-color: #006666;
    box-shadow: 10px 10px 40px #000;
    margin: 10% 0;
    padding: 4% 0;

    img {
        width: 100%;
        margin: 4% 0;
    }

    h2 {
        font-size: 4rem;
        font-weight: 700;
    }

`;


const Card = (props) => {
    const { id, location, login, html_url, avatar_url, followers, following} = props;
    return (
        <>
        <CardContainer key={id}>
            <div>
                <h2>{login.toUpperCase()}</h2>
                <a href={html_url}>{html_url}</a>
                <h3>{location}</h3>
            </div>
            <div>
                <img src={avatar_url} alt={login}/>
            </div>            
            <div>
                Followers: {followers} - Following: {following}
            </div>
        </CardContainer>
        </>
    )
}

export default Card;


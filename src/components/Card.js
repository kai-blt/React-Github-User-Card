import React from 'react'
import styled from 'styled-components'
import FollowersCard from './FollowersCard';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-content: space-between;
    border-radius: 10px;
    background-color: #006666;
    box-shadow: 10px 10px 40px #000;
    width: 40%;
    margin: 10% auto;
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

const FollowerContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    padding: 4%;
    div {
        width: 50%;
    }
    img {
        border-radius: 100%;
        width: 10%;
    }

`;


const Card = (props) => {
    const { id, location, login, html_url, avatar_url, followers, following, followersData } = props;
    
    console.log('HERES THE FOLLOWERS DATA', followersData)
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
            <FollowerContainer>              
                {
                followersData 
                    ? followersData.map(follower => {
                        return <FollowersCard login={follower.login} avatar_url={follower.avatar_url}/>
                    })
                    : null 
                }                
            </FollowerContainer>
        </CardContainer>
        </>
    )
}

export default Card;


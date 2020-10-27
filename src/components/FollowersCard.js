import React from 'react'
import styled from 'styled-components'

function FollowersCard(props) {
    const { login, avatar_url } = props;
    console.log('HERES THE LOGIN', login)
    return(
        <div>
            <h3>{login}</h3>
            <img src={avatar_url} alt={login} />
        </div>
    )
}

export default FollowersCard;
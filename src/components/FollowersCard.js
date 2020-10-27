import React from 'react'


function FollowersCard(props) {
    const { login, avatar_url, html_url } = props;
    console.log('HERES THE LOGIN', login)
    return(
        <div>
            <h3><a href={html_url} target="_blank">{login}</a></h3>
            <a href={html_url} target="_blank"><img src={avatar_url} alt={login} /></a>
        </div>
    )
}

export default FollowersCard;
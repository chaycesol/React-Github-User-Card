import React from 'react'
import styled from 'styled-components'

const UserCard = (props) => {
  const {avatar_url, name, login, location, html_url, followers, following, bio} = props.data

  return (
    <StyledCard>
      <StyledImg src={avatar_url} alt="GH-Profile-Pic" />
      <div>
        <h2>{name}</h2>
        <h3>{login}</h3>
        {location && <p>Location: {location}</p>}
        <p>Profile: <a href={html_url}>{html_url}</a></p>
        {followers && <p>Followers: {followers}</p>}
        {following &&<p>Following: {following}</p>}
        {bio && <p>Bio: {bio}</p>}
      </div>
    </StyledCard>
  )
}

export default UserCard

const StyledImg = styled.img`
    width: 50%;
    height: auto;
    border-radius: 100%;
`
const StyledCard = styled.div`

`

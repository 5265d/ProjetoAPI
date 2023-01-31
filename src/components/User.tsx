import { UserProps } from "../types/user"

import { MdLocationPin } from 'react-icons/md'

import { Link } from 'react-router-dom';

import classes from './User.module.css';

const User = ({
    login, 
    avatar_url, 
    followers, 
    following, 
    location,
    bio,
    html_url,
    name,
    company,
    public_repos
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <div className={classes.boll}></div>
      <h2>{login}</h2>
      <p>{name}</p>
      {location && (
      <p className={classes.location}>
        <MdLocationPin />
        
        <span>{location}</span>
      </p>
      )}
      <div className={classes.status}>
        <div>
            <p>Seguidores: </p>
            <p className={classes.number}>{followers}</p>
        </div>
        <div>
            <p>Seguindo: </p>
            <p className={classes.number}>{following}</p>
        </div>
      </div>

      {bio && (
      <p>{bio}</p>
      )}
      <div className={classes.location}>
      <p>Repositórios Publicos:</p>
      <p className={classes.color1}>{public_repos}</p>
      </div>
      <p></p>
      <p></p>
      <Link to={html_url}>Ver Perfil do Usuário</Link>
      {/* <Link to={html_url}>Ver Perfil do Usuário</Link> */}
    </div>
  )
}

export default User

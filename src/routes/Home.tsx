import { UserProps } from "../types/user";

import Search from "../components/Search";
import User from "../components/User";
import { useState } from "react";
import Error from "../components/Error";



const home = () => {

    const [user, setUser] = useState<UserProps | null>(null);

    const [error, setError] = useState(false)

    const loadUser = async(userName: String) => {

      setError(false);
      setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();

        if(res.status === 404) {
          setError(true);
          return;
        }

        const {avatar_url, login, location, followers, following, bio, html_url, name, company, public_repos} = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
            bio,
            html_url,
            name,
            company,
            public_repos
        };

        setUser(userData);
    }

  return ( 
     <div>
        <Search loadUser={loadUser}/>
        {user && <User {...user}/>} 
        {error && <Error />}
    </div> 
  )
}

export default home
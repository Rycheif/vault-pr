import {createContext, PropsWithChildren, useEffect, useState} from "react";
import {User} from "../types";
import {decodeToken, isExpired} from "react-jwt";

const UserContext = createContext<{
  user: User | null;
}>({
  user: null,
});

export const UserProvider = ({children}: PropsWithChildren) => {
  const [signedInUser, setSignedInUser] = useState<User | null>(null);

  function loadUser(): User | null {
    const token = localStorage.getItem('token');
    if (null !== token && token !== '') {
      const user = decodeToken<User>(token);
      if (user !== null && !isExpired(token)) {
        return user;
      }
    }

    return null;
  }

  useEffect(() => {
    const handleLocalStorage = (e: StorageEvent) => {
      if (e.key === 'token' && null !== e.newValue) {
        const user = decodeToken<User>(e.newValue);
        setSignedInUser(user);
      } else if (e.key === 'token' && e.newValue === null) {
        setSignedInUser(null);
      }
    };

    const token = localStorage.getItem('token');
    if (null !== token) {
      const user = decodeToken<User>(token);
      if (null !== user) {
        setSignedInUser(user);
      }
    }

    window.addEventListener('storage', handleLocalStorage);
    loadUser();

    return () => {
      window.removeEventListener('storage', handleLocalStorage);
    };
  }, []);


  return (
    <UserContext.Provider value={{user: signedInUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

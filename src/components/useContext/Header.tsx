import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Header() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      userid: '9901',
      email: 'lcoding@example.com',
      role: 'admin'
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }

  return <div>
    {userContext.user ? (
      <>
        {userContext.user.userid} /{userContext.user.email} / {userContext.user.role}
        <button onClick={handleLogout}>Logout</button>
      </>
    ) : (
      <button onClick={handleLogin}>Login</button>
    )}
  </div>;
}
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { user } = useAuth();

  return (
    <div>
      <p>{user.email}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

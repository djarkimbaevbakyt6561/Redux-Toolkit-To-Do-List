import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { authActions } from '../../store/auth';

export const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function loginUser() {
    dispatch(authActions.toggleLogHandler());
    navigate('/login');
    localStorage.setItem('Auth', JSON.stringify(!auth));
  }
  function logoutUser() {
    dispatch(authActions.toggleLogHandler());
    navigate('/');
    localStorage.setItem('Auth', JSON.stringify(!auth));

  }
  return (
    <div>
      {auth ? (
        <Button onClick={logoutUser}>LogOut</Button>
      ) : (
        <Button onClick={loginUser}>Sign In</Button>
      )}
    </div>
  );
};
const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: white;
  :active {
    background-color: #afffb7;
  }
`;

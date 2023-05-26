import styled from 'styled-components';
import { Auth } from '../auth/Auth';
export const Header = () => {
  return (
    <Container>
      <Auth />
    </Container>
  );
};
const Container = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center ;
`;

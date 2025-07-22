import { Outlet } from 'react-router';
import NavBar from '../components/nav-bar';

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;

import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PublicLayout;
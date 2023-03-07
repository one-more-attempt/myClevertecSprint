import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export const BasicLayout = () => (
  <div className='basic-layout'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

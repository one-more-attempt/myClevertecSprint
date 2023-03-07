import { Link } from 'react-router-dom';
import logoWithTitle from '../../img/logo-with-title.png';
import avatar from '../../img/avatar.png';
import { ReactComponent as BurgerMenu } from '../../img/header/burger-menu.svg';

export const Header = () => (
  <div className='header-wrapper'>
    <Link to='/'>
      <div className='header__logo'>
        <img className='logo-full-image' src={logoWithTitle} alt='' />
      </div>
    </Link>

    <BurgerMenu className='burger-menu' />
    <div className='header__menu'>
      <div className='header-title'>Библиотека</div>
      <div className='header-user'>
        <div className='user-name'>Привет, Иван!</div>
        <div className='user-logo'>
          <img className='avatar' src={avatar} alt='' />
        </div>
      </div>
    </div>
  </div>
);

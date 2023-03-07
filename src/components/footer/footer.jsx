import vkLogo from '../../img/footer/vk-logo.svg';
import instaLogo from '../../img/footer/insta-logo.svg';
import facebookLogo from '../../img/footer/facebook-logo.svg';
import linkedInLogo from '../../img/footer/linked-in-logo.svg';

// import { ReactComponent as StarIcon } from '../img/star.svg';

export const Footer = () => (
  <div className='footer-wrapper'>
    <div className='copyright'>
      <p>© 2020-2023 Cleverland.</p>
      <p> Все права защищены.</p>
    </div>
    <div className='social-icons'>
      <img src={facebookLogo} alt='' />
      <img src={instaLogo} alt='' />
      <img src={vkLogo} alt='' />
      <img src={linkedInLogo} alt='' />
    </div>
  </div>
);

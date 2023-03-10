import sprite from '../../../images/sprite.svg';
import { SocialLinksConteiner } from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <SocialLinksConteiner>
      <a href="https://www.facebook.com">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-fb'}></use>
        </svg>
      </a>
      <a href="https://www.youtube.com">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-youtube'}></use>
        </svg>
      </a>
      <a href="https://www.twitter.com">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-tweeter'}></use>
        </svg>
      </a>
      <a href="https://www.instagram.com">
        <svg width={20} height={20}>
          <use href={sprite + '#icon-insta'}></use>
        </svg>
      </a>
    </SocialLinksConteiner>
  );
};

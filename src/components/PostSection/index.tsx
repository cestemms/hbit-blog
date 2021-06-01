import React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
  TwitterShareButton,
} from 'react-share';

import Button from '../Button';
import LinkElement from '../LinkElement';

import * as S from './styles';
interface PostSectionProps {
  id: string;
  timeToRead: string;
  category: string;
  categoryUrl: string;
  title: string;
  slug: string;
  date: string;
  description: string;
}

const PostSection: React.FC<PostSectionProps> = ({ 
  id, 
  slug, 
  title, 
  date, 
  timeToRead, 
  category, 
  categoryUrl, 
  description 
}) => {
  return (
    <S.Container id={id}>
      <S.ImageContainer>
        Post Image
        <S.ReadMore>
          <span>Leia Mais</span>
          <div>Leitura em {timeToRead} Minutos</div>
        </S.ReadMore>
      </S.ImageContainer>
      <S.PostContainer>
        <LinkElement id={`tag-to-${categoryUrl}`} url={categoryUrl} label={category}/>
        <S.LinkElement to={slug}>
        <h2>{title}</h2>
        </S.LinkElement>
        <S.LinkElement to={slug}>
          <span>{date}</span>
        </S.LinkElement>
        <S.Description>{description}</S.Description>
        <Button id="read-more-button" url={slug}>
            Leia Mais
        </Button>
        <S.ShareRow>
          <span>
          Compartilhe
          <S.ArrowIcon/>
          </span>
          <FacebookShareButton url={slug} >
            <S.FacebookIcon/>
          </FacebookShareButton>
          <LinkedinShareButton url={slug}>
            <S.LinkedinIcon/>
          </LinkedinShareButton>
          <TwitterShareButton url={slug}>
            <S.TwitterIcon/>
          </TwitterShareButton>
          <WhatsappShareButton url={slug}>
            <S.WhatsappIcon/>
          </WhatsappShareButton>
        </S.ShareRow>
      </S.PostContainer>
    </S.Container>
  );
};

export default PostSection;

import React from 'react';
import { Link, graphql } from 'gatsby';
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
  TwitterShareButton,
} from 'react-share';

import Layout from '../../components/Layout';
import LinkElement from '../../components/LinkElement';

import replaceSpecialChars from '../../utils/helpers'

import * as S from './styles';

interface Props {
  data: {
    markdownRemark: any
  }
  pageContext: any
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout isPost
    >
      <S.Container>
      <S.Header>
      <LinkElement 
        id="category-link" 
        url={replaceSpecialChars(post.frontmatter.category)} 
        label={post.frontmatter.category}
        size={18}
        />
        <h1>
          {post.frontmatter.title}
        </h1>
        <div className="date-row">
        <LinkElement 
          id="category-link" 
          url={replaceSpecialChars(post.frontmatter.date)} 
          label={post.frontmatter.date}
        />
          <span className="time-to-read">Leitura em {post.timeToRead} minutos</span>
        </div>
        <S.MainImage/>
      </S.Header>

      <S.Wrapper>
        <S.Aside>
          <div>
          <FacebookShareButton 
            url={`blog.healthbit.com.br${post.fields.slug}`} 
            hashtag={post.fields.category}
            quote={post.excerpt}         
          >
              <S.FacebookIcon/>
            </FacebookShareButton>
            <LinkedinShareButton 
              url={`blog.healthbit.com.br${post.fields.slug}`} 
              summary={post.excerpt}
              source="blog.healthbit.com.br"
            >
              <S.LinkedinIcon/>
            </LinkedinShareButton>
            <TwitterShareButton 
              url={`blog.healthbit.com.br${post.fields.slug}`}
              title={post.frontmatter.title}
              via="blog.healthbit.com.br"
              hashtags={post.fields.category}
            >
              <S.TwitterIcon/>
            </TwitterShareButton>
            <WhatsappShareButton 
              url={`blog.healthbit.com.br${post.fields.slug}`}
              title={post.frontmatter.title}
            >
              <S.WhatsappIcon/>
          </WhatsappShareButton>
          </div>
        </S.Aside>
        <S.Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Wrapper>
      </S.Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN)
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "PT-BR")
        category
      }
    }
  }`;

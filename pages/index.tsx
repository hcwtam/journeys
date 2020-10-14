import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Layout from '../components/Layout';
import { getPostsData } from '../utils';
import { PostsData } from '../interfaces';

type Props = {
  postsData: PostsData
};

//styles
const Heading = styled.h1`
text-align:center;
margin: 120px auto 100px;
font-size: 3.5rem;
`

const CardsContainer = styled.ul`
  width: 100%;
  max-width: 1200px;
  margin: 0 50px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const PortraitContainer = styled.div`
  box-shadow: 0 0 20px #8d8e91;
  max-height: 250px;
  max-width: 250px;
  border-radius: 50%;
  transition: 0.4s all ease-out;
`;

const Card = styled.li`
  max-width: 250px;
  text-align: center;
  margin: 50px 60px;
  cursor: pointer;
  &:hover ${PortraitContainer} {
    transform: scale(1.1);
  box-shadow: 0 0 20px #e3c29d;
  }
`


const Portrait = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Title = styled.h2`
margin-top: 40px;
`

const Description = styled.h3`
font-weight: 400;
color: #aaaaaa;
margin: 0 auto;
line-height: 1.5;
`

//component
const IndexPage :FC<Props>= ({ postsData }) => {
  const posts = postsData.posts.map(({feature_image, id, title, excerpt,slug})=>(
    <Link href={`/${slug}`} key={id}>
  <Card >
    <PortraitContainer>
  <Portrait src={feature_image} alt={title}/>
</PortraitContainer>
  <Title>{title}</Title>
  <Description>{excerpt}</Description>
    </Card>
  </Link>
    ))

  return (
    <Layout title="Journeys | Career Experiences Sharing">
      <Heading>Learn from their journeys.</Heading>
      <CardsContainer>
        {posts}
      </CardsContainer>
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps() {
  const postsData = await getPostsData();
  return {
    props: {
      postsData
    }
  };
}

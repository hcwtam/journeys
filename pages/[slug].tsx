import { GetStaticPaths } from 'next';

import { PostData} from '../interfaces';
import Layout from '../components/Layout';
import { getPostData, getPostsData } from '../utils';
import styled from 'styled-components';

type Props = {
  postData: {
    posts: PostData[]}
};

type Params = {
	params: {
		slug: string
	}
}

const Content = styled.section`
width: 80%;
max-width: 740px;
padding: 0 30px;
& * {
        margin: 40px 0;
    }
`

const Post = ({ postData }: Props) => {
const {posts} = postData;
const [post] = posts;

  return (
    <Layout
      title={'User Detail'
      }
    >
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const postsData = await getPostsData();

  // Get the paths we want to pre-render based on posts
  const paths = postsData.posts.map((post: PostData) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export const getStaticProps = async ({ params }: Params) => {
	const { slug } = params;
  
  const res = await getPostData(slug);
  const postData = await JSON.parse(JSON.stringify(res))

  console.log(res);
  

  // Pass post data to the page via props
  return { props: { postData } }
}

export default Post;
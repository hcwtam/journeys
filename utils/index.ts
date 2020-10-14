export const getPostsData = async () => {
  const res = await fetch(`
  ${process.env.API_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}
  `).then((res) => res.json());

  return res;
};

export const getPostData = async (slug: string) => {
  const res = await fetch(`
  ${process.env.API_URL}/ghost/api/v3/content/posts/slug/${slug}/?key=${process.env.CONTENT_API_KEY}
  `).then((res) => res.json());

  return res;
};

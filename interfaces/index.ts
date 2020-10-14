export type PostData = {
id: string
feature_image: string
html: string
title: string
excerpt: string
slug: string
}

export type PostsData = {
  meta: {}
  posts: PostData[]
}

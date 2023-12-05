import { GetStaticPathsContext, GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";

export interface PostListProps {
  posts: [];
}

export default function PostList(props: PostListProps) {
  return (
    <div>
      post list
      <ul>
        {props.posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListProps> = async (
  context: GetStaticPathsContext
) => {
  const response = fetch("https://js-post-api.herokuapp.com/api/posts");
  const data = await (await response).json();
  return {
    props: {
      posts: data,
    },
  };
};

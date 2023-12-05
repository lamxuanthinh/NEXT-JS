import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostPageProps {
  post: any;
}

export default function PostId(props: PostPageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading ...</div>;
  }
  return (
    <div>
      <h1>Post Page</h1>
      <p>{JSON.stringify(router.query)}</p>
      <p>{props.post.title}</p>
      <p>{props.post.author}</p>
      <p>{props.post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = fetch(`https://js-post-api.herokuapp.com/api/posts`);
  const data = await (await response).json();
  return {
    paths: data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postid = context.params?.postId;
  if (!postid) return { notFound: true };
  const response = fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postid}`
  );
  const data = await (await response).json();
  console.log(23);
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};

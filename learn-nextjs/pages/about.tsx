import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { AdminLayout, MainLayout } from "../components/layouts";
// import Header from '../components/comom/header';

// const Header = dynamic(() => import("../components/comom/header"), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  // console.log(router.query);

  useEffect(() => {
    (async () => {
      console.log("call api");
      const response = fetch(
        "https://tc-covid-json-server.herokuapp.com/users/"
      );
      const data = await (await response).json();
      setPostList(data);
    })();
  }, []);

  const handleNextPage = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: (Number(router.query.page) || 0) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      <h1>about page</h1>
      {/* <Header /> */}
      <ul>
        {postList.map((post: any) => (
          <li key={post._id}>{post.name}</li>
        ))}
      </ul>
      <button onClick={handleNextPage}>next page</button>
    </div>
  );
}

AboutPage.Layout = AdminLayout;

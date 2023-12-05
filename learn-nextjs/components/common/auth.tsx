import * as React from "react";
import { useAuth } from "../../hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";

export interface AuthProps {
  children: any;
}

export default function Auth(props: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();
//   useEffect(() => {
//     if (!firstLoading && !profile) 
//   }, [router, profile, firstLoading]);
  if (!profile?.username) return router.push("/login");

  return <div>{props.children}</div>;
}

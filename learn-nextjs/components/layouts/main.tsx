import * as React from "react";
import { LayoutProps } from "../../models";
import Link from "next/link";

export interface IMainLayoutProps {}

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/post">About</Link>
      <div>{props.children}</div>
    </div>
  );
}

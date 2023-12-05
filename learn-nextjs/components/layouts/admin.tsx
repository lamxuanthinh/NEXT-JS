import * as React from "react";
import Link from "next/link";
import { LayoutProps } from "../../models";


export interface AdminLayoutProps {}

export function AdminLayout(props: LayoutProps) {
  return (
      <div>
        <h1>Admin Layout</h1>
        <Link href="/about">Sidebar</Link>
        <Link href="/about">Home</Link>
        <Link href="/about">About</Link>
        {props.children}
      </div>
    
  );
}

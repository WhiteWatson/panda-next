import React from "react";
import Link from "next/link";

export default function Home(): React.ReactElement {
  return (
    <>
      <div>Home 页面</div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/example">example</Link>
        </li>
      </ul>
    </>
  );
}

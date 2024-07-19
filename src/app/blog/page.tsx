import { Metadata } from "next";

export const metadata: Metadata = {
//   title: "Blog", works with template title
title:{
    absolute:"Blog"
}
};

export default function Blog() {
  return <h1>Blog Page</h1>;
}

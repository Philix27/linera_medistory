import Head from "next/head";
import React from "react";

interface IProps {
  title: string;
  content?: string;
  description?: string;
  keywords?: string;
}
export default function MetaHeader(props: IProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content="PaySync." />
        <meta name="company" content="PaySync." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/Unwind.png" />
      </Head>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import { Wrap, WrapItem } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Accessibility Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrap direction="column">
        <WrapItem>
          <Link href="/single-image">Single bare image</Link>
        </WrapItem>
        <WrapItem>
          <Link href="/single-accessible-image">Single accessible image</Link>
        </WrapItem>
        <WrapItem>
          <Link href="/group-bare-image">Group bare images</Link>
        </WrapItem>
        <WrapItem>
          <Link href="/group-accessible-image">Group accessible images</Link>
        </WrapItem>
        <WrapItem>
          <Link href="/decorative-image">Decorative image</Link>
        </WrapItem>
      </Wrap>
    </Layout>
  );
}

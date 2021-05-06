import Head from "next/head";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Code,
  Heading,
  Image,
} from "@chakra-ui/react";
import Layout from "../components/layout";

const CrumbItem = (
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">Single image</BreadcrumbLink>
  </BreadcrumbItem>
);

export default function Home() {
  return (
    <Layout CrumbItem={CrumbItem}>
      <Head>
        <title>Single Image - accessibility Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h2" size="lg" mb={4}>
        Single image
      </Heading>
      <Image src="https://picsum.photos/800/600" width="800" height="600" />
      <Code
        children={`<img src="https://picsum.photos/800/600" />`}
        my={4}
      ></Code>
    </Layout>
  );
}

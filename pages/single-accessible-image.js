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
    <BreadcrumbLink href="#">Single accessible image</BreadcrumbLink>
  </BreadcrumbItem>
);

export default function Home() {
  return (
    <Layout CrumbItem={CrumbItem}>
      <Head>
        <title>Single Accessible Image - Accessibility Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h2" size="lg" mb={4}>
        Single accessible image
      </Heading>
      <Image
        src="https://picsum.photos/800/600"
        alt="Picture of doves flying"
      />
      <Code
        children={`<img src="https://picsum.photos/800/600" alt="Picture of doves flying" />`}
        my={4}
      ></Code>
    </Layout>
  );
}

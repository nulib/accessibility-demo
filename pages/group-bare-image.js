import Head from "next/head";
import Link from "next/link";
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
    <BreadcrumbLink href="#">Group bare image</BreadcrumbLink>
  </BreadcrumbItem>
);

export default function Home() {
  return (
    <Layout CrumbItem={CrumbItem}>
      <Head>
        <title>Group Bare Image - Accessibility Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h2" size="lg" mb={4}>
        Group bare image
      </Heading>
      The castle through the ages: 1423, 1756, and 1936 respectively.
      <Image src="https://www.w3.org/WAI/tutorials/img/castle-etching-6ac1e0cb.jpg" />
      Charcoal on wood. Anonymous, circa 1423.
      <Image src="https://www.w3.org/WAI/tutorials/img/castle-painting-8631e2ea.jpg" />
      Oil-based paint on canvas. Eloisa Faulkner, 1756.
      <Image src="https://www.w3.org/WAI/tutorials/img/castle-fluro-2a089e21.jpg" />
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Code,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/layout";

const CrumbItem = (
  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href="#">Decorative image</BreadcrumbLink>
  </BreadcrumbItem>
);

export default function DecorativeImage() {
  return (
    <Layout CrumbItem={CrumbItem}>
      <Head>
        <title>Decorative Image - Accessibility Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h2" size="lg" mb={4}>
        A decorative image
      </Heading>
      <Stack direction="column" spacing="6">
        <Text>
          An example could be a Collection link which contains a decorative
          image designed to increase visibility of the link, without conveying
          additional information.
        </Text>
        <Link href="#">
          <>
            <Image
              src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/03c80436-1db2-460f-bcb3-0529e9152371/square/300,300/0/default.jpg"
              alt=""
              w="300px"
            />
            <strong>Posters from the Herskovits Library</strong>
          </>
        </Link>

        <Code
          children={`<img src="https://iiif.stack.rdc.library.northwestern.edu/iiif/2/03c80436-1db2-460f-bcb3-0529e9152371/square/500,500/0/default.jpg" alt="" />`}
          my={4}
        ></Code>
      </Stack>
    </Layout>
  );
}

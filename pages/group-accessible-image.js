import Head from "next/head";
import Link from "next/link";
import {
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Code,
  Heading,
  Stack,
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
      <Stack
        as="figure"
        role="group"
        aria-labelledby="fig1"
        direction="column"
        spacing="24px"
      >
        <Box as="figcaption" id="fig1">
          The castle through the ages: 1423, 1756, and 1936 respectively.
        </Box>

        <figure role="group" aria-labelledby="fig11">
          <Image
            src="https://www.w3.org/WAI/tutorials/img/castle-etching-6ac1e0cb.jpg"
            alt="The castle has one tower, and a tall wall around it."
          />
          <figcaption id="fig11">
            Charcoal on wood. Anonymous, circa 1423.
          </figcaption>
        </figure>

        <figure role="group" aria-labelledby="fig12">
          <Image
            src="https://www.w3.org/WAI/tutorials/img/castle-painting-8631e2ea.jpg"
            alt="The castle now has two towers and two walls."
          />
          <figcaption id="fig12">
            Oil-based paint on canvas. Eloisa Faulkner, 1756.
          </figcaption>
        </figure>

        <figure role="group" aria-labelledby="fig13">
          <Image
            src="https://www.w3.org/WAI/tutorials/img/castle-fluro-2a089e21.jpg"
            alt="The castle lies in ruins, the original tower all that remains in one piece."
          />
          <figcaption id="fig13">
            Film photograph. <span lang="fr">Séraphin Médéric Mieusement</span>,
            1936.
          </figcaption>
        </figure>
      </Stack>
    </Layout>
  );
}

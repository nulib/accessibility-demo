import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

function Layout({ CrumbItem, children }) {
  const [isObscured, setIsObscured] = React.useState();

  return (
    <Container as="main" my={6} maxW="container.lg">
      <Heading as="h1" mb={4}>
        Accessibility Demo
      </Heading>
      <Flex
        my={4}
        pb={4}
        borderBottom="1px solid #efefef"
        justifyContent="space-between"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {CrumbItem}
        </Breadcrumb>
        <Button onClick={() => setIsObscured(!isObscured)}>
          Toggle Opacity
        </Button>
      </Flex>
      <Box
        position="absolute"
        w="100%"
        h={isObscured ? "100%" : "0px"}
        bg="#fff"
        zIndex="10"
        opacity={isObscured ? 0.9 : 0}
      ></Box>
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

import PropTypes from "prop-types";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

function Layout({ CrumbItem, children }) {
  return (
    <Container as="main" my={6} maxW="container.lg">
      <Heading as="h1" mb={4}>
        Accessibility Demo
      </Heading>
      <Box my={4} pb={4} borderBottom="1px solid #efefef">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {CrumbItem}
        </Breadcrumb>
      </Box>

      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = () => {
  return (
    <Box bg="brand.300" p={4} color="white">
      <Flex alignItems="center" justifyContent='space-between' maxW="1200px" mx="auto">
        <Box display={'flex'} gap={4} alignItems="center">
          <Heading as="h1" size="lg" letterSpacing="tight">
            <NextLink href="/" passHref>
              <a style={{ textDecoration: 'none', color: 'white' }}>Votre Restaurant</a>
            </NextLink>
          </Heading>
          <NextLink href="/recettes" passHref>
            <Button variant="ghost" color="white" _hover={{ color: 'brand.400' }}>
              Consulter nos recettes
            </Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/login" passHref>
            <Button variant="ghost" color="brand.400" bg="white" _hover={{ bg: 'brand.100' }}>
              Se connecter
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import NextLink from 'next/link'; // Pour gérer la navigation entre les pages

const Header = () => {
  return (
    <Box bg="brand.300" p={4} color="white">
      <Flex alignItems="center" maxW="100%" mx="auto">
        {/* Logo ou Nom du restaurant */}
        <Heading as="h1" size="lg" letterSpacing="tight">
          <NextLink href="/" passHref>
            
              Votre Restaurant
            
          </NextLink>
        </Heading>

        <Spacer />

        {/* Liens de navigation */}
        <Box>
          <NextLink href="/" passHref>
            <Button  variant="ghost" mr={2}>
              Accueil
            </Button>
          </NextLink>
          <NextLink href="/recettes" passHref>
            <Button  variant="ghost">
              Recettes
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
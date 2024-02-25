import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import NextLink from 'next/link'; // Pour gérer la navigation entre les pages

const Header = () => {
  return (
    <Box bg="brand.300" p={4} color="white">
      <Flex alignItems="center" maxW="1200px" >
        {/* Logo ou Nom du restaurant */}
        <Heading as="h1" size="lg" letterSpacing="tight">
          <NextLink href="/" passHref>
            
              Votre Restaurant
            
          </NextLink>
        </Heading>

        <Spacer />

        {/* Liens de navigation */}
        <Box>
          <NextLink href="/recettes" passHref>
            <Button  variant="ghost" color={'white'}>
              Consulter nos recettes
            </Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/login" passHref>
            <Button  variant="ghost" color={'white'}>
              Se connecter
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
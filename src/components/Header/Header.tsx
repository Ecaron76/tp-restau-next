import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import NextLink from 'next/link'; // Pour gérer la navigation entre les pages

const Header = () => {
  return (
    <Box bg="brand.300" p={4} color="white">
      <Flex alignItems="center" maxW="100%" marginLeft={'50px'} marginRight={'50px'} justifyContent='space-between'>
        {/* Logo ou Nom du restaurant */}
        <Box display={'flex'} gap={10}>
        <Heading as="h1" size="lg" letterSpacing="tight">
          <NextLink href="/" passHref>
            La Dolce Cucina
          </NextLink>
        </Heading>
        <Box>
          <NextLink href="/recettes" passHref>
            <Button  variant="ghost" color={'white'}>
              Consulter nos recettes
            </Button>
          </NextLink>
        </Box>
        </Box>
        <Box>
          <NextLink href="/login" passHref>
            <Button  variant="ghost" color={'brand.400'} bg={'white'}>
              Se connecter
            </Button>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
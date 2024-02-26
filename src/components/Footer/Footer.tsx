import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="brand.300" color="white" py={4}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            La Dolce Cucina
          </Text>
          <Text mt={2}>42 Rue de la Saveur, Paris, France</Text>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Liens Rapides
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <Link href="#">Accueil</Link>
            <Link href="#">Recettes</Link>
          </Flex>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Suivez-nous
          </Text>
          <Flex direction="column" gap={2}>
            <IconButton
              as={Link}
              href="#"
              fontSize="xl"
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
            <IconButton
              as={Link}
              href="#"
              fontSize="xl"
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              as={Link}
              href="#"
              fontSize="xl"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
          </Flex>
        </Box>
      </Flex>

      <Box mt={8} textAlign="center">
        <Text fontSize="sm">&copy; 2024 La Dolce Cucina. Tous droits réservés.</Text>
      </Box>
    </Box>
  );
};

export default Footer;

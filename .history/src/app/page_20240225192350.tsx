"use client"
import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import SliderResto from "@/components/SliderResto/SliderResto";
import Slider from "react-slick";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {
  const restaurantData = {
    name: 'La Dolce Cucina',
    location: 'Emplacement du Restaurant',
    hours: 'Horaires d\'ouverture',
    // Ajoutez d'autres données nécessaires
  };
  return (
    <main >
      <Header />
      <PageContainer>
        
        
        <SliderResto />
        {/* Image du restaurant */}

        {/* Informations du restaurant */}
        <Box ml={[0, 0, 8]} mt={[4, 4, 0]}>
          <Heading as="h1" fontSize="3xl" mb={4}>
            {restaurantData.name}
          </Heading>
          <Text fontSize="lg" mb={4}>
            {restaurantData.location}
          </Text>
          <Text fontSize="lg">
            {restaurantData.hours}
          </Text>
          {/* Ajoutez d'autres informations sur le restaurant ici */}
        </Box>
      
      </PageContainer>
    </main>
  );
}

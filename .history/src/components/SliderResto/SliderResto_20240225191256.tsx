import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function SliderResto() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, title: 'Première photo', },
        { id: 2, title: 'Deuxième photo',  },
        { id: 3, title: 'Troisième photo',  },
      ];
      
      const goToNextSlide = () => {
        setCurrentSlide((prevSlide: number) => (prevSlide + 1) % slides.length);
      };
    
      const goToPrevSlide = () => {
        setCurrentSlide((prevSlide: number) => (prevSlide - 1 + slides.length) % slides.length);
      };
  return (
    <Box position="relative" textAlign="center" >
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={5}>
        <IconButton
          onClick={goToPrevSlide}
          icon={<ChevronLeftIcon boxSize={7} />}
          colorScheme="orange"
          size="md"
          aria-label="Précédent"
        />
        <Box position="relative" textAlign="center" p={4} bg={'orange'} width={600} height={300} borderRadius={10}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {slides[currentSlide].title}
          </Text>
        </Box>
        <IconButton
          onClick={goToNextSlide}
          icon={<ChevronRightIcon boxSize={7} />}
          colorScheme="orange"
          size="md"
          aria-label="Suivant"
        />
      </Box>
      <HStack justifyContent="center" mb={4} color={'orange'} marginTop={5}>
        {slides.map((_, index) => (
          <Box
            key={index}
            boxSize={4}
            bg={index === currentSlide ? 'orange' : 'white'}
            borderRadius="full"
            mx={1}
            border='2px solid brand.600'
          />
        ))}
      </HStack>
    </Box>
  );
}
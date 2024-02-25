import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, Text } from "@chakra-ui/react";
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
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={10}>
        <IconButton
          onClick={goToPrevSlide}
          icon={<ChevronLeftIcon />}
          colorScheme="orange"
          size="sm"
          aria-label="Précédent"
        />
    <Box position="relative" textAlign="center" p={4} bg={'green'} width={'500px'} height={300}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {slides[currentSlide].title}
      </Text>
      <Box position="absolute" bottom="0" left="50%" transform="translateX(-50%)">
        
        
      </Box>
    </Box>
    <IconButton
          onClick={goToNextSlide}
          icon={<ChevronRightIcon />}
          colorScheme="orange"
          size="sm"
          aria-label="Suivant"
        />
    </Box>
  );
}
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function SliderResto() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/assets/images/restaurant/resto-1.jpg",
    "/assets/images/restaurant/resto-2.jpg",
    "/assets/images/restaurant/resto-3.jpg",
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <Box position="relative" textAlign="center" marginBottom={10}>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={5}>
        <IconButton
          onClick={goToPrevSlide}
          icon={<ChevronLeftIcon boxSize={7} />}
          colorScheme="orange"
          size="md"
          aria-label="Précédent"
        />
        <Box position="relative" textAlign="center" p={4} width={600} height={300} borderRadius={10}>
          <Image src={images[currentSlide]} alt={`Image ${currentSlide + 1}`} width={600} height={300} borderRadius={10} />
        </Box>
        <IconButton
          onClick={goToNextSlide}
          icon={<ChevronRightIcon boxSize={7} />}
          colorScheme="orange"
          size="md"
          aria-label="Suivant"
        />
      </Box>
    </Box>
  );
}

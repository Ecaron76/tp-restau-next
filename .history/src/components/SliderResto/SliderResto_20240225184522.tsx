import { Box, Button, Text } from "@chakra-ui/react";

export default function SliderResto() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, title: 'Première Recette', description: 'Description de la première recette.' },
        { id: 2, title: 'Deuxième Recette', description: 'Description de la deuxième recette.' },
        { id: 3, title: 'Troisième Recette', description: 'Description de la troisième recette.' },
      ];
      
      const goToNextSlide = () => {
        setCurrentSlide((prevSlide: number) => (prevSlide + 1) % slides.length);
      };
    
      const goToPrevSlide = () => {
        setCurrentSlide((prevSlide: number) => (prevSlide - 1 + slides.length) % slides.length);
      };
  return (
    <Box position="relative" textAlign="center" p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {slides[currentSlide].title}
      </Text>
      <Text fontSize="md" mb={4}>
        {slides[currentSlide].description}
      </Text>
      <Box position="absolute" bottom="0" left="50%" transform="translateX(-50%)">
        <Button onClick={goToPrevSlide} colorScheme="teal" size="sm" mr={2}>
          Précédent
        </Button>
        <Button onClick={goToNextSlide} colorScheme="teal" size="sm">
          Suivant
        </Button>
      </Box>
    </Box>
  );
}
import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import SliderResto from "@/components/SliderResto/SliderResto";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {
  return (
    <main >
      <Header />
      <PageContainer>
      <Box>
      <Slider {...settings}>
      <Box>
              <img src="/image1.jpg" alt="Image 1" />
            </Box>
            <Box>
              <img src="/image2.jpg" alt="Image 2" />
            </Box>
            <Box>
              <img src="/image3.jpg" alt="Image 3" />
            </Box>
      </Slider>
    </Box>
      </PageContainer>
    </main>
  );
}

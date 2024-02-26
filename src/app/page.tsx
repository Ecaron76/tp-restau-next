"use client"
import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";
import SliderResto from "@/components/SliderResto/SliderResto";
import Slider from "react-slick";
import { Box, Flex, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main >
      <Header />
      <PageContainer>
        
        <Heading as="h1" fontSize="3xl" mb={2} color={'brand.400'}>
          La Dolce Cucina
        </Heading>
        <Text fontSize="lg" color={'brand.300'} mb={4} fontStyle={'italic'}>
      Bienvenue à La Dolce Cucina, une oasis gastronomique au cœur de Paris. Notre restaurant
      combine la passion pour les saveurs authentiques de la cuisine italienne avec une expérience
      culinaire raffinée. Chaque plat est préparé avec soin, utilisant des ingrédients frais et de
      qualité, pour vous offrir une expérience gustative inoubliable.
    </Text>
        <SliderResto />
        <Box ml={[0, 0, 8]} mt={[4, 4, 0]}>
          <Box>
            <Heading as="h2" fontSize="2xl" mb={4} color={"brand.300"}>
              Emplacement du Restaurant
            </Heading>
            <Flex gap={10} bg={'brand.200'} padding={5} borderRadius={10} marginBottom={3}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167997.47302539213!2d2.182222932786579!3d48.85896330321663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1708940285818!5m2!1sfr!2sfr" title="Paris" width="400"  height="300"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <Flex gap={10} flexDirection={'column'} justifyContent={'center'}>
                <Text fontSize="lg" color={'white'} fontWeight={'semibold'}>La Dolce Cucina</Text>
                <Text fontSize="lg" color={'white'} fontWeight={'semibold'}>42 Rue de la Saveur</Text>
                <Text fontSize="lg" color={'white'} fontWeight={'semibold'}>Paris, France</Text>
              </Flex>
            </Flex>
            
          </Box>
          <Heading as="h1" fontSize="2xl" mb={4} color={'brand.300'} >
            Horaires d'ouverture
          </Heading>
          <TableContainer>
  <Table variant='simple' bg={'brand.200'} width={'80%'} margin={'auto'} marginTop={2}>
    <Tbody>
      <Tr>
        <Td color={'white'}>Lundi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-14h00 / 18H30-21h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Mardi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-14h00 / 18H30-21h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Mercredi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-14h00 / 18H30-21h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Jeudi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-14h00 / 18H30-21h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Vendredi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-14h00 / 18H30-23h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Samedi</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-15h00 / 18h00-23h00</Td>
      </Tr>
      <Tr>
        <Td color={'white'}>Dimanche</Td>
        <Td color={'white'} fontWeight={'bold'}>11h00-15h00 / 18h00-23h00</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        </Box>
      
      </PageContainer>
      <Footer />
    </main>
  );
}

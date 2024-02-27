"use client"
import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";

import Footer from "@/components/Footer/Footer";
import { Button, Card, CardBody, CardFooter, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Etape {
    id: number;
    attributes: {
      instructions: string;
      // Ajoutez d'autres propriétés si nécessaire
    };
  }
  
  interface Ingredient {
    id: number;
    attributes: {
      nom: string;
      quantite: string;
      // Ajoutez d'autres propriétés si nécessaire
    };
  }
  
  interface Recette {
    id: number;
    attributes: {
      nom: string;
      description: string;
      // Ajoutez d'autres propriétés si nécessaire
      etapes?: {
        data: Etape[];
      };
      ingredients?: {
        data: Ingredient[];
      };
    };
  }
const retrieveRecettes = async () => {
    try {
      const rawResponse = await fetch(`http://localhost:1338/api/recettes?populate=etapes,ingredients`, {
        headers: {
          Authorization: `Bearer 23c83429e23b9caa8292a40a89cf226e8066974d2680bae12f36fbc282dbe23093e47ce9b496ca439da8770250a1d787f6303f579a77f4ab228773f889469f8c3bd02eac1c4828a09fc16fadaf489332ffb3e8a59a4808ee4b5efe51a60aae3ade0fb1b84747d55a8b0baed271bb9a741fce2a9e96d5b1e8e1448fdfe6a1a373
          `,
        },
      });
  
          if (!rawResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      const response = (await rawResponse.json());
  
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
export default function Recettes() {
    const [recettes, setRecettes] = useState([]);

    useEffect(() => {
      async function fetchRecettes() {
        try {
          const data = await retrieveRecettes();
          setRecettes(data);
        } catch (error) {
          console.error('Error fetching recettes:', error);
        }
      }
  
      fetchRecettes();
    }, []);
  return (
    <main >
      <Header />
      <PageContainer>
      {recettes.map((recette: Recette) => (
          <Card
            key={recette.id}
            width={'50%'}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            mb={4} // Ajoutez un espace en bas entre les cartes
          >
            <Stack>
              <CardBody>
                <Heading size='md'>{recette.attributes.nom}</Heading>
                <Text py='2'>{recette.attributes.description}</Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      
      </PageContainer>
      <Footer />
    </main>
  );
}

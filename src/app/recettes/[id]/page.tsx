"use client"
import Image from "next/image";

import Header from "@/components/Header/Header";
import PageContainer from "@/components/PageContainer/PageContainer";

import Footer from "@/components/Footer/Footer";
import { Box, Button, Card, CardBody, CardFooter, Heading, Text,Table, Thead, TableContainer, Tr, Tbody, Td, Th, Flex, Center, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import './singleRecette.css'; 

interface Recette {
    id: number;
    attributes: {
      nom: string;
      description: string;
      difficulte: number;
      temps: number;
      etapes?: {
        data: {
          id: number;
          attributes: {
            instructions: string;
            ingredients?: {
              data: {
                id: number;
                attributes: {
                  nom: string;
                  quantite: string;
                };
              }[];
            };
          };
        }[];
      };
      ingredients?: {
        data: {
          id: number;
          attributes: {
            nom: string;
            quantite: string;
          };
        }[];
      };
    };
  }
async function retrieveSingleRecette(id: number){
    try {
      const rawResponse = await fetch(`http://localhost:1338/api/recettes/${id}?populate=etapes.ingredients,ingredients`, {
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
export default function SingleRecette({ params }: { params: { id: number } }) {
    const [recette, setRecette] = useState<Recette | null>(null);
    useEffect(() => {
        async function fetchRecette() {
          try {
            
            const data = await retrieveSingleRecette(params.id);
            setRecette(data);
          } catch (error) {
            console.error('Error fetching recette details:', error);
          }
        }
    
        if (params.id) {
          fetchRecette();
        }
      }, [params.id]);


      
      if (recette === null) {
        return <div>Recette introuvable.</div>;
      }
      
      const ingredients = recette.attributes.ingredients?.data || [];

  return (
    <main >
      <Header />
      <PageContainer>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Heading as="h2" fontSize="5xl" mb={2} color={'brand.500'}>
                {recette.attributes.nom}
            </Heading>
            <Text color={'brand.400'}>{recette.attributes.temps} minutes de préparation</Text>
        </Flex>
        
        <Text fontStyle={'italic'}>{recette.attributes.description}</Text>
        <p>Difficulté: {recette.attributes.difficulte}</p>

        <Heading as="h3" fontSize="2xl" mb={2} color={'brand.300'}>
           Ingrédients requis: 
        </Heading>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Ingrédient</Th>
                <Th>Quantité</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ingredients.map((ingredient, index) => (
                <Tr key={index}>
                  <Td>{ingredient.attributes.nom}</Td>
                  <Td>{ingredient.attributes.quantite}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Heading as="h3" fontSize="2xl" mb={2} color={'brand.300'}>
           Réalisation: 
        </Heading>
        <div className="etapesContainer">
            {recette.attributes.etapes?.data.map((etape, index) => (    
            <div key={index} className="etape">
                <Heading as="h4" fontSize="xl" mb={2} color={'brand.300'}>
                    Étape {index + 1}
                </Heading>
                
                <p>{etape.attributes.instructions}</p>

                <div className="ingredientsContainer">
                <h3>Ingrédients :</h3>
                <ul>
                    {etape.attributes.ingredients?.data.map((ingredient, ingredientIndex) => (
                    <li key={ingredientIndex}>
                        {ingredient.attributes.nom} - {ingredient.attributes.quantite}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            
            ))}
            <Center height='50px'>
            <Divider orientation='vertical' />
            </Center>
      </div>
      <div className="etape-end">
      <Heading as="h4" fontSize="xl" mb={2} color={'brand.300'} textAlign={'center'}>
        Félicitation, Vous avez terminé la recette !
      </Heading>
    </div>    
      
        
      </PageContainer>
      <Footer />
    </main>
  );
}

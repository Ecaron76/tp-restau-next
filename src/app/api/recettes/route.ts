// Importez les modules nécessaires
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Instanciez PrismaClient
const prisma = new PrismaClient();


export async function POST(req: Request) {
    const {
      description,
      nom,
      temps,
      difficulte,
      ingredients,
      etapes,
    } = await req.json();
  
    try {
        const newRecipe = await prisma.recette.create({
            data: {
              nom,
              description,
              difficulte,
              temps,
              ingredients: {
                create: ingredients.map((ingredient: { nom: any; quantity: any; }) => ({
                  nom: ingredient.nom,
                  quantity: ingredient.quantity,
                })),
              },
              etapes: {
                create: etapes.map((etape: { instructions: any; ingredients: any[]; }) => ({
                  instructions: etape.instructions,
                  ingredients: {
                    create: etape.ingredients.map((ingredient: { nom: any; quantity: any; }) => ({
                      nom: ingredient.nom,
                      quantity: ingredient.quantity,
                    })),
                  },
                })),
              },
            },
            include: {
              ingredients: true,
              etapes: {
                include: {
                  ingredients: true,
                },
              },
            },
          });
  
      return NextResponse.json({ data: newRecipe }, { status: 201 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });
    }
  }
  

  export async function GET() {
    try {
      const recettes = await prisma.recette.findMany({
        include: {
          ingredients: true, // Include the ingredients in the response
          etapes: true, // Include the steps in the response
        },
      });
      return NextResponse.json({ data: recettes }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: e }, { status: 500 });
    }
  }
  
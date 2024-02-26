-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recette" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulte" INTEGER NOT NULL,
    "temps" INTEGER NOT NULL,

    CONSTRAINT "Recette_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "recetteId" INTEGER NOT NULL,
    "etapeId" INTEGER,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etape" (
    "id" SERIAL NOT NULL,
    "instructions" TEXT NOT NULL,
    "recetteId" INTEGER NOT NULL,

    CONSTRAINT "Etape_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_recetteId_fkey" FOREIGN KEY ("recetteId") REFERENCES "Recette"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_etapeId_fkey" FOREIGN KEY ("etapeId") REFERENCES "Etape"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etape" ADD CONSTRAINT "Etape_recetteId_fkey" FOREIGN KEY ("recetteId") REFERENCES "Recette"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Aircraft" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "altitude" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "Aircraft_pkey" PRIMARY KEY ("id")
);

import { animalsListQuery } from "@/db/animalsData"
import type { Animal } from "../models/animal"
import { DEFAULT_ANIMALS_COUNT } from "@/constants/apiConstants"

export const getAnimalsList = async (): Promise<Animal[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Promise.all(
      [...new Array(DEFAULT_ANIMALS_COUNT)].map((_, index) =>
        Promise.resolve(animalsListQuery(index)),
      ),
    )
  } catch (error) {
    console.error("Error generating animals data:", error)
    throw new Error("Failed to generate animals data")
  }
}

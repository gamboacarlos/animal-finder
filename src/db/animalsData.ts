import { faker } from "@faker-js/faker"
import type { Animal } from "@/api/models/animal.ts"
import { ANIMALS_IMAGES } from "@/constants/dbConstants"

const getType = () => faker.animal.type()
const getUrl = () => faker.internet.url()
const getText = () => faker.lorem.sentences()
const getTitle = () => faker.animal.bird()
const getImage = () => {
  const randomIndex = faker.number.int({ min: 1, max: 4 })
  return ANIMALS_IMAGES[randomIndex]
}

export const animalsListQuery = (index: number): Animal => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(),
    description: getText(),
    image: getImage(),
  }
}

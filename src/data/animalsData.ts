import { faker } from "@faker-js/faker"
import { getAnimalsImages } from "./animalsImages.ts"

const getType = () => faker.animal.type()
const getUrl = () => faker.internet.url()
const getText = () => faker.lorem.sentences()
const getTitle = () => faker.animal.bird()
const getImage = () => getAnimalsImages()

export const animalsData = [...new Array(100)].map((_, index) => {
  const type = getType()
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(),
    description: getText(),
    image: getImage(),
  }
})

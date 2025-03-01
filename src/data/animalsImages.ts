import { faker } from "@faker-js/faker"

const animalsImages: Record<number, string> = {
  1: "https://imgs.search.brave.com/xM4yd4-hoLtrIcDWvZOUNSHh1ra95_RvET2lpLi80AU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE2L01pbXVzX3Bv/bHlnbG90dG9zMS5q/cGc",
  2: "https://imgs.search.brave.com/t7ohQedO5hoVqjJE4iYwHZlIxypeuf9vKlNa7HbUI7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2ZiL0FzaWxpZGFl/X2J5X2thZGF2b29y/LmpwZw",
  3: "https://imgs.search.brave.com/XCwFuJb15Lh4uStPPkmrB0Vt0WAT3i4z2RCieFACvzA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FkL0FtcGhpcHJp/b25fb2NlbGxhcmlz/XyhDbG93bl9hbmVt/b25lZmlzaClfYnlf/Tmlja19Ib2Jnb29k/LmpwZw",
  4: "https://imgs.search.brave.com/ymFM1mI0h3BYpWRk6dSmzaJjWz5b3jIzK3bfNLYmACc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgxLzIwMTJfU3Vl/ZGNoaW5lc2lzY2hl/cl9UaWdlci5KUEc",
}

export const getAnimalsImages = () => {
  const randomIndex = faker.number.int({ min: 1, max: 4 })
  return animalsImages[randomIndex]
}

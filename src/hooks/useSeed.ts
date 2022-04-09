import faker from '@faker-js/faker'
import { api } from '../services/api'
import { Game } from '../types/game'

export const useSeed = () => {
  const handleCreateGames = (n: number) => {
    Array.from({ length: n }).forEach((_, index) => {
      const fixedIndex = String(index).padStart(2, '0')

      const newGame = {
        title: faker.lorem.words(3),
        description: faker.lorem.words(10),
        images: [
          `https://picsum.photos/19${fixedIndex}/10${fixedIndex}?random`
        ],
        price: +faker.commerce.price(20, 500),
        category: faker.random.arrayElement(['RPG', 'Ação', 'Aventura']),
        operationSystem: faker.random.arrayElement([
          'PC',
          'PS4',
          'XBOX ONE',
          'Mobile'
        ])
      }

      api.post('/products', {
        ...newGame
      })
    })
  }

  const handleDeleteGames = async () => {
    const { data } = await api.get<Game[]>('/products')

    data.forEach(async (game) => {
      await api.delete(`/products/${game.id}`)
    })
  }

  return {
    handleCreateGames,
    handleDeleteGames
  }
}

import { RestaurantsDataProps } from '../types'

const API = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const getAllRestaurants = async (): Promise<RestaurantsDataProps[]> => {
  const res = await fetch(API)
  if (!res.ok) return []
  const data = await res.json()
  return data as RestaurantsDataProps[]
}

export const getRestaurantById = async (
  id: number
): Promise<RestaurantsDataProps | undefined> => {
  const res = await fetch(API)
  if (!res.ok) return undefined
  const data = (await res.json()) as RestaurantsDataProps[]
  return data.find((r) => r.id === id)
}

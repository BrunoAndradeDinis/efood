import { mockRestaurants } from '../utils/mockData'
import { RestaurantsDataProps } from '../types'

export const getFeaturedRestaurants = (): RestaurantsDataProps[] => {
  return mockRestaurants.filter((restaurant) => restaurant.destacado)
}

export const getAllRestaurants = (): RestaurantsDataProps[] => {
  return mockRestaurants
}

export const getRestaurantById = (
  id: number
): RestaurantsDataProps | undefined => {
  return mockRestaurants.find((restaurant) => restaurant.id === id)
}

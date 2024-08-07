import type { Character } from '@/types/character.type'
import type { ResponseApi } from '@/types/responseApi.type'
import { ref } from 'vue'
export const characters = ref<Character[]>([])

const BASE_URL = import.meta.env.VITE_BASE_URL

export const loading = ref(true)

export const loadCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/?page=${1}`)
    const data: ResponseApi = await response.json()

    if (!data) {
      console.error('Failed to load data...')
      return
    }

    characters.value = characters.value ? [...characters.value, ...data.results] : data.results
  } catch (error) {
    console.error('Error fetching characters:', error)
  } finally {
    loading.value = false
  }
}

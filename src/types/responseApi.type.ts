import type { Character } from './character.type'

export type ResponseApi = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

import { Player } from '../../player/models/Player';
export interface Team {
  id: string,
  name: string,
  description: string,
  coach: string,
  captain: string,
  uniform: string,
  logo: string,
  players: Player[]
}
import { Team } from "../../team/models/Team";

export interface Player {
  id: string,
  jpName: string,
  enName: string,
  bio: string,
  birthday: string,
  nationality: string,
  height: number,
  weight: number,
  teamId: string,
  teamNumber: number,
  position: string,
  thumb: string,
  team?: Team
}
import { Team } from "../../team/models/Team";

export interface Player {
  id: number,
  jp_name: string,
  en_name: string,
  bio: string,
  birthday: string,
  nationality: string,
  height: number,
  weight: number,
  teamId: number,
  teamNumber: number,
  position: string,
  thumb: string,
  team?: Team
}
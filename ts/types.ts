type SportType = "team" | "individual";

interface Sport {
  id: number;
  name: string;
  slug: string;
  type: SportType;
  players_per_team: number;
  match_duration_minutes: number;
  governing_body: string;
  competition: Record<string, string | number>;
}

interface Athlete {
  id: number;
  sport_id: number;
  team_id: number | null;
  first_name: string;
  last_name: string;
  nickname?: string | null;
  nationality: string;
  birth_date: string;
  height_cm: number;
  weight_kg: number;
  position?: string;
  weight_class?: string;
  stats: Record<string, number>;
}

interface Team {
  id: number;
  sport_id: number;
  name: string;
  short_name: string;
}

interface Rencontre {
  id: number;
  sport_id: number;
  type: string;
  date: string;
  home_team_id?: number;
  away_team_id?: number;
  home_score?: number;
  away_score?: number;
  fighter1_id?: number;
  fighter2_id?: number;
  winner_id?: number;
  venue: string;
  status: string;
  stage?: string;
  playoff_round?: string;
  card_position?: string;
}

interface FiltreAthlete {
  texte: string;
  position: string;
}

type PetitAthlete = Pick<Athlete, "id" | "first_name" | "last_name" | "sport_id">;
type FiltresActuels = Partial<FiltreAthlete>;

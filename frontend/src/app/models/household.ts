export interface HouseholdMember {
  id: string;
  display_name: string;
  email: string;
  is_admin: boolean;
  joined_at: string;
  points?: number;
  streak?: number;
  total_tasks_completed?: number;
}

export interface Household {
  id: string;
  name: string;
  invite_code: string;
  admin_id: string;
  member_count: number;
  is_full: boolean;
  members: HouseholdMember[];
  created_at?: string;
}

export interface CreateHouseholdPayload {
  name: string;
}

export interface JoinHouseholdPayload {
  invite_code: string;
}

import { Badge, computeBadges, formatStreak } from './badge';

/**
 * Per-member stats used by task-list to display badges and streaks
 * next to each assignee's avatar on task cards.
 */
export interface MemberStats {
  uid: string;
  streak: number;
  badges: Badge[];
  streakDisplay: string;
}

/**
 * Build a MemberStats object from raw Firestore user data.
 */
export function buildMemberStats(data: any): MemberStats {
  const streak = data['streak'] ?? 0;
  const points = data['points'] ?? 0;
  const totalTasks = data['total_tasks_completed'] ?? 0;

  return {
    uid: data['uid'] ?? '',
    streak,
    badges: computeBadges(totalTasks, points),
    streakDisplay: formatStreak(streak),
  };
}

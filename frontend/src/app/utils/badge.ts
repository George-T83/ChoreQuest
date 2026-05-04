/**
 * Badge utility
 * Computes deterministic badges from user stats already stored in Firestore.
 * No backend storage needed — badges are always derived from points and
 * total_tasks_completed at render time.
 */

export interface Badge {
  emoji: string;
  label: string;
  tooltip: string;
  category: 'tasks' | 'score';
}

// ── Tier definitions ────────────────────────────────────────────────────────
// Thresholds kept low for easy testing as requested.

const TASK_TIERS: { min: number; emoji: string; label: string }[] = [
  { min: 6, emoji: '🥇', label: 'Gold' },
  { min: 4, emoji: '🥈', label: 'Silver' },
  { min: 2, emoji: '🥉', label: 'Bronze' },
];

const SCORE_TIERS: { min: number; emoji: string; label: string }[] = [
  { min: 30, emoji: '🥇', label: 'Gold' },
  { min: 20, emoji: '🥈', label: 'Silver' },
  { min: 10, emoji: '🥉', label: 'Bronze' },
];

/**
 * Returns the current badges earned by a user.
 * Returns at most 2 badges (one per category).
 */
export function computeBadges(totalTasksCompleted: number, points: number): Badge[] {
  const badges: Badge[] = [];

  // Tasks badge
  for (const tier of TASK_TIERS) {
    if (totalTasksCompleted >= tier.min) {
      badges.push({
        emoji: tier.emoji,
        label: tier.label,
        tooltip: `Completed ${tier.min}+ tasks`,
        category: 'tasks',
      });
      break;
    }
  }

  // Score badge
  for (const tier of SCORE_TIERS) {
    if (points >= tier.min) {
      badges.push({
        emoji: tier.emoji,
        label: tier.label,
        tooltip: `Score of ${tier.min}+`,
        category: 'score',
      });
      break;
    }
  }

  return badges;
}

/**
 * Returns a streak display string with a flame emoji if streak >= 3.
 */
export function formatStreak(streak: number): string {
  if (streak <= 0) return '';
  return streak >= 3 ? `🔥 ${streak}` : `⚡ ${streak}`;
}

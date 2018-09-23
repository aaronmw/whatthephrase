const DEBUG_MODE = false;

export const MAX_SCORE = 7;
export const DEFAULT_TICK_RATE = 500;
export const FAST_TICK_RATE = 250;
let minRoundTime;
let maxRoundTime;
let minRushDuration;
let maxRushDuration;
if (DEBUG_MODE) {
	minRoundTime = 6 * 1000;
	maxRoundTime = 6 * 1000;
	minRushDuration = 5 * 1000;
	maxRushDuration = 5 * 1000;
} else {
	minRoundTime = 45 * 1000;
	maxRoundTime = 60 * 1000;
	minRushDuration = 5 * 1000;
	maxRushDuration = 10 * 1000;
}
export const MIN_ROUND_TIME = minRoundTime;
export const MAX_ROUND_TIME = maxRoundTime;
export const MIN_RUSH_DURATION = minRushDuration;
export const MAX_RUSH_DURATION = maxRushDuration;
export const NEXT_BUTTON_FREEZE_TIME = 2;
export const DEFAULT_LISTS = ["entertainment", "everyday life", "fun & games", "the world"];

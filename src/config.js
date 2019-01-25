const DEBUG_MODE = false;

let minRoundTime;
let maxRoundTime;
let minRushDuration;
let maxRushDuration;
let nextButtonFreezeTime;
if (DEBUG_MODE) {
  minRoundTime = 6 * 1000;
  maxRoundTime = 6 * 1000;
  minRushDuration = 3 * 1000;
  maxRushDuration = 3 * 1000;
  nextButtonFreezeTime = 1;
} else {
  minRoundTime = 45 * 1000;
  maxRoundTime = 60 * 1000;
  minRushDuration = 5 * 1000;
  maxRushDuration = 10 * 1000;
  nextButtonFreezeTime = 2 * 1000;
}
export const MIN_ROUND_TIME = minRoundTime;
export const MAX_ROUND_TIME = maxRoundTime;
export const MIN_RUSH_DURATION = minRushDuration;
export const MAX_RUSH_DURATION = maxRushDuration;
export const NEXT_BUTTON_FREEZE_TIME = nextButtonFreezeTime;
export const MAX_SCORE = 7;
export const DEFAULT_TICK_RATE = 500;
export const FAST_TICK_RATE = 250;
export const LONG_PRESS_DURATION = 0.375 * 1000;
export const DEFAULT_LISTS = {
  entertainment: true,
  'star wars': false,
  'everyday life': true,
  'fun & games': true,
  'the world': true
};

export const timings = {
  duration: 250,
  transitionOnEnter: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  transitionOnExit: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'
  // transitionOnEnter: 'ease-in-out',
  // transitionOnExit: 'ease-in-out'
};

export const colors = {
  background: '#00b2a9',
  foreground: '#fff',
  faded: 'rgba(255, 255, 255, 0.1)',
  highlight: 'rgba(255, 255, 255, 0.5)'
};

const borderWidth = '6px';

export const dimensions = {
  borderWidth: borderWidth,
  headerHeight: '20vw',
  pointButtonHeight: `(50vw - (${borderWidth} * 1.5))`
};

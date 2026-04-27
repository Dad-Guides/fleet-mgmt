/* js/data.js — re-exports all seed data */

export { BIKES } from './data/bikes.js';
export { PARTS_B1, PARTS_B2, PARTS_B3, PARTS_B4 } from './data/parts-b1-b4.js';
export { PARTS_B5, PARTS_B6, PARTS_B7 } from './data/parts-b5-b7.js';
export { TOOLS } from './data/tools.js';
export { INVENTORY } from './data/inventory.js';
export { SCHEDULES } from './data/schedules.js';

import { PARTS_B1, PARTS_B2, PARTS_B3, PARTS_B4 } from './data/parts-b1-b4.js';
import { PARTS_B5, PARTS_B6, PARTS_B7 } from './data/parts-b5-b7.js';

export const ALL_PARTS = [
  ...PARTS_B1, ...PARTS_B2, ...PARTS_B3, ...PARTS_B4,
  ...PARTS_B5, ...PARTS_B6, ...PARTS_B7,
];

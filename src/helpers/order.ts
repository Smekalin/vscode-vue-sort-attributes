export const PRIORITY_OTHER = 14;
export const PRIORITY_V_ON = 15;

export const order: { [s: string]: number } = {
  is: 0,
  ":is": 0,
  "v-for": 1,
  "v-if": 2,
  "v-else-if": 3,
  "v-else": 4,
  "v-show": 5,
  "v-cloak": 6,
  "v-pre": 7,
  "v-once": 8,
  id: 9,
  ref: 10,
  key: 11,
  slot: 12,
  "v-model": 13,
  other: PRIORITY_OTHER, // other attributes, v-bind, :
  "v-on": PRIORITY_V_ON,
  "@": PRIORITY_V_ON, // @
  "v-html": 16,
  "v-text": 17
};

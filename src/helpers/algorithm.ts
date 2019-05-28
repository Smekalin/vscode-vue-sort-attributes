import { order, PRIORITY_OTHER } from "./order";

/*
Алгоритм:
+ 1. Определяем тип узла a
+ 2. Определяем тип узла b
3. Если приоритеты равны - сравниваем как строки
4. Если не равны - просто численное сравнение
*/
export function sortAlgorithm(a: string, b: string): number {
  const priorityA = getPriority(a);
  const priorityB = getPriority(b);

  if (priorityA === priorityB) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  if (priorityA !== priorityB) {
    return priorityA > priorityB ? 1 : priorityA < priorityB ? -1 : 0;
  }

  return 0;
}

function getPriority(str: string): number {
  for (let key in order) {
    const reg = new RegExp(`^${key}`, "i");
    if (reg.test(str.trim())) return order[key];
  }
  return PRIORITY_OTHER;
}

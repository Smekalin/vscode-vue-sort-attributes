import { order, PRIORITY_OTHER, PRIORITY_V_ON } from "./order";

// как определить?
// v-bind -> :
// v-on -> @

/*

Алгоритм:
1. Определяем тип узла a
2. Определяем тип узла b
3. Если узел из orders, то берем приоритет из orders
4. Если узел не из orders, то если есть @ -> приоритет v-on
6. Если просто строка, то приоритет other
7. Для узла b повторяем 3-6
8. Если оба из other, то сравниваем просто строки
9. Иначе возвращаем сравнение приоритетов
*/
export function sortAlgorithm(a: string, b: string): number {
  console.log("!!a:", a, getPriority(a));
  console.log("!!b:", b, getPriority(b));
  if (order[a] && order[b]) if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function getPriority(str: string): number {
  for (let key in order) {
    const reg = new RegExp(`^${key}`, "i");
    if (reg.test(str)) return order[key];
  }
  return PRIORITY_OTHER;
}

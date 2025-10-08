export const cost = (books) => {
  const PRICE = 800;
  const DISCOUNTS = { 1: 0, 2: 0.05, 3: 0.10, 4: 0.20, 5: 0.25 };

  if (books.length === 0) return 0;

  const counts = [0, 0, 0, 0, 0];
  for (const book of books) {
    counts[book - 1]++;
  }
  const groups = [];
  while (counts.some(qty => qty > 0)) {
    let group = 0;
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        group++;
      }
    }
    groups.push(group);
  }
  while (groups.includes(5) && groups.includes(3)) {
    groups.splice(groups.indexOf(5), 1);
    groups.splice(groups.indexOf(3), 1);
    groups.push(4, 4);
  }
  const total = groups.reduce((sum, size) => {
    const discount = DISCOUNTS[size] || 0;
    return sum + size * PRICE * (1 - discount);
  }, 0);

  return Math.round(total);
};

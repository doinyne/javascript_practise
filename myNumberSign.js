const myNumberSign = (a) => {
  if (a === 0) {
    return 'zero';
  } else if (a < 0) {
  return 'negative';
  } else if (a > 0) {
    return 'positive';
  }
}

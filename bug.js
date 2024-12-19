function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is incorrect, it will never return 0
  }

  return a + b;
}
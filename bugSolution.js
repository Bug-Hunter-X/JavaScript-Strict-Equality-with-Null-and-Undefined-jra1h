function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Correctly handles both null and undefined
  }

  return a + b;
}
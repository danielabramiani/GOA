int digPow(int n, int p) {
  int sum = 0, digits = 0, found = 0, target = -1;
  
  for (int i = n, y = 0; i > 0; i /= 10, digits++);
  for (int i = n, y = p + (digits - 1); i > 0 && y >= p; sum += pow(i % 10, y), i /= 10, y--);
  for (int i = 1; i * n <= sum; target = (i * n == sum) ? i : -1, i++);
  return (target);
}
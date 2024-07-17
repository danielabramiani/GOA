#include <stdbool.h>
#include <stddef.h>

#define true  1
#define false 0

bool comp(int* a, int* b, size_t sizeArray) {
  bool match_found = true;
  int x;
  int b_array_matches = 0;
  if (a == NULL || b == NULL)
    return (false);
  for (x = 0; x < sizeArray && match_found == true; x++) {
  match_found = false;
    for (int y = 0; y < sizeArray && match_found == false; y++) { 
      if ((a[x] * a[x]) == b[y]) {
        match_found = true;
        b[y] = -1;
      }
    }
  }
  if (x == sizeArray && match_found == true)
    return (true);
  else
    return (false);
}
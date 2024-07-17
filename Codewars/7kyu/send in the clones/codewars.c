#include <inttypes.h>

struct clonewars_t
{
    uintmax_t clones;
    uintmax_t solved;
};

struct clonewars_t clonewars(int n)
{
    struct clonewars_t result;
    result.clones = 1;
    result.solved = 0;

    for (int i = n; i > 0; i--) {
      result.solved += result.clones * i;
      result.clones += (i > 1) ? result.clones : 0;
    }
    return (result);
}

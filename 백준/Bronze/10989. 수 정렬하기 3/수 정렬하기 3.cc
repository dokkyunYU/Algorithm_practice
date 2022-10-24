#include <iostream>

using namespace std;

int main(void)
{
  int num = 0, cnt = 0;
  int number[10000] = {};
  scanf("%d", &cnt);
  for (int i = 0; i < cnt; i++){
    scanf("%d", &num);
    number[num - 1]++;
  }
  for (int j = 1; j <= 10000; j++)
    for (int k = 0; k < number[j - 1]; k++)
      printf("%d\n", j);
  return 0;
}
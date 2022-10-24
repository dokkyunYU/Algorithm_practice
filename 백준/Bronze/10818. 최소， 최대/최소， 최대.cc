#include <iostream>

using namespace std;

int main(void)
{
  int max_num = -1000000, min_num = 1000000, num = 0, cnt = 0;
  cin >> cnt;
  while (cin >> num)
  {
    if (max_num < num)
      max_num = num;
    if (min_num > num)
      min_num = num;
  }
  cout << min_num << ' ' << max_num;
  return 0;
}
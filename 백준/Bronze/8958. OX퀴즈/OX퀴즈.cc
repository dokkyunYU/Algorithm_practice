#include <iostream>
#include <string>

using namespace std;

int main(void)
{
  string ss;
  int allsum = 0, num = 0, test_cnt = 0;
  cin >> test_cnt;
  cin.ignore();
  for (int i = 0; i < test_cnt; i++)
  {
    getline(cin, ss);
    allsum = 0;
    num = 0;
    for (char s : ss)
    {
      if (s == 'O')
        num++;
      else
        num = 0;
      allsum += num;
    }
    cout << allsum << '\n';
  }
  return 0;
}
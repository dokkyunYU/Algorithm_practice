#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main(void)
{
  int prev_num = 0, num = 0;
  string ss;
  stringstream sss;
  getline(cin, ss);
  sss << ss;
  sss >> num;
  prev_num = num;
  if (num == 1)
  {
    ss = "ascending";
    while (sss >> num)
    {
      if (prev_num + 1 != num)
      {
        ss = "mixed";
        break;
      }
      prev_num = num;
    }
    cout << ss;
  }

  else if (num == 8)
  {
    ss = "descending";
    while (sss >> num)
    {
      if (prev_num - 1 != num)
      {
        ss = "mixed";
        break;
      }
      prev_num = num;
    }
    cout << ss;
  }
  else
    cout << "mixed";
  return 0;
}
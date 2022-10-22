#include <iostream>
#include <string>
using namespace std;
int main(void)
{
  string num;
  int number = 1;
  int num_list[10] = {};
  while (getline(cin, num))
    number *= stod(num);
  num = to_string(number);
  number = 0;
  for (char numb : num)
    num_list[numb - '0']++;
  for (int n : num_list)
    cout << n << endl;
  return 0;
}
#include <iostream>
#include <string>

using namespace std;

int main(void)
{
  int num = 0;
  cin >> num;
  for (int i = 1; i <= 9; i++)
    cout << num << " * " << i << " = " << num * i << "\n";
  return 0;
}
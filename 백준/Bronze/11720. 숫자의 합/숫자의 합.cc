#include <iostream>
#include <string>

using namespace std;

int main(void)
{
  string numbers;
  int n = 0, allsum = 0;
  cin >> n >> numbers;
  for (char num : numbers)
    allsum += num - '0';
  cout << allsum;
  return 0;
}
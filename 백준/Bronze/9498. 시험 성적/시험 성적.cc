#include <iostream>
using namespace std;
int main(void)
{
  int score = 0;
  cin >> score;
  score /= 10;
  if (score == 9 || score == 10)
      cout << "A";
  else if (score == 8)
      cout << "B";
  else if (score == 7)
      cout << "C";
  else if (score == 6)
      cout << "D";
  else
      cout << "F";
  return 0;
}
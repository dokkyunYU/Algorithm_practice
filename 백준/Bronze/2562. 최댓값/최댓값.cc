#include <iostream>
#include <string>
using namespace std;
int main(void){
  int max_idx = 0, max_val = 0;
  string num;
  for (int i = 1; getline(cin, num); i++)
    if (stod(num) > max_val){
      max_idx = i;
      max_val = stod(num);
    }
  cout << max_val << endl << max_idx;
  return 0;
}
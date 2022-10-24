#include <iostream>
#include <string>

using namespace std;

int main(void){
  int test_cnt = 0, repeat_cnt = 0;
  string ss;
  cin >> test_cnt;
  cin.ignore();
  for (int i = 0; i < test_cnt; i++) {
    cin >> repeat_cnt >> ss;
    for (int j = 0; j < ss.length(); j++)
      for (int k = 0; k < repeat_cnt; k++)
        cout << ss.at(j);
    cout << "\n";
  }
  return 0;
}
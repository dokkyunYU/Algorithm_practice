#include <iostream>
using namespace std;
int main(void) {
    int a = 0, b = 0, test_cnt = 0;
    cin >> test_cnt;
    while(cin >> a >> b)
        cout << a + b << '\n';
    return 0;
}
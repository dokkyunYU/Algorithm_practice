#include <iostream>
using namespace std;
int main(void) {
    int a = 0, b = 0, answer = 0;
    cin >> a >> b;
    a = a / 100 + ((a / 10) % 10) * 10 + (a % 10) * 100;
    b = b / 100 + ((b / 10) % 10) * 10 + (b % 10) * 100;
    answer = (a > b) ? a : b;
    cout << answer;
    return 0;
}
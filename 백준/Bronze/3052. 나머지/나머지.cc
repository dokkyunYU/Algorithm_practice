#include <iostream>
using namespace std;
int main(void) {
    int a = 0, cnt = 0;
    int num[42] = {};
    while (cin >> a) {
        a %= 42;
        if (num[a])
            continue;
        num[a]++;
        cnt++;
    }
    cout << cnt;
    return 0;
}
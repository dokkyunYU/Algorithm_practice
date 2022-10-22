#include <iostream>
using namespace std;
int main(void) {
    int year = 0, yun = 0;
    cin >> year;
    if (!(year % 4))
        if (year % 100)
            yun = 1;
        else if (!(year % 400))
            yun = 1;
    cout << yun;
    return 0;
}

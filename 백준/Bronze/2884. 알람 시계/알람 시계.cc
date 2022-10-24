#include <iostream>
using namespace std;
int main(void) {
    int hour = 0, minute = 0;
    cin >> hour >> minute;
    if (minute < 45) {
        hour = (hour == 0) ? 23 : hour - 1;
        minute = 60 - (45 - minute);
    }
    else
        minute -= 45;
    cout << hour << " " << minute;
    return 0;
}
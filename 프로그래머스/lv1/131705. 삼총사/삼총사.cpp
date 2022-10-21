#include <iostream>
#include <string>
#include <vector>

using namespace std;

int g_allcnt = 0;

void selection(vector<int> number, int idx=0, int allsum=0, int cnt=0) {
    if (cnt == 3) {
        if (allsum == 0)
            g_allcnt++;
        return;
    }
    if (idx >= number.size())
        return;
    selection(number, idx+1, allsum + number[idx], cnt+1);
    selection(number, idx+1, allsum, cnt);
    return;
}

int solution(vector<int> number) {
    selection(number);
    return g_allcnt;
}
import java.util.List;
import java.util.ArrayList;
import java.lang.Math;

class Solution {
    public int[] solution(String[] wallpaper) {
        String[] line;
        int x1=50,x2=0,y1=50,y2=0;
        for (int i = 0; i < wallpaper.length; i++) {
            for (int j = 0; j < wallpaper[i].length(); j++)
                if (wallpaper[i].charAt(j) == '#') {
                    x1 = Math.min(x1, i);
                    x2 = Math.max(x2, i + 1);
                    y1 = Math.min(y1, j);
                    y2 = Math.max(y2, j + 1);
                }
        }
        int[] answer = {x1,y1,x2,y2};
        return answer;
    }
}
import java.util.List;
import java.util.ArrayList;
import java.lang.Math;

class Pair {
    int x;
    int y;
    Pair(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Solution {
    public int[] solution(String[] wallpaper) {
        List<Pair> locations = new ArrayList<Pair>();
        String[] line;
        int x1=100,x2=0,y1=100,y2=0;
        for (int i = 0; i < wallpaper.length; i++) {
            line = wallpaper[i].split("");
            for (int j = 0; j < line.length; j++)
                if (line[j].equals("#")) {
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
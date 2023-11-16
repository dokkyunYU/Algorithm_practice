import java.util.Stack;
class Solution
{
    public int solution(String s)
    {
        Stack<Character> stack = new Stack<>();
        for (char i : s.toCharArray()) {
            if (!stack.empty()) {
                char prev = stack.pop();
                if (prev != i) {
                    stack.push(prev);
                    stack.push(i);
                }
            } else {
                stack.push(i);
            }
        }
        return stack.empty() ? 1 : 0;
    }
}
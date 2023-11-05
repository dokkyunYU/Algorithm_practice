class Solution {
    public String solution(String phone_number) {
        int length = phone_number.length();
        StringBuilder s = new StringBuilder();
        for (int i = 0; i < length - 4; i++)
            s.append("*");
        s.append(phone_number.substring(length-4,length));
        return s.toString();
    }
}
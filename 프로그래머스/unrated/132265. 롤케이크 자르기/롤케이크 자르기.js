function solution(topping) {
    let answer = 0;
    let topp1 = {};
    let topp2 = {};
    let len1 = 0
    let len2 = 0
    for (let i = 0; i < topping.length; i++) {
        if(!(topp2[topping[i]]))
            topp2[topping[i]] = 1;
        else
            topp2[topping[i]]++;
        }
    len2 = Object.keys(topp2).length;
    for (let i = 0; i < topping.length; i++) {
        if (!(topp1[topping[i]])) {
            topp1[topping[i]] = 1;
            len1++;
        }
        else
            topp1[topping[i]]++;
        if (topp2[topping[i]] === 1) {
            delete topp2[topping[i]];
            len2--;
        }
        else
            topp2[topping[i]]--;
        if (len1 === len2)
            answer++;
    }
    return answer;
}
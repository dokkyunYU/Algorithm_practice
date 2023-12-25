function solution(my_strings, parts) {
    return my_strings.reduce((acc,cur,idx) => {
        const [s,e] = parts[idx];
        return acc + cur.slice(s, e + 1)
    },'')
}
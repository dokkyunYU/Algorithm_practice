function solution(order) {
    return order.reduce((acc,cur) => "cafelatte".includes(cur.replace(/hot|ice/g, '')) ? acc + 5000 : acc + 4500, 0)
}
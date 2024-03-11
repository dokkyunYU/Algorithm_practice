function solution(s) {
    return s.slice(2, s.length - 2).split("},{").map(cur => cur.split(",")).sort((a,b) => a.length - b.length).reduce((acc,cur) => acc.concat(+cur.find(e => !acc.includes(+e))),[])
}
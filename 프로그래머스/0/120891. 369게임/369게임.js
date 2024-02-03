function solution(order) {
    return ('' + order).match(/[369]/g)?.length ?? 0
}
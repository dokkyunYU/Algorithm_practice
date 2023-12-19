function solution(num_list) {
    const [beflast, last] = num_list.slice(num_list.length - 2);
    return num_list.concat([last > beflast ? last - beflast : 2 * last]);
}
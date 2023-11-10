export function getUniqueVal(list, key) {
    return [...new Set(list.map((item) => item[key]))].sort()
}

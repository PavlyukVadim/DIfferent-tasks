function findUnique(numbers) {
    return numbers.sort((a, b) => a - b).filter((n, currIndex, arr) => n != arr[currIndex + 1] && n != arr[currIndex - 1])[0]
}

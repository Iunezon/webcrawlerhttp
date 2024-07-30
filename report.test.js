const { sortPages, printReport } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://planetmorph.weebly.com/morph.html': 1,
        'https://planetmorph.weebly.com': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://planetmorph.weebly.com', 3],
        ['https://planetmorph.weebly.com/morph.html', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://planetmorph.weebly.com/morph.html': 1,
        'https://planetmorph.weebly.com': 3,
        'https://planetmorph.weebly.com/a': 5,
        'https://planetmorph.weebly.com/b': 7,
        'https://planetmorph.weebly.com/c': 2
    }
    const actual = sortPages(input)
    const expected = [
        ['https://planetmorph.weebly.com/b', 7],
        ['https://planetmorph.weebly.com/a', 5],
        ['https://planetmorph.weebly.com', 3],
        ['https://planetmorph.weebly.com/c', 2],
        ['https://planetmorph.weebly.com/morph.html', 1]
    ]
    expect(actual).toEqual(expected)
})
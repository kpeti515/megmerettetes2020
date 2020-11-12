import { X, arraySolution } from '../tasks/week1'
const a = 97
const c = 11
const modDivider = 1048576
test('return the actual X value RND97,11(0)', () => {
  expect(X(0, a, c, modDivider)).toBe(11)
})

test('return the actual X value RND97,11(1)', () => {
  expect(X(1, a, c, modDivider)).toBe(1078)
})

test('return the actual X value RND97,11(2)', () => {
  expect(X(2, a, c, modDivider)).toBe(104577)
})

test('return the actual X value RND97,11(499)', () => {
  expect(X(499, a, c, modDivider)).toBe(894780)
})

test('return the actual X value RND97,11(999)', () => {
  expect(X(999, a, c, modDivider)).toBe(647288)
})

test('return the actual sum value up to RND97,11(2)', () => {
  expect().toBe(1089)
})
test('return the actual sum value up to RND97,11(2)', () => {
  expect().toBe(513866332)
})
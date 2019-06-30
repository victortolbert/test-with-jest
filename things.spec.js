test('expectations', () => {
  expect('some string').toBe('some string')
  expect(12).toBe(12)
  expect([7]).toEqual([7])

  const result = {
    value: Date.now()
  }

  expect(result).toEqual({
    value: expect.any(Number)
  })
})

import { foo } from '/main'

describe('foo', () => {
  it('returns its name', () => {
    expect(foo()).toEqual('foo')
  })
})

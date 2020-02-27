import { foo } from 'index'

describe('foo', () => {
  it('returns its name', () => {
    expect(foo()).toEqual('foo')
  })
})

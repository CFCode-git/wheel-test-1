import classes from '../classes'

describe('classes', () => {
  it('接受一个className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受两个className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('接受undefined，结果不会出现undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受各种值', () => {
    const result = classes('a', false, null, '你好', undefined)
    expect(result).toEqual('a 你好')
  })
  it('接受0个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})

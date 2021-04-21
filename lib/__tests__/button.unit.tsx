import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button/button';

describe('Button.tsx', () => {
  it('第一个测试用例', () => {
    const json = renderer.create(<Button/>).toJSON();
    expect(json).toMatchSnapshot()
  });
});

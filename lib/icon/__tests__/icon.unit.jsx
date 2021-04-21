import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';
import {mount} from 'enzyme'

describe('Icon.tsx', () => {
  it('render successful', () => {
    const json = renderer.create(<Icon name="setting"/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="setting" onClick={fn}/>)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  });
});

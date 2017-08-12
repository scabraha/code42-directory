import React from 'react';
import Header from '../../../components/header/header';
import { renderShallow } from '../../TestUtils';

describe('Header', () => {
  it('Renders the header and ensures its correct', () => {
    const actual = renderShallow(<Header />);
    expect(actual.type).toBe('header');
    expect(actual.props.className).toBe('header');
    expect(actual.props.role).toBe('banner');
    expect(actual.props.children.type).toBe('h1');
    expect(actual.props.children.props.children).toBe('Code42 Directory');
  });
});

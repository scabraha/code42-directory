import React from 'react';
import App from '../app';
import Header from '../components/header/header';
import MemberContainer from '../components/member-view';
import ContentContainer from '../components/content-view';
import { renderShallow } from './TestUtils';

jest.mock('../components/member-view', () => 'MemberContainer');
jest.mock('../components/content-view', () => 'ContentContainer');

describe('App', () => {
  it('Renders the header and ensures its correct', () => {
    const onLoadSpy = jasmine.createSpy('onLoad');
    
    const actual = renderShallow(<App onLoad={onLoadSpy}/>);

    expect(onLoadSpy).toHaveBeenCalled();
    const children = actual.props.children;
    expect(children[0]).toEqual(<Header />);
    expect(children[1]).toEqual(<MemberContainer />);
    expect(children[2].props.children).toEqual(<ContentContainer />);
  });
});


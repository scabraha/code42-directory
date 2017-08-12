import React from 'react';
import LoadingIndicator from '../../../components/loading-indicator/loading-indicator';
import { renderShallow } from '../../TestUtils';

describe('Loading Indicator', () => {
  it('Renders the indicator and ensures the icon is correct', () => {
    const actual = renderShallow(<LoadingIndicator />);
    expect(actual).toEqual(
      <i className="loading-spinner material-icons">&#xE863;</i>
    );
  });
});

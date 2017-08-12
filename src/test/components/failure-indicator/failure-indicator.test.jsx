import React from 'react';
import FailureIndicator from '../../../components/failure-indicator/failure-indicator';
import { renderShallow } from '../../TestUtils';

describe('Failure Indicator', () => {
  it('Renders the indicator and ensures the icon is correct', () => {
    const actual = renderShallow(<FailureIndicator />);
    expect(actual).toEqual(
      <i className="material-icons">&#xE14C;</i>
    );
  });
});

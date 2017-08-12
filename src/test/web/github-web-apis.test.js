import { getMembersForOrg } from '../../web/github-web-apis';
import $ from 'jquery';

describe('GitHub Web APIs', () => {
  it('Calls getMembersForOrg and ensures the url and callbacks are correct', () => {
    const failSpy = jasmine.createSpy('failSpy');
    const doneSpy = jasmine.createSpy('doneSpy').and.returnValue({ fail: failSpy });
    spyOn($, 'getJSON').and.returnValue({ done: doneSpy });

    const onSuccess = jasmine.createSpy('onSuccess');
    const onFailure = jasmine.createSpy('onFailure');
    
    getMembersForOrg('test', onSuccess, onFailure)
    expect($.getJSON).toHaveBeenCalledWith('http://api.github.com/orgs/test/members')

    doneSpy.calls.mostRecent().args[0]('testData');
    expect(onSuccess).toHaveBeenCalledWith('testData');
    
    failSpy.calls.mostRecent().args[0]();
    expect(onFailure).toHaveBeenCalled();
  })
})

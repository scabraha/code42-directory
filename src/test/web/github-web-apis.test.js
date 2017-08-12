import $ from 'jquery';
import { getMembersByOrg, getDetailsByUserId, getReposByUserId } from '../../web/github-web-apis';

describe('GitHub Web APIs', () => {
  it('Calls getMembersByOrg and ensures the url and callbacks are correct', () => {
    const failSpy = jasmine.createSpy('failSpy');
    const doneSpy = jasmine.createSpy('doneSpy').and.returnValue({ fail: failSpy });
    spyOn($, 'getJSON').and.returnValue({ done: doneSpy });

    const onSuccess = jasmine.createSpy('onSuccess');
    const onFailure = jasmine.createSpy('onFailure');

    getMembersByOrg('test', onSuccess, onFailure);
    expect($.getJSON).toHaveBeenCalledWith('http://api.github.com/orgs/test/members');

    doneSpy.calls.mostRecent().args[0]('testData');
    expect(onSuccess).toHaveBeenCalledWith('testData');

    failSpy.calls.mostRecent().args[0]();
    expect(onFailure).toHaveBeenCalled();
  });

  it('Calls getDetailsByUserId and ensures the url and callbacks are correct', () => {
    const failSpy = jasmine.createSpy('failSpy');
    const doneSpy = jasmine.createSpy('doneSpy').and.returnValue({ fail: failSpy });
    spyOn($, 'getJSON').and.returnValue({ done: doneSpy });

    const onSuccess = jasmine.createSpy('onSuccess');
    const onFailure = jasmine.createSpy('onFailure');

    getDetailsByUserId('test', onSuccess, onFailure);
    expect($.getJSON).toHaveBeenCalledWith('http://api.github.com/users/test');

    doneSpy.calls.mostRecent().args[0]('testData');
    expect(onSuccess).toHaveBeenCalledWith('testData');

    failSpy.calls.mostRecent().args[0]();
    expect(onFailure).toHaveBeenCalled();
  });

  it('Calls getReposByUserId and ensures the url and callbacks are correct', () => {
    const failSpy = jasmine.createSpy('failSpy');
    const doneSpy = jasmine.createSpy('doneSpy').and.returnValue({ fail: failSpy });
    spyOn($, 'getJSON').and.returnValue({ done: doneSpy });

    const onSuccess = jasmine.createSpy('onSuccess');
    const onFailure = jasmine.createSpy('onFailure');

    getReposByUserId('test', onSuccess, onFailure);
    expect($.getJSON).toHaveBeenCalledWith('http://api.github.com/users/test/repos');

    doneSpy.calls.mostRecent().args[0]('testData');
    expect(onSuccess).toHaveBeenCalledWith('testData');

    failSpy.calls.mostRecent().args[0]();
    expect(onFailure).toHaveBeenCalled();
  });
});

import ShallowRenderer from 'react-test-renderer/shallow';

/**
 * Shallowly renders a react component
 * @param {Component} component The react component to shallowly render
 */
export function renderShallow(component) {
  const renderer = new ShallowRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

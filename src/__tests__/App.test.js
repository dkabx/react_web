import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from '../App';

describe('<App />', () => {
  test('App renders properly', () => {
    const app = renderer.create(<App />)
    expect(app.toJSON()).toMatchSnapshot()
  })
})

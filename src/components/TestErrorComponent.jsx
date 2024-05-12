// src/components/TestErrorComponent.jsx
import React from 'react';

class TestErrorComponent extends React.Component {
  componentDidMount() {
    // Simulate a JS error
    throw new Error('Simulated error');
  }

  render() {
    return (
      <div>
        <h1>If you see this, something went wrong.</h1>
      </div>
    );
  }
}

export default TestErrorComponent;

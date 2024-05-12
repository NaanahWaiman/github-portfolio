// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Repository from './components/Repository';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import TestErrorComponent from './components/TestErrorComponent';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo/:username/:repoName" element={<Repository />} />
          <Route path="/test-error" element={<TestErrorComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

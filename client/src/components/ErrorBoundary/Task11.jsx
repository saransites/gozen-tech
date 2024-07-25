import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const FallbackComponent = ({ error }) => (
  <div role="alert" className="p-4">
    <p>Something went wrong...</p>
    <pre className="text-xl text-red-600">{error.message}...</pre>
  </div>
);

const MyErrorBoundary = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={FallbackComponent}
  >
    {children}
  </ErrorBoundary>
);

export default MyErrorBoundary;
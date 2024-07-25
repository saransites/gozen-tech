import React, { useState, useEffect } from 'react';

function withLoading(WrappedComponent) {
  return function WithLoadingComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    return loading ? <div> data is Loading...</div> : <WrappedComponent {...props} />;
  };
}

// Example usage
function MyComponent({text}) {
  return <div>{text}</div>;
}

const MyComponentWithLoading = withLoading(MyComponent);

export default function Task5() {
  return (
    <div>
      <MyComponentWithLoading text="Hello! this is HOC component"/>
    </div>
  );
}

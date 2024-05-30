'use client';

import { useEffect, useState } from 'react';

function LiveDemo() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return state && <iframe src="http://localhost" height="100%" />;
}
export default LiveDemo;

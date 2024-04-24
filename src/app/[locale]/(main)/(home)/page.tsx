import React from 'react';

import AddArticle from './components/dialog';
import Topcis from './components/topics';

const Page = () => {
  return (
    <>
      <div className="flex justify-end">
        <AddArticle />
      </div>
      <Topcis />
    </>
  );
};
export default Page;

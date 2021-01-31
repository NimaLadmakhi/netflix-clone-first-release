/** @format */

import Navbar from 'components/header';
import React from 'react';

const HeaderLayout = ({ children }) => {
     return (
          <>
               <Navbar />
               {children}
          </>
     );
};

export default HeaderLayout;

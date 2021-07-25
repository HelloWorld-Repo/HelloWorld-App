import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import themeModes from '../enums/themeModes';

const ApplicationContext = createContext({});

const ApplicationProvider = ({ children }) => {
  const [context, setContext] = useState({
    user: {},
    mode: themeModes.LIGHT,
    token: null,
  });

  return (
    <ApplicationContext.Provider value={{ context, setContext }}>
      {children}
    </ApplicationContext.Provider>
  );
};

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useApplicationProvider = () => useContext(ApplicationContext);

export { ApplicationContext, ApplicationProvider, useApplicationProvider };

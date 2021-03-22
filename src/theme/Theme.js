import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import defaultTheme from "./defaultTheme";

const Theme = createContext({});

const useTheme = () => useContext(Theme);

const ThemeProvider = ({ children, theme: initialTheme = defaultTheme }) => {
  const [theme, setTheme] = useState(initialTheme);

  const setThemeProp = useCallback(
    (path, value) => {
      const x = _.set(_.cloneDeep(theme), path, value);

      setTheme(x);
    },
    [theme, setTheme],
  );

  return (
    <Theme.Provider value={{ theme, setTheme, setThemeProp }}>
      {children}
    </Theme.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.objectOf(PropTypes.object),
};

export { useTheme, ThemeProvider };

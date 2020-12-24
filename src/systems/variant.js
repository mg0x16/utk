export default config => {
  return {
    "": props => {
      return config[props.variant];
    },
  };
};

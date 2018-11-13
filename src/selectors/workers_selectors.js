const workersSelector = (state, props) => {
  const { admin, workers } = state;
  return {  workers };
};

export default workersSelector;

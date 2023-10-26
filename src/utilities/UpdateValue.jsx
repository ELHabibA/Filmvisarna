export const updateValue = (type, newValue, setAdults, setKids, setRetired) => {
  const updateFunctions = {
    adults: setAdults,
    kids: setKids,
    retired: setRetired,
  };

  const updateFunction = updateFunctions[type];
  if (updateFunction) {
    updateFunction(newValue);
  }
};

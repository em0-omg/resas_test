export const convertPrefCodes = (prefCodes: number[]) => {
  if (!prefCodes.length) {
    return {
      prefCode: 1,
      addArea: undefined,
    };
  }

  const [prefCode, ...addAreaCodes] = prefCodes;
  const addArea =
    addAreaCodes.length > 0
      ? addAreaCodes
          .map((addAreaCode) => addAreaCode.toString() + '_')
          .join(',')
      : undefined;

  return {
    prefCode,
    addArea,
  };
};

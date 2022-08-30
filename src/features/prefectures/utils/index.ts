export const convertPrefCodes = (prefCodes: number[]) => {
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

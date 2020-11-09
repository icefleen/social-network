export const updateObjectInArray = (
  items,
  objPropName,
  objPropValue,
  newObjProps
) =>
  items.map((item) =>
    item[objPropName] === objPropValue
      ? {
          ...item,
          ...newObjProps,
        }
      : item
  );

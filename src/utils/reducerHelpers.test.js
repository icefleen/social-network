it("object of array must be updated", () => {
  const updateObjectInArray = (items, objPropName, objPropValue, newObjProps) =>
    items.map((item) =>
      item[objPropName] === objPropValue
        ? {
            ...item,
            ...newObjProps,
          }
        : item
    );

  const array = [
    { id: 0, name: "Alex" },
    { id: 1, name: "Alex" },
    { id: 2, name: "Alex" },
  ];

  expect(
    updateObjectInArray(array, "id", 0, { name: "New Alex" })[0].name
  ).toBe("New Alex");
});

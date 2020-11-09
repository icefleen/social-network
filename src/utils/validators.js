export const required = (value) => (value ? undefined : "Field is required");

const maxLength = (value, length) =>
  value && value.length <= length
    ? undefined
    : `Max length is ${length} symbols`;

export const maxLength300 = (value) => maxLength(value, 300);

export const validateTodo = (values) => {
  const errors = {};
  if (!values.text) {
    errors.text = "Обов’язкове поле";
  } else if (values.text.length < 5) {
    errors.text = "Має бути не менше 5 символів";
  }
  return errors;
};

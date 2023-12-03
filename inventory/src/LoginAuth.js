function Validation(values) {
    let errors = {};
    const usernamePattern = /^[a-zA-Z0-9]+$/;
  
    if (values.username === '') {
      errors.username = 'Username should not be empty';
    } else if (!usernamePattern.test(values.username)) {
      errors.username = 'Invalid characters in username';
    } else {
      errors.username = '';
    }
  
    if (values.password === '') {
      errors.password = 'Password should not be empty';
    } else {
      errors.password = '';
    }
  
    return errors;
  }
  
  export default Validation;
  
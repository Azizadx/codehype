const Validator = require("validator");
const isEmpty = require("is-empty");

exports.validateRegisterInput = (data) => {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";
// Name checks
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
// Password lengths
 if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
     errors.password = "Password must be at least 6 characters";
   }
// if (!Validator.equals(data.password, data.confirmPassword)) {
//     errors.confirmPassword = "Passwords must match";
//   }
return {
    errors,
    isValid: isEmpty(errors)
  };
};


exports.validateLoginInput = (data) => {
    let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.password = !isEmpty(data.password) ? data.password : "";
  // Email checks
    if (Validator.isEmpty(data.userName)) {
      errors.userName = "username field is required";
    } 
  // Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
  return {
      errors,
      isValid: isEmpty(errors)
    };
  };

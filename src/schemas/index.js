import * as Yup from "yup";

export const signUpSchema = Yup.object({
  organization: Yup.string()
    .min(3)
    .max(40)
    .required("please enter the organization"),
  program: Yup.string().min(3).max(30).required("please enther the program"),
});

import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "../LoginForm/LoginForm.module.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  // const userSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(3, "Name must be at least 3 characters")
  //     .max(50, "Name must be at most 50 characters")
  //     .required("Required"),

  //   number: Yup.string()
  //     .min(3, "Number must be at least 3 characters")
  //     .max(50, "Number must be at most 50 characters")
  //     .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
  //     .required("Required"),
  // });
  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then((data) => {
        console.log(data);
        toast.success("You logged in succesfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops something went wrong!");
      });
    actions.resetForm();
  };
  //Dentest@mail.com
  //Dentest
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        // validationSchema={userSchema}
      >
        <Form autoComplete="off" className={css.formik}>
          <h2 className={css.login}>Log In</h2>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.btn}>
            Login
          </button>
          <p className={css.smalltext}>
            Dont have account yet?
            <Link to="/registration" className={css.linktext}>
              Register for free
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
}

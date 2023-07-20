import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/styles/Form/_Form.scss";
import ContactFormSvg from "../../assets/svg/ContactForm/ContactFormSvg";
import { IconSvg } from "../../assets/svg/Logo/IconSvg";

function FormContact() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less...")
        .required("Required"),
      email: Yup.string().email("Invalid email address.").required("Required"),
      message: Yup.string()
        .max(1000, "1000 characters limit.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="FormContact-Container">
        <div className="FormContact-LogoSvg">
          <IconSvg />
          <h2>Thrumyeyes</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className="FormContact-Form">
          <div className="FormContact-FormWrapper">
            <label htmlFor="fullName" className="FormContact-LabelItem">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="James Franco"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className="FormContact-InputItem"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="FormContact-Events--Error">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          <div className="FormContact-FormWrapper">
            <label htmlFor="email" className="FormContact-LabelItem">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Jamesfranco@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="FormContact-InputItem"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="FormContact-Events--Error">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="FormContact-FormWrapper">
            <label htmlFor="message" className="FormContact-LabelItem">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Dear Luis, ..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="FormContact-InputItem"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="FormContact-Events--Error">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button type="submit" className="FormContact-SubmitBtn">
            Submit
          </button>
        </form>
      </div>

      <div className="FormContact-LayoutImg">
        <ContactFormSvg />
      </div>
    </>
  );
}

export default FormContact;

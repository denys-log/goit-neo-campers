import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Textarea from '../../../../components/Textarea/Textarea';
import ErrorMessage from '../../../../components/ErrorMessage/ErrorMessage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.string().required('Required'),
  comment: Yup.string().min(3, 'Too Short!').max(500, 'Too Long!'),
});

export default function CamperDetailsContactForm() {
  const handleSubmit = (_, actions) => {
    toast.success('You have successfully booked your campervan!');
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className="border rounded-[10px] py-[44px] px-[57px]">
        <h3 className="text-h3 mb-2">Book your campervan now</h3>
        <p className="text-gray mb-6">
          Stay connected! We are always ready to help you.
        </p>

        <div className="mb-[14px]">
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            component={Input}
          />
          <ErrorMessage name="name" />
        </div>

        <div className="mb-[14px]">
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            component={Input}
          />
          <ErrorMessage name="email" />
        </div>

        <div className="mb-[14px]">
          <Field
            type="date"
            name="date"
            placeholder="Booking date*"
            component={Input}
          />
          <ErrorMessage name="date" />
        </div>

        <Field
          type="text"
          name="comment"
          placeholder="Comment"
          component={Textarea}
        />
        <ErrorMessage name="comment" />

        <div className="flex justify-center mt-6">
          <Button type="submit">Send</Button>
        </div>
      </Form>
    </Formik>
  );
}

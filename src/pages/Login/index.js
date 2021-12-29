import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { router } from 'umi';
import { login } from '../../services';
import styles from './index.less';
export default () => (
  <div className={styles.login}>
    <h2>Sign In</h2>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('username required'),
        password: Yup.string().required('password required'),
      })}
      onSubmit={async values => {
        const { data } = await login(values);
        if (data) {
          localStorage.setItem('accessToken', data?.accessToken);
          router.push('/');
        }
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className={styles.form}>
            <table border="0">
              <tbody>
                <tr>
                  <td>username:</td>
                  <td>
                    <Field id="username" name="username" placeholder="username" />
                  </td>
                </tr>
                <tr>
                  <td>password:</td>
                  <td>
                    <Field id="password" type="password" name="password" placeholder="password" />
                  </td>
                </tr>
                <tr>
                  <td>admin account: </td>
                  <td>admin/admin</td>
                </tr>
                <tr>
                  <td>general account: </td>
                  <td>nickzheng/nickzheng</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.actions}>
              <button type="submit">Sign In</button>
              {errors.username && touched.username ? <div>{errors.username}</div> : null}
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
          </Form>
        );
      }}
    </Formik>
  </div>
);

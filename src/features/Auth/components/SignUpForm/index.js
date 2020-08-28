import { Button, Grid, makeStyles } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";

import InputField from "custom-fields/InputField";
import PropTypes from "prop-types";
import React from "react";

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  handleSubmit: null,
};

const useStyles = makeStyles({
  signUpButton: {
    color: "white",
    marginTop: "30px",
  },
});

function SignUpForm(props) {
  const classes = useStyles();
  const { initialValues, handleSubmit } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => {
        const { values } = formikProps;

        return (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FastField
                  name="firstName"
                  component={InputField}
                  label="First Name"
                  value={values.firstName}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FastField
                  name="lastName"
                  component={InputField}
                  label="Last Name"
                  value={values.lastName}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>

            <FastField
              name="email"
              component={InputField}
              label="Email Address"
              value={values.email}
              variant="outlined"
              margin="normal"
            />

            <FastField
              name="password"
              component={InputField}
              type="password"
              label="Password"
              value={values.password}
              variant="outlined"
              margin="normal"
            />

            <FastField
              name="confirmPassword"
              component={InputField}
              type="password"
              label="Confirm Password"
              value={values.confirmPassword}
              variant="outlined"
              margin="normal"
            />

            <Button
              className={classes.signUpButton}
              type="submit"
              size="large"
              color="primary"
              variant="contained"
              fullWidth
            >
              Sign up
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;

import { useState, useEffect, useRef } from "react"
import axios from 'axios';

import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { baseUrl } from "./../../core"

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .max(10, 'No more then 10')
        .required('Password is required'),
    address: yup
        .string('Enter your Address')
        .min(10, 'Address should be of minimum 10 characters length')
        .max(50, 'No more then 50')
        .required('Address is required'),
    number: yup
        .number('Enter your Number')
        // .min(11, 'Number should be of minimum 11 characters length')
        // .max(20, 'No more then 15')
        .required('Number is required'),
});

function SignUp() {

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            address: '',
            email: '',
            password: '',
            number: '',
        },
        onSubmit: function (values) {
            axios.post(`${baseUrl}/api/v1/signup`, {
                name: values.name,
                address: values.address,
                number: values.number,
                email: values.email,
                password: values.password,
            })
                .then((res) => {
                    console.log("res: ", res.data);
                })
        }
    });

    return (
        <div style={{ margin: "0 20% 0 20%" }}>
            <h1 style={{ textAlign: "center", color: "whitesmoke", textDecoration: "5px solid underline",textDecorationColor:"brown" }}>SignUp</h1>
            <br />
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>

                    <TextField
                        fullWidth
                        color="primary"
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"

                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}

                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        fullWidth
                        color="primary"
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"

                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}

                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />

                    <TextField
                        fullWidth
                        color="primary"
                        id="outlined-basic"
                        label="Number"
                        variant="outlined"

                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}

                        error={formik.touched.number && Boolean(formik.errors.number)}
                        helperText={formik.touched.number && formik.errors.number}
                    />

                    <TextField
                        fullWidth
                        color="primary"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"

                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}

                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        color="primary"
                        id="filled-basic"
                        label="Password"
                        variant="outlined"
                        type="password"

                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}

                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <Button fullWidth variant="contained" color="primary" type="submit">Signup</Button>
                </Stack>

            </form>

        </div>
    );
}
export default SignUp;
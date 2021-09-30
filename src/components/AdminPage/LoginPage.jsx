import React from 'react'
import { useFormik } from "formik"
import EEPCReducer from '../redux/eepcReducer';
import { useDispatch, useSelector } from 'react-redux';
import firebase from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Redirect } from 'react-router-dom';

function LoginPage() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch(EEPCReducer)

    const formik = useFormik({

        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch({
                        type: "login",
                        payload: user.uid
                    })
                    localStorage.setItem("token", user.accessToken)
                    alert("You are logged in")
                })
                .catch((error) => {
                    alert("Wrong Username Or Password")
                });
        }
    })

    if (!user) {
        return (
            <div className="flex items-center justify-center bg-gray-300 h-full py-12">
                <div className="w-full mx-2 md:mx-0 max-w-md">
                    <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                        <div
                            className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                        >
                            Login Here
                </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="email"
                            >
                                Email
                  </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                htmlFor="title"
                            >
                                Password
                  </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                required
                                placeholder="*******"
                            />
                        </div>
                        <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
    else {
        return (
            <Redirect to="/dashboard" />
        )
    }
}

export default LoginPage

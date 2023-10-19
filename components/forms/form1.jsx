import React, { useState } from "react";
import MainContainer from "../layout/mainContainer";
import { useForm } from "react-hook-form";
import Error from "./error";
import axios from "axios";
import { Rings } from "react-loader-spinner";

//COMPS
import { MainButton } from "../buttons";

const Form1 = (props) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function onSubmitForm(values) {
        console.log(values);
        setLoading(true);
        let config = {
            method: "post",
            // url: `http://localhost:3000/api/contact`,
            // url: `/api/${props.contact ? "contact" : "reseller"}`,
            url: `/api/contact`,
            headers: {
                "Content-Type": "application/json",
            },
            data: values,
        };

        try {
            const response = await axios(config);
            setLoading(false);
            if (response.status === 200) {
                setSuccess(true);
                console.log("Email sent successfully");
            } else {
                console.log("Email not sent. Unexpected status code: ", response.status);
            }
        } catch (err) {
            console.error("Error sending email: ", err);
        }
    }
    return (
        <MainContainer width="relative ">
            <div className="col-span-12  grid grid-cols-12 font-freight">
                <form
                    onSubmit={handleSubmit(onSubmitForm)}
                    className="col-span-12 grid  grid-cols-12 footer topKontakt sm:gap-4 "
                    action=""
                >
                    <div className="hidden">
                        <label htmlFor="firstName">Name</label>
                        <input
                            {...register("firstName", { required: false })}
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="off"
                        />
                    </div>
                    <input
                        {...register("name", { required: true })}
                        id="name"
                        className="col-span-12 lg:col-span-6 text-lg border-b border-primaryColor-800 bg-transparent text-primaryColor-800 placeholder-primaryColor-600 p-2 sm:p-4"
                        type="text"
                        placeholder="Name"
                    />
                    {errors.name && <Error klasse="col-span-12">Bitte geben Sie Ihren vollen Namen an</Error>}

                    <input
                        {...register("email", { required: true })}
                        name="email"
                        id="email"
                        className="col-span-12 lg:col-span-6 text-lg border-b border-primaryColor-800 bg-transparent text-primaryColor-800 placeholder-primaryColor-600  p-2 sm:p-4"
                        type="email"
                        placeholder="Email"
                    />
                    {errors.email && <Error klasse="col-span-12 lg:col-span-6">Bitte geben Sie Ihre Email an</Error>}

                    <textarea
                        {...register("message", { required: true })}
                        className="col-span-12 text-lg border border-primaryColor-800 bg-transparent border-t-0 text-primaryColor-800 placeholder-primaryColor-600  p-2 sm:p-4"
                        name="message"
                        id="message"
                        cols="20"
                        rows="4"
                        placeholder="Message"
                    ></textarea>
                    {errors.message && <Error klasse="block col-span-12">Bitte geben Sie Ihre Nachricht an</Error>}

                    <div className="check col-span-12 mt-2">
                        <div className="flex">
                            <input
                                {...register("checkbox", { required: true })}
                                id="checkbox"
                                className="mr-4 text-primaryColor"
                                type="checkbox"
                            />
                            <label
                                htmlFor="checkbox"
                                className="text-primaryColor-800 text-xs sm:text-base leading-normal"
                            >
                                consent to the processing of data for contact purposes according to the privacy policy{" "}
                            </label>
                            {errors.checkbox && <Error klasse="block col-span-12">Bitte bestätigen</Error>}
                        </div>
                    </div>
                    {loading ? (
                        <div className="col-span-12 flex justify-center">
                            <Rings
                                height="80"
                                width="80"
                                color="#B1A269"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div>
                    ) : (
                        <div className="w-full col-span-12">
                            <button type="submit" className="bg-white px-16 py-4 rounded-full font-bold">
                                Abschicken
                            </button>
                            {/* <button
                                className="bg-primaryColor-700 mt-6 font-semibold hover-underline-animation z-20 flex items-center justify-center text-primaryColor-200 lg:mt-8 py-2 text-sm sm:text-base sm:py-3 px-6 min-w-[10rem] w-full uppercase rounded-md md:mt-8"
                                type="submit"
                            >
                                Absenden
                            </button> */}
                        </div>
                    )}
                </form>
                {success ? <div className="text-green-100 w-96 mt-4">Vielen Dank für Ihre Nachricht!</div> : ""}
            </div>
            <div className="col-span-12 lg:col-span-4 grid grid-cols-12">{props.children}</div>
        </MainContainer>
    );
};

export default Form1;

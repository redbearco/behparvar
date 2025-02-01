"use client";
import { useForm } from "react-hook-form";

import { FormState } from '../../../redux/types/types';
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { updateForm } from "../../../redux/store/features/formSlice";

const Form = () => {
    const dispatch = useAppDispatch();
    const { email } = useAppSelector((state) => state.form);
    const user = {
        email,
    };
    console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormState>({
        defaultValues: { email },
    });
    const onSubmit = (data: FormState) => {
        dispatch(updateForm(data));
        console.log(data);
    };
    return (
        <div className="Form">
            <form className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-lg-start justify-content-xl-start flex-wrap mb-3 mb-md-3 mb-lg-0 mb-xl-0" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg border text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 mb-3 mb-md-3 mb-lg-0 mb-xl-0"
                    {...register("email", { required: true })}
                    placeholder="ایمیل خود را وارد کنید..."
                />
                <button className="d-flex align-items-center justify-content-center text-white font-size-18 font-weight-700 back-red" type="submit">عضویت در خبرنامه</button>
            </form>
        </div>
    )
}

export default Form;
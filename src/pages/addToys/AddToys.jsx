import React from 'react';
import { useForm } from "react-hook-form";

const AddToys = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                <select {...register("Title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>

                <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                <input {...register("Developer", { required: true })} type="radio" value="No" />

                <input type="submit" />
            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("name")} />

                <input {...register("email", { required: true })} />


                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" className='btn btn-success' />
            </form> */}
            {/* <form  className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className="input input-bordered" defaultValue="test" {...register("name", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input className="input input-bordered" {...register("email", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className="input input-bordered" {...register("email", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                        </label>
                    </form> */}
        </div>

    );
};

export default AddToys;
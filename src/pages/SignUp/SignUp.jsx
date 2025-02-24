import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const imageHostingKay = import.meta.env.VITE_IMAGE_HOSTING_KAY
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKay}`

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userCreate, updateUserProfile, } = useContext(AuthContext);
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        userCreate(data.email, data.password)
            .then((result) => {
                const user = result.user;
                const imageFile = { image: data.photo[0] }
                axiosPublic.post(imageHostingApi, imageFile, {
                    headers: { "content-type": "multipart/form-data" },
                })
                    .then(res => {
                        const photoUrl = res.data.data.display_url
                        updateUserProfile(data.name, photoUrl)
                            .then(() => {
                                const userData = {
                                    name: data.name,
                                    email: data.email,
                                    image: photoUrl,
                                    phoneNumber: data.number,
                                    nidNumber: data.nid,
                                    pin: data.password,
                                    role: data.role === "user"? "user" : "pending",
                                    totalBalance: 40,
                                }
                                axiosPublic.post("/users", userData)
                                    .then(res => {
                                        if (res.data.insertedId) {
                                            navigate("/")
                                            reset()
                                            toast.success('Sign up Successful', {
                                                duration: 4000,
                                                position: 'top-center',
                                            })
                                        }
                                    })

                            }).catch((error) => {
                                toast.error(error.messages)
                            });

                    })
            })
        .catch((error)=>{
            toast.error(error.message)
        })
    };


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Let's Create a Account!</h1>
                </div>
                <div
                    className="card bg-base-100 w-full  max-w-md shrink-0 shadow-2xl"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4 md:grid md:grid-cols-2">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" {...register("number", { required: true })} placeholder="Enter You Phone Number" className="input input-bordered" />
                            {errors.number && <span className='text-red-600'>Number is required</span>}
                        </div>
                        {/* NID Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NID Number</span>
                            </label>
                            <input type="nid" {...register("nid", { required: true })} placeholder="Enter You IND Number" className="input input-bordered" />
                            {errors.nid && <span className='text-red-600'>NID is required</span>}
                        </div>
                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                {...register("photo", { required: true })}
                                placeholder="email"
                                className="file-input file-input-bordered file-input-success w-full "
                            />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        {/* options */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Account Type</span>
                            </div>
                            <select className="select select-bordered"
                                {...register("role", { required: true })}
                            >
                                <option value="user">User</option>
                                <option value="agent">Agent</option>
                            </select>
                            {errors.role && <span className='text-red-600'>Role is required</span>}

                        </label>
                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Pin</span>
                            </label>
                            <input type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^[0-9]+$/,

                                })} placeholder="" className="input input-bordered" />
                            {errors.password?.type === "required" && <span className='text-red-600'>Pin is Required</span>}
                            {errors.password?.type === "minLength" && <span className='text-red-600'>Pin must be minimum 6 character</span>}
                            {errors.password?.type === "pattern" && <span className='text-red-600'>pin must be Number Type</span>}
                        </div>
                        <div className="form-control mt-6 lg:col-span-2">
                            <button className="btn bg-primary-color text-white hover:text-black hover:border-primary-color">Sign Up</button>
                        </div>
                    </form>
                    <div className='px-8 pb-8 text-blue-500'>
                        <Link to="/auth/login">Have a account? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
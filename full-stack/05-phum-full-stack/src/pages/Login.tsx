import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'admin123'
        }
    });

    // const [postLogin, {data, error}] = useLoginMutation();
    const [postLogin] = useLoginMutation();


    const handleLogin = async (values: FieldValues) => {
        const toastId = toast.loading('Logging in...');
        try {
            const res = await postLogin(values).unwrap();
            const user = verifyToken(res?.data?.accessToken) as TUser;
            dispatch(setUser({ user, token: res?.data?.accessToken }))
            toast.success("Logged in", { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`)
        } catch (error) {
            toast.error("Something went wrong !", { id: toastId, duration: 2000 })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label htmlFor="id">ID: </label>
                    <input type="text" id="id" {...register('id')} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" {...register('password')} />
                </div>

                <Button htmlType="submit" >Submit</Button>
            </form>
        </div>
    );
};

export default Login;
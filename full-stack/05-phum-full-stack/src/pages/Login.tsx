import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";


const Login = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm({
        defaultValues: {
            id: 'A-0001',
            password: 'admin123'
        }
    });

    // const [postLogin, {data, error}] = useLoginMutation();
    const [postLogin, {error}] = useLoginMutation();

    
    const handleLogin = async (values) => {
        const res = await postLogin(values).unwrap();
        const user = verifyToken(res?.data?.accessToken);
        dispatch(setUser({user, token: res?.data?.accessToken}))
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
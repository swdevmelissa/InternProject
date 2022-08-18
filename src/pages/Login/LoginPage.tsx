import { FC, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import onLogin from "../../main/store/stores/user/login.store.on-login";
import { useForm } from "react-hook-form";
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button'
import classes from './LoginPage.module.css';



const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  const SubmitFormHandler = () => {
    dispatch(onLogin({ userName, password }));
  };

  const emailInputHandler = (event: any) => {
    setUserName(event.target.value)
  };

  const passwordInputHandler = (event: any) => {
    setPassword(event.target.value)
  };

  // const navigate = useNavigate();

  // const navigateButtonHandler = () => {
  //   navigate("/jkasfklsdf", { replace: true });
  // };
  return (
    <Card className={classes.login}>
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
          <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input {...register('username', {required: true})} id="email" onChange={emailInputHandler}></input>
          {errors.username?.type === 'required' && 'Email is required!'}
          </div>
          <div className={classes.control}>
          <label>Password</label>
          <input {...register('password', {required: true})} onChange={passwordInputHandler}></input>
          {errors.password?.type === 'required' && 'Password is required!'}
          </div>
          <div >
          <Button className={classes.btn} onClick={() => SubmitFormHandler()}>Submit</Button>
          </div>
        </form>
      </section>
      </Card>
  );
};

export default LoginPage;

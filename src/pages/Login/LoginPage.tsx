import { useState, FC,  } from "react";
import { useDispatch } from "react-redux";
import onLogin from "../../main/store/stores/user/login.store.on-login";
import { useForm } from "react-hook-form";
import Card from '../../UI/Card/Card';

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

  const handleSubmitForm = () => {
    dispatch(onLogin({ userName, password }));
  };

  const usernameInputHandler = (event: any) => {
    setUserName(event.target.value)
  };

  const passwordInputHandler = (event: any) => {
    setPassword(event.target.value)
  };

  const onSubmit = (data: any)=>{
 
    console.log(data);
  }
  // const onError = (err: any)=>{
 
  //   console.log(err);
  // }


  return (
    <Card className={classes.login}>
      <section>
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input {...register('username', {required: true})} id="username" onChange={usernameInputHandler}></input>
          {errors?.username?.type === 'required' && 'Username is required!'}
          </div>
          <div className={classes.control}>
          <label>Password</label>
          <input {...register('password', {required: true})} onChange={passwordInputHandler}></input>
          {errors?.password?.type === 'required' && 'Password is required!'}
          </div>
          <div >
          <input type="submit" value="Submit"/>
          </div>
        </form>
      </section>
      </Card>
  );
};

export default LoginPage;

import { FC, useState } from 'react';
import { useForm } from "react-hook-form";


const RegisterPage: FC = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const [firstName, setFirstName] = useState(); 
    const [lastName, setLastName] = useState();
    const [Birthday, setBirthday] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const firstNameInputHandler = (event: any) => {
        setFirstName(event.target.value)
      };
    
      const lastNameInputHandler = (event: any) => {
        setLastName(event.target.value)
      };

      const birthdayInputHandler = (event: any) => {
        setPhoneNumber(event.target.value)
      };

      const emailInputHandler = (event: any) => {
        setEmail(event.target.value)
      };


      const phoneNumberInputHandler = (event: any) => {
        setBirthday(event.target.value)
      };

    const usernameInputHandler = (event: any) => {
        setUserName(event.target.value)
      };
    
      const passwordInputHandler = (event: any) => {
        setPassword(event.target.value)
      };
      const formHandler = () => {
           dispatch
      };
      const onSubmit = (data: any)=>{
 
        console.log(data);
      }
    

    return (
        <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                    <input {...register('firstName', {required: true})}  onChange={firstNameInputHandler} type="text" id="firstName" className="form-control form-control-lg" />
                    {errors?.firstName?.type === 'required' && 'Firstname is required!'}

                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input {...register('lastName', {required: true})}  onChange={lastNameInputHandler} type="text" id="lastName" className="form-control form-control-lg" />
                    {errors?.lastName?.type === 'required' && 'Lastname is required!'}

                  </div>

                </div>
            
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                  <label htmlFor="birthdayDate" className="form-label">Birthday</label>
                    <input {...register('birthday', {required: true})}  onChange={birthdayInputHandler} type="text" className="form-control form-control-lg" id="birthdayDate" />
                    {errors?.birthday?.type === 'required' && 'Birthday is required!'}

                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="emailAddress">Email</label>
                    <input {...register('email', {required: true})}  onChange={emailInputHandler}  type="email" id="emailAddress" className="form-control form-control-lg" />
                    {errors?.email?.type === 'required' && 'Email is required!'}
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                    <input {...register('phoneNumber', {required: true})} id="phone" onChange={phoneNumberInputHandler}  type="tel"  className="form-control form-control-lg" />
                    {errors?.phoneNumber?.type === 'required' && 'Phone Number is required!'}

                  </div>

                </div>
              </div>

              <div className="row">
              <div className="form-outline">
          <label htmlFor="username" className="form-label">Username</label>
          <input {...register('username', {required: true})} id="username" onChange={usernameInputHandler}  className="form-control form-control-lg" />
          {errors?.username?.type === 'required' && 'Username is required!'}
          </div>
          <div className="form-outline">
          <label htmlFor="password" className="form-label">Password</label>
          <input {...register('password', {required: true})} onChange={passwordInputHandler} id='password' className="form-control form-control-lg" />
          {errors?.password?.type === 'required' && 'Password is required!'}
          </div>
              </div>

              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default RegisterPage;
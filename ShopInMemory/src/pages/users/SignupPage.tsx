import React, { useState } from "react";
import tw, { css } from "twin.macro";
import Axios from 'axios';

const SignupTemplate = tw.div`
`

const SignupForm = tw.form`
  flex flex-col
  w-60
`

const EmailInput = tw.input`
`

const Password1Input = tw.input`
`
const Password2Input = tw.input`
`

const SubmitButton = tw.input`
`

const SignupPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password1, setPassword1] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [errors, setErrors] = useState<boolean>(false);

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    const user = {
      email: email,
      password1: password1,
      password2: password2,
    };

    if (password1 !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }

    const clearInput = () => {
      setEmail('')
      setPassword1('')
      setPassword2('')
      localStorage.clear()
    }

    Axios.post(`${process.env.REACT_SERVER_DOMAIN}/api/v1/users/auth/register/`, user)
      .then(res => {
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem('token', res.data.key);
          window.location.replace('/');
        } else {
          clearInput();
          setErrors(true);
        }
      })
      .catch(err => {
        clearInput();
        alert('이미 존재하는 계정입니다.')
      })
  }

  return (
    <SignupTemplate>
      <h1>회원가입</h1>
      <SignupForm onSubmit={onSubmit}>
        <label htmlFor='email'>이메일 주소:</label>
        <EmailInput
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor='password1'>비밀번호:</label>
        <Password1Input
          type='password'
          value={password1}
          minLength={5}
          pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
          onChange={e => setPassword1(e.target.value)}
          required
        />
        <label htmlFor='password2'>비밀번호 확인:</label>
        <Password2Input
          type='password'
          value={password2}
          minLength={5}
          pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
          onChange={e => setPassword2(e.target.value)}
          required
        />
        <SubmitButton type='submit' value='회원가입'/>
      </SignupForm>
    </SignupTemplate>
  );
};

export default SignupPage;
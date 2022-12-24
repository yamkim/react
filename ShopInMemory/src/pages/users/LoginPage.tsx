import React, { useState } from "react";
import Axios from 'axios';
import tw, { css } from "twin.macro";

const LoginTemplate = tw.div`
  p-10
`

const LoginTitle = tw.div`
  text-2xl
`

const LoginForm = tw.form`
  w-48
`

const EmailInput = tw.input`
  w-full
  border-2
`

const PasswordInput = tw.input`
  w-full
  border-2
`

const SubmitButton = tw.input`
  border-2
  w-full
`

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<boolean>(false);

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }

    const clearInput = () => {
      setEmail('')
      setPassword('')
      localStorage.clear()
    }

    Axios.post(`${process.env.REACT_SERVER_DOMAIN}/api/v1/users/auth/login/`, user)
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
        alert('아이디 또는 비밀번호가 일치하지 않습니다')
      })
  }


  return (
    <LoginTemplate>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm onSubmit={onSubmit}>
        <label>이메일 주소:</label>
        <EmailInput
          type='email'
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <label>비밀번호:</label>
        <PasswordInput
          type='password'
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <SubmitButton type='submit' value='로그인'/>
      </LoginForm>
    </LoginTemplate>
  );
};

export default LoginPage;
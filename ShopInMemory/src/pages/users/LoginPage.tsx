import React, { useState } from "react";
import Axios from 'axios';
import tw, { css } from "twin.macro";

const LoginTemplate = tw.div`

`

const LoginForm = tw.form`
  w-20
`

const EmailInput = tw.input`
`

const PasswordInput = tw.input`
`

const SubmitButton = tw.input`
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
      <h1>로그인</h1>
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
        <SubmitButton type='submit'/>
      </LoginForm>
    </LoginTemplate>
  );
};

export default LoginPage;
import React, { useState } from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string, description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value.length > 10) {
            alert('이름은 10자 이내로 작성해주세요.')
        }
        setForm({
            ...form,
            [name]: value
        });
        
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="이름" value={name} onChange={onChange} />
            <input name="description" placeholder="설명" value={description} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    );
}

export default MyForm;
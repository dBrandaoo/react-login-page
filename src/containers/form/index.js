import { useState } from 'react';

import Input from '../../components/input';

// Smart Component
const Form = () => {
  const formData = {
    'email': '',
    'password': ''
  }

  const [form, setForm] = useState(formData);

  const handleFormDataChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="login mx-14">
        <p className="text-sm text-[#384044]">or use your account</p>
        <Input type="email" placeholder="Email" id="email" name="email" handleChange={handleFormDataChange} value={form.email}/>
        <input type="password" placeholder="Password" className="bg-[#EFEFEF] h-12 pl-4" id="password" name="password" onChange={handleFormDataChange} value={form.password}/>
      </div>
      <p className="py-11 text-gray-500 font-thin no-underline hover:decoration-solid"><a href="">Forgot your password?</a></p>
      <button type="submit" className="bg-[#FE4C2C] text-white w-36 h-12 rounded-full font-semibold hover:bg-[#FE454C]">LOG IN</button>
    </form>
  )
}

export default Form

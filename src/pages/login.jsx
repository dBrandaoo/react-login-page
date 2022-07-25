import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import Form from '../containers/form'

const Login = () => (
  <div className="wrapper">
    <div className="h-4/6 w-1/4 rounded-l-2xl bg-[#FEFFFE] shadow-xl text-center">
      <p className="text-4xl font-bold mt-12">Login</p>
      <div className="my-14">
        <button type="button" className="h-14 w-14 border border-gray-300 rounded-full mr-4 text-2xl"><FontAwesomeIcon icon={faFacebookF} /></button>
        <button type="button" className="h-14 w-14 border border-gray-300 rounded-full text-2xl"><FontAwesomeIcon icon={faTwitter} /></button>
      </div>
      <Form />
    </div>
    <div className="h-4/6 w-1/4 rounded-r-2xl bg-gradient-to-r from-[#FE454C] to-[#FF4368] shadow-xl rightSideBox px-12 text-center">
      <div className="info-text">
        <p className="text-4xl text-white font-bold">React Tailwind Login Form</p>
        <p className="text-white text-lg pt-4">This login form was created using React, Tailwind and CSS.</p>
      </div>
    </div>
  </div>
)

export default Login

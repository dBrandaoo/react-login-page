
const Input = ({ type, placeholder, id, name, handleChange, value}) => (
  <input type={type} placeholder={placeholder} className='bg-[#EFEFEF] h-12 pl-4' id={id} name={name} onChange={handleChange} value={value}/>
)

export default Input

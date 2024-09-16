import {useState} from 'react'
import img from '../assets/bgImage.jpg'

import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {

    const host= import.meta.env.VITE_APP_BACKEND_HOST;
  
    const navigate = useNavigate();
   
    const [credentials,setCredentials] = useState({username:'',email:'',password:'',confirmPassword:''});
    const [loading,setLoading] = useState(false);

    const onchange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        
        if(credentials.password!==credentials.confirmPassword){
            alert('Passwords do not Match!');
            setCredentials({...credentials,password:'',confirmPassword:''})
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(`${host}/api/auth/register`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({...credentials})
            })
            const data = await response.json();
            console.log(data)
            
            setCredentials({username:'',email:'',password:'',confirmPassword:''})
            navigate('/login');
        } catch (error) {
            console.log("Error Registering User",error);
        } finally{
            setLoading(false);
        }
    }

  return (
    <div className='h-[120vh] md:h-[100vh] w-[100%] relative bg-[#2A4D77]'>
        <img src={img} alt="" className='absolute h-[120vh] md:h-[100vh] w-[100%] object-cover top-0 left-0'/>

        <div className='absolute text-white top-2 left-6'>
            <h1 className='text-[50px] md:text-[40px] font-bold italic' >Connect.io</h1>
        </div>
        <form className='p-8 w-[90%] md:w-[30%] bg-white rounded-xl z-50 absolute  left-[50%] translate-x-[-50%] md:left-auto md:translate-x-[0%] md:right-[10%] top-[52%] md:top-[50%] translate-y-[-50%] shadow-xl' onSubmit={onsubmit}>

            <h2 className='font-bold text-3xl'>Sign Up Today</h2>
            <p className='mb-8 mt-2 text-gray-500 font-semibold'>Ready to make meaning connections? Register now and let the journey begin! </p>

            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Username</label>
                <input type="text" name='username' value={credentials.username} placeholder='This will be shown to other users.' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Email</label>
                <input type="email" name='email' value={credentials.email} placeholder='username@gmail.com' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Password</label>
                <input type="password" name='password' value={credentials.password} placeholder='**********' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <label htmlFor="" className='font-semibold ml-1'>Confirm Password</label>
                <input type="password" name='confirmPassword' value={credentials.confirmPassword} placeholder='**********' className='w-full p-2 outline-none rounded-xl border-gray-500 border-2' onChange={onchange} required/>
            </div>

            <button  
                className='bg-[#214264] hover:bg-[#19314a] cursor-pointer text-white py-2 text-lg w-full rounded-xl mt-6' type='submit'
                disabled={loading}
            >
            {loading?'Registering...':'Register'}
            </button>
            <p className='mt-2 text-center'> Already Registered? <Link to='/login' className='font-semibold'>Login here</Link> </p>
        </form>
    </div>
  )
}

export default SignUp
import z from "zod";
import { useAppDispatch } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUser } from "@/features/auth/slice/authSlice";
import { useRouter } from "next/navigation";


const useSignUp = () => {
 const router = useRouter();

    const signUpSchema = z.object({
    name:z.string().min(1,'Please enter name!'),
    email:z.string().email('Please enter valid email!'),
    password:z.string().min(8,"Password should be at least 8 characters!")
  })

  type SignUpFormData = z.infer<typeof signUpSchema>

  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<SignUpFormData>({
    resolver:zodResolver(signUpSchema),
    mode:"onSubmit",
    reValidateMode:'onChange',
    defaultValues:{name:'',email:'',password:''}
    
  })
  const onSubmit = async (data) => {
    try {
      const result = await dispatch(signUpUser(data))
      if(result.payload){
        router.push('/')
      }
    } catch (err) {
      router.push('sign-up')
    }
  }

  return {register,handleSubmit,errors,isSubmitting,onSubmit}

}

export default useSignUp;
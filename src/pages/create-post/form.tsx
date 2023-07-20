import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup' ;
import {addDoc,collection} from 'firebase/firestore';
import {db,auth} from '../../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";

interface CreateFormData {
    title:string;
    description: string;
}

export const CreateForm = () =>{
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title:yup.string().required("You must add a title"),
        description:yup.string().required("You must add description"), 
    });

    const {register,handleSubmit,formState:{errors},} = useForm<CreateFormData>({
        resolver:yupResolver(schema),
    });

    const postRef = collection(db,"post");

    const onCreatePost = async (data:CreateFormData) =>{
        await addDoc(postRef,{
            title:data.title,
            descriptions: data.description,
            usename: user?.displayName,
            id: user?.uid,
        })
        navigate("/");
    };

    return <div className="formbox">
        <form onSubmit={handleSubmit(onCreatePost)}>
        <input className="form title" type="text" placeholder="Title..." {...register("title")}/>
        <p style={{color:"red"}}>{errors.title?.message}</p>
        <textarea className="form description" placeholder="Description..." {...register("description")}/>
        <p style={{color:"red"}}>{errors.description?.message}</p>
        <input className="form submit" type="submit" />
        </form>
    </div>;
};
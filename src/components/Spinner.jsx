import { ClipLoader } from "react-spinners";


const overide ={
    display:'block',
    margin: '100px auto'
}
export default function Spinner({loading}){
    return (
        <ClipLoader 
            color="#4338a"
            loading={loading}
            cssOverride={overide}
            size={150}
        />
    )

}
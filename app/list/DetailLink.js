'use client'
import {useRouter,usePathname,useSearchParams,useParams} from 'next/navigation';

export default function DetailLink(){
    const router = useRouter();

    let a = usePathname()
    let b = useSearchParams()
    let c = useParams()

    return (
        <button onClick={()=>{
            router.push("/");
            
        }}>useRouter</button>
    )
}
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
            router.back();
            router.forward();
            router.refresh();
            router.prefetch("/list/6461d92197bc4fbd3e9f9485")
        }}>useRouter</button>
    )
}
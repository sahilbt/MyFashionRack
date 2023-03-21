import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar'

export default function Style(params) {
    const router = useRouter()
    const style = router.query.style

    return(
        <div>
            <Navbar/>

            <h1>{style}</h1>
        </div>
    )
};

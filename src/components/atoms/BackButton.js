import { useRouter } from 'next/router'

export default function BackButton() {
    const router = useRouter()
    return (
        <button type="button" className="rounded-full p-1 bg-slate-200 hover:bg-slate-300" onClick={() => router.back()}> 👈 Back </button>
    )
}
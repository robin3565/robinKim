import Link from "next/link";

export default function Icon({ keyword }) {
    return (
        <Link
            href='/'>
            <p className="text-xl md:text-3xl font-bold text-primary-black">
                {keyword}
            </p>
        </Link>
    )
}
import Link from "next/link";

export default function Icon({ keyword }) {
    return (
        <a
            href='/'>
            <p className="text-3xl font-bold text-primary-black">
                {keyword.map((k, idx) => {
                    return (
                        <span key={idx}>{k}</span>
                    )
                })}
            </p>
        </a>
    )
}
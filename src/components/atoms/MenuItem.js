import Link from "next/link";

export default function MenuItem({ item, hash }) {
    const path = item.toLowerCase();

    return (
        <Link
            className={`text-sm md:text-base mr-3 hover:bg-primary-black hover:text-off-white p-2 rounded-full
                ${hash === path ? 'text-off-white bg-primary-black' : 'text-primary-black'}
            `}
            href={`#${path}`}>
            {item}
        </Link>
    )
}
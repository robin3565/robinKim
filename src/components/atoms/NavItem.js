import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ item }) {
    const router = useRouter();
    const path = router.asPath?.split('/')[1];
    return (
        <Link
            className={`mr-3 hover:bg-primary-black hover:text-off-white p-2 rounded-full ${item.toLowerCase() == path ? "text-off-white bg-primary-black" : ""}`}
            href={`/${item.toLowerCase()}`}>
            {item}
        </Link>
    )
}
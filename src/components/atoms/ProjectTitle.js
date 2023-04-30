import Link from "next/link"
import { useEffect, useState } from "react";

export default function ProjectTitle({ title, subtitle, hash }) {
    const [showItem, setShowItem] = useState(true);

    const onShowItem = () => {
        if (!hash) {
            setShowItem(true);
        } else if (hash === 'all') {
            setShowItem(true);
        } else {
            title.toLowerCase() === hash ? setShowItem(true) : setShowItem(false)
        }
    }

    useEffect(() => {
        onShowItem()
    }, [hash])

    return (
        <div className={`w-full md:w-1/2 mt-12 mb-7 ${showItem ? 'visible' : 'hidden'}`}>
            <p className="flex m-0 items-center">
                <span className="text-3xl md:text-5xl font-bold mr-6">{title}</span>
                <span className="">{subtitle}</span>
            </p>
        </div>
    )
}
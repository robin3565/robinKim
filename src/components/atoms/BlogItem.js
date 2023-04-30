import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogItem({ data, hash }) {
    const [showItem, setShowItem] = useState(true);
    const img = data.cover.file?.url || data.cover.external.url;
    const tag = data.properties.태그.multi_select[0]?.name || '';
    const tagColor = data.properties.태그.multi_select[0]?.color;
    const url = data.url
    const arangeTitle = (title) => {
        return title.map(item => item.plain_text).join('');
    }
    const title = arangeTitle(data.properties.이름.title)

    const onShowItem = () => {
        if(!hash) {
            setShowItem(true);
        } else if (hash === 'all') {
            setShowItem(true);
        } else {
            tag.toLowerCase() === hash ? setShowItem(true) : setShowItem(false)
        }
    }

    useEffect(() => {
        onShowItem()
    }, [hash])


    return (
        <Link href={url}>
            <a target='_blank' rel='noopener noreferrer' className={showItem ? 'visible' : 'hidden'}>
                <div className="rounded-large p-6 m-3 flex flex-col border bg-slate-100 hover:drop-shadow-xl">
                    <Image
                        className="rounded-t-large"
                        alt="cover image"
                        width="100%"
                        height="60%"
                        src={img}
                        layout="responsive"
                        objectFit="cover"
                        quality={100} />
                    <p className="font-semibold">{title}</p>
                    <p className="flex m-0">
                        <span className={`px-1 rounded bg-gray-200`}>{`${tag}`}</span>
                    </p>
                </div>
            </a>
        </Link>
    )
}

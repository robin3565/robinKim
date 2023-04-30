import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { projectData, projectsmenu } from "@공통/data";
import { MainLayout } from "@공통/Layout";
import MenuItem from "@atoms/MenuItem";
import ProjectItem from "@atoms/ProjectItem";
import ProjectTitle from "@atoms/ProjectTitle";

export default function Projects() {
    const router = useRouter()
    const [hash, setHash] = useState('all');

    useEffect(() => {
        setHash(router.asPath.split('#')[1])
    }, [router])

    return (
        <MainLayout>
            <div className="w-full md:w-2/3 pt-0 md:pt-12">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Projects for <br/>experience<span className="text-gray-500">.</span></p>
                <p className="text-xl sm:text-2xl lg:text-3xl">
                    지금까지 진행한 개발 프로젝트를 소개합니다. <br/> 주로 React, NextJS 프레임워크를 사용한 프론트엔드와<br/>node.js와 express 엔진을 사용한 api 백엔드 개발을 했습니다.</p>
            </div>
            <div className="border-b border-primary-black">
                {/* <nav className="flex p-0 pb-5">
                    {
                        projectsmenu.map((item, idx) => (
                            <MenuItem
                                item={item}
                                hash={hash}
                                key={idx}
                            />
                        ))
                    }
                </nav> */}
            </div>
            {projectData.map(({ title, subtitle, state }, idx) => (
                <div key={idx}>
                    <ProjectTitle title={title} subtitle={subtitle} hash={hash} />
                    <div className="flex flex-wrap justify-between">
                        {
                            state.map((data, index) => (
                                <ProjectItem key={index} data={data} hash={hash} idx={index} />
                            ))
                        }
                    </div>
                </div>
            )
            )}
        </MainLayout>
    )
}


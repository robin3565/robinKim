import ProjectItem from "@/src/components/atoms/ProjectItem";
import { contents, mainProjects, stacks } from "@공통/data";
import { MainLayout } from '@공통/Layout';
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function Home() {
    return (
        <MainLayout>
            <section
                className="container mx-auto p-5 items-center w-full pt-5 md:pt-12 sm:pt-16">
                <div className='w-full md:w-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold h-32 md:h-52'>
                    <TypewriterComponent
                        options={{
                            strings: [
                                contents.kor,
                                contents.eng,
                                contents.chn
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10,
                        }} />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl">
                    Learn, Build, Design for Web.
                </p>
                <div>
                    <p className='text-xl sm:text-2xl lg:text-3xl'>
                    기술을 통해 편리함이 증진되는 세상을 꿈꾸며,
                    <br/>
                    사용자에게 도움을 주는 서비스 구현 및 개발을 지향합니다.
                    </p>
                    <p className='text-xl sm:text-2xl lg:text-3xl'>
                        {/* 배우는 걸 좋아해 어려운 문제를 마주하더라도 잘 해결할 수 있습니다.<br /> */}
                        지금은, 개발하는 전산직 공무원으로 근무하고 있습니다. (2024. 10.~)
                    </p>
                    <Link className="text-2xl lg:text-3xl underline text-gray-950" href="/about">Read More→</Link>
                </div>
            </section>
            <section
                className="container mx-auto p-5 items-center w-full pt-5 md:pt-12 sm:pt-16 border-b-4 border-gray-950">
                <div>
                    <div className="flex md:items-center md:justify-between border-b-4 border-gray-950">
                        <p className='text-3xl font-medium lg:text-5xl'>Selected Projects</p>
                    </div>
                    <div className="flex mt-5 md:flex-row flex-col">
                        {mainProjects.map((data, index) => (
                            <ProjectItem key={index} data={data} idx={index} />
                        ))}
                    </div>
                    <div className="flex justify-end pt-10">
                        <Link href="/projects" className="text-2xl lg:text-3xl text-gray-950 underline">View All→</Link>
                    </div>
                </div>
            </section>
            <section
                className="container mx-auto p-5 md:py-12 items-center w-full w-full">
                <div className="flex md:flex-row flex-col justify-between">
                    <div><p className='text-3xl font-medium lg:text-5xl'>Stack & Tools</p></div>
                    <div className="md:w-3/5 w-full flex flex-wrap md:items-end items-center  md:justify-end justify-center">
                        {stacks.map((stack, idx) => (
                            <div className="flex p-5 mx-3 flex-col w-24 h-28 justify-center items-center" key={idx}>
                                <Image alt={stack.imgName} width={50} height={50} src={`/img/${stack.imgName}`} />
                                <p className="text-sm font-medium text-gray-500">{stack.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="container mx-auto p-5 items-center w-full pt-5 md:pt-12 sm:pt-16 border-y-4 border-gray-950">
                <div>
                    <p className='text-3xl font-medium lg:text-5xl'>Contact 📧</p>
                    <CopyToClipboard text="knews2@naver.com" onCopy={() => {
                        toast.success("이메일을 복사했습니다.", {
                            position: "bottom-center",
                            icon: '📧',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })
                    }}>
                        <div className="flex flex-col items-end cursor-pointer">
                            <p className="text-3xl font-medium lg:text-7xl m-0">knews2@naver.com</p>
                            <p className="text-sm lg:text-base">커리어, 프로젝트에 대해 논의하고 싶거나 저에 대해 알고 싶다면 언제든지 이메일 주세요 :D</p>
                        </div>
                    </CopyToClipboard>
                </div>
            </section>
            <footer>
                <div className="container flex flex-col md:flex-row items-center justify-between my-8">
                    <div>
                        <p className="text-sm md:text-base">© Yuseon Kim 2023. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="border rounded-full bg-white border-black border-2 py-1 md:px-3 px-2 flex items-center justify-center md:m-0 my-1">
                        <Link href='https://github.com/robin3565' target='_blank' rel='noopener noreferrer' className="inline-flex items-center justify-center">
                            <Image
                                width="30"
                                height="30"
                                className="rounded-full" src="/img/github.png" />
                            <span className="mx-1 md:text-xl text-base font-semibold">Github</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </MainLayout>
    )
}

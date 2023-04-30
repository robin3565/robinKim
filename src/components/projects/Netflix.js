import Image from "next/image";
import Link from "next/link";
import BackButton from "@atoms/BackButton";

export default function Netflix() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='react-netflix-클론코딩'>[React] Netflix 클론코딩</h1>
                    <Image
                        className="rounded-large"
                        src="/img/netflixClone.jpg"
                        alt="netflixClone"
                        width={900}
                        height={600} />
                    <p><strong><span>Keywords:</span></strong><span> React, axios, swiper</span><br />
                        <strong><span>Duration:</span></strong><span> 2022.08.23 ~ 2022.08.26</span><br />
                        <strong><span>Tool:</span></strong><span> React</span></p>
                    <p className='text-2xl font-medium'>어느 정도 React에 대한 개념을 이해하고, 실제로 React가 어떻게 쓰이는지 이해하기 위해 클론코딩을 진행했습니다. Netflix 클론코딩 강의를 참고해서 먼저 코딩을
                        해보고, 강의 없이 한 번 더 코딩을 하며 React 사용에 익숙해지는 데 집중했습니다.</p>
                    <h2 id='프로젝트-소개'><span>프로젝트 소개</span></h2>
                    <p>
                        <Link href='https://netflix-clone-kohl-xi.vercel.app/' className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>
                            Netflix Clone Demo 바로가기 👉
                        </Link>
                    </p>
                    <p className="flex">
                        <Link href='https://github.com/robin3565/netflix-clone-React/' className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>
                            <span>Netflix Clone Github 페이지 </span>
                        </Link>
                        <Image
                            width="30"
                            height="30"
                            className="rounded-full" src="/img/github.png" />
                    </p>
                    <p><strong><span>Netflx 클론코딩</span></strong><span>을 해보았습니다.</span></p>
                    <p><span>어느 정도 React 기초 개념을 배우고 나니 제대로 활용도 하고, 코드도 조금 더 복잡하게 구현해볼 필요가 있다고 느꼈습니다. 혼자 한다면 ‘아는 선에서’ 코드를 짜게 되는
                        습관이 있어, 그걸 벗어나고자 강의를 통해 어려운 코드를 보고 익히려 했습니다.</span></p>
                    <p><span>단순히 보고 코드를 따라치게 되면 코드가 내 것이 되기 전에 끝이 납니다. 그래서 먼저 강의의 중요한 부분들은 기록하며 코드를 따라 타이핑해보고, 그 과정에서 로직을 이해하려고
                        했습니다. 그리고 강의 없이 혼자 다시 코드를 짜면서 진짜 이해한 것과 이해하지 못한 것을 나누고, 이해하지 못했던 부분은 다시 정리하며 코드를 짜는 과정을
                        가졌습니다.</span></p>
                    <h2 id='구현한-기능'><span>구현한 기능</span></h2>
                    <ul className="list-disc">
                        <li><span>고정된 네비게이션 바</span></li>
                        <li><span>axios를 활용한 비동기 HTTP 통신</span></li>
                        <li><span>React Router Dom을 통한 SPA 구현</span></li>
                        <li><span>swiper로 이미지 넘기도록 구현</span></li>
                    </ul>
                    <h3 id='네비게이션-바navigation-bar'>네비게이션 바(Navigation Bar)</h3>
                    <p className="m-0"><span>처음엔 투명이였다가 스크롤을 어느정도 내리면 내비게이션 바의 배경이 검은색으로 변하고 고정된 상태로 화면에 위치합니다. 이 때, useEffect를 사용하여 스크롤 이벤트가
                        실행되었다가 렌더링되지 않을 때는 스크롤 이벤트를 제거하도록 구현했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/img/netflix01.png"}
                        loading='lazy'
                        width={900}
                        height={450} />
                    <h3 id='비동기-http-통신'><span>비동기 HTTP 통신</span></h3>
                    <p className="m-0">the movie DB의 API를 호출해 비동기 처리를 해줍니다. 이 때, axios를 이용해 비동기 처리를 하고, 받아온 데이터는 async~await로 비동기 제어 처리를 했습니다.</p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/img/netflix02.png"}
                        loading='lazy'
                        width={900}
                        height={300} />
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/img/netflix03.png"}
                        loading='lazy'
                        width={900}
                        height={280} />
                    <h3 id='이미지를-넘기는-swiper'><span>이미지를 넘기는 swiper</span></h3>
                    <p className="m-0"><span>오른쪽, 왼쪽 화살표 버튼을 클릭하면 이미지가 넘어가는 클릭 이벤트인 swiper를 구현했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/img/netflix04.png"}
                        loading='lazy'
                        width={900}
                        height={500} />
                    <h2 id='💬-느낀점'><strong><span>💬</span></strong><span> 느낀점</span></h2>
                    <p><span>강의를 보고 따라했을 때는 됐던 것들이 혼자할 때는 약간의 실수만 있더라도 안되는 경우가 있어서 답답하곤 했습니다. 하지만 어떤 부분이 틀렸는지 보고, 제대로 이해되지 않은
                        부분을 찾아 다시 이해하는 것을 반복하면서 진짜 이해하려고 노력했고, 그래도 React 사용에 익숙해졌다는 점에서 프로젝트였습니다.</span></p>
                </div>
            </div>
        </div>
    )
}
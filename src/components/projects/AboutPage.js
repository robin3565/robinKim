import Image from "next/image";

export default function AboutPage() {
    return (
        <div id="write">
            <p className="text-3xl md:text-4xl font-semibold">안녕하세요, 반갑습니다. <br />개발자
                <span className="text-gray-500 font-bold"> 김유선</span>입니다!</p>
            <div className="flex flex-col md:flex-row items-center">
                <Image
                    width="300"
                    height="300"
                    className="w-9/10 md:w-1/4 pr-10"
                    alt='프로필 이미지'
                    src='/img/pro.png' />
                <div className="w-full md:w-3/4">
                    <p className="font-semibold text-2xl md:text-3xl">
                        <span>Contact &amp; Channels</span>
                    </p>
                    <hr />
                    <p><strong>📧 Email | </strong><span>knews2@naver.com</span></p>
                    {/* <p><strong>📱 Phone | </strong><span>010-3055-3565</span></p> */}
                    <p><strong>🐱 Github | </strong>
                        <a href='https://github.com/robin3565' target='_blank' rel='noopener noreferrer'>https://github.com/robin3565</a></p>
                    <p><strong>🗃 Blog | </strong>
                        <a className="text-slate-600 underline font-semibold" href='https://www.notion.so/devrobin/b1b52c71e530442db678ff2b6a5ed676?v=4797794ca0534fc7b081cb0fb3991bbf' target='_blank' rel='noopener noreferrer'>Blog 바로가기</a></p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-2xl md:text-3xl"><strong><span>💻</span></strong>
                    <span> Front-end Developer</span>
                </p>
                <hr />
                <p>
                    안녕하세요. 웹 개발자 김유선입니다.<br />
                    저는 현재까지 다양한 웹 개발 프로젝트를 수행하면서, React, NextJS 프레임워크를 사용한 프론트엔드와, node.js와 express 엔진을 사용한 api 백엔드 개발을 했습니다.
                    이를 통해 웹 서비스의 사용자 경험을 향상시키는 역할을 수행하고 있습니다. <br />
                    항상 최신 기술 동향과 개발 방법론에 관심을 가지고, 늘 새로운 기술과 개발 방법을 익히고 있습니다. 최근에는 Next.js를 사용하여 프론트엔드와 백엔드를 더욱 효율적으로 연결하고 개발 속도와 성능을 향상시키고 있습니다.
                    <br />
                    저는 다양한 프로젝트 경험을 바탕으로, 웹 개발 분야에서 전반적인 경험과 기술력을 보유하고 있습니다. 또한, 새로운 기술과 개발 방법을 빠르게 익히고 적용할 수 있는 능력을 갖추고 있습니다. 이러한 능력을 바탕으로, 더욱 높은 수준의 웹 서비스 개발과 성과 달성을 위해 노력하겠습니다. 감사합니다.
                </p>
            </div>
            <div>
                <p className="font-semibold text-2xl md:text-3xl mt-10"><span>👩‍💻 Career 경력</span></p>
                <hr />
                <div>
                    <h2 className="text-2xl md:text-3xl"><a href="http://teama.company/" className="text-slate-600 " target="_blank">팀에이컴퍼니</a></h2>
                    <span className="rounded-full px-4 py-2 bg-slate-500 text-white">2022.10 ~ </span></div>
                <p className="text-xl font-semibold">[ 개발팀 ] 웹 개발자</p>

                <ul className="list-disc"><li>아래 링크를 통해 참여한 프로젝트를 확인할 수 있습니다.</li>
                    <li className="my-1 list-none"><a className="underline text-slate-600 font-semibold" target="_blank" href="https://www.notion.so/Project-TeamA-Holdings-Full-stack-Review-4c0213d6a9c04c308f20d5f192d7e914">[Project] TeamA Holdings Full-stack Review</a></li>
                    <li className="my-1 list-none"><a className="underline text-slate-600 font-semibold" target="_blank" href="https://www.notion.so/Project-Stand-Full-stack-Review-c64f8a93d9ce44fdacf696055566323a">[Project] Stand Full-stack Review</a></li>
                    <li className="my-1 list-none"><a className="underline text-slate-600 font-semibold" target="_blank" href="https://www.notion.so/Project-Upsun-Global-FE-Part-Review-d9dc9668e54d4b6e8cbe3aa7f05b63d2">[Project] Upsun-Global FE Part Review</a></li>
                </ul>
            </div>
            <div>
                <p className="font-semibold text-2xl md:text-3xl mt-10"><span>🛠 Stacks 개발 기술</span></p>
                <hr />
                <div>
                    <p className="text-2xl md:text-3xl font-bold">Front-end<span className="text-slate-500">.</span></p>
                    <h2 id='html-css' className="text-xl md:text-2xl mt-10"><span>HTML &amp; CSS</span></h2>
                    <ul className="list-disc">
                        <li><span>HTML, CSS로 웹 레이아웃을 설계할 수 있습니다.</span></li>
                        <li><span>시맨틱한 웹 개발을 선호하며, 반응형 웹을 개발을 할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='javascript' className="text-xl md:text-2xl mt-10"><span>JavaScript</span></h2>
                    <ul className="list-disc">
                        <li><span>JavaScript에 능숙합니다.</span></li>
                        <li><span>ES Modules의 모듈 시스템에 대해서 이해하고 이에 따라 적절한 도구를 활용합니다.</span></li>
                    </ul>
                    <h2 id='react' className="text-xl md:text-2xl mt-10"><span>React</span></h2>
                    <ul className="list-disc">
                        <li><span>React hooks 사용에 능숙하고, 함수형 컴포넌트에 익숙합니다.</span></li>
                        <li><span>재사용성을 고려해 컴포넌트를 합리적으로 분리할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='next-js' className="text-xl md:text-2xl mt-10"><span>Next.js</span></h2>
                    <ul className="list-disc">
                        <li><span>Next.js의 기능을 활용하여 코드를 합리적으로 분리하고, 재사용성을 높일 수 있습니다.</span></li>
                        <li><span>Next.js의 내장 API 라우팅을 활용하여 백엔드 API를 빠르게 개발하고 서버리스 애플리케이션을 만들 수 있습니다.</span></li>
                    </ul>
                </div>
                <div>
                    <p className="text-2xl md:text-3xl font-bold">Back-end<span className="text-slate-500">.</span></p>
                    <h2 id='node-js' className="text-xl md:text-2xl mt-5"><span>Node.js</span></h2>
                    <ul className="list-disc">
                        <li><span>Express 프레임워크를 사용해 서버 애플리케이션을 구축할 수 있습니다.</span></li>
                        <li><span>RESTful API를 이해하고 구현할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='mysql' className="text-xl md:text-2xl mt-5"><span>MySQL</span></h2>
                    <ul className="list-disc">
                        <li><span>비즈니스 로직에 따라 효율적인 DB를 설계할 수 있습니다.</span></li>
                    </ul>
                </div>
                <div>
                    <p className="text-2xl md:text-3xl font-bold">ETC<span className="text-slate-500">.</span></p>
                    <h2 id='block-chain' className="text-xl md:text-2xl mt-10"><span>Block Chain (Web 3.0)</span></h2>
                    <ul className="list-disc">
                        <li><span>기본적인 Block Chain 개념을 이해하고 있습니다.</span></li>
                        <li><span>Ethers.js를 활용한 ERC 20, ERC 721 Token의 배포, 생성, 이체 등의 기능을 구현할 수 있습니다.</span></li>
                    </ul>
                    <h2 id='communication' className="text-xl md:text-2xl mt-5"><span>Communication</span></h2>
                    <ul className="list-disc">
                        <li><span>적극적인 태도로 생각을 표현합니다.</span></li>
                        <li><span>항상 배우려는 자세로 대화에 임합니다.</span></li>
                    </ul>
                    <h2 id='git-github' className="text-xl md:text-2xl mt-10"><span>Git &amp; GitHub</span></h2>
                    <ul className="list-disc">
                        <li><span>Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다.</span></li>
                    </ul>
                </div>



            </div>
            <div>
                <p className="font-semibold text-2xl md:text-3xl mt-10"><span>💡 Skills 자격 정보</span></p>
                <hr />
                <div>
                    <h2 id='정보처리기사' className="text-2xl md:text-3xl mt-10"><span>정보처리기사</span></h2>
                    <li><span>취득일자 : 20.08.28</span></li>
                    <li><span>등록번호 : 20202060587Z</span></li>
                    <li><span>발행기관 : 한국산업인력공단</span></li>
                </div>
                <div>
                    <h2 id='전자상거래관리사2급' className="text-2xl md:text-3xl mt-10"><span>전자상거래관리사2급</span></h2>
                    <li><span>취득일자 : 17.09.27</span></li>
                    <li><span>등록번호 : 17849620046B</span></li>
                    <li><span>발행기관 : 한국산업인력공단</span></li>
                </div>
                <div>
                    <h2 id='TOEIC' className="text-2xl md:text-3xl mt-10"><span>TOEIC</span></h2>
                    <li><span>취득일자 : 23.03.12</span></li>
                    <li><span>점수 : 865</span></li>
                    <li><span>발행기관 : 한국TOEIC위원회</span></li>
                </div>
            </div>
            <div>
                <p className="font-semibold text-2xl md:text-3xl mt-10"><span>🎓 Education 학위</span></p>
                <hr />
                <h2 id='한국외국어대학교' className="text-2xl md:text-3xl"><span>한국외국어대학교</span></h2>
                <li><span>중국외교통상전공 </span><strong><span>학사</span></strong></li>
                <li><span>학점: 3.6 / 4.5</span></li>
            </div>
            <div>
                <p className="font-semibold text-2xl md:text-3xl mt-10"><span>🟢 Experiences 경험</span></p>
                <hr />
                <h2 className="text-2xl md:text-3xl"><span>스마트인재개발원</span></h2>
                <span className="rounded-full px-4 py-2 bg-slate-500 text-white">2020.12 ~ 2021.06</span>
                <p className="text-xl font-semibold"><span>[K-디지털 인공지능 융합서비스 개발자과정]</span></p>
                <ul className="list-disc">
                    <li>IT 프로그래밍 및 인공지능(머신러닝, 딥러닝) 실습</li>
                    <li>웹/앱 프로그램 개발 프로젝트 진행</li>
                    <li className="mt-1">아래 링크를 통해 참여한 프로젝트를 확인할 수 있습니다.</li>
                    <li className="my-1 list-none"><a className="underline text-slate-600 font-semibold" target="_blank" href="https://www.notion.so/devrobin/Web-SNS-4c5a6cc963db4636b9b03bfb883287d9">[Web 개발] 딥러닝 기반 SNS 인플루언서 분석 및 추천 서비스</a></li>
                    <li className="my-1 list-none"><a className="underline text-slate-600 font-semibold" target="_blank" href="https://www.notion.so/devrobin/Web-87c002800c1f4ab2b8d77180a62806b0">[Web 개발] 빅데이터 상권분석 & 머신러닝 기반 추천 서비스 프로젝트</a></li>
                </ul>
            </div>
        </div>
    )
}
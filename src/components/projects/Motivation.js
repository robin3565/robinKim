import Image from "next/image"
import Link from "next/link"
import BackButton from "@atoms/BackButton"

export default function Motivation() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='motivation-웹-어플리케이션'>Motivation 웹 어플리케이션</h1>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src="/img/motivationApp.jpg"
                        loading='lazy'
                        width={3000}
                        height={2000} />
                    <p><strong><span>Keywords:</span></strong><span> API 호출, localStorage</span><br />
                        <strong><span>Duration:</span></strong><span> 2022.08.01 ~ 2022.08.05</span><br />
                        <strong><span>Tool:</span></strong><span> React, Styled-components, Axios</span></p>
                    <p className='text-2xl font-medium'>
                        <span>자주가는 사이트를 북마크 해놓아 매번 주소를 입력하지 않고 사이트를 방문할 수 있는 기능과
                            함께, 웹을 방문할 때마다 영감을 줄 수 있는 문장을 제공해주는 웹 사이트가 있으면 어떨까요?
                            문장을 영어로도 볼 수 있고, 문장과도 잘 어울리는 배경은 랜덤으로 매번 달라져 유저가 매일
                            방문하더라도 지루하지 않도록 만들어주는 효과가 있는 모티베이션 웹 어플리케이션을 만들어보았습니다.</span></p>
                    <h2 id='프로젝트-소개'><span>프로젝트 소개</span></h2>
                    <p>
                        <Link
                            className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'
                            href='https://robin3565.github.io/motivation-app/'>
                            Motivation Demo 바로가기 👉
                        </Link>
                    </p>
                    <p className="flex">
                        <Link
                            className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'
                            href='https://github.com/robin3565/motivation-app/'>
                            <span>Motivation Github 페이지 </span>
                        </Link>
                        <Image
                            width="30"
                            height="30"
                            className="rounded-full" src="/img/github.png" />
                    </p>
                    <p>매달 하나씩 진행하는 월간 프로젝트! <br />
                        8월의 첫 번째 프로젝트로 모티베이션 어플리케이션을 만들어 보았습니다.</p>
                    <p>
                        <span>강의를 보고 따라하는 클론코딩에서 벗어나서 배운 내용을 바탕으로 스스로 코드를 짜고, 수정하고, 배포해보는 경험을 해보고 싶었습니다.
                            간단하지만 유용한 모티베이션 웹을 만들며, 직접 어플리케이션을 기획하고 구현해보는 과정을 경험해보고,
                            API 호출을 통한 비동기 처리 방법과 CRUD 기능을 학습하고자 했습니다.</span></p>
                    <h3 id='구현한-기능'><span>기획</span></h3>
                    <div className="flex">
                        <Image
                            className="rounded-large"
                            alt="motivation-plan"
                            src={'/img/moti-plan.png'}
                            loading='lazy'
                            width={450}
                            height={450} />
                        <ul className="list-disc ml-3 mt-3">
                            <li> 북마크 데이터는 화면 창을 끄더라도 남아있도록<br /> localStorage에 저장해 이용합니다.</li>
                            <li> 배경화면은 Unsplash API를 활용해 이미지를<br /> 랜덤으로 가져와 렌더링합니다.</li>
                            <li> DB는 내부 더미 데이터를 이용해<br /> 사용되는 이미지와 데이터를 렌더링합니다.</li>
                        </ul>
                    </div>
                    <h2 id='구현한-기능'><span>구현한 기능</span></h2>
                    <div className="flex">
                        <Image
                            className="rounded-large"
                            alt="explain-motivation"
                            src={'/img/motivation.jpg'}
                            loading='lazy'
                            width={450}
                            height={450} />
                        <ul className="list-disc ml-3 mt-3">
                            <li><span>자주가는 사이트 북마크 기능</span></li>
                            <li><span>버튼을 누름에 따라 바뀌는 랜덤 배경화면</span></li>
                            <li><span>랜덤 모티베이션 문장</span></li>
                            <li><span>모티베이션 문장을 한글, 영어로 스위치가 가능한 버튼</span></li>
                            <li><span>업데이트 되는 시계</span></li>
                        </ul>
                    </div>
                    <h3 id='1-북마크-기능'><span>1. 북마크 기능</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'/img/moti-plus.gif'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>바로가기 추가를 통해 자주 가는 사이트를 북마크 할 수 있습니다. 북마크는 추가와 수정, 삭제가 모두 가능합니다.</span></p>
                    <p><span>저장한 북마크가 없는 경우 기본으로 바로가기 추가 버튼만 있습니다. 버튼을 클릭하면 사이트 이름과 URL을 입력할 수 있는 모달창이 뜹니다.</span></p>
                    <p><span>디자인은 구글 북마크를 참고하여 구현했습니다. 기본 버튼이 동그란 것과, hover시 사각형의 하얀 배경이 보이는 것, 그리고 모달창의 내용이 유사합니다. 모달창은 오픈시 서서히
                        열리도록 애니메이션을 주었습니다.</span></p>
                    <h3 id='2-localstorage-저장'><span>2. localStorage 저장</span></h3>
                    <p className="m-0"><span>localStorage를 사용할 때에는 문제가 생길 수 있다는 것을 염두해둬야 합니다. localStorage, session 등은 string 등 단순한 값을 넣는게 아니면
                        JSON.parse를 사용해야 하는데, 데이터가 이상할 경우 오류가 발생할 수 있습니다. 따라서 기본값을 지정해 데이터가 오류가 발생할 경우 기본값을 리턴하도록 안전장치를
                        만들어줘야 합니다. 이러한 에러 발생에 대비해서 getItem, setItem을 맵핑하는 코드를 작성했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'/img/moti-01.png'}
                        loading='lazy'
                        width={900}
                        height={500} />
                    <h3 id='2-배경화면-unsplash-api'><span>3. 배경화면 (Unsplash API)</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        loading='lazy'
                        src={'/img/moti-02.png'}
                        width={900}
                        height={560} />
                    <p><a href='https://unsplash.com/developers'><span>Unsplash API</span></a><span>를 활용해 랜덤 이미지를 불러 옵니다. 비동기 처리를 위해
                        Axios 라이브러리를 사용했습니다.</span></p>
                    <p><span>불러온 이미지 중 세로 대비 가로가 긴 이미지인 가로형 이미지만 저장합니다. API 내부적으로만 가로형 이미지만 불러오려고 했으나 API 내에서 해결이 되지 않아, 우선 이미지를 랜덤으로 모두
                        불러오고, 불러온 이미지 중 가로형 이미지만 다시 저장하도록 구현했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'/img/moti-03.png'}
                        loading='lazy'
                        width={900}
                        height={340} />
                    <p className="text-xl"><strong>배경화면 변경 버튼</strong></p>
                    <p><span>버튼 클릭 시 런던, 파리, 한국의 이미지로 변경이 가능합니다. 버튼을 누를 때마다 query가 바뀌고, query는 바뀔 때마다 fetchData 메소드를 불러옵니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'/img/moti-btn.gif'}
                        loading='lazy'
                        width={900}
                        height={380} />
                    <h3 id='4-모티베이션-문장'><span>4. 모티베이션 문장</span></h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'/img/moti-toggle.gif'}
                        loading='lazy'
                        width={900}
                        height={560} />
                    <p><span>하루에 영감을 줄 수 있는 모티베이션 문장을 제공합니다. 웹에 방문할 때마다 랜덤으로 다른 문장을 볼 수 있습니다. Database를 따로 사용하지 않고 더미 데이터를 사용해 문장을
                        제공했습니다.</span></p>
                    <p className="text-xl"><strong>한글/영어 버전 버튼</strong></p>
                    <p><span>버튼 클릭 시 현재 모티베이션 문장의 영어 버전을 제공합니다. 다시 버튼을 누르면 원래의 한글 버전으로 돌아옵니다.</span></p>
                    <h3 id='5-시계'><span>5. 시계</span></h3>
                    <p><span>Date 객체를 활용해 현재 시간이 업데이트 되는 시계를 만들었습니다. 시간, 날짜의 숫자가 10보다 작은 수일 경우, 앞에 0이 붙도록 구현했습니다. 시간은 setInterval 메소드로
                        30초마다 한 번씩 업데이트 됩니다.</span></p>
                    <h2 id='느낀점'><span>느낀점</span></h2>
                    <p><span>웹을 열 때마다 보는 구글 북마크 페이지를 보면서 검색창보다는 도움이 되는 다른 게 있다면 어떨까 고민에서 시작한 프로젝트입니다. 간단한 기능의 어플리케이션이지만 처음 기획한대로 모두 다
                        구현을 해내 아주 보람찬 프로젝트였습니다.</span></p>
                    <p><span>다만 Unsplash API 이미지를 받아올 때, 이미지 크기가 너무 다양해서 어려웠습니다. params로 조건을 넣었으나 제대로 되지 않았고, 아무리 찾아도 해결 방법이 없어 API 사용
                        여부를 고민해야했습니다. 이 때, 받아온 이미지 중 조건에 맞는 것만 재사용하는 방법은 가능할 것 같아 원하는 이미지만 저장하여 사용하는 방법으로 변경하였습니다. 이 과정에서 기존에 알고 있던
                        방법이 잘 되지 않더라도 새로운 방법을 찾아보면 언제든지 해결할 방법은 있다는 점을 알게 되었습니다.</span></p>
                </div>
            </div>
        </div>
    )
}
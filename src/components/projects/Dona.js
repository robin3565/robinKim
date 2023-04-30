import Image from "next/image"
import Link from "next/link"
import BackButton from '../../../../../../port/portfolio/src/components/atoms/BackButton'

export default function Dona() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='dona-todo-app-클론코딩'>Dona Todo App 클론코딩</h1>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9058555a-7633-4fbc-90f6-97d4e0a4e1cb/img2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T075906Z&X-Amz-Expires=86400&X-Amz-Signature=7662a74879a8cd6d44dc82b484ad2b527c0eb258801026eb2a69a266a94c0df7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22img2.jpg%22&x-id=GetObject'}
                        width={900}
                        height={600} />
                    <p>
                        <strong>Keywords:</strong> Todo App, CRUD, UX/UI<br />
                        <strong>Duration:</strong> 2022.08.23 ~ 2022.08.26<br />
                        <strong>Tool:</strong> React, Tailwind css</p>
                    <p className='text-2xl font-medium'>클론코딩은 실제 서비스를 직접 구현해보면서 구조와 기능들을 파악하고, 학습한 내용을 바탕으로 나중에 직접 프로젝트에 활용할 수 있다는 점에서 유용하다고 생각합니다. 따라서
                        이번에는 실제 서비스화 된 Todo App인 Dona 애플리케이션을
                        클론코딩하며 기능을 제대로 구현해보고 과정을 통해 학습해보고자 했습니다.</p>
                    <h2 id='프로젝트-소개'>프로젝트 소개</h2>
                    <p>
                        <Link href='https://robin3565.github.io/dona-clone/'>
                            <a className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>Dona Clone App Demo 바로가기 👉</a>
                        </Link>
                    </p>
                    <p className="flex">
                        <Link href='https://github.com/robin3565/dona-clone/'>
                            <a className="text-blue-600 text-2xl font-bold" target='_blank' rel='noopener noreferrer'>
                                <span>Dona Clone Github 페이지 </span>
                            </a>
                        </Link>
                        <Image
                            width="30px"
                            height="30px"
                            className="rounded-full" src="/github.png" />
                    </p>
                    <p>매달 하나씩 진행하는 월간 프로젝트! <br />
                        8월의 두 번째 프로젝트로 Todo App인 <strong>Dona 클론코딩</strong>을 해보았습니다.</p>
                    <p>이전에 Todo-list를 Vanilla JS로 한 번, React로 한 번 구현해본 적이 있습니다. 그 때는 단순히 CRUD만 기능만 구현하고 끝냈었는데, 이번에는 그 외에
                        다른 기능들도 함께 구현해보고자 했습니다.</p>
                    <h2 id='목적'>구현한 기능</h2>
                    <ul className="list-disc">
                        <li>할 일 목록 CRUD 구현</li>
                        <li>카테고리 별로 할 일 목록 분류 기능 구현</li>
                        <li>Welcome 페이지 모달창 구현</li>
                        <li>반응형 웹 구현 &amp; CSS 간단한 애니메이션 효과 구현</li>
                        <li>Context API를 이용한 상태 관리</li>
                        <li>Tailwind css 라이브러리를 이용한 깔끔한 UI</li>
                    </ul>
                    <h3 id='1-welcome'>1. Welcome</h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/82c72693-673b-4d09-b1a0-ea9c16a91cff/dona-id.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T075957Z&X-Amz-Expires=86400&X-Amz-Signature=22e4212d3d3d690290fa1d716ddbf8a35500a9237d6844416976541b0f986a74&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dona-id.gif%22&x-id=GetObject'}
                        width={900}
                        height={480} />
                    <p>첫 페이지로, 이름을 입력하는 모달을 보여줍니다. 해당 모달창에 이름을 입력하면 이름이 localStorage에 저장되고, 저장된 이름은 인사말과 함께 렌더링됩니다.</p>
                    <p>인사말은 시간에 따라 달라지며, 인사말 하단에는 오늘 날짜를 렌더링합니다.</p>
                    <h3 id='2-todo'>2. Todo</h3>
                    <Image
                        className="rounded-large"
                        alt="welcome"
                        src={'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c4292ab-9aef-44b6-a52f-b638404ad15e/dona-todo.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221015T080013Z&X-Amz-Expires=86400&X-Amz-Signature=f84116cd3fa7512338625a19eda8738e956e3d638f02ece6db89d3105ccf7622&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22dona-todo.gif%22&x-id=GetObject'}
                        width={900}
                        height={480} />
                    <p><span>Todo 입력창에 할 일을 입력하면, localStorage에 저장됩니다. 저장된 할 일 내용은 입력창 아래에 체크 박스와 수정, 삭제 아이콘과 함께 생성됩니다.</span>
                    </p>
                    <p><span>할 일 생성(저장) 기능 외에 </span><strong><span>1) todo 완료 여부 2) 수정 3) 삭제 기능</span></strong><span>을 구현했습니다. 할
                        일은 카테고리 별로 필터링 된 것들만 보여집니다.</span></p>
                    <h3 id='3-category'><span>3. Category</span></h3>
                    <p><span>Category 입력창에 카테고리 이름을 입력하면, localStorage에 저장됩니다. 저장된 카테고리는 해당 카테고리에 해당되는 할 일의 개수 아이콘과 삭제 아이콘이 함께
                        생성됩니다.</span></p>
                    <p><span>카테고리 생성(저장) 기능 외에 </span><strong><span>삭제 기능</span></strong><span>을 구현했습니다.</span></p>
                    <p><span>카테고리와 할 일 객체에 각각 slug 데이터를 넣어 slug 값이 같은 경우 분류되도록 구현했습니다. 그리고 path를 따로 생성해 카테고리를 클릭할 때마다 path 값이
                        바뀌고, 바뀐 path 값과 slug를 비교해 같은 경우만 렌더링 되도록 합니다.</span></p>
                    <h3 id='4-css-간단한-애니메이션-효과-구현'><span>4. CSS 간단한 애니메이션 효과 구현</span></h3>
                    <p><span>첫 화면 생성시 header과 할 일 입력창이 아래로 살짝 움직이는 애니메이션 효과를 구현했습니다.</span></p>
                    <p><span>할 일, 카테고리 생성시 위, 아래로 살짝 움직이는 애니메이션 효과를 구현했습니다.</span></p>
                    <h3 id='5-코드-정리'><span>5. 코드 정리</span></h3>
                    <p><span>Context API를 사용하면서 기록해놓고 싶은 부분들을 </span><strong><span>블로그</span></strong><span>에
                        정리했습니다.</span> <span className="text-blue-600"><strong>Context API 글 바로가기</strong></span></p>
                    <h2 id='느낀점'><span>느낀점</span></h2>
                    <p><span>이번 클론코딩을 통해 단순한 투두리스트라도 제대로 만들어보고자 했습니다. 만드는 과정에서 벨로퍼트님의 </span><a
                        href='https://react.vlpt.us/'><span>리액트 GITBook</span></a><span> 을 많이 참고했습니다.</span></p>
                    <p><span>처음으로 Todo APP에 카테고리를 만들어 카테고리 별로 분류가 되도록 기능을 구현하고자 했습니다. 그 과정에서 </span><strong><span>조건에 따라 렌더링을
                        다르게 할 경우</span></strong><span> </span><strong><span>어떻게 구현</span></strong><span>해야하는지 스스로 고민하고
                            해결해나가며 배울 수 있었습니다.</span></p>
                    <p><span>모달창을 띄우는 것, CRUD를 구현하는 것 모두 이전에 비해 구현하는 게 조금 더 자연스러워진 것 같습니다. 하지만 더 좋은 코드, 더 좋은 구현 방법이 있을 것 같아 다음에
                        같은 내용을 구현할 때 나은 방법을 찾아 구현해보고 싶습니다.</span></p>
                </div>
            </div>
        </div>
    )
}
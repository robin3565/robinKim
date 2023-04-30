import Image from "next/image";
import BackButton from "../atoms/BackButton";

export default function Wanted() {
    return (
        <div className='typora-export os-windows'>
            <div className='typora-export-content'>
                <div id='write'>
                    <BackButton />
                    <h1 id='원티드-프리온보딩-챌린지'>원티드 프리온보딩 챌린지</h1>
                    <p><span>원티드에서 진행하는 프론트엔드 프리온보딩 챌린지 과제를 구현했습니다. 정식으로 참여하지는 않았지만 Login, SignUp을 구현하는 과제라서 도움이 될 것 같아 과제만
                        진행했습니다.</span></p>
                    <p><span>과제 기간이 끝나서인지 원티드에서 제공하는 api가 제대로 되지 않아 mock api를 만들어 구현했습니다. 그 과정에서 api에 대해 조금이나마 더 알아볼 수 있는 기회가
                        되었지만, 부족한 api라서 에러 처리 등이 미흡했다는 점에서 아쉬웠던 과제입니다.</span></p>
                    <h2 id='login--signup'><strong><span>Login / SignUp</span></strong></h2>
                    <h3 id='요구사항'><span>요구사항</span></h3>
                    <ul className="list-disc">
                        <li>
                            <p>/auth 경로에 로그인 / 회원가입 기능을 개발합니다</p>
                            <ul className="list-disc">
                                <li><span>로그인, 회원가입을 별도의 경로로 분리합니다</span></li>
                                <li><span>최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요</span></li>
                            </ul>
                        </li>
                        <li>
                            <p><span>이메일과 비밀번호의 유효성을 확인합니다</span></p>
                            <ul className="list-disc">
                                <li><span>이메일 조건 : 최소 </span><code>@</code><span>, </span><code>.</code><span> 포함</span></li>
                                <li><span>비밀번호 조건 : 8자 이상 입력</span></li>
                                <li><span>이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요</span></li>
                            </ul>
                        </li>
                        <li>
                            <p><span>로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요</span></p>
                            <ul className="list-disc">
                                <li><span>응답으로 받은 토큰은 로컬 스토리지에 저장해주세요</span></li>
                                <li><span>다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요</span></li>
                                <li><span>어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요</span></li>
                            </ul>
                        </li>
                    </ul>
                    <h2 id='회원가입'><span>회원가입</span></h2>
                    <p className="m-0"><span>1. 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/wanted-01.png"}
                        loading='lazy'
                        width={900}
                        height={645} />
                    <p><span>2. 이메일과 비밀번호의 유효성을 확인합니다.</span></p>
                    <ul className="list-disc">
                        <li><span>이메일 조건 : 최소 </span><code>@</code><span>, </span><code>.</code><span> 포함</span></li>
                        <li><span>비밀번호 조건 : 8자 이상 입력</span></li>
                        <li><span>이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요</span></li>
                    </ul>
                    <p className="m-0"><span>조건이 다 만족되었을 경우에만 setBtnActive 값을 true로 변경시켰고, 그 값은 button의 disabled 속성으로 넣어 버튼 활성화 여부를
                        제어했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/wanted-02.png"}
                        loading='lazy'
                        width={900}
                        height={690} />
                    <p><span>3. 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요.</span></p>
                    <ul className="list-disc">
                        <li><span>응답으로 받은 토큰은 로컬 스토리지에 저장해주세요.</span></li>
                    </ul>
                    <p className="m-0"><span>로그인 API는 mock api로 구현해 실행했습니다. 회원가입시 token을 저장하고 루트 경로로 리다이렉트 했습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/wanted-03.png"}
                        loading='lazy'
                        width={900}
                        height={800} />
                    <h3 id='로그인'><span>로그인</span></h3>
                    <p><span>1. 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요.</span></p>
                    <p><span>2. 이메일과 비밀번호의 유효성을 확인합니다.</span></p>
                    <p className="m-0"><span>위 두 가지는 회원가입시 구현했던 것과 구현 방법이 같습니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/wanted-04.png"}
                        loading='lazy'
                        width={900}
                        height={900} />
                    <p><span>3. 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요.</span></p>
                    <ul className="list-disc">
                        <li><span>응답으로 받은 토큰은 로컬 스토리지에 저장해주세요</span></li>
                        <li><span>다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요</span></li>
                        <li><span>어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요.</span></li>
                    </ul>
                    <p className="mb-0"><span>마찬가지로 응답 받은 토큰은 로컬 스토리지에 저장합니다. 그리고 토큰이 이미 존재할 경우 다시 루트 경로로 리다이렉트 합니다.</span></p>
                    <Image
                        className="rounded-large"
                        alt="code"
                        src={"/wanted-05.png"}
                        loading='lazy'
                        width={900}
                        height={950} />
                </div>
            </div>
        </div>
    )
}
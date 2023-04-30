import { MainLayout } from "@공통/Layout";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
    return (
        <MainLayout>
            <Toaster />
            <div className="w-full md:w-2/3 pt-0 md:pt-12">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Contact<span className="text-gray-500">.</span></p>
                <CopyToClipboard text="knews2@naver.com" onCopy={() => {
                    toast.success("이메일을 복사했습니다.", {
                        position: "top-center",
                        icon: '📧',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    })
                }}>
                    <p className="text-4xl cursor-pointer"><span className="font-semibold">📧 Email |</span> knews2@naver.com</p>
                </CopyToClipboard>
            </div>
        </MainLayout>
    )
}
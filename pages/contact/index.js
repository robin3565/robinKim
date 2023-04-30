import { MainLayout } from "../../src/components/@공통/Layout";

export default function Contact() {
    return (
        <MainLayout>
            <div className="w-full md:w-2/3 pt-0 md:pt-12">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Contact<span className="text-gray-500">.</span></p>
                <p className="text-4xl"><span className="font-semibold">📧 Email |</span> knews2@naver.com</p>
            </div>
        </MainLayout>
    )
}
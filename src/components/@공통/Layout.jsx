import Border from "@atoms/Border";
import Meta from "./Meta";
import Navbar from "@components/@공통/Navbar";

export function Layout({ keyword, children }) {
  return (
    <>
      <Meta />
      <Navbar keyword={keyword} />
      <Border />
      {children}
    </>
  );
}

export function PageLayout({ children }) {
  return (
    <section className="container w-2/3 mx-auto xl:w-2/4 flex flex-wrap justify-center">
      {children}
    </section>
  );
}

export function MainLayout({ children }) {
  return <main className="mx-auto p-5 w-full xl:w-9/12">{children}</main>;
}

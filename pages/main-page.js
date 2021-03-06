import Cookie from "universal-cookie";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Link from "next/Link";

const cookie = new Cookie();

export default function MainPage() {
  const router = useRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/blog-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-6000 text-white px-4 py-12 rounded">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="bg-indigo-500 mr-8 hover:bg-indigo-6000 text-white px-4 py-12 rounded">
            Visit Task by SSG + ISR
          </a>
        </Link>
      </div>
      <svg conClick={logout} xmlns="http://www.w3.org/2000/svg" className="mt-10 cursor-pointer h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
      </svg>
    </Layout>
  )
}
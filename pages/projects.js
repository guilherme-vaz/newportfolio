import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
// import Layout from "../components/layout/layout";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <h1>Projects</h1>
            <code> &#62; <Link href='/'>cd..</Link></code>
            <Image 
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="My name"
            />
        </Layout>
    )
}
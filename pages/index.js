import Image from 'next/image'
import Layout from '../components/Layout/Layout';

function Home() {

    return (
        <Layout>
            <div class="mx-auto max-w-full">
                <div className="container bg-back-image text-white max-w-full p-4">
                    <div className="flex justify-evenly">
                        <div className="h-100 my-auto z-50 p-4">
                            <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call to action</button>
                            <p className="align-middle m-auto">
                                Hello my name is Rabin Nyaundi</p>
                        </div>
                        <div className="z-0">
                            <Image src="/Images/computer.jpeg"
                                height={300}
                                width={400}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>


    )
}
export default Home;

"use client";
import Header from './components/Header';
import Link from 'next/link'

function Dashboard() {
    return (
        <>
            <main className="flex h-[100vh]">
                {/* Section one */}
                <section className="w-[18%] bg-[#163677] min-h-screen flex flex-col items-center gap-y-10">
                    <img src="" alt="" />
                    <button >
                        <Link href={'/preview-page'} className="bg-[#0B58F4] px-3 py-2 rounded-md text-white flex gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-sm">
                                New Cover Letter
                            </span>
                        </Link>
                    </button>

                    <div className="flex gap-x-3 px-5 py-2 rounded-md bg-[#07070730]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#0B58F4] font-heavy">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>

                        <span className="text-white text-sm">My Dashboard</span>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="w-full">
                    {/* Header */}
                    <Header title={'My Dashboard'} email={'nicholas.okeke87@gmail.com'} />
                    <div className="bg-[#cbdaf10f] w-full min-h-screen px-16 pt-12">
                        {/* Document Buttons */}
                        <div className="bg-[#80ABED0F] py-1 flex gap-x-1 w-[14.5rem] rounded-md mb-8">
                            <button className="px-4 py-2 rounded-md">
                                Resume
                            </button>
                            <button className="px-4 py-2 bg-[white] rounded-md">
                                Cover Letter
                            </button>
                        </div>
                        {/* Main Cover Letter Section */}
                        <section className="flex">
                            <div className="w-">

                            </div>

                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard

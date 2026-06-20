import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#001c38] text-white max-h-80">
            <div className="mx-5 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
                <div className="py-2 px-8 flex flex-col h-full">
                    <h3 className="mb-4 text-center text-3xl font-bold tracking-wider uppercase">
                        <span className="text-red-600">DG</span>
                        <span className="text-white">MAGAZINE</span>
                        <p className="text-[7px] text-gray-300 uppercase">
                            cyber intelligence, global prespective
                        </p>
                    </h3>

                    <p className="text-sm  text-gray-300">
                        DGMagazine is a premier platform for cybersecurity news, research, threat intelligence and expert insights
                        for security leaders worldwide.
                    </p>

                    <div className="mt-auto flex items-center justify-center gap-3 pt-6">
                        <Link
                            href="#"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white/80 transition-all hover:border-red-600 hover:text-red-600"
                        >
                            <i className="ri-linkedin-fill" />
                        </Link>

                        <Link
                            href="#"
                            aria-label="X"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white/80 transition-all hover:border-red-600 hover:text-red-600"
                        >
                            <i className="ri-twitter-x-fill" />
                        </Link>

                        <Link
                            href="#"
                            aria-label="YouTube"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white/80 transition-all hover:border-red-600 hover:text-red-600"
                        >
                            <i className="ri-youtube-fill" />
                        </Link>

                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white/80 transition-all hover:border-red-600 hover:text-red-600"
                        >
                            <i className="ri-facebook-fill" />
                        </Link>

                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white/80 transition-all hover:border-red-600 hover:text-red-600"
                        >
                            <i className="ri-instagram-line" />
                        </Link>
                    </div>
                </div>

                <div className="relative py-2 px-5 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-px before:bg-white/20">
                    <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>

                    <div className="flex flex-col gap-0.5 text-sm text-gray-300">
                        <Link href="/newsroom" className="hover:text-red-600">Newsroom</Link>
                        <Link href="/research" className="hover:text-red-600">Research</Link>
                        <Link href="/threat-intelligence" className="hover:text-red-600">Threat Intelligence</Link>
                        <Link href="/global-cyber-threat-map" className="hover:text-red-600">Global Cyber Threat Map</Link>
                        <Link href="/advisory-room" className="hover:text-red-600">Advisory Room</Link>
                        <Link href="/leadership-insights" className="hover:text-red-600">Leadership Insights</Link>
                        <Link href="/cyber-products" className="hover:text-red-600">Cyber Products</Link>
                        <Link href="/media-center" className="hover:text-red-600">Media Center</Link>
                    </div>
                </div>

                <div className="relative py-2 px-5 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-px before:bg-white/20">
                    <h3 className="mb-2 text-lg font-semibold">Resources</h3>

                    <div className="flex flex-col gap-0.5 text-sm text-gray-300">
                        <Link href="/subscription" className="hover:text-red-600">Subscription</Link>
                        <Link href="/editions-library" className="hover:text-red-600">Editions Library</Link>
                        <Link href="/editorial-board" className="hover:text-red-600">Editorial Board</Link>
                        <Link href="/newsletter" className="hover:text-red-600">Newsletter</Link>
                        <Link href="/podcast" className="hover:text-red-600">Podcast</Link>
                        <Link href="/events" className="hover:text-red-600">Events</Link>
                    </div>
                </div>

                <div className="relative py-2 px-5 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-px before:bg-white/20">
                    <h3 className="mb-2 text-lg font-semibold">Legal</h3>

                    <div className="flex flex-col gap-0.5 text-sm text-gray-300">
                        <Link href="/privacy-policy" className="hover:text-red-600">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-red-600">Terms & Conditions</Link>
                        <Link href="/editorial-policy" className="hover:text-red-600">Editorial Policy</Link>
                        <Link href="/advertising-policy" className="hover:text-red-600">Advertising Policy</Link>
                        <Link href="/ethics-policy" className="hover:text-red-600">Ethics Policy</Link>
                        <Link href="/disclaimer" className="hover:text-red-600">Disclaimer</Link>
                    </div>
                </div>

                <div className="relative py-2 px-8 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-px before:bg-white/20">
                    <h3 className="mb-2 text-lg font-semibold">Contact</h3>

                    <div className="flex flex-col gap-2 text-[16px] text-gray-300">
                        <div className="flex items-center gap-3">
                            <i className="ri-phone-line " />
                            <span>0092 21 34325505</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-mail-line" />
                            <span>info@diginfo.net</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <i className="ri-global-line" />
                            <span>www.dgmagazine.net</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
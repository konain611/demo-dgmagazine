import Image from "next/image";

export default function LatestEdition() {
    return (
        <div className="flex flex-col gap-3">
            <div className="text-left text-md font-medium uppercase">
                <h2>Latest Edition</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">

                <div className="overflow-hidden rounded-sm ">
                    <Image
                        src="/pdf/april2026.jpg"
                        alt="Latest Edition"
                        width={400}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>


                <div className="flex flex-col justify-between gap-2 mx-auto">
                    <div>
                        <h3 className="line-clamp-2 text-sm font-semibold uppercase">
                            April 2026 Edition
                        </h3>

                        <p className="mt-2 text-[12px] leading-relaxed text-left">
                            In-depth insights, analysis and expert prespective
                            on the evolving cyber threat landscape.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="w-full rounded-md bg-[#003366] uppercase px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                            Read Online <i className="ri-arrow-right-s-line ml-2" />
                        </button>

                        <button className="w-full rounded-md bg-red-600 uppercase px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90">
                            Download PDF <i className="ri-download-2-line ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
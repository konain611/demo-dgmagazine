export default function NewsLetter() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="text-left uppercase text-lg font-medium">
                        <h2>stay ahead. stay informed.</h2>
                    </div>

                    <div className="max-w-md py-2 text-left text-xs font-medium">
                        <h3>
                            Subscribe to our weekly newsletter and get expert cyber
                            intelligence delivered to your inbox.
                        </h3>
                    </div>
                </div>

                <div className="shrink-0">
                    <i className="ri-send-plane-fill text-5xl text-red-600" />
                </div>
            </div>

            <div className="flex w-full overflow-hidden rounded-md border border-gray-300 ">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 px-3 py-2 text-xs text-[#003366] outline-none placeholder:text-gray-500"
                />

                <button className="bg-[#FF9102] px-4 text-xs font-bold uppercase text-white">
                    Subscribe
                </button>
            </div>

            <div className=" text-center">
                <p className="text-xs">No spam, unsubscribe anytime.</p>
            </div>
        </div>
    );
}
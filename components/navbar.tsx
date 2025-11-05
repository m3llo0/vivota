import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Navbar() {
    return (
        <>
            <div className="h-16 p-12 bg-white fixed top-0 left-0 w-full flex items-center z-10 shadow-md">
                <div className="flex w-full justify-center">
                    <div className="flex gap-8">

                        <Popover>
                            <PopoverButton className="block text-sm md:text-base font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">
                                About Us
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className="divide-y divide-white/5 rounded-xl bg-white/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">The Vivota Oath</p>
                                    </a>
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">Our Content Experts</p>
                                    </a>
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">Vivota House System</p>
                                    </a>
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">Student Testimonials</p>
                                    </a>
                                </div>
                            </PopoverPanel>
                        </Popover>

                        <Popover>
                            <PopoverButton className="block text-sm md:text-base font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">
                                Subjects
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className="divide-y divide-white/5 rounded-xl bg-white/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Physics</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Chemistry</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Biology</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Math</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC General Paper</p>
                                    </a>
                                </div>
                            </PopoverPanel>
                        </Popover>

                        <Popover>
                            <PopoverButton className="block text-sm md:text-base font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">
                                Plans & Pricing
                            </PopoverButton>
                        </Popover>

                        <Popover>
                            <PopoverButton className="block text-sm md:text-base font-semibold text-black/50 focus:outline-none data-active:text-black data-focus:outline data-focus:outline-white data-hover:text-black">
                                Class Schedule
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                anchor="bottom"
                                className="divide-y divide-white/5 rounded-xl bg-white/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                            >
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Physics</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Chemistry</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Biology</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC Math</p>
                                    </a>
                                </div>
                                <div className="p-3">
                                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                                        <p className="font-semibold text-black">JC General Paper</p>
                                    </a>
                                </div>
                            </PopoverPanel>
                        </Popover>


                    </div>
                </div>
            </div >

        </>
    )
}
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import estrada from '../assets/estrada.png'
import mendoza from '../assets/mendoza.png'
import rola from '../assets/rola.png'
import velez from '../assets/velez.png'
import delaCruz from '../assets/delaCruz.png'
import manaois from '../assets/manaois.png'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '#' },
]
const posts = [{
    id: 1,
    title: 'Our Mission',
    description:
        'At FillTrip, we aim to make trip planning effortless. By providing precise fuel cost estimates based on real-time data, we empower travelers to make informed decisions and enjoy worry-free journeys.',
},
{
    id: 2,
    title: 'Our Vision',
    description: 'To redefine travel planning by becoming the most trusted platform for every journey, delivering precise cost insights and empowering travelers to explore the world with confidence, clarity, and ease.',
},
{
    id: 3,
    title: 'Our Technology',
    description:
        'Our platform combines cutting-edge mapping algorithms with real-time fuel price data to provide travelers with the most accurate and reliable trip cost estimates. By analyzing multiple routes, traffic patterns, and fuel variations',
},

{
    id: 4,
    title: 'Our Team & Culture',
    href: '#',
    description:
        'Our team is a diverse group of innovators and travel enthusiasts united by a passion for smarter, more enjoyable journeys.',
},
{
    id: 5,
    title: 'Sustainability & Responsibility',
    href: '#',
    description:
        'We believe that smarter travel planning can also mean more responsible travel. By providing tools that optimize routes, calculate fuel consumption accurately, and suggest eco-friendly options, we aim to help travelers reduce their environmental footprint.',
},
{
    id: 6,
    title: 'Customer Commitment',
    description:
        'Every traveler has a story, and we’re here to support it. Our platform is designed to simplify planning, reduce surprises, and give users confidence on every journey.',
},
]

const people = [
    { name: 'Jan Vincent Estrada', role: 'Front-End / Back-End Developer', 
        imageUrl: estrada },
    { name: 'Dian Mendoza', role: 'Back-end Developer', 
        imageUrl: mendoza },
    { name: 'Gabriel Rola', role: 'Business Relations', 
        imageUrl:  rola},
    { name: 'Gervhee Velez', role: 'Front-end Developer', 
        imageUrl: velez },
    { name: 'Mark Gabrielle Dela Cruz', role: 'Back-end Developer', 
        imageUrl: delaCruz },
    { name: 'Pauline Manaois', role: 'UI/UX Designer', imageUrl: manaois },
]

export default function AboutPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-gray-900 min-h-screen overflow-y-auto">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <span className="sr-only">FillTrip</span>
                            <img
                                alt="FillTrip Logo"
                                src="/images/logo.svg"
                                className="h-12 w-auto"
                            />
                            <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">FillTrip</span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-sm/6 font-semibold text-white transition-colors duration-200 hover:text-[#4FD1C5] hover:underline"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-sm/6 font-semibold text-white transition-colors duration-200 hover:text-[#4FD1C5] hover:underline">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                                <span className="sr-only">FillTrip</span>
                                <img
                                    alt="FillTrip Logo"
                                    src="/images/logo.svg"
                                    className="h-8 w-auto"
                                />
                                <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">FillTrip</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors duration-200 hover:text-[#4FD1C5] hover:underline"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        to="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5 transition-colors duration-200 hover:text-[#4FD1C5] hover:underline"
                                        onClick={() => setMobileMenuOpen(false)}>
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            {/* Page Content */}
            <div className="relative isolate px-8 pt-34 lg:px-16">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-blue-400 to-green-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                        About FillTrip
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                        Learn more about our mission, vision, and the team behind <span className="font-bold text-[#168A8A]">FillTrip</span>.
                    </p>
                </div>
                {/* Responsive Articles Grid */}
                <div className="mx-auto mt-10 w-full max-w-[1650px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                        {posts.map((post, index) => (
                            <article
                                key={post.id}
                                className={`
                                flex flex-col justify-between rounded-xl border border-gray-700 bg-gray-800 p-6 hover:bg-gray-700 transition-all duration-200
                                ${index % 5 === 0 ? 'sm:col-span-2 lg:col-span-2 xl:col-span-2' : 'col-span-1'}
                                `}
                            >
                                <div className="mt-4 grow">
                                    <h3 className="text-lg font-semibold text-white hover:text-gray-300">
                                        <a href={post.href} className="relative block">
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-green-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
                </div>

                {/* Leadership / Team Section */}
                <div className="py-24 sm:py-42">
                    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                Meet our Developers
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-400">
                                We are a team of dedicated professionals, driven by innovation and a commitment to excellence. Our passion for delivering high-quality solutions ensures that every project we undertake exceeds expectations and creates lasting value for our clients.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <img
                                            alt={person.name}
                                            src={person.imageUrl}
                                            className="w-16 h-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                                        />
                                        <div>
                                            <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                                            <p className="text-sm/6 font-semibold text-indigo-400">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
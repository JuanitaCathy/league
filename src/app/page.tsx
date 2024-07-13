import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center">
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff00ff] to-[#ff66ff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto py-12">
          <div className="text-center">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Join the <span className="text-pink-500">League</span> of Hackers!
            </h1>
            <div className="w-[90%] z-[0] max-sm:h-[75px]">
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-1/4" />
            </div>
            <p className="mt-7 text-lg leading-8 text-gray-400">
              Whether you&apos;re coding a project, brainstorming ideas, or
              chatting about tech topics, <span className="text-pink-500">League</span> is your ultimate space for
              developers!
            </p>
            <Image
              className="inline-block"
              src="/2-removebg-preview.png"
              width={250}
              height={240}
              alt="league logo"
            />
            <div className="mt-7 flex items-center justify-center gap-x-6">
            <Link href="/hackathons">
                <button className="relative z-20 rounded-md overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 text-md font-semibold text-white shadow-neon-pink hover:transform hover:translate-y-1 hover:shadow-pink-500 hover:ring-pink-500 hover:ring-2 hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 ease-in-out">
                  Start Hacking!
                </button>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="text-white text-3xl mt-12">Features</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <ProjectCard
            image="/image1.jpg"
            title="Hackathons"
            text="Participate in exciting hackathons and showcase your skills."
          />
          <ProjectCard
            image="/image2.jpg"
            title="Team Collaboration"
            text="Form teams and work together on innovative projects."
          />
          <ProjectCard
            image="/image3.jpg"
            title="Networking"
            text="Connect with other developers and expand your network."
          />
          <ProjectCard
            image="/image4.jpg"
            title="Learning Resources"
            text="Access a wealth of resources to enhance your knowledge."
          />
        </div>
        <h2 className="text-white text-3xl mt-12">Built Using</h2>
        <div className="mt-8 flex justify-center gap-8">
          <Image src="/tech1.png" width={50} height={50} alt="Tech 1" />
          <Image src="/tech2.png" width={50} height={50} alt="Tech 2" />
          <Image src="/tech3.png" width={50} height={50} alt="Tech 3" />
          <Image src="/tech4.png" width={50} height={50} alt="Tech 4" />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff00ff] to-[#ff66ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

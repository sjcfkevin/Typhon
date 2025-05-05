"use client";
import React from 'react';
import { LineChart, Lock, Database, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import BlurText from '@/animation/BlurText/BlurText';
import FadeContent from '@/animation/FadeContent/FadeContent';
import AnimatedContent from '@/animation/AnimatedContent/AnimatedContent';

const Hero = () => {

  const router = useRouter();

  const With_Typhon_Token = () => {
    router.push("/tokens");
  }

  const Buy_Token = () => {
    window.location.href = "https://pump.fun/coin/4MzQPrNDpuGZjd4VeNimKfvFj4qUfmSySAyN9frxvKTy";
  }

  return (
    <div className="w-full hero-gradient pt-20 flex items-center relative overflow-hidden" id='hero'>

      <div className="w-full mx-auto px-4 py-12 relative bg-[#030014]">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-400px] left-0 w-full h-full object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        <div className="flex justify-center items-center z-50">
          <div className="w-full text-center flex justify-center items-center flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white mt-48 flex flex-col">
              <div className='flex'>
                <BlurText
                  text="Smart Chatbot "
                  className="smooth-lightning-text"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                />
                <BlurText
                  text="That Talks Tokens"
                  className=""
                  delay={150}
                  animateBy="letters"
                  direction="top"
                />
              </div>

              <div className='flex'>
                <BlurText
                  text="and Guides Your "
                  className=""
                  delay={150}
                  animateBy="letters"
                  direction="top"
                />
                <BlurText
                  text="Crypto Moves"
                  className="smooth-lightning-text"
                  delay={150}
                  animateBy="letters"
                  direction="top"
                />
              </div>
            </h1>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Meet the intelligent chatbot built exclusively to engage seamlessly with tokens. Unlock insights, predict market movements, optimize your portfolio,
                and make smarter investment decisions—all through natural, human-like conversations.
              </p>
            </FadeContent>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-center space-y-4 sm:space-y-0 sm:space-x-4 z-50">
              <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => With_Typhon_Token()}><span className='text-white'>With Typhon Token</span></button>
              </FadeContent>
            </div>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              config={{ tension: 35, friction: 40 }}
              initialOpacity={0}
              animateOpacity
              scale={0.9}
              threshold={0.2}
              delay={300}
            >
              <div className='w-full flex justify-center items-center gap-4 mt-8'>
                <div className='flex justify-center items-center gap-1'>
                  <Star className='text-[yellow]' fill='yellow' />
                  <Star className='text-[yellow]' fill='yellow' />
                  <Star className='text-[yellow]' fill='yellow' />
                  <Star className='text-[yellow]' fill='yellow' />
                  <Star className='text-[yellow]' fill='yellow' />
                </div>

                <div className="">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block size-8 rounded-full ring-2 ring-white"
                  />
                </div>
                <span className='text-3xl font-bold'>3,000,000+</span>
              </div>
            </AnimatedContent>

            {/* <div className='w-full flex justify-center items-center gap-4 mt-8'>
              <div className='flex justify-center items-center gap-1'>
                <Star className='text-yellow-500' fill='yellow' />
                <Star className='text-yellow-500' fill='yellow' />
                <Star className='text-yellow-500' fill='yellow' />
                <Star className='text-yellow-500' fill='yellow' />
                <Star className='text-yellow-500' fill='yellow' />
              </div>

              <div className="">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="inline-block size-8 rounded-full ring-2 ring-white"
                />
              </div>
              <span className='text-3xl font-bold'>3,000,000+</span>
            </div> */}

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              config={{ tension: 35, friction: 40 }}
              initialOpacity={0}
              animateOpacity
              scale={0.9}
              threshold={0.2}
              delay={300}
            >
              <div className="mt-12 flex flex-wrap justify-center lg:justify-center gap-8">
                <div className="flex items-center">
                  <LineChart className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                  <span className="text-gray-300">Real-time Analysis</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                  <span className="text-gray-300">Advanced Security</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-[#5ca9d6]" />
                  <span className="text-gray-300">Blockchain Intelligence</span>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

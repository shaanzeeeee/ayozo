"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {UserButton, SignInButton} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Authenticated, Unauthenticated } from 'convex/react';
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';

const Header = () => { 
    const {isLoading} = useStoreUser(); 
    return (
    <>
        <nav className='fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b'> 
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                {/*Logo*/}
                <Link href={"/"} className="flex items-center">
                <Image 
                src="/ayozo.png" 
                alt="Ayozo Logo" 
                width={500} 
                height={500} 
                className='w-full h-11'
                priority
                
                />
                {/*Pro Badge*/}
                </Link>

                {/*search bar*/}

                {/*right side actions*/}
                <div className='flex items-center'>
                    <Unauthenticated>
                        <SignInButton mode='modal'>
                            <Button size="sm">Sign In</Button>

                        </SignInButton>

                    </Unauthenticated>
                    <Authenticated>

                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}
                        />  
                    </Authenticated>

                </div>



            </div>
            {/*mobile menu*/}

            {/*Loader*/}
            {isLoading && (<div className='absolute bottom-0 left-0 w-full'>
            <BarLoader width={"100%"} color='a855f7'/>
            </div>)}
        </nav>

        {/*Modals   */}
    
    
    
    </>
  )
}

export default Header
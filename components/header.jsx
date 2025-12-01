"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {UserButton, SignInButton} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Authenticated, Unauthenticated } from 'convex/react';
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';
import { Plus } from 'lucide-react';
import { Ticket, Building } from 'lucide-react';
const Header = () => { 
    const {isLoading} = useStoreUser();
    
    const [showUpgradeModal, setShowUpgradeModal] = useState();

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
                    <Button variant="ghost" size="sm" onClick={setShowUpgradeModal}>
                        Pricing
                    </Button>
                     <Button variant="ghost" size="sm" asChild className={"mr-2"}>
                        <Link href="explore">Explore</Link>
                    </Button>
                    <Authenticated>
                    <Button size="sm" asChild className="flex mr-4 gap-2">
                        <Link href="/create-event">
                            <Plus className='w-4 h-4'/>
                            <span className='hidden sm:inline'>Create Event</span>
                        </Link>
                    </Button>



                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="My Tickets"
                                    labelIcon={<Ticket size={16} />}
                                    href="/my-tickets"
                                />
                                <UserButton.Link
                                    label="My Events"
                                    labelIcon={<Building size={16} />}
                                    href="/my-events"
                                />
                           
                                <UserButton.Action label='manageAccount'/>
                            </UserButton.MenuItems>

                        </UserButton>
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
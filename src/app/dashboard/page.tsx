'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button'; // ShadCN Button Component
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Dashboard = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const username = searchParams.get('username'); // Get the username query param

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-lg py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-4">
        <Link href={`/userprofile?username=${username}`} passHref>
            <Button
              variant="outline"
              className="px-6 py-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-300 rounded-md"
            >
              UserInfo
            </Button>
          </Link>
      <Link href="/lead" passHref>
        <Button
          variant="outline"
          className="px-6 py-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 rounded-md"
        >
          LeaderBoard
        </Button>
      </Link>
    </div>
      </nav>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center mt-8 px-4">
        <div className="w-full max-w-md p-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-4 text-center">Welcome!</h2>
          {username ? (
            <p className="text-lg text-center">
              Hello, <span className="font-semibold">{username}</span>!
            </p>
          ) : (
            <p className="text-lg text-center">No username provided</p>
          )}
          <p className="mt-4 text-center text-sm">
            Explore your personalized dashboard and enjoy your experience!
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-12 w-full flex justify-center px-4">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {[...Array(5)].map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="shadow-lg">
                    <img
                    src='/badge.png'
                      alt={`Badge ${index + 1}`}
                      className="w-full h-48 object-contain rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-gray-800">
                        Badge {index + 1}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Description for badge {index + 1}.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Dashboard;

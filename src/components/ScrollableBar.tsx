import { SimpleUser } from '@/model/user';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Avatar from './Avatar';
type Props = {
  children: React.ReactNode;
};

const responsive = {
  desk: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

export default function ScrollableBar({ children }: Props) {
  return (
    <Carousel responsive={responsive} containerClass="w-full flex gap-5">
      {children}
    </Carousel>
  );
}

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

function Sidebar() {
  return (
    <div className="shadow-md h-screen p-7 ">
      <Image
        src="/logo.png"     
        alt="MindNest Logo"
        width={50}          
        height={50}
      />

      <div className='mt-10'>
        <Button className={"w-full"}>
            + Upload pdf
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;

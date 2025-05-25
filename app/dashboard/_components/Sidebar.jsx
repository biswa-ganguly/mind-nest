import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Layout, Shield } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Sidebar() {
  return (
    <div className="shadow-md h-screen p-4 ">
        <div className='flex items-center w-full justify-center gap-2'>
      <Image
        src="/logo.png"     
        alt="MindNest Logo"
        width={50}          
        height={50}
      />
      <h2 className='font-bold text-2xl'>
      MindNest
      {/* <p className='font-light text-xs'>Smart Notes. Sharper Minds.</p> */}
      </h2>
      </div>

      <div className='mt-10'>
        <Button className={"w-full"}>
            + Upload pdf
        </Button>

        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-200 text-lg font-medium rounded-lg cursor-pointer'>
            <Layout/>
            <h2 className=''>Workspace</h2>
        </div>
        <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-200 text-lg font-medium rounded-lg cursor-pointer'>
            <Shield/>
            <h2 className=''>Upgrade</h2>
        </div>
      </div>
      <div className='bottom-10 items-center justify-center z-10 absolute w-[80%]'>
        <Progress value={33} />
        <p className='tex-sm mt-1'>2 out of 5 uploaded</p>
        <p className='tex-xs text-gray-400 mt-1'>Upgrade to upload more PDFs</p>
      </div>
    </div>
  );
}

export default Sidebar;

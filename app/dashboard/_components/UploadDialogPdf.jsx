import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';

function UploadDialogPdf({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload PDF File</DialogTitle>
          <DialogDescription>
            Please select your PDF file and give it a suitable name.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="pdf-upload" className="text-sm font-medium">
              Select File
            </label>
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              className="border rounded-md px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="file-name" className="text-sm font-medium">
              File Name
            </label>
            <Input
              id="file-name"
              placeholder="Enter file name"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadDialogPdf;

"use client"
import React, { useState } from 'react';
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
import { mutation } from '@/convex/_generated/server';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Loader } from 'lucide-react';
import { AddFileStorage } from '@/convex/fileStorage';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';

function UploadDialogPdf({ children }) {

    const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl)

    const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDb)

    const [loading,setLoading]= useState(false)
    const {user}= useUser()
    const [fileName,setFileName]= useState()
    const [file,setFile]= useState()
    const onFileSelect = (event)=>{
        setFile(event.target.files[0])
    }

    const onUpload = async()=>{
        setLoading(true)

            // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();

    console.log( "StorageId",storageId)
    const fileId = uuidv4()

    // Step 3: Save the newly allocated storage id to the database
    const resp = await addFileEntry({
      fileId:fileId,
      storageId:storageId,
      fileName:fileName??"Untitled File",
      createdBy:user?.primaryEmailAddress?.emailAddress
    })

    console.log(resp)
    setLoading(false)
    }

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
            onChange={(event)=>{onFileSelect(event)}}
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
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          
          <Button onClick={onUpload} type="submit" disabled={loading}>
                {loading ? <Loader className="animate-spin" /> : "Upload"}
        </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadDialogPdf;

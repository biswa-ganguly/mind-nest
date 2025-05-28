import { WebPDFLoader } from "langchain/document_loaders/web/pdf";
import { NextResponse } from "next/server";

const pdfUrl = "https://uncommon-scorpion-607.convex.cloud/api/storage/bbc1008c-9887-4aa3-9196-e69a22d091ad";

export async function GET(req) {
  const loader = new WebPDFLoader(pdfUrl);  // Pass URL, not blob
  const docs = await loader.load();

  let pdfTextContent = "";
  docs.forEach((doc) => {
    pdfTextContent += doc.pageContent;
  });

  return NextResponse.json({ pdfTextContent });
}

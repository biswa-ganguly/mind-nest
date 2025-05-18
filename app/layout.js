import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const montserrat = Montserrat({
  subsets: ["latin"],
});



export const metadata  = {
  title: "MindNest",
  description: "MindNest is an intelligent note-taking application that leverages artificial intelligence to extract, summarize, and organize key information from PDF documents. Designed to enhance productivity, it helps users quickly understand, retain, and manage content from academic papers, business reports, ebooks, and more. With features like smart highlights, context-aware summaries, and voice or text queries, MindNest transforms static PDFs into dynamic, actionable notes.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ montserrat.className }
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

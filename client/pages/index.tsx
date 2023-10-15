import { Inter } from "next/font/google";
import HomeView from "views/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <HomeView />;
}

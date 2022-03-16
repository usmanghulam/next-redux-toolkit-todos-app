import type { NextPage } from "next";
import Link from "next/link";
import { useSelector } from "react-redux";
const Home: NextPage = () => {
  return (
    <div>
      <button>
        <Link href="/counter">Counter</Link>
      </button>
      <button>
        <Link href="/todos">Todos</Link>
      </button>
    </div>
  );
};

export default Home;

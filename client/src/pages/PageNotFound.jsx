import React from 'react'
import "../index.css"
import { MdPages, MdError } from "react-icons/md";

const PageNotFound = () => {
  return (
    <main className="grid gap-2 place-content-center place-items-center min-h-[100vh]">
      <p className="text-9xl font-bold text-secondary">404</p>
      <h3 className="text-3xl font-bold">Page not fount</h3>
      <span>Sorry, couldn't find the page you are looking for.</span>
      <MdError className="text-[180px] animate-pulse" />
    </main>
  );
}

export default PageNotFound
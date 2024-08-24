'use client';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const [inputValue, setInputValue] = useState<string>();
  const [randomWordLoading, setRandomWordLoading] = useState<boolean>(false);
  const router = useRouter();

  const searchTermQuery = "/search/web?searchTerm=";
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!inputValue?.trim()) return;
    router.push(`${searchTermQuery}${inputValue}`);
  }

  const randomSearch = async (e: any) => {
    setRandomWordLoading(true)
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data: Array<string> = await response.json();
    if(!data) return;
    const luckyResult = data.toString();
    router.push(`${searchTermQuery}${luckyResult}`);
  }

  return (
    <>
      <form
      onSubmit={handleSubmit}
      className="flex w-full mt-5 mx-auto max-w-[90%] rounded-full border border-gray-200 px-5 py-3 hover:shadow-md transition-shadow focus-within:shadow-md sm-max-w-xl lg:max-w-2xl">
        <AiOutlineSearch 
        className="text-xl text-gray-200"/>
        <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        className="flex-grow focus:outline-none"type="text" />
        <BsFillMicFill 
        className="text-xl"/>
      </form>
      <div 
      className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button
        onClick={handleSubmit} 
        className="search-btns">Google Search</button>
        <button
        disabled={randomWordLoading}
        onClick={randomSearch} 
        className="search-btns flex items-center justify-center disabled:opacity-80"
        >
          { 
            randomWordLoading 
            ? 
            ( 
              <img 
              src="spinner.svg" 
              alt="Loading..."
              className="h-6 text-center"
              /> 
            )
            : 
            "I'm Feeling Lucky"
          }
        </button>

      </div>
    </>
  );
}

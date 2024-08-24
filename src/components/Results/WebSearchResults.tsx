import Link from 'next/link';
import Parser from 'html-react-parser';
import { ResultData, SearchDataResponse } from '@/interfaces/SearchResultData';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

export default function WebSearchResults({ results }: { results: SearchDataResponse }) {
    // Ensure results.items and results.searchInformation exist
    const hasResults = results.items?.length > 0;
    const totalResults = results.searchInformation?.formattedTotalResults;
    const searchTime = results.searchInformation?.formattedSearchTime;

    return (
        <section className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            {hasResults && (
                <>
                    <p className="text-gray-600 text-sm mb-5 mt-3">
                        About {totalResults} results ({searchTime})
                    </p>
                    {results.items.map((result: ResultData) => (
                        <div className="mb-8 max-w-xl" key={result.link}>
                            <div className="group flex flex-col">
                                <Link href={result.link}>
                                    <a className="text-sm truncate">{result.formattedUrl}</a>
                                </Link>
                                <Link href={result.link}>
                                    <a className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                                        {result.title}
                                    </a>
                                </Link>
                            </div>
                            <p className="text-gray-600">{Parser(result?.htmlSnippet)}</p>
                        </div>
                    ))}
                    <PaginationButtons />
                </>
            )}
            {!hasResults && (
                <p className="text-gray-600 text-sm mb-5 mt-3">
                    No results found.
                </p>
            )}
        </section>
    );
}

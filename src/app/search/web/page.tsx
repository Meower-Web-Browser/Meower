import NoResult from "@/components/NoResult/NoResult";
import WebSearchResults from "@/components/Results/WebSearchResults";
import { ResultData, SearchDataResponse } from "@/interfaces/SearchResultData";


export default async function WebSearch({ searchParams }: { searchParams: any }) {
    const startIndex = searchParams.start || "1";
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);
    
    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    const data: SearchDataResponse = await response.json();
    const results: Array<ResultData> = data.items;

    if (!results) {
        return (
            <NoResult />
        )
    }

    return (
        <>
        {
            results 
            && 
            (
                <WebSearchResults results={data}/>  
            )
        }
        </>
    )
}
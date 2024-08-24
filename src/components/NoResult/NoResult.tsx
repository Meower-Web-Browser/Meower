import Link from "next/link";

export default function NoResult() {
    return (
        <section 
        className="flex flex-col justify-center items-center pt-10">
            <h1 
            className="text-3xl mb-4">No results found.</h1>
            <p
             className="text-lg">Try searching for something else or go back to the homepage</p>
            <Link
            className="text-blue-500" 
            href="/">
                Home
            </Link>
        </section>
    )
}
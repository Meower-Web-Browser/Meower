"use client";
import { useEffect, useState } from "react";

export default function CountryInfo() {
    const [country, setCountry] = useState("United States");

    const getUserCountry = async (): Promise<void> => {
        const result = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
        const { country_name: countryName } = await result.json();
        setCountry(countryName);
    }

    useEffect(() => {
        getUserCountry();
    }, [])

    return (
        <p>{country}</p>
    )
}
// pages/index.tsx
import { useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";

export default function Home() {
  const [flightResults, setFlightResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data: any) => {
    // Simulate loading with a timeout
    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      const results = [
        {
          airline: "Emirates",
          departure: data.departure,
          arrival: data.arrival,
          time: "10:00 AM - 02:00 PM",
          duration: "4h 00m",
          stops: 0,
          stopoverAirports: [],
          price: 1650,
        },
        {
          airline: "Qatar Airways",
          departure: data.departure,
          arrival: data.arrival,
          time: "04:00 PM - 08:30 PM",
          duration: "4h 30m",
          stops: 1,
          stopoverAirports: ["Doha (DOH)"],
          price: 1800,
        },
        {
          airline: "Etihad Airways",
          departure: data.departure,
          arrival: data.arrival,
          time: "06:00 AM - 10:30 AM",
          duration: "4h 30m",
          stops: 1,
          stopoverAirports: ["Abu Dhabi (AUH)"],
          price: 1700,
        },
        {
          airline: "Turkish Airlines",
          departure: data.departure,
          arrival: data.arrival,
          time: "09:00 AM - 05:00 PM",
          duration: "8h 00m",
          stops: 2,
          stopoverAirports: ["Istanbul (IST)", "Doha (DOH)"],
          price: 2000,
        },
      ];

      // Update state with flight results and mark search as done
      setFlightResults(results);
      setSearched(true);
      setLoading(false); // Turn off loading
    }, 1500); // Simulate delay for loading
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Search Form */}
      <SearchForm onSearch={handleSearch} />

      {/* Conditional rendering based on loading and search status */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : searched ? (
        <FlightResults results={flightResults} />
      ) : (
        <div className="p-6 text-center text-gray-600">
          Please enter your flight details and click 'Search Flights' to view results.
        </div>
      )}
    </div>
  );
}

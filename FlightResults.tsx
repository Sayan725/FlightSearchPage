// components/FlightResults.tsx
import { useState } from "react";

interface Flight {
  airline: string;
  departure: string;
  arrival: string;
  time: string;
  duration: string;
  stops: number;
  stopoverAirports: string[];
  price: number;
}

interface FlightResultsProps {
  results: Flight[];
}

export default function FlightResults({ results }: FlightResultsProps) {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight); // Set the selected flight in state
    console.log("Selected Flight:", flight); // For now, just log the selected flight
  };

  return (
    <div className="p-4">
      {results.map((flight, index) => (
        <div
          key={index}
          className={`bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 ${
            selectedFlight === flight ? "border-green-500" : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">{flight.airline}</div>
            <div className="text-lg text-green-500 font-bold">
              AED {flight.price}
            </div>
          </div>
          <div className="text-gray-500">
            {flight.departure} → {flight.arrival}
          </div>
          <div className="text-gray-700">{flight.time}</div>
          <div className="text-gray-500">Duration: {flight.duration}</div>

          {/* Stopover details */}
          {flight.stops > 0 ? (
            <div className="text-gray-500">
              <span className="font-semibold">{flight.stops} stop(s)</span>:{" "}
              {flight.stopoverAirports.join(", ")}
            </div>
          ) : (
            <div className="text-green-600 font-semibold">Direct flight</div>
          )}

          {/* Select Button */}
          <div className="mt-4">
            <button
              onClick={() => handleSelectFlight(flight)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
            >
              Select Flight
            </button>
          </div>
        </div>
      ))}

      {/* Display selected flight details if any */}
      {selectedFlight && (
        <div className="mt-6 p-4 bg-gray-100 border border-green-300 rounded-lg">
          <h3 className="text-lg font-bold">Selected Flight</h3>
          <div className="text-gray-700">
            <strong>Airline:</strong> {selectedFlight.airline}
          </div>
          <div className="text-gray-700">
            <strong>Departure:</strong> {selectedFlight.departure}
          </div>
          <div className="text-gray-700">
            <strong>Arrival:</strong> {selectedFlight.arrival}
          </div>
          <div className="text-gray-700">
            <strong>Time:</strong> {selectedFlight.time}
          </div>
          <div className="text-gray-700">
            <strong>Duration:</strong> {selectedFlight.duration}
          </div>
          {selectedFlight.stops > 0 ? (
            <div className="text-gray-700">
              <strong>Stopover Airports:</strong> {selectedFlight.stopoverAirports.join(", ")}
            </div>
          ) : (
            <div className="text-gray-700">Direct flight</div>
          )}
        </div>
      )}
    </div>
  );
}

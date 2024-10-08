// components/SearchForm.tsx
import React, { useState } from "react";
const SearchForm = ({ onSearch }: { onSearch: (data: any) => void }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ departure, arrival });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-8 px-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="departure" className="block text-sm font-medium">
            From
          </label>
          <select
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Departure</option>
            <option value="DXB">Dubai (DXB)</option>
            <option value="JFK">New York (JFK)</option>
            <option value="LHR">London (LHR)</option>
            <option value="SIN">Singapore (SIN)</option>
            <option value="BOM">Mumbai (BOM)</option>
            <option value="DEL">Delhi (DEL)</option>
            <option value="SYD">Sydney (SYD)</option>
            <option value="LAX">Los Angeles (LAX)</option>
            <option value="PEK">Beijing (PEK)</option>
            <option value="HND">Tokyo (HND)</option>
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="arrival" className="block text-sm font-medium">
            To
          </label>
          <select
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Arrival</option>
            <option value="DXB">Dubai (DXB)</option>
            <option value="JFK">New York (JFK)</option>
            <option value="LHR">London (LHR)</option>
            <option value="SIN">Singapore (SIN)</option>
            <option value="BOM">Mumbai (BOM)</option>
            <option value="DEL">Delhi (DEL)</option>
            <option value="SYD">Sydney (SYD)</option>
            <option value="LAX">Los Angeles (LAX)</option>
            <option value="PEK">Beijing (PEK)</option>
            <option value="HND">Tokyo (HND)</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

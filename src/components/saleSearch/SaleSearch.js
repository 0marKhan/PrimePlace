import React, { useState } from "react";

const SaleSearch = (props) => {
  // for the search filter
  const [priceOption, setPriceOption] = useState("default");
  const [roomOption, setRoomOption] = useState("default");
  const [bathOption, setBathOption] = useState("default");

  const priceOptionHandler = (event) => {
    setPriceOption(event.target.value);
  };

  const roomChangeHandler = (event) => {
    setRoomOption(event.target.value);
  };

  const bathChangeHandler = (event) => {
    setBathOption(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // passing data to parent component from here
    props.onFilterSubmit(priceOption, roomOption, bathOption);
  };
  return (
    <form
      className="flex justify-center h-12 bg-gray-300 border-t-2 border-gray-400"
      onSubmit={submitHandler}
    >
      <div>
        <span className="mr-3">
          <select
            value={priceOption}
            onChange={priceOptionHandler}
            className="rounded-md mt-1 p-1 w-16 md:w-20"
          >
            <option value="default" disabled>
              Price
            </option>
            <option value="default">All</option>
            <option value="700k-1.0M">700K - 1.0K</option>
            <option value="1.0M-2.0M">1.0M - 2.0M</option>
            <option value=">2M"> >= 2M</option>
          </select>
        </span>

        <span className="mr-3">
          <select
            value={roomOption}
            onChange={roomChangeHandler}
            className="rounded-md mt-1 p-1 w-16 md:w-20"
          >
            <option value="default" disabled>
              Rooms
            </option>
            <option value="default">All</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </span>

        <span className="mr-3">
          <select
            value={bathOption}
            onChange={bathChangeHandler}
            className="rounded-md mt-1 p-1 w-16 md:w-20"
          >
            <option value="default" disabled>
              Baths
            </option>
            <option value="default">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </span>
      </div>

      <button
        className="rounded-md bg-gray-400 w-20 h-[2rem] mt-1"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SaleSearch;

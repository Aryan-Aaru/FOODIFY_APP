import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import RestarentCard from "../components/Admin/RestarentCard";
import { getAdminRestaurents } from "../apis/RestaurentAPI";

const AdminRestaurent = () => {
  const [search, setSearch] = useState("");
  const [styles, setStyles] = useState(false);
  const statusType = ["All Status", "Active", "Pending", "Closed"];
  const [status, setStatus] = useState("All Status");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0); 
  const [size, setSize] = useState(5); 
  const [totalPages, setTotalPages] = useState(0);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const res = await getAdminRestaurents({ page, size  }, status, localStorage.getItem("userId"));
    //   alert("message");
      setRestaurants(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [page, status]);

  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  return (
    <section className="relative p-8 flex flex-col gap-8">
      <section className="flex justify-between">
        <section
          className={`flex w-1/3 gap-2 items-center ${
            styles ? "border-2 border-[#ea2a33]" : ""
          } text-lg p-2 rounded bg-white shadow-2xs`}
        >
          <div
            className="text-[#ea2a33] text-2xl cursor-pointer hover:bg-[#fdecec] rounded-full p-1"
            onClick={() => setStyles(false)}
          >
            <IoIosSearch />
          </div>
          <div className="flex items-center w-full">
            <input
              className="w-full focus:outline-none"
              type="text"
              placeholder="Enter restaurant name"
              value={search}
              onFocus={() => setStyles(true)}
              onBlur={() => setStyles(false)}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <RxCross1
                className="hover:text-[#ea2a33]"
                onClick={() => {
                  setStyles(false);
                  setSearch("");
                }}
              />
            )}
          </div>
        </section>

        <section className="flex p-1 bg-[#e5e7eb] gap-4 rounded-xs">
          {statusType.map((item) => (
            <li
              key={item}
              className={`px-3 py-2 rounded-xl list-none hover:text-black ${
                status === item ? "bg-white text-black" : "text-[#8a8f9b]"
              } cursor-pointer font-bold`}
              onClick={() => {
                setStatus(item);
                setPage(0);
              }}
            >
              {item}
            </li>
          ))}
        </section>
      </section>

      <section>
        <h1 className="text-[#8a8f9b] font-bold text-lg">RESULTS</h1>

        <section className="grid p-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
            {loading && <p>Loading...</p>}

            {!loading && restaurants.length === 0 && (
            <p className="col-span-full text-center text-gray-400 font-semibold py-10">
                No restaurants found{status !== "All Status" ? ` for status "${status}"` : ""}.
            </p>
            )}

            {!loading &&
            restaurants.map((item) => (
                <RestarentCard key={item.restaurant_id} itm={item} />
            ))}
        </section>

        {!loading && totalPages > 1 && restaurants.length > 0 && (
            <div className="flex justify-center gap-4 mt-4">
            <button
                onClick={handlePrev}
                disabled={page === 0}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
                Prev
            </button>
            <span className="px-3 py-1 font-bold">
                Page {page + 1} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={page === totalPages - 1}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
                Next
            </button>
            </div>
        )}

        <div className="fixed right-10 bottom-8 h-15 w-15 flex text-lg justify-center items-center rounded-full bg-[#ee4444] text-white cursor-pointer hover:text-black hover:bg-[#ea2a33]">
            <FaPlus />
        </div>
        </section>
    </section>
  );
};

export default AdminRestaurent;

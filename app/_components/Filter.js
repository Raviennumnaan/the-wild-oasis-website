"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-100 flex">
      <FilterButton
        filter={"all"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </FilterButton>
      <FilterButton
        filter={"small"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3
      </FilterButton>
      <FilterButton
        filter={"medium"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7
      </FilterButton>
      <FilterButton
        filter={"large"}
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12
      </FilterButton>
    </div>
  );
}

function FilterButton({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 hover:bg-primary-700 transition-colors ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;

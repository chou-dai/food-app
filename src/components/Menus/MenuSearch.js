import React from 'react'
import SortIcon from '@material-ui/icons/Sort';
import SearchIcon from '@material-ui/icons/Search';

const MenuSearch = () => {
  const search = (e) => {
    if(e.key === "Enter") {
      window.alert("検索処理")
    }
  }

  return (
    <div className="flex w-full bg-gray-100 px-3 py-2 sticky-position z-20">
      <div className="flex border-2 rounded w-full pl-2">
        <SearchIcon className="text-gray-500 bg-white h-full" />
        <input type="serch" className="appearance-none px-2 py-1 w-full focus:outline-none" onKeyPress={search} placeholder="検索" />
      </div>
      <button className="border-2 items-center justify-center px-2 bg-white">
        <SortIcon className=" text-gray-500" />
      </button>
    </div>
  )
}

export default MenuSearch

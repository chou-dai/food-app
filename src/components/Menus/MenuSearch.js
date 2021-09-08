import React, { useCallback, useState } from 'react'
import SortIcon from '@material-ui/icons/Sort';
import SearchIcon from '@material-ui/icons/Search';

const MenuSearch = () => {
  const [searchText, setSearchText] = useState("");

  const inpuText = useCallback((event) => {
    setSearchText(event.target.value)
  }, [setSearchText]);

  const searchSubmit = (e) => {
    if(searchText === "") return;
    if(e.key === "Enter") {
      window.alert(`入力テキスト：${searchText}\n検索処理`)
    }
  }

  const sort = () => {
    window.alert("並び替え処理")
  }

  return (
    <div className="flex w-full bg-gray-100 px-3 py-2 sticky-position z-20">
      <form action={() => {return}} className="flex bg-white border-2 rounded w-full pl-2">
        <SearchIcon className="text-gray-500 h-full" />
        <input
          type="search" className="appearance-none px-2 py-1 w-full focus:outline-none" placeholder="検索"
          value={searchText} onChange={inpuText} onKeyPress={searchSubmit} />
      </form>
      <button className="border-2 items-center justify-center px-2 bg-white" onClick={sort}>
        <SortIcon className=" text-gray-500" />
      </button>
    </div>
  )
}

export default MenuSearch

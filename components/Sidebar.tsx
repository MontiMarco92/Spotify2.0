import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'
import { BsPlusSquare } from 'react-icons/Bs'
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-6 border-r border-gray-900 bg-black py-4 px-4">
      <div className="flex items-center gap-1">
        <FaSpotify className="h-10 w-10  bg-black text-white" />
        <h1 className="text-2xl font-semibold text-white">Spotify 2.0</h1>
      </div>

      <div className="space-y-3">
        <Link href="/">
          <a className="sideBar-btn">
            <HomeIcon className="h-6 w-6 " />
            <p>Home</p>
          </a>
        </Link>
        <Link href="/search">
          <a className="sideBar-btn">
            <SearchIcon className="h-6 w-6 " />
            <p>Search</p>
          </a>
        </Link>
        <Link href="/collection">
          <a className="sideBar-btn">
            <LibraryIcon className="h-6 w-6 " />
            <p>Your Library</p>
          </a>
        </Link>
      </div>

      <hr className="border-t-[0.1px] border-gray-900" />

      <div className="space-y-3">
        <Link href="/">
          <a className="sideBar-btn">
            <BsPlusSquare className="h-6 w-6 " />
            <p>Create Playlist</p>
          </a>
        </Link>
        <Link href="/">
          <a className="sideBar-btn">
            <HeartIcon className="h-6 w-6 " />
            <p>Liked Songs</p>
          </a>
        </Link>
      </div>

      {/* Playlists */}
    </div>
  )
}

export default Sidebar

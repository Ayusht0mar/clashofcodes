const Header = () => {
    return ( 
        <header className="flex justify-between items-end border-b border-b-[#D9D9D950] px-5">
            <div className="flex gap-2 items-center w-full py-4">
                <h2 className="font-semibold text-xl">Chef_001</h2>
                <p className="bg-[#913DFF] text-black px-2 leading-none h-fit py-0.5 font-bold">Lv 2</p>
            </div>
            <nav className="flex space-x-4 py-3">
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
                <a href="#" className="text-gray-400 hover:text-white">Challenges</a>
                <a href="#" className="text-white">Compete</a>
                <a href="#" className="text-gray-400 hover:text-white">Leaderboard</a>
                <a href="#" className="text-gray-400 hover:text-white">Settings</a>
            </nav>
            <div className="w-full">

            </div>
        </header>
     );
}
 
export default Header;
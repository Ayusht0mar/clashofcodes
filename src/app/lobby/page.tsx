import Header from "@/components/Header";

const LobbyPage = () => {
    return ( 
        <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col">
            {/* Header */}
            <Header/>
            <main className="w-[96vw] my-5 mx-auto flex-grow flex flex-col items-center justify-center bg-[#FFF488] p-8 rounded-lg">    
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-black">⚔️ Code Duel Room</h1>
                </div>

                {/* Enter Room Section */}
                <div className="border-2 rounded-lg border-black py-10 px-5 flex flex-col gap-5 items-center w-full max-w-2xl">
                    <p className="text-black font-semibold">
                        Room Lobby
                    </p>
                    <hr className="w-full h-0.5 mx-auto mb-4 bg-black border-0 rounded md:mb-10"/>
                    <div className="w-full">
                        <p className="text-black pb-3">You</p>
                        <div className="mb-4 flex w-full justify-between items-center space-x-4 border-2 border-black rounded-2xl p-1 pl-3">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-slate-500 rounded-full "></div>
                                <p className="text-black">zeffz10 Ready </p>
                            </div>
                        <button
                            className="bg-white text-black py-2 px-4 rounded-xl border-2 border-black"
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                    <hr className="w-full h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10"/>
                    <div className="w-full">
                        <p className="text-black pb-3">Opponent</p>
                        <div className="mb-4 flex w-full justify-between items-center space-x-4 border-2 border-black rounded-2xl p-1 pl-3">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-slate-500 rounded-full "></div>
                                <p className="text-black">zeffz10 Not Ready </p>
                            </div>
                        <button
                            className="bg-white text-black py-2 px-4 rounded-xl border-2 border-black"
                        >
                            Ready
                        </button>
                        </div>
                    </div>
                    <button
                            className="bg-white text-black w-full py-2 px-4 rounded-xl border-2 border-black"
                        >
                            Notify!
                        </button>
                </div>
            </main>
        </div>
     );
}
 
export default LobbyPage;
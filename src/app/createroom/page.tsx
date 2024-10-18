import Header from "@/components/Header";

const CreateRoom = () => {
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
                        <p className="text-balance text-center text-black font-semibold">
                            The Code Duel Room has been successfully created. To begin the duel, share the Room code with the other player so they can join.
                        </p>
                        <div className="mb-4 flex items-center space-x-4 border-2 border-black rounded-2xl p-1 pl-3">
                            <p className="text-black">Room Code : #12345 </p>
                        <button
                            className="bg-white text-black py-2 px-4 rounded-xl border-2 border-black"
                        >
                            Copy Code
                        </button>
                        </div>
                    </div>
                </main>
        </div>
     );
}
 
export default CreateRoom;
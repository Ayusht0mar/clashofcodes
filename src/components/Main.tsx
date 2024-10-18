"use client"

import { useState } from 'react';

const MainSection = () => {

    const [selectedLanguage, setSelectedLanguage] = useState<string>('Select Language');

    return ( 
        <div className='mx-auto mt-12'>
            <div className="mb-6 flex gap-2 items-center border rounded-2xl p-1">
                <label className="bg-white text-black rounded-xl px-4 py-1.5 font-semibold" htmlFor="language">Language</label>
                <select
                    id="language"
                    className="bg-[#0a0a0a] p-2 mr-2 rounded-xl"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    <option value="Select Language">Select Language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="TypeScript">TypeScript</option>
                </select>
        </div>
        </div>
     );
}
 
export default MainSection;
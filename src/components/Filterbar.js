import React from 'react';

function Filterbar({ categories, removeCategories }) {

    return(
        <div className="w-2/3 h-20 absolute top-24 bg-white rounded-lg shadow-lg shadow-cyan-100">
            <div className="flex items-center h-full w-full ml-6 sm:space-x-6 space-x-2 sm:text-lg text-blue-400 font-bold underline">
                <p>{categories.language}</p>
                <p>{categories.role}</p>
                <p>{categories.tool}</p>
                <div className="text-cyan-900">
                    <button onClick={removeCategories}>
                        Clear
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Filterbar;
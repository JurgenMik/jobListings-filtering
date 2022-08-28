import React, { useState, useMemo, useEffect } from 'react';
import Filterbar from "./Filterbar";

function Joblistings({ Data }) {

    const [jobList, setList] = useState([]);
    const [selectCategory, setSelect] = useState({selected: false});
    const [category, setCategory] = useState(
        {
            role: '',
            tool: '',
            language: '',
        }
    );

    useEffect(() => {
        setList(Data);
    }, []);

    const removeCategories = () => {
        setCategory({
            role: '',
            tool: '',
            language: '',
        })
        setSelect({selected: false})
    };

    const filterBar = () => {
        setSelect({...selectCategory, selected: true})
    }

    const getFilteredList = () => {
        if (!category.role || !category.tool || !category.language) {
            return jobList;
        }
        filterBar();
        return jobList.filter(prop => prop.tools.includes(category.tool) && prop.languages.includes(category.language) && prop.role === category.role);
    };

    let filteredList = useMemo(getFilteredList, [category, jobList]);

    return(
        <div>
            {selectCategory.selected ? <Filterbar removeCategories={removeCategories} categories={category}/> : null}
            {filteredList.map(({logo, company, position, postedAt, contract, location, role, level, tools, languages, featured, newJob}, key) => {
                return(
                    <div className={`sm:h-40 h-auto mt-6 shadow-lg shadow-cyan-100 rounded-lg relative ${featured === true ? "border-l-4 border-blue-400" : null}`} key={key}>
                        <div className="grid sm:grid-cols-2 grid-cols-1 h-full">
                            <div className="grid grid-cols-3">
                                <div className="sm:m-auto sm:static absolute -top-5 left-2">
                                    <img className="sm:w-24 w-12" src={logo} alt="company"/>
                                </div>
                                <div className="sm:col-span-2 col-span-3 mt-4 pt-8 sm:ml-0 ml-4">
                                    <div className="flex text-blue-400 font-semibold">
                                        <h1>{company}</h1>
                                        {newJob === true ? <p className="text-white pl-2 pr-2 ml-2 bg-blue-400 rounded-full">
                                            NEW!</p> : null}
                                        {featured === true ? <p className="text-white pl-2 pr-2 ml-2 bg-cyan-900 rounded-full">
                                            FEATURED</p> : null}
                                    </div>
                                    <div className="text-lg mt-2 text-cyan-900 font-bold">
                                        <h1>{position}</h1>
                                    </div>
                                    <div className="sm:text-sm text-md flex flex-row space-x-6 mt-2 text-neutral-400 sm:font-bold">
                                        <p>{postedAt}</p>
                                        <p>{contract}</p>
                                        <p>{location}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row text-blue-400 font-bold">
                                <div className="flex flex-wrap sm:ml-auto ml-4 mr-10 sm:mt-0 mt-4 sm:pb-0 pb-4 sm:space-x-8 space-x-4">
                                    <button onClick={e => setCategory({...category, role : e.target.innerHTML})} name="role">
                                        {role}
                                    </button>
                                    <button name="level">
                                        {level}
                                    </button>
                                    {languages.map((language, indexLanguage) => {
                                        return(
                                            <button onClick={e => setCategory({...category, language : e.target.innerHTML})} name="languages" key={indexLanguage}>
                                                {language}
                                            </button>
                                        )
                                    })}
                                    {tools.map((tool, indexTool) => {
                                        return(
                                            <button onClick={e => setCategory({...category, tool : e.target.innerHTML})} name="languages" key={indexTool}>
                                                {tool}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Joblistings;
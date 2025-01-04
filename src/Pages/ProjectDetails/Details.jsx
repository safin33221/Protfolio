import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const ids = parseFloat(id)
    console.log(id);
    const [project, setProjects] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => {
                const filter = data.find(item => item._id === ids)
                setProjects(filter)
            })
    }, [])
    console.log(project.tools);

    const { image, heading, paragraph, tools, live, github,improvements } = project || {};
    return (
        <div className='bg-[#251C31] text-white'>
            <div className='w-10/12 mx-auto pt-16 '>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-3xl  py-4'>{heading}</h1>
                    <p className='text-lg text-gray-400'>{paragraph}</p>

                    <div className='my-10'>
                        <p className='my-5 text-gray-400 border-b w-fit'>Uses Technologis</p>
                        {tools?.map((tool, idx) => (
                            <span key={idx} className="p-3 bg-[#7240a1] mx-4 rounded-lg ">{tool?.name}</span>
                        ))}

                    </div>
                    <div className="flex gap-3 bottom-0 mx-auto">
                        <a href={live} target='_blank'
                            className="btn btn-outline border-[#693B93] text-gray-400  my-4">Live page</a>
                        <a href={github} target='_blank'
                            className="btn btn-outline border-[#693B93] text-gray-400  my-4">Source Code</a>

                    </div>
                    <div>
                        <h1 className='font-bold text-lg'>Planned Improvements_</h1>
                        <p className='text-gray-400'>{improvements}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
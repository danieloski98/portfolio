import React from 'react'
import { FiChevronRight, FiUserCheck, FiBriefcase, FiBook, FiFileText, FiTool} from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
// import { useHistory,  } from 'react-router';

export default function Sidebar() {

    const history = useHistory();

    const navigation = (route: string) => {
        history.push(route);
    }

    return (
        <div className="w-full h-full py-10 flex flex-col items-center">

            <div className="w-40 h-40 rounded-full bg-blue-300"></div>
            <h4 className="text-md mt-2 font-Poppins-Bold text-gray-500">Daniel Emmanuel</h4>
            <h4 className="text-xs font-Roboto-Regular">danielemmanuel257@gmail.com</h4>

            <div className="flex flex-col pt-10">

                <div className="w-40 flex items-center justify-between mb-4 cursor-pointer" onClick={() => navigation('/home')}>
                    <div className="flex mt-2">
                        <FiUserCheck color="grey" size={20} />
                        <p className="text-sm ml-3 font-Roboto-Light">About Me</p>
                    </div>
                    <FiChevronRight  color="grey" size={20} className="mt-0" />
                </div>

                <div className="w-40 flex items-center justify-between mb-4 cursor-pointer" onClick={() => navigation('/skills')}>
                    <div className="flex mt-2">
                        <FiTool color="grey" size={20} />
                        <p className="text-sm ml-3 font-Roboto-Light">Skills</p>
                    </div>
                    <FiChevronRight  color="grey" size={20} className="mt-0" />
                </div>

                <div className="w-40 flex items-center justify-between mb-4 cursor-pointer" onClick={() => navigation('/experiences')}>
                    <div className="flex mt-2">
                        <FiBook color="grey" size={20} />
                        <p className="text-sm ml-3 font-Roboto-Light">Experiences</p>
                    </div>
                    <FiChevronRight  color="grey" size={20} className="mt-0" />
                </div>

                <div className="w-40 flex items-center justify-between mb-4 cursor-pointer" onClick={() => navigation('/jobs')}>
                    <div className="flex mt-2">
                        <FiBriefcase color="grey" size={20} />
                        <p className="text-sm ml-3 font-Roboto-Light">Jobs</p>
                    </div>
                    <FiChevronRight  color="grey" size={20} className="mt-0" />
                </div>

                <div className="w-40 flex items-center justify-between mb-4 cursor-pointer " onClick={() => navigation('/blog')}>
                    <div className="flex mt-2">
                        <FiFileText color="grey" size={20} />
                        <p className="text-sm ml-3 font-Roboto-Light">Blog</p>
                    </div>
                    <FiChevronRight  color="grey" size={20} className="mt-0" />
                </div>

            </div>
        </div>
    )
}

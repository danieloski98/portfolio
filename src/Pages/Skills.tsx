import React from 'react'
import { Progress } from 'antd'

export default function Skills() {
    return (
        <div className="p-12 flex-1 flex flex-col">
            <h1 className="text-4xl text-gray-400 font-Poppins-Bold">My Skills</h1>

            <div className="flex-1 flex flex-wrap items-center">

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">

                    <div className="w-24 h-24">
                        <img src="/images/htmlicon.png" alt="html logo"  className="w-full h-full object-cover" />
                   </div>
                    
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">HTML</p>
                    </div>

                    <Progress percent={90} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">

                    <div className="w-24 h-24">
                        <img src="/images/csslogo.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">CSS</p>
                    </div>

                    <Progress percent={75} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">

                    <div className="w-24 h-24">
                        <img src="/images/javascript.jpg" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">JAVASCRIPT</p>
                    </div>

                    <Progress percent={95} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/typescript.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">TYPESCRIPT</p>
                    </div>

                    <Progress percent={65} status="normal" width={60}/>
                </div>

                 <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/nodejs.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">NODEJS</p>
                    </div>

                    <Progress percent={65} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/angular.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">ANGULAR</p>
                    </div>

                    <Progress percent={65} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/Rlogo.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">Reactjs</p>
                    </div>

                    <Progress percent={65} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/Rlogo.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">React Native</p>
                    </div>

                    <Progress percent={65} status="normal" width={60}/>
                </div>

                <div className="flex flex-col w-72 rounded-md shadow-md p-2 items-center mr-4 mb-6 bg-white">
                   
                   <div className="w-24 h-24">
                    <img src="/images/go.png" alt="html logo" className="w-full h-full object-cover" />
                   </div>
                    
                    <div className="flex flex-col pt-5">
                        <p className="text-xl font-Roboto-Regular text-gray-400">Golang</p>
                    </div>

                    <Progress percent={55} status="normal" width={60}/>
                </div>


            </div>
        </div>
    )
}

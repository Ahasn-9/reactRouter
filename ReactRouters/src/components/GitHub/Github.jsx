import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Loading GitHub Data...</h2>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className="flex items-center space-x-6">
                            <img
                                src={data.avatar_url}
                                alt="GitHub Avatar"
                                className="h-24 w-24 rounded-full border-4 border-orange-100"
                            />
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">{data.name || data.login}</h2>
                                <p className="text-gray-600">{data.bio || 'No bio available'}</p>
                            </div>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="bg-orange-50 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold text-orange-600">{data.followers}</h3>
                                <p className="text-gray-600">Followers</p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold text-orange-600">{data.following}</h3>
                                <p className="text-gray-600">Following</p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold text-orange-600">{data.public_repos}</h3>
                                <p className="text-gray-600">Public Repos</p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-6 text-center">
                                <h3 className="text-2xl font-bold text-orange-600">{data.public_gists}</h3>
                                <p className="text-gray-600">Public Gists</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href={data.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition duration-300"
                            >
                                View GitHub Profile
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Ahasn-9')
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data')
        }
        return response.json()
    } catch (error) {
        console.error('Error fetching GitHub data:', error)
        throw error
    }
}
 
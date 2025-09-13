import React from 'react'

export function AppBase() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Crudo.lol - Rate Programming Job Posts
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Submit a Job Post</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                Job Post URL
              </label>
              <input
                type="url"
                id="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://example.com/job-post"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit Post
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {/* Placeholder for posts */}
            <div className="border rounded p-4">
              <h3 className="font-medium">Sample Job Post</h3>
              <p className="text-sm text-gray-600">https://example.com/job</p>
              <div className="flex space-x-4 mt-2">
                <button type="button" className="bg-red-100 text-red-800 px-3 py-1 rounded">
                  Crudo: 0
                </button>
                <button type="button" className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">
                  Claro: 0
                </button>
                <button type="button" className="bg-green-100 text-green-800 px-3 py-1 rounded">
                  Pulido: 0
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { chapters } from './data/novel'

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showTOC, setShowTOC] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-purple-500/30 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Chronicles of the Eternal Realm
          </h1>
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
          >
            Chapters
          </button>
        </div>
      </header>

      {/* Table of Contents Sidebar */}
      {showTOC && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowTOC(false)}>
          <div
            className="fixed right-0 top-0 h-full w-80 bg-slate-800 shadow-2xl overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-purple-400 mb-4">Table of Contents</h2>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentChapter(index)
                    setShowTOC(false)
                  }}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    currentChapter === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <div className="font-semibold">Chapter {chapter.number}</div>
                  <div className="text-sm opacity-80">{chapter.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-24 pb-20 px-4">
        <article className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12">
          {/* Chapter Header */}
          <div className="mb-8 border-b border-purple-500/30 pb-6">
            <div className="text-purple-400 text-sm font-semibold mb-2">
              Chapter {chapters[currentChapter].number}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {chapters[currentChapter].title}
            </h2>
            <div className="text-gray-400 text-sm">
              {chapters[currentChapter].wordCount} words
            </div>
          </div>

          {/* Chapter Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {chapters[currentChapter].content.map((paragraph, index) => (
              <p key={index} className="text-gray-200 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      {/* Navigation Footer */}
      <footer className="fixed bottom-0 w-full bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition"
          >
            ← Previous
          </button>
          <span className="text-gray-300">
            {currentChapter + 1} / {chapters.length}
          </span>
          <button
            onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
            disabled={currentChapter === chapters.length - 1}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition"
          >
            Next →
          </button>
        </div>
      </footer>
    </main>
  )
}

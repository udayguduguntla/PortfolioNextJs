'use client'

import { useState } from 'react'
import ModernNavigation from '../components/ModernNavigation'
import InteractiveStarBackground from '../components/InteractiveStarBackground'
import Image from 'next/image'
import { FileText, Image as ImageIcon, File, Folder, Download, ExternalLink, ChevronRight, Grid, List } from 'lucide-react'

interface FileItem {
  name: string
  path: string
  type: 'image' | 'pdf' | 'document' | 'other'
  category: string
  size?: string
  description?: string
}

const files: FileItem[] = [
  // Achievements/Certificates
  {
    name: 'AINCAT 2025 Certificate',
    path: '/achievements/post_1.pdf',
    type: 'pdf',
    category: 'Achievements',
    description: 'National Rank #3567 in AINCAT 2025'
  },
  {
    name: 'TCS CodeVita Season 12',
    path: '/achievements/Post_2.pdf',
    type: 'pdf',
    category: 'Achievements',
    description: 'Global Rank #7574 Certificate'
  },
  // Resume
  {
    name: 'Resume - Uday Kumar',
    path: '/assets/documents/udayNewUAE.pdf',
    type: 'pdf',
    category: 'Documents',
    description: 'Professional Resume'
  },
  // Images
  {
    name: 'Profile Picture',
    path: '/images/profilePic.jpg',
    type: 'image',
    category: 'Images',
    description: 'Profile photo'
  },
  {
    name: 'About Photo',
    path: '/images/About.jpg',
    type: 'image',
    category: 'Images',
    description: 'About section image'
  },
  {
    name: 'Post Image 3',
    path: '/images/post_3.jpeg',
    type: 'image',
    category: 'Images',
    description: 'Blog/Post image'
  },
  {
    name: 'Post Image 4',
    path: '/images/Post_4.jpeg',
    type: 'image',
    category: 'Images',
    description: 'Blog/Post image'
  },
  {
    name: 'Post Image 5',
    path: '/images/Post_5.jpeg',
    type: 'image',
    category: 'Images',
    description: 'Blog/Post image'
  },
  {
    name: 'Post Image 6-1',
    path: '/images/Post_6_1.jpeg',
    type: 'image',
    category: 'Images',
    description: 'Blog/Post image'
  },
  {
    name: 'Post Image 6-2',
    path: '/images/Post_6_2.jpeg',
    type: 'image',
    category: 'Images',
    description: 'Blog/Post image'
  },
  // Favicons
  {
    name: 'Favicon SVG',
    path: '/images/favicon.svg',
    type: 'image',
    category: 'Assets',
    description: 'Website favicon'
  },
  {
    name: 'Favicon Green SVG',
    path: '/images/favicon-g.svg',
    type: 'image',
    category: 'Assets',
    description: 'Alternative favicon'
  }
]

const categories = ['All', 'Achievements', 'Documents', 'Images', 'Assets']

export default function FilesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [previewFile, setPreviewFile] = useState<FileItem | null>(null)

  const filteredFiles = selectedCategory === 'All' 
    ? files 
    : files.filter(file => file.category === selectedCategory)

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <ImageIcon className="w-6 h-6" />
      case 'pdf':
        return <FileText className="w-6 h-6" />
      case 'document':
        return <File className="w-6 h-6" />
      default:
        return <File className="w-6 h-6" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Achievements':
        return '🏆'
      case 'Documents':
        return '📄'
      case 'Images':
        return '🖼️'
      case 'Assets':
        return '⚙️'
      default:
        return '📁'
    }
  }

  const getCategoryCount = (category: string) => {
    if (category === 'All') return files.length
    return files.filter(f => f.category === category).length
  }

  return (
    <div className="min-h-screen relative pt-24 pb-16">
      <InteractiveStarBackground variant="projects" />
      <ModernNavigation />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              File Explorer
            </h1>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Browse and download certificates, documents, images, and other portfolio assets
            </p>
          </div>

          {/* Category Filter & View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                      : 'glass-purple text-white/80 hover:bg-purple-500/30'
                  }`}
                >
                  <span>{getCategoryIcon(category)}</span>
                  <span>{category}</span>
                  <span className="ml-1 px-2 py-0.5 bg-white/10 rounded-full text-xs">
                    {getCategoryCount(category)}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'glass-purple text-white/70 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 text-white' 
                    : 'glass-purple text-white/70 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Files Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFiles.map((file, index) => (
                <div
                  key={index}
                  className="purple-card p-4 hover:scale-105 transition-all duration-300 group cursor-pointer"
                  onClick={() => setPreviewFile(file)}
                >
                  {/* Preview Area */}
                  <div className="relative h-40 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    {file.type === 'image' ? (
                      <Image
                        src={file.path}
                        alt={file.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto glass-purple rounded-xl flex items-center justify-center text-purple-200 mb-2">
                          {file.type === 'pdf' ? (
                            <FileText className="w-8 h-8" />
                          ) : (
                            <File className="w-8 h-8" />
                          )}
                        </div>
                        <span className="text-xs text-purple-300 uppercase font-medium">
                          {file.type.toUpperCase()}
                        </span>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                      {file.category}
                    </div>
                  </div>

                  {/* File Info */}
                  <div>
                    <h3 className="text-white font-medium mb-1 truncate group-hover:text-purple-200 transition-colors">
                      {file.name}
                    </h3>
                    {file.description && (
                      <p className="text-gray-400 text-sm truncate">
                        {file.description}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <a
                      href={file.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                    <a
                      href={file.path}
                      download
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFiles.map((file, index) => (
                <div
                  key={index}
                  className="purple-card p-4 hover:scale-[1.01] transition-all duration-300 group cursor-pointer"
                  onClick={() => setPreviewFile(file)}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 glass-purple rounded-lg flex items-center justify-center text-purple-200 flex-shrink-0">
                      {getFileIcon(file.type)}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate group-hover:text-purple-200 transition-colors">
                        {file.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-300 text-xs">
                          {file.category}
                        </span>
                        <span>{file.type.toUpperCase()}</span>
                        {file.description && (
                          <>
                            <span>-</span>
                            <span className="truncate">{file.description}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 flex-shrink-0">
                      <a
                        href={file.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        title="View"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={file.path}
                        download
                        className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        title="Download"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredFiles.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto glass-purple rounded-full flex items-center justify-center text-purple-200 mb-4">
                <Folder className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">No files found</h3>
              <p className="text-gray-400">No files in this category yet.</p>
            </div>
          )}

          {/* File Stats */}
          <div className="mt-12 purple-card p-6">
            <h3 className="text-xl font-bold text-white mb-4">File Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-300">{files.length}</div>
                <div className="text-sm text-gray-400">Total Files</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-300">
                  {files.filter(f => f.type === 'pdf').length}
                </div>
                <div className="text-sm text-gray-400">Documents</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-300">
                  {files.filter(f => f.type === 'image').length}
                </div>
                <div className="text-sm text-gray-400">Images</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg">
                <div className="text-2xl font-bold text-purple-300">
                  {files.filter(f => f.category === 'Achievements').length}
                </div>
                <div className="text-sm text-gray-400">Achievements</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewFile && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewFile(null)}
        >
          <div 
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 glass-purple rounded-lg flex items-center justify-center text-purple-200">
                  {getFileIcon(previewFile.type)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{previewFile.name}</h3>
                  <p className="text-sm text-gray-400">{previewFile.category}</p>
                </div>
              </div>
              <button
                onClick={() => setPreviewFile(null)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                X
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-auto max-h-[calc(90vh-140px)]">
              {previewFile.type === 'image' ? (
                <div className="relative w-full h-[60vh]">
                  <Image
                    src={previewFile.path}
                    alt={previewFile.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : previewFile.type === 'pdf' ? (
                <div className="w-full h-[60vh]">
                  <iframe
                    src={previewFile.path}
                    className="w-full h-full rounded-lg"
                    title={previewFile.name}
                  />
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto glass-purple rounded-full flex items-center justify-center text-purple-200 mb-4">
                    <File className="w-10 h-10" />
                  </div>
                  <p className="text-gray-400">Preview not available for this file type</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-white/10">
              {previewFile.description && (
                <p className="text-sm text-gray-400">{previewFile.description}</p>
              )}
              <div className="flex gap-2 ml-auto">
                <a
                  href={previewFile.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
                <a
                  href={previewFile.path}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

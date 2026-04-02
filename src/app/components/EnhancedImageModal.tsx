'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface EnhancedImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
  type: 'image' | 'pdf'
  description?: string
}

export default function EnhancedImageModal({ 
  isOpen, 
  onClose, 
  imageSrc, 
  title, 
  type, 
  description 
}: EnhancedImageModalProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Don't render if not open
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark backdrop - click to close */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {description && (
              <p className="text-gray-400 text-sm mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content area */}
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-auto">
          {type === 'pdf' ? (
            // PDF viewer
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <div className="text-6xl text-red-400 mb-4">📄</div>
                <h4 className="text-lg font-semibold text-white mb-2">PDF Document</h4>
                <p className="text-gray-400 mb-6">Click below to view or download the PDF</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={imageSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    View PDF
                  </a>
                  <a
                    href={imageSrc}
                    download
                    className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    Download
                  </a>
                </div>
              </div>
              
              {/* Embedded PDF viewer */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src={`${imageSrc}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-96"
                  title={title}
                />
              </div>
            </div>
          ) : (
            // Image viewer
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
              )}
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

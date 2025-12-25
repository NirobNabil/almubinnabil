import type { MDXComponents } from 'mdx/types'
import React from 'react'
import Image from 'next/image'
import { Br } from '@/components/linebreak';
import { ImageDescription } from '@/components/image-description';

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={`text-4xl font-bold mt-8 mb-6 ${className || ''}`} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={`text-3xl font-semibold mt-6 mb-5 ${className || ''}`} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={`text-2xl font-semibold mt-5 mb-2 ${className || ''}`} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={`text-xl font-semibold mt-4 mb-2 ${className || ''}`} {...props} />
  ),
  h5: ({ className, ...props }) => (
    <h5 className={`text-lg font-medium mt-3 mb-1 ${className || ''}`} {...props} />
  ),
  h6: ({ className, ...props }) => (
    <h6 className={`text-base font-medium mt-2 mb-1 ${className || ''}`} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={`text-base leading-7 mb-4 ${className || ''}`} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a
      className={`text-blue-600 hover:underline underline-offset-2 ${className || ''}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
  <ul className={`list-disc list-outside ml-6 mb-4 ${className || ''}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`list-decimal list-outside ml-6 mb-4 ${className || ''}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`mb-1 ${className || ''}`} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 ${className || ''}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`bg-gray-900 text-white p-4 rounded-md overflow-x-auto mb-4 ${className || ''}`}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={`bg-gray-100 text-red-600 font-mono px-1 py-[0.15rem] rounded ${className || ''}`}
      {...props}
    />
  ),
  hr: ({ className, ...props }) => (
    <hr className={`border-gray-300 my-6 ${className || ''}`} {...props} />
  ),
  img: ({ className, ...props }) => (
    <Image className={`rounded-md ${className || ''}`} {...props} />
  ),
  table: ({ className, ...props }) => (
    <table
      className={`border-collapse border border-gray-300 mb-4 w-full ${className || ''}`}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={`border border-gray-300 px-3 py-2 bg-gray-100 text-center ${className || ''}`}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={`border border-gray-300 px-3 py-2 text-center align-top ${className || ''}`}
      {...props}
    />
  ),
  thead: ({ className, ...props }) => <thead className={className || ''} {...props} />,
  tbody: ({ className, ...props }) => <tbody className={className || ''} {...props} />,
  Br,
  ImageDescription,
}

export function useMDXComponents(): MDXComponents {
  return components
}

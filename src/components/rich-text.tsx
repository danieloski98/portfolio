'use client'
import ReactMarkdown from 'react-markdown'

interface RichTextProps {
  content: any[]
}

export function RichText({ content }: RichTextProps) {
  // Convert the Strapi rich text format to markdown string
  const markdownContent = content.map(block => {
    if (block.type === 'paragraph') {
      return block.children.map((child: any) => child.text).join('')
    }
    return ''
  }).join('\n\n')

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>
}
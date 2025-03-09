'use client'
import { JSX } from 'react';
import ReactMarkdown from 'react-markdown'

interface RichTextProps {
  content: any[];
  maxLength?: number;
  showFullMarkdown?: boolean;
}

export function RichText({ content, maxLength = 0, showFullMarkdown = false }: RichTextProps) {
  // Convert the Strapi rich text format to markdown string
  const markdownContent = content.map(block => {
    if (block.type === 'paragraph') {
      return block.children.map((child: any) => child.text).join('')
    }
    return ''
  }).join('\n\n')

  if (showFullMarkdown) {
    // For full markdown, we need to use the raw content directly
    return (
      <div className="rich-text-content">
        {content.map((block, index) => {
          if (block.type === 'paragraph') {
            return <p key={index}>{block.children.map((child: any) => child.text).join('')}</p>
          } else if (block.type === 'heading') {
            const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return <HeadingTag key={index}>{block.children.map((child: any) => child.text).join('')}</HeadingTag>
          } else if (block.type === 'list') {
            const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
            return (
              <ListTag key={index}>
                {block.children.map((item: any, itemIndex: number) => (
                  <li key={itemIndex}>
                    {item.children.map((child: any) => child.text).join('')}
                  </li>
                ))}
              </ListTag>
            )
          } else if (block.type === 'code') {
            return <pre key={index}><code>{block.children.map((child: any) => child.text).join('')}</code></pre>
          } else if (block.type === 'quote') {
            return <blockquote key={index}>{block.children.map((child: any) => child.text).join('')}</blockquote>
          }
          return null;
        })}
      </div>
    )
  }

  return <ReactMarkdown>{maxLength === 0 ? markdownContent : markdownContent.substring(0, maxLength) + '...'}</ReactMarkdown>
}
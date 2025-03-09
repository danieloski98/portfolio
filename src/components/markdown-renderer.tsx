"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark, dark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownRendererProps {
    content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => (
                    <a
                        className="text-sky-400 hover:text-sky-300 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                    />
                ),
                blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-sky-500 pl-4 italic my-4" {...props} />
                ),
                img: ({ node, ...props }) => (
                    <img className="max-w-full h-auto rounded-md my-4" {...props} alt={props.alt || ""} />
                ),
                code: ({ inline, className, children, ...props }: React.ComponentPropsWithRef<'code'> & { inline?: boolean }) => {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" className="rounded-md my-4 bg-black" {...props} >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className="bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                            {children}
                        </code>
                    )
                },
                table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-4">
                        <table className="min-w-full divide-y divide-gray-700" {...props} />
                    </div>
                ),
                thead: ({ node, ...props }) => <thead className="bg-gray-800" {...props} />,
                tbody: ({ node, ...props }) => <tbody className="divide-y divide-gray-700" {...props} />,
                tr: ({ node, ...props }) => <tr className="hover:bg-gray-800/50" {...props} />,
                th: ({ node, ...props }) => (
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" {...props} />
                ),
                td: ({ node, ...props }) => <td className="px-4 py-3 text-sm" {...props} />,
                hr: ({ node, ...props }) => <hr className="my-6 border-gray-700" {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    )
}


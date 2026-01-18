import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import markdown from '../what-happens-when-you-click-a-link.md?raw'

export default function App() {
  return (
    <article className="container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </article>
  )
}

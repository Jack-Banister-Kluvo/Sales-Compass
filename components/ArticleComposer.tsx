
import React, { useState } from 'react';
import { generateArticleDraft } from '../services/gemini';
import { Article } from '../types';

interface ArticleComposerProps {
  onArticleCreated: (article: Article) => void;
  onCancel: () => void;
}

const ArticleComposer: React.FC<ArticleComposerProps> = ({ onArticleCreated, onCancel }) => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const draft = await generateArticleDraft(topic);
      const newArticle: Article = {
        id: Date.now().toString(),
        title: draft.title,
        excerpt: draft.excerpt,
        content: draft.content,
        category: draft.category || 'Trends',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        author: 'AI Researcher',
        readTime: '6 min',
        image: `https://picsum.photos/seed/${Math.random()}/800/400`,
      };
      onArticleCreated(newArticle);
    } catch (err) {
      setError("Failed to generate article. Please check your API key or connection.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="mb-6 text-[#222222]">Generate Industry Research</h2>
        <p className="mb-8 text-gray-600">
          Enter a topic or specific industry comparison. Our AI-powered tool will draft a comprehensive research document for your review.
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Insight Topic
            </label>
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Comparison between Solar and Wind infrastructure costs in 2025"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF2B52] text-lg"
              disabled={isGenerating}
            />
          </div>

          {error && <p className="text-[#FF2B52] font-semibold">{error}</p>}

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="bg-[#FF2B52] text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2 disabled:opacity-50 transition-all hover:scale-[1.02]"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Analyzing Market Data...</span>
                </>
              ) : (
                <span>Generate Draft</span>
              )}
            </button>
            <button 
              onClick={onCancel}
              className="text-gray-500 font-bold px-8 py-4 hover:text-[#222222] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComposer;

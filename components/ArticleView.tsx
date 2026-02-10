
import React from 'react';
import { Article } from '../types';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-[#2EA3F2] font-bold uppercase text-xs tracking-widest mb-12 hover:-translate-x-2 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span>Back to Insights</span>
      </button>

      <header className="mb-12">
        <span className="text-[#2EA3F2] font-bold uppercase tracking-widest text-sm mb-4 block">
          {article.category}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold mb-8 leading-[1.1]">
          {article.title}
        </h1>
        <div className="flex items-center space-x-6 text-gray-500 pb-8 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="text-sm font-bold text-[#222222]">{article.author}</p>
              <p className="text-xs uppercase tracking-wider">Industry Analyst</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium text-[#222222]">{article.date}</p>
            <p className="text-xs">{article.readTime} read</p>
          </div>
        </div>
      </header>

      <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <img src={article.image} alt={article.title} className="w-full object-cover max-h-[500px]" />
      </div>

      <article 
        className="prose prose-lg max-w-none prose-headings:text-[#222222] prose-p:text-[#444444] prose-strong:text-[#FF2B52]"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      
      <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xl font-bold mb-6">Stay informed on industry shifts.</p>
        <div className="flex w-full max-w-md">
          <input 
            type="email" 
            placeholder="Work Email"
            className="flex-1 px-4 py-3 rounded-l-lg border border-gray-200 focus:outline-none focus:border-[#2EA3F2]"
          />
          <button className="bg-[#2EA3F2] text-white px-6 py-3 rounded-r-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;

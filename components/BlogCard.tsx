
import React from 'react';
import { Article } from '../types';

interface BlogCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, onClick }) => {
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Comparison': return 'bg-[#2EA3F2]';
      case 'Research': return 'bg-[#FF2B52]';
      case 'Highlight': return 'bg-gray-800';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div 
      className="group cursor-pointer flex flex-col h-full bg-white transition-transform duration-300"
      onClick={() => onClick(article)}
    >
      <div className="relative overflow-hidden aspect-[16/9] mb-6 rounded-2xl">
        <img 
          src={article.image} 
          alt={article.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest ${getCategoryColor(article.category)}`}>
          {article.category}
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center text-sm text-gray-400 mb-3 space-x-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} read</span>
        </div>
        <h2 className="text-2xl font-bold mb-4 group-hover:text-[#FF2B52] transition-colors leading-tight">
          {article.title}
        </h2>
        <p className="text-gray-600 line-clamp-3 mb-6">
          {article.excerpt}
        </p>
      </div>
      
      <div className="flex items-center space-x-2 text-[#2EA3F2] font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform">
        <span>Read Full Article</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default BlogCard;

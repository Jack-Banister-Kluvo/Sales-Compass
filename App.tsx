
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Article, ViewMode } from './types';
import { MOCK_ARTICLES } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import ArticleView from './components/ArticleView';



const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [articles] = useState<Article[]>(MOCK_ARTICLES);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewMode, selectedArticle]);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setViewMode('detail');
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <Header onNavigate={(view) => {
          setViewMode(view);
          setSelectedArticle(null);
        }} />

        <main className="flex-grow">
          {viewMode === 'list' && (
            <>
              <Hero />

              <section className="px-6 py-10 max-w-7xl mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                  {articles.map((article) => (
                    <BlogCard
                      key={article.id}
                      article={article}
                      onClick={handleArticleClick}
                    />
                  ))}
                </div>

                {articles.length === 0 && (
                  <div className="text-center py-20 bg-gray-50 rounded-3xl">
                    <p className="text-gray-400 font-bold uppercase tracking-widest">No reports found.</p>
                  </div>
                )}
              </section>
            </>
          )}

          {viewMode === 'detail' && selectedArticle && (
            <ArticleView
              article={selectedArticle}
              onBack={() => {
                setViewMode('list');
                setSelectedArticle(null);
              }}
            />
          )}
        </main>

        <footer className="bg-white py-12 px-6 border-t border-gray-100 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Sales Compass" className="h-8 w-auto" />
              <span className="font-bold text-lg uppercase tracking-tight text-gray-900">Sales Compass</span>
            </div>
            <p className="text-gray-300 text-[10px] mt-4 uppercase tracking-[0.3em] font-bold">
              &copy; 2024 Sales Compass Research
            </p>
          </div>
        </footer>
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;

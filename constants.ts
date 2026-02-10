
import { Article } from './types';

export const COLORS = {
  primary: '#FF2B52',
  accent: '#2EA3F2',
  background: '#FFFFFF',
  text: '#222222',
  link: '#2EA3F2',
};

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Top 5 Outsourced SDR Agencies for Enterprise SaaS in 2024',
    excerpt: 'Comparing the heavy hitters in pipeline generation. We look at booking rates, CRM integration capabilities, and regional expertise.',
    content: `
      <h2>Evaluating the SDR Landscape</h2>
      <p>Building an internal sales development team is expensive and time-consuming. For many B2B companies, outsourcing SDR functions has become the standard for rapid scaling. But not all agencies are created equal.</p>
      
      <h3>1. MemoryBlue</h3>
      <p>Known for their rigorous training and high-energy culture, they are a staple for tech companies looking for high-volume outreach. Their alumni network also provides a unique talent pipeline for clients.</p>
      
      <h3>2. Operatix</h3>
      <p>If your focus is strictly on Enterprise and C-Suite engagement, Operatix stands out for their high-touch, quality-over-quantity approach. They specialize in complex sales cycles where a simple script won't suffice.</p>
      
      <h2>Key Comparison Metrics</h2>
      <p>When choosing a partner, focus on <strong>Lead-to-Meeting conversion rates</strong> rather than just activity volume. A company making 100 calls a day with zero results is far more expensive than one making 20 calls with one qualified discovery session.</p>
    `,
    category: 'Comparison',
    date: 'Oct 24, 2024',
    author: 'Sales Strategist',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'The Shift from Telemarketing to "Strategic Pipeline Generation"',
    excerpt: 'How the industry is rebranding high-volume calling and why the quality of data is now more important than the size of the calling list.',
    content: `
      <h2>The Rebirth of the Phone</h2>
      <p>Traditional telemarketing has faced head-on collisions with regulations and spam filters. However, strategic pipeline generation is thriving. The difference? Intent data.</p>
      <p>Modern telemarketing firms now use tools like 6sense or Demandbase to identify companies already in a buying cycle. This prevents "cold" calling from being completely cold, leading to higher conversion rates and better brand perception.</p>
    `,
    category: 'Pipeline Gen',
    date: 'Oct 20, 2024',
    author: 'Lead Gen Expert',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Offshore vs. Nearshore SDRs: A Cost-Benefit Analysis',
    excerpt: 'Is the 40% cost saving of offshore teams worth the potential friction in complex B2B sales? We break down the data.',
    content: `
      <h2>Global Sales Outsourcing Trends</h2>
      <p>The rise of high-quality sales talent in regions like the Philippines and South Africa has challenged the dominance of US-based firms. While base salaries are significantly lower, the "hidden costs" of management and time-zone alignment must be factored in.</p>
      <h3>The Hybrid Model</h3>
      <p>Many successful companies are now using a hybrid model: offshore for data cleansing and initial outreach, and onshore for closing or high-value account management.</p>
    `,
    category: 'Strategy',
    date: 'Oct 15, 2024',
    author: 'Operations Director',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
  }
];

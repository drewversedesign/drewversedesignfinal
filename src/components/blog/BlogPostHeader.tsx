import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
interface BlogPostHeaderProps {
  title: string;
  date: string;
  readTime: string;
  image: string;
}
export const BlogPostHeader = ({
  title,
  date,
  readTime,
  image
}: BlogPostHeaderProps) => {
  return <div className="mb-8 my-[50px]">
      <Link to="/blog" className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Link>
      
      <img src={image} alt={title} className="w-full h-64 md:h-80 object-cover rounded-lg mb-6" />
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-4">{title}</h1>
      
      <div className="flex flex-wrap items-center gap-4 text-white mb-6">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-white" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-white" />
          <span>{readTime}</span>
        </div>
      </div>
      
      <div className="w-16 h-1 bg-orange-500"></div>
    </div>;
};
import { supabase } from '@/integrations/supabase/client';

export interface DashboardStats {
  blogPosts: {
    total: number;
    published: number;
    draft: number;
    views: number;
  };
  projects: {
    total: number;
    completed: number;
    inProgress: number;
    inquiries: number;
  };
  testimonials: {
    total: number;
    published: number;
    pending: number;
    avgRating: number;
  };
  messages: {
    total: number;
    unread: number;
    responded: number;
    responseRate: number;
  };
}

export interface ActivityItem {
  id: number;
  type: 'blog' | 'message' | 'project' | 'testimonial';
  action: string;
  title: string;
  time: string;
  user: string;
}

export interface AnalyticsData {
  pageViews: number[];
  blogViews: number[];
  inquiries: number[];
}

class AdminService {
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      // In a real implementation, you would fetch this from your database
      // For now, we'll return mock data that can be easily replaced
      
      // Example of how you might fetch real data:
      // const { data: blogPosts } = await supabase
      //   .from('blog_posts')
      //   .select('*');
      
      // const { data: projects } = await supabase
      //   .from('projects')
      //   .select('*');
      
      // const { data: testimonials } = await supabase
      //   .from('testimonials')
      //   .select('*');
      
      // const { data: messages } = await supabase
      //   .from('contact_messages')
      //   .select('*');

      return {
        blogPosts: { total: 12, published: 10, draft: 2, views: 15420 },
        projects: { total: 8, completed: 6, inProgress: 2, inquiries: 23 },
        testimonials: { total: 15, published: 12, pending: 3, avgRating: 4.8 },
        messages: { total: 45, unread: 5, responded: 40, responseRate: 89 }
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  }

  async getRecentActivity(): Promise<ActivityItem[]> {
    try {
      // In a real implementation, you would fetch this from your database
      // Example:
      // const { data } = await supabase
      //   .from('activity_log')
      //   .select('*')
      //   .order('created_at', { ascending: false })
      //   .limit(10);

      return [
        {
          id: 1,
          type: 'blog',
          action: 'published',
          title: 'Future of Web Design in 2024',
          time: '2 hours ago',
          user: 'Admin'
        },
        {
          id: 2,
          type: 'message',
          action: 'received',
          title: 'New inquiry from John Doe',
          time: '4 hours ago',
          user: 'John Doe'
        },
        {
          id: 3,
          type: 'project',
          action: 'completed',
          title: 'E-commerce Website Redesign',
          time: '1 day ago',
          user: 'Client'
        },
        {
          id: 4,
          type: 'testimonial',
          action: 'approved',
          title: '5-star review from Sarah',
          time: '2 days ago',
          user: 'Sarah Johnson'
        }
      ];
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      throw error;
    }
  }

  async getAnalyticsData(): Promise<AnalyticsData> {
    try {
      // In a real implementation, you would fetch this from your analytics service
      // Example with Google Analytics or similar:
      // const analytics = await analyticsService.getData({
      //   startDate: '7daysAgo',
      //   endDate: 'today',
      //   metrics: ['pageviews', 'blogViews', 'inquiries']
      // });

      return {
        pageViews: [1200, 1400, 1100, 1600, 1800, 2000, 2200],
        blogViews: [800, 900, 750, 1100, 1200, 1400, 1600],
        inquiries: [5, 8, 3, 12, 15, 10, 18]
      };
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      throw error;
    }
  }

  async getNotificationCount(): Promise<number> {
    try {
      // In a real implementation, you would fetch unread notifications
      // Example:
      // const { count } = await supabase
      //   .from('notifications')
      //   .select('*', { count: 'exact', head: true })
      //   .eq('read', false);

      return 5; // Mock data
    } catch (error) {
      console.error('Error fetching notification count:', error);
      return 0;
    }
  }

  async markNotificationAsRead(notificationId: number): Promise<void> {
    try {
      // In a real implementation, you would update the notification
      // Example:
      // await supabase
      //   .from('notifications')
      //   .update({ read: true })
      //   .eq('id', notificationId);

      console.log(`Marked notification ${notificationId} as read`);
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  async updateSiteSettings(settings: any): Promise<void> {
    try {
      // In a real implementation, you would update site settings
      // Example:
      // await supabase
      //   .from('site_settings')
      //   .upsert(settings);

      console.log('Site settings updated:', settings);
    } catch (error) {
      console.error('Error updating site settings:', error);
      throw error;
    }
  }
}

export const adminService = new AdminService(); 
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { 
  Loader2, Users, FileText, Briefcase, MessageSquare, Settings, BarChart, Star, Globe,
  Plus, Bell, TrendingUp, Eye, Calendar, Clock, AlertCircle, CheckCircle, XCircle,
  Activity, Mail, Phone, MapPin, ExternalLink, Edit, Trash2, MoreHorizontal, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import AdminBlogManager from '@/components/admin/AdminBlogManager';
import AdminProjectManager from '@/components/admin/AdminProjectManager';
import AdminTestimonialManager from '@/components/admin/AdminTestimonialManager';
import AdminContactManager from '@/components/admin/AdminContactManager';
import { adminService, DashboardStats, ActivityItem, AnalyticsData } from '@/services/adminService';

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [notifications, setNotifications] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingActivity, setLoadingActivity] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch initial data
  useEffect(() => {
    fetchDashboardData();
    fetchNotifications();
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
      // Update stats every 5 minutes
      if (Date.now() % 300000 < 1000) {
        fetchDashboardData();
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoadingStats(true);
      const [statsData, activityData, analyticsData] = await Promise.all([
        adminService.getDashboardStats(),
        adminService.getRecentActivity(),
        adminService.getAnalyticsData()
      ]);
      
      setStats(statsData);
      setRecentActivity(activityData);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingStats(false);
    }
  };

  const fetchNotifications = async () => {
    try {
      const count = await adminService.getNotificationCount();
      setNotifications(count);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardData();
    setRefreshing(false);
    toast({
      title: "Refreshed",
      description: "Dashboard data has been updated.",
    });
  };

  const handleQuickAction = (action: string) => {
    setActiveTab(action);
    toast({
      title: "Quick Action",
      description: `Navigating to ${action} management`,
    });
  };

  const handleNotificationClick = async () => {
    // In a real app, this would open a notifications panel
    toast({
      title: "Notifications",
      description: `You have ${notifications} unread notifications`,
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'message': return <MessageSquare className="h-4 w-4" />;
      case 'project': return <Briefcase className="h-4 w-4" />;
      case 'testimonial': return <Star className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'blog': return 'text-blue-600 bg-blue-100';
      case 'message': return 'text-green-600 bg-green-100';
      case 'project': return 'text-purple-600 bg-purple-100';
      case 'testimonial': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have admin privileges to access this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={signOut} className="w-full">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Manage your DrewVerse Design website content"
        noindex={true}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Enhanced Header */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-600">Welcome back, {user.email}</p>
                </div>
                <Badge variant="secondary" className="hidden sm:flex">
                  <Globe className="h-3 w-3 mr-1" />
                  Live
                </Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRefresh}
                  disabled={refreshing}
                >
                  <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="relative"
                  onClick={handleNotificationClick}
                >
                  <Bell className="h-4 w-4" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                      {notifications}
                    </Badge>
                  )}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="h-4 w-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={signOut}>
                      <XCircle className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto p-1">
              <TabsTrigger value="overview" className="flex-col h-auto py-3">
                <BarChart className="h-4 w-4 mb-1" />
                <span className="text-xs">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="blog" className="flex-col h-auto py-3">
                <FileText className="h-4 w-4 mb-1" />
                <span className="text-xs">Blog</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex-col h-auto py-3">
                <Briefcase className="h-4 w-4 mb-1" />
                <span className="text-xs">Projects</span>
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="flex-col h-auto py-3">
                <Star className="h-4 w-4 mb-1" />
                <span className="text-xs">Reviews</span>
              </TabsTrigger>
              <TabsTrigger value="contacts" className="flex-col h-auto py-3">
                <MessageSquare className="h-4 w-4 mb-1" />
                <span className="text-xs">Messages</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex-col h-auto py-3">
                <TrendingUp className="h-4 w-4 mb-1" />
                <span className="text-xs">Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="flex-col h-auto py-3">
                <Users className="h-4 w-4 mb-1" />
                <span className="text-xs">Users</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-col h-auto py-3">
                <Settings className="h-4 w-4 mb-1" />
                <span className="text-xs">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Create new content or manage existing items
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex-col"
                      onClick={() => handleQuickAction('blog')}
                    >
                      <FileText className="h-6 w-6 mb-2" />
                      <span>New Blog Post</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex-col"
                      onClick={() => handleQuickAction('projects')}
                    >
                      <Briefcase className="h-6 w-6 mb-2" />
                      <span>Add Project</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex-col"
                      onClick={() => handleQuickAction('testimonials')}
                    >
                      <Star className="h-6 w-6 mb-2" />
                      <span>Add Review</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto p-4 flex-col"
                      onClick={() => handleQuickAction('contacts')}
                    >
                      <MessageSquare className="h-6 w-6 mb-2" />
                      <span>View Messages</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Stats Cards */}
              {loadingStats ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-32"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats?.blogPosts.total || 0}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{stats?.blogPosts.published || 0} published</span>
                        <span>•</span>
                        <span>{stats?.blogPosts.draft || 0} drafts</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Eye className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {(stats?.blogPosts.views || 0).toLocaleString()} views
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Projects</CardTitle>
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats?.projects.total || 0}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{stats?.projects.completed || 0} completed</span>
                        <span>•</span>
                        <span>{stats?.projects.inProgress || 0} in progress</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {stats?.projects.inquiries || 0} inquiries
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats?.testimonials.total || 0}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span>{stats?.testimonials.published || 0} published</span>
                        <span>•</span>
                        <span>{stats?.testimonials.pending || 0} pending</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Star className="h-3 w-3 mr-1 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground">
                          {stats?.testimonials.avgRating || 0} avg rating
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Messages</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stats?.messages.total || 0}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <span className="text-red-600 font-medium">{stats?.messages.unread || 0} unread</span>
                        <span>•</span>
                        <span>{stats?.messages.responded || 0} responded</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <Progress value={stats?.messages.responseRate || 0} className="h-2 mr-2" />
                        <span className="text-xs text-muted-foreground">
                          {stats?.messages.responseRate || 0}% response rate
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Recent Activity Feed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>
                    Latest actions and updates across your site
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingActivity ? (
                    <div className="space-y-4">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-start space-x-3 animate-pulse">
                          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {activity.action.charAt(0).toUpperCase() + activity.action.slice(1)}: {activity.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              by {activity.user} • {activity.time}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog">
              <AdminBlogManager />
            </TabsContent>

            <TabsContent value="projects">
              <AdminProjectManager />
            </TabsContent>

            <TabsContent value="testimonials">
              <AdminTestimonialManager />
            </TabsContent>

            <TabsContent value="contacts">
              <AdminContactManager />
            </TabsContent>

            <TabsContent value="analytics">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Page Views (7 days)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {analytics ? analytics.pageViews.reduce((a, b) => a + b, 0).toLocaleString() : '0'}
                      </div>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-xs text-green-600">+12% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Blog Views (7 days)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {analytics ? analytics.blogViews.reduce((a, b) => a + b, 0).toLocaleString() : '0'}
                      </div>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-xs text-green-600">+8% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-medium">Inquiries (7 days)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {analytics ? analytics.inquiries.reduce((a, b) => a + b, 0) : '0'}
                      </div>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-xs text-green-600">+15% from last week</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>
                      Detailed analytics and insights coming soon...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <BarChart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p>Analytics charts and detailed insights will be available here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage admin users and permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 border rounded-lg">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium">{user.email}</p>
                        <p className="text-sm text-gray-500">Super Admin</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <p className="text-gray-600">User management features coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Site Settings</CardTitle>
                    <CardDescription>
                      Manage your website configuration and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">General Settings</h3>
                        <p className="text-sm text-gray-600">Basic website configuration</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Site Name</label>
                          <input 
                            type="text" 
                            defaultValue="DrewVerse Design" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Site URL</label>
                          <input 
                            type="url" 
                            defaultValue="https://drewversedesign.com" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Contact Information</h3>
                        <p className="text-sm text-gray-600">Update your contact details</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <input 
                            type="email" 
                            defaultValue="contact@drewversedesign.com" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone</label>
                          <input 
                            type="tel" 
                            defaultValue="+256 123 456 789" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium">Social Media</h3>
                        <p className="text-sm text-gray-600">Connect your social media accounts</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Facebook</label>
                          <input 
                            type="url" 
                            placeholder="https://facebook.com/yourpage" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Twitter</label>
                          <input 
                            type="url" 
                            placeholder="https://twitter.com/yourhandle" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

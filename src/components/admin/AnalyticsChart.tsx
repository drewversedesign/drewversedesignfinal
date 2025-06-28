import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, BarChart3, LineChart, Activity } from 'lucide-react';

interface ChartData {
  label: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
}

interface AnalyticsChartProps {
  title: string;
  data: ChartData[];
  type?: 'bar' | 'line' | 'area';
  className?: string;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ 
  title, 
  data, 
  type = 'bar',
  className = '' 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getChangeIcon = (changeType: 'increase' | 'decrease') => {
    return changeType === 'increase' ? (
      <TrendingUp className="h-3 w-3 text-green-500" />
    ) : (
      <TrendingDown className="h-3 w-3 text-red-500" />
    );
  };

  const getChangeColor = (changeType: 'increase' | 'decrease') => {
    return changeType === 'increase' ? 'text-green-600' : 'text-red-600';
  };

  const renderChart = () => {
    if (type === 'bar') {
      return (
        <div className="flex items-end justify-between h-32 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="text-xs text-gray-500">{item.label}</div>
              <div 
                className="bg-blue-500 rounded-t w-8 transition-all duration-300 hover:bg-blue-600"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  minHeight: '8px'
                }}
              />
              <div className="text-xs font-medium">{item.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === 'line') {
      return (
        <div className="relative h-32 mt-4">
          <svg className="w-full h-full" viewBox="0 0 100 40">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500"
              points={data.map((item, index) => {
                const x = (index / (data.length - 1)) * 100;
                const y = 40 - ((item.value / maxValue) * 40);
                return `${x},${y}`;
              }).join(' ')}
            />
            {data.map((item, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 40 - ((item.value / maxValue) * 40);
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="2"
                  className="fill-blue-500"
                />
              );
            })}
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <CardDescription className="text-xs">
              {type === 'bar' ? 'Bar chart' : type === 'line' ? 'Line chart' : 'Chart'} view
            </CardDescription>
          </div>
          {type === 'bar' && <BarChart3 className="h-4 w-4 text-muted-foreground" />}
          {type === 'line' && <LineChart className="h-4 w-4 text-muted-foreground" />}
        </div>
      </CardHeader>
      <CardContent>
        {renderChart()}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.slice(0, 4).map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-xs text-gray-600">{item.label}</span>
              <div className="flex items-center space-x-1">
                {getChangeIcon(item.changeType)}
                <span className={`text-xs font-medium ${getChangeColor(item.changeType)}`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart; 
'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export default function Tabs({ tabs, defaultTab, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content

  return (
    <div className={`tabs-container ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 sm:mb-8 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 min-h-[48px] w-full sm:w-auto
              ${activeTab === tab.id 
                ? 'bg-brand-primary text-white shadow-lg transform scale-105' 
                : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
              }
            `}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span className="text-lg sm:text-xl flex-shrink-0">{tab.icon}</span>
            <span className="text-sm sm:text-base sm:text-lg whitespace-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div 
        className="tab-content transition-all duration-500 ease-in-out"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTabContent}
      </div>
    </div>
  )
}

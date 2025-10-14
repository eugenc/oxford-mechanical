'use client'

import { useState } from 'react'

interface Tab {
  id: string
  label: string
  icon: string
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
      <div className="flex flex-col sm:flex-row mb-8 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300
              ${activeTab === tab.id 
                ? 'bg-brand-primary text-white shadow-lg transform scale-105' 
                : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
              }
            `}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-base sm:text-lg">{tab.label}</span>
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

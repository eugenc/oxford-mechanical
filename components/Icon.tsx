import React from 'react'
import {
  TrophyIcon,
  ShieldCheckIcon,
  StarIcon,
  BellAlertIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  GiftIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  BeakerIcon,
  CameraIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  BuildingLibraryIcon,
  UserIcon,
  CurrencyDollarIcon,
  UsersIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  ArrowPathIcon,
  CloudIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import {
  TrophyIcon as TrophyIconSolid,
  ShieldCheckIcon as ShieldCheckIconSolid,
  StarIcon as StarIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
} from '@heroicons/react/24/solid'

export type IconName =
  | 'trophy' | 'shield' | 'star' | 'emergency' | 'wrench' | 'building'
  | 'gift' | 'search' | 'check' | 'water' | 'camera' | 'tools'
  | 'education' | 'healthcare' | 'retail' | 'industrial' | 'chart'
  | 'bank' | 'user' | 'money' | 'users' | 'calendar' | 'clipboard'
  | 'credit-card' | 'recycle' | 'rain' | 'settings' | 'shower'

interface IconProps {
  name: IconName
  className?: string
  solid?: boolean
}

const iconMap: Record<IconName, React.ComponentType<{ className?: string }>> = {
  trophy: TrophyIcon,
  shield: ShieldCheckIcon,
  star: StarIcon,
  emergency: BellAlertIcon,
  wrench: WrenchScrewdriverIcon,
  building: BuildingOfficeIcon,
  gift: GiftIcon,
  search: MagnifyingGlassIcon,
  check: CheckCircleIcon,
  water: BeakerIcon,
  shower: BeakerIcon,
  camera: CameraIcon,
  tools: WrenchScrewdriverIcon,
  education: AcademicCapIcon,
  healthcare: BuildingOfficeIcon,
  retail: ShoppingBagIcon,
  industrial: BuildingOffice2Icon,
  chart: ChartBarIcon,
  bank: BuildingLibraryIcon,
  user: UserIcon,
  money: CurrencyDollarIcon,
  users: UsersIcon,
  calendar: CalendarIcon,
  clipboard: ClipboardDocumentCheckIcon,
  'credit-card': CreditCardIcon,
  recycle: ArrowPathIcon,
  rain: CloudIcon,
  settings: Cog6ToothIcon,
}

const solidIconMap: Partial<Record<IconName, React.ComponentType<{ className?: string }>>> = {
  trophy: TrophyIconSolid,
  shield: ShieldCheckIconSolid,
  star: StarIconSolid,
  check: CheckCircleIconSolid,
}

export default function Icon({ name, className = "w-5 h-5", solid = false }: IconProps) {
  const IconComponent = solid && solidIconMap[name]
    ? solidIconMap[name]!
    : iconMap[name]

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent className={className} />
}


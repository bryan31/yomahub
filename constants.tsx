import { Project } from './types';
import {
  DatabaseZap,
  Layers
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'liteflow',
    name: 'LiteFlow',
    description: '轻量，快速的组件化规则引擎',
    longDescription: 'LiteFlow 拥有极小的侵入性，能够将复杂的业务逻辑解耦为细粒度的组件。通过脚本或配置文件进行编排，支持热刷新，让系统逻辑清晰可见。',
    tags: ['Rule Engine', 'Java', 'High Performance'],
    link: 'https://gitee.com/dromara/liteFlow',
    logo: '/logo/liteflow.svg',
    theme: {
      bgGradient: 'bg-gradient-to-br from-red-50 to-pink-50',
      textColor: 'text-gray-900',
      accentColor: 'text-red-500',
      titleColor: 'text-red-600'
    },
    stats: { label: 'Gitee Stars', value: '7.3K+' }
  },
  {
    id: 'tlog',
    name: 'TLog',
    description: '分布式日志标记追踪神器',
    longDescription: 'TLog 提供了一种最简单的方式来解决分布式系统中的日志追踪问题。支持多种RPC框架，业务代码零侵入，十分钟接入，让排查问题变得轻而易举。',
    tags: ['Logging', 'Tracing', 'Distributed'],
    link: 'https://gitee.com/dromara/TLog',
    logo: '/logo/tlog.svg',
    theme: {
      bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      textColor: 'text-gray-900',
      accentColor: 'text-blue-700',
      titleColor: 'text-blue-800'
    },
    stats: { label: 'Gitee Stars', value: '3.4K+' }
  },
  {
    id: 'akali',
    name: 'Akali',
    description: '本地化热点流控防护框架',
    longDescription: 'Akali 致力于解决应用内部的热点流量问题。相比于宏观限流，Akali 更专注于细粒度的热点数据保护，在极端流量下守护系统稳定性。',
    tags: ['Flow Control', 'Protection', 'Hotspot'],
    link: 'https://gitee.com/dromara/Akali',
    logo: '/logo/akali.svg',
    theme: {
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      textColor: 'text-gray-900',
      accentColor: 'text-purple-600',
      titleColor: 'text-purple-700'
    },
    stats: { label: 'Gitee Stars', value: '583' }
  },
  {
    id: 'roguemap',
    name: 'RogueMap',
    description: '高并发下的Map结构优化',
    longDescription: '专为高并发场景设计的扁平化 Map 结构。通过极致的内存布局优化，提供比 JDK 标准 HashMap 更卓越的读写性能，是追求极致性能的不二之选。',
    tags: ['Data Structure', 'Optimization', 'Performance'],
    link: 'https://gitee.com/bryan31/RogueMap',
    logo: '/logo/roguemap.svg',
    theme: {
      bgGradient: 'bg-gradient-to-br from-blue-50 to-orange-50',
      textColor: 'text-gray-900',
      accentColor: 'text-blue-600',
      titleColor: 'text-blue-700'
    },
    stats: { label: 'Performance', value: 'Ultra' }
  },
  {
    id: 'beast-tx',
    name: 'beast-tx',
    description: '轻量级分布式事务框架',
    longDescription: '抛弃复杂的配置，回归事务的本质。Beast-TX 提供轻量、易用且可靠的分布式事务解决方案，保证分布式环境下的数据强一致性。',
    tags: ['Transaction', 'Distributed', 'Consistency'],
    link: 'https://gitee.com/bryan31/beast-tx',
    icon: DatabaseZap,
    theme: {
      bgGradient: 'bg-gradient-to-tl from-purple-900 to-indigo-900',
      textColor: 'text-white',
      accentColor: 'text-purple-400'
    },
    stats: { label: 'Reliability', value: '99.9%' }
  },
  {
    id: 'litebatch',
    name: 'liteBatch',
    description: '轻量级批处理框架',
    longDescription: '无需部署庞大的批处理平台。LiteBatch 以库的形式嵌入应用，提供高效、可监控的数据批处理能力，简化大批量数据任务的开发工作。',
    tags: ['Batch', 'Data Processing', 'Efficiency'],
    link: 'https://gitee.com/bryan31/liteBatch',
    icon: Layers,
    theme: {
      bgGradient: 'bg-gradient-to-br from-teal-50 to-cyan-100',
      textColor: 'text-gray-900',
      accentColor: 'text-teal-600'
    },
    stats: { label: 'Throughput', value: 'High' }
  }
];
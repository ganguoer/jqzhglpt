
import synergeticOffice from '@/components/synergeticOffice/main'
import touristComplaint from '@/components/touristComplaint/main'
import environmentalProtection from '@/components/environmentalProtection/main'
import backstageApplication from '@/components/backstageApplication/main'
import callCenter from '@/components/callCenter/callCenter'
import infoRelease from '@/components/infoRelease/infoRelease'
import marketing from '@/components/marketing/marketing'
import screen from '@/components/screen/screen'
import dataV from '@/components/dataV/dataV'
import emergencyManage from '@/components/emergencyManage/emergencyManage'
import ScenicMap from '@/components/scenic_map/ScenicMap'
import video from '@/components/video/video'

export default {
  routes: [
    {
      path: '/screen',
      name: 'screen',
      component: screen

    },
    {
      path: '/marketing',
      name: 'marketing',
      component: marketing
    },
    {
      path: '/synergeticOffice',
      name: 'synergeticOffice',
      component: synergeticOffice
    },
    {
      path: '/touristComplaint',
      name: 'touristComplaint',
      component: touristComplaint
    },
    {
      path: '/callCenter',
      name: 'callCenter',
      component: callCenter
    },
    {
      path: '/environmentalProtection',
      name: 'environmentalProtection',
      component: environmentalProtection
    },
    {
      path: '/infoRelease',
      name: 'infoRelease',
      component: infoRelease
    },
    {
      path: '/backstageApplication',
      name: 'backstageApplication',
      component: backstageApplication
    },
    {
      name: 'scMap',
      path:'/scMap',
      component: ScenicMap
    },
    {
      name:'dataV',
      path:'/dataV',
      component:dataV
    },
    {
      name:'emergencyManage',
      path:'/emergencyManage',
      component:emergencyManage
    },
    {
      name:'video',
      path:'/video',
      component:video
    }
  ]
}


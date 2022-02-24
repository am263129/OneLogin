import ImgMenuIcon from "../assets/images/ico_menu.png"
import IcoMarket from '../assets/images/ico_market.png'
import IcoFunnel from '../assets/images/ico_funnel.png'
import IcoPromoter from '../assets/images/ico_promoter.png'
import IcoAwareness from '../assets/images/ico_awareness.png'
export const categoryList = [
  {
    category:"Welcome back",
    menus:[
      {
        icon:ImgMenuIcon,
        title:"Dashboard",
        path:"/dashboard"
      }
    ]
  },
  {
    category:"Customers",
    menus:[
      {
        icon:ImgMenuIcon,
        title:"Market share",
        path:"/market"
      },
      {
        icon:ImgMenuIcon,
        title:"Net Promoter Score",
        path:"/promoter"
      },
    ]
  },
  {
    category:"Prospects",
    menus:[
      {
        icon:ImgMenuIcon,
        title:"Funnel",
        path:"/funnel"
      },
      {
        icon:ImgMenuIcon,
        title:"Awareness",
        path:"/awareness"
      },
      {
        icon:ImgMenuIcon,
        title:"Consideration",
        path:"/consideration"
      },
    ]
  },
]

export const HorizontalMenuList = [
  {
    icon:IcoMarket,
    title:"Market share",
    path:"/market"
  },
  {
    icon:IcoPromoter,
    title:"Net Promoter Score",
    path:"/promoter"
  },
  {
    icon:IcoFunnel,
    title:"Funnel",
    path:"/funnel"
  },
  {
    icon:IcoAwareness,
    title:"Awareness",
    path:"/awareness"
  },
  {
    icon:IcoAwareness,
    title:"Consideration",
    path:"/consideration"
  }
]
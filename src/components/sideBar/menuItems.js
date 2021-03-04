import * as faIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as mdIcons from 'react-icons/md'
import * as giIcons from 'react-icons/gi'


export const MenuItems = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-links',
        iconic: <faIcons.FaHome />
    },
    {
        title: 'Users',
        path: '/userManagement',
        cName: 'nav-links',
        iconic: <faIcons.FaUsersCog />
    },
    {
        title: 'Plants',
        path: '/PlantManagement',
        cName: 'nav-links',
        iconic: <RiIcons.RiPlantFill />        
    },
    {
        title: 'Conditions',
        path: '/conditionManagement',
        cName: 'nav-links',
        iconic: <faIcons.FaHospitalAlt />
    },
    {
        title: 'Remedies',
        path: '/RemedyManagement',
        cName: 'nav-links',
        iconic: <RiIcons.RiMedicineBottleFill />
    },
    {
        title: 'Plant Variants',
        path: '/variantManagement',
        cName: 'nav-links',
        iconic: <giIcons.GiPlantRoots />
    },
    {
        title: 'Reviews',
        path: '/ReviewsManagement',
        cName: 'nav-links',
        iconic: <mdIcons.MdRateReview />
    }
]



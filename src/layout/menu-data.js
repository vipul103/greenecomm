const menu_data = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  // {
  //   id: 2,
  //   title: 'VEU Program',
  //   link: '/veu'
  // },
  {
    id: 3,
    title: 'About Us',
    link: '/about'
  },
  {
    id: 4,
    title: 'Shop',
    link: '/shop'
  },
  {
    id: 5,
    hasDropdown: true,
    title: 'Our Product',
    link: '/about',
    submenus: [
      { title: 'Hot Water System', link: '/hotwater' },
      { title: 'Heating and Cooling System', link: '/ac' },
      { title: 'Solar Panel', link: '/solar-panel' },
    ]
  },
  {
    id: 6,
    hasDropdown: true,
    title: 'Pages',
    link: '/about',
    submenus: [
      { title: 'FAQs', link: '/faq' },
      { title: 'Privacy & Policy', link: '/policy' },
      { title: 'Terms & Conditions', link: '/terms' },
      { title: 'Login', link: '/login' },
      { title: 'Register', link: '/register' },
      { title: 'Forgot Password', link: '/forgot' },
      { title: 'My Cart', link: '/cart' },
      { title: 'My Wishlist', link: '/wishlist' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Career', link: '/career' },
      { title: 'Error 404', link: '/404' },
    ]
  },
  {
    id: 7,
    title: 'Contact us',
    link: '/contact'
  },
  {
    id: 8,
    title: 'Our Offers',
    link: '/ouroffer'
  },
]

export default menu_data;

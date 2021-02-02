export const menuItems = [
  {
    id: 1,
    name: 'home',
    title: 'Home',
    icon: 'home',
    type: 'main',
    submenus: []
  },
  {
    id: 2,
    name: 'orders',
    title: 'Orders',
    icon: 'container',
    type: 'main',
    submenus: []
  },
  {
    id: 3,
    name: 'stores',
    title: 'Stores',
    icon: 'shopping-cart',
    type: 'main',
    submenus: []
  },
  {
    id: 4,
    name: 'products',
    title: 'Products',
    icon: 'tag',
    type: 'main',
    submenus: []
  },
  {
    id: 5,
    name: 'customers',
    title: 'Customers',
    icon: 'user',
    type: 'main',
    submenus: []
  },
  {
    id: 6,
    name: 'analytics',
    title: 'Analytics',
    icon: 'pie-chart',
    type: 'main',
    submenus: []
  },
  {
    id: 7,
    name: 'marketing',
    title: 'Marketing',
    icon: 'notification',
    type: 'main'
  },
  {
    id: 8,
    name: 'discounts',
    title: 'Discounts',
    icon: 'percentage',
    type: 'main',
    submenus: []
  },
  {
    id: 9,
    name: 'apps',
    title: 'Apps',
    icon: 'appstore',
    type: 'main',
    submenus: []
  },
  {
    id: 10,
    name: 'online-store',
    title: 'Online Stores',
    icon: 'shopping-cart',
    type: 'other',
    submenus: []
  },
  {
    id: 11,
    name: 'settings',
    title: 'Settings',
    icon: 'menu-settings',
    type: 'other',
    submenus: [
      {
        path: 'financial-management',
        title: 'Financial Management',
        items: [
          {
            path: 'taxes-setup',
            title: 'Taxes Setup'
          },
          {
            path: 'payment-setup',
            title: 'Payment Method Setup'
          },
          {
            path: 'currency-setup',
            title: 'Currency Setup'
          }
        ]
      },
      {
        path: 'product-management',
        title: 'Product Management',
        items: []
      },
      {
        path: 'vendor-management',
        title: 'Vendor Management',
        items: []
      },
      {
        path: 'shipment',
        title: 'Shipment and Delivery',
        items: []
      },
      {
        path: 'communication',
        title: 'Communication & Email',
        items: []
      },
      {
        path: 'user-management',
        title: 'User Management',
        items: []
      },
      {
        path: 'checkout',
        title: 'Checkout and Orders',
        items: []
      },
      {
        path: 'payment',
        title: 'Payment',
        items: []
      },
      {
        path: 'legal',
        title: 'Legal',
        items: []
      }
    ]
  }
]
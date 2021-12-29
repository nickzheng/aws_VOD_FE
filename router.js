module.exports = [
  {
    exact: false,
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: '../pages/Home',
      },
      {
        path: '/login',
        component: '../pages/Login',
      },
      {
        path: '/upload',
        component: '../pages/Upload',
      },
    ],
  },
];

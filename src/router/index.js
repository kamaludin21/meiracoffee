import { createRouter, createWebHistory } from "vue-router";
import firebaseApp from "./../firebaseInit.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Administrator",
    component: () => import("../views/layouts/AdminPage.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/admin_page/Dashboard.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "LandingPage",
    component: () => import("../views/layouts/LandingPage.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/landing_page/Home.vue"),
      },
      {
        path: "product",
        name: "Product",
        component: () => import("../views/landing_page/Product.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/landing_page/AboutCompany.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("../views/landing_page/Contact.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: () => import("../views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

function authUser() {
  const auth = getAuth(firebaseApp);
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) resolve(false);
      else resolve(true);
    });
  });
}

router.beforeEach(async (to, from, next) => {
  const userAuth = await authUser();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !userAuth) {
    next("/login");
  } else if (requiresAuth && userAuth) {
    next();
  } else if (!requiresAuth && userAuth) {
    next("/admin/dashboard");
  } else {
    next();
  }
});

export default router;

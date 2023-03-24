import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, PublicLayout, Loader } from "@/components";
import {
  ErrorPage,
  HomePage,
  ProfilePage,
} from "@/pages";

const LandingPage = lazy(() => import("../pages/LandingPage"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const SearchPage = lazy(() => import("../pages/SearchPage"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />} >
        <PublicLayout />
      </Suspense>),
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/home",
            element: (
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/user-profile",
            element: (
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/search",
            element: (

              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            )
          }
        ],
      },
    ],
  },
]);

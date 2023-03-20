import { createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ResetPage,
  SearchPage
} from "@/pages";
import { ProtectedRoute, Layout } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
            path: "/reset-password",
            element: <ResetPage />,
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

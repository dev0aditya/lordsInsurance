import React, { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";
import LoadingPage from "./components/LoadingPage";

const HomePage = React.lazy(() => import("./components/HomePage"));
const AboutPage = React.lazy(() => import("./components/AboutPage"));
const ClaimPage = React.lazy(() => import("./components/ClaimPage"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const PrivacyPolicyPage = React.lazy(() =>
  import("./components/PrivacyPolicyPage")
);
const TandCPage = React.lazy(() => import("./components/TandCPage"));
const DisclaimerPage = React.lazy(() => import("./components/DisclaimerPage"));
const TandUPage = React.lazy(() => import("./components/TandUPage"));
const UnderDevelopment = React.lazy(() =>
  import("./components/UnderDevelopment")
);

function Layout() {
  return (
    <div className="relative min-h-screen bg-primary text-secondary">
      <Header />
      <main>
        <Suspense
          fallback={
            <div>
              <LoadingPage />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export const AppRouter = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <ErrorComponent />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about-us", element: <AboutPage /> },
        { path: "/claim", element: <ClaimPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
        { path: "/terms-and-conditions", element: <TandCPage /> },
        { path: "/disclaimer", element: <DisclaimerPage /> },
        { path: "/terms-of-use", element: <TandUPage /> },
        { path: "/advantage-psop", element: <UnderDevelopment /> },
        { path: "/insurance-product", element: <UnderDevelopment /> },
        { path: "*", element: <ErrorComponent /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default Layout;

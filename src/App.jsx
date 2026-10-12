
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Layout from "./components/Layout";
import CountriesLayout from "./components/CountriesLayout";
import RequireValidCountry from "./components/RequireValidCountry";
import RequireLogin from "./components/RequireLogin";

import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<HomePage />} />

          {/* Countries layout */}
          <Route
            path="countries"
            element={<CountriesLayout />}
          >
            {/* Countries list */}
            <Route
              index
              element={<CountriesPage />}
            />

            {/* Guard the country detail page */}
            <Route element={<RequireValidCountry />}>
              <Route
                path=":countryCode"
                element={<CountryDetailPage />}
              />
            </Route>
          </Route>

          {/* Optional: protect the Bucket List */}
          <Route element={<RequireLogin />}>
            <Route
              path="bucket-list"
              element={<BucketListPage />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { AuthProvieder } from "./contexts/auth-context";
import React, { Suspense } from "react";
// import DashboardLayout from "./module/dashboard/DashboardLayout";
// import PostManage from "./module/post/PostManage";
// import PostAddNew from "./module/post/PostAddNew";
// import CategoryAddNew from "./module/category/CategoryAddNew";
// import CategoryManage from "./module/category/CategoryManage";
// import CategoryUpdate from "./module/category/CategoryUpdate";
// import UserManage from "./module/user/UserManage";
// import UserAddNew from "./module/user/UserAddNew";
// import PostUpdate from "./module/post/PostUpdate";
// import UserUpdate from "./module/user/UserUpdate";
// import PostDetailsPage from "./pages/PostDetailPage";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CategoryPage = React.lazy(() => import("./pages/CategoryPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const PostDetailsPage = React.lazy(() => import("./pages/PostDetailPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

const UserUpdate = React.lazy(() => import("./module/user/UserUpdate"));
const UserManage = React.lazy(() => import("./module/user/UserManage"));
const UserAddNew = React.lazy(() => import("./module/user/UserAddNew"));

const PostAddNew = React.lazy(() => import("./module/post/PostAddNew"));
const PostManage = React.lazy(() => import("./module/post/PostManage"));
const PostUpdate = React.lazy(() => import("./module/post/PostUpdate"));

const CategoryAddNew = React.lazy(() =>
  import("./module/category/CategoryAddNew")
);
const CategoryManage = React.lazy(() =>
  import("./module/category/CategoryManage")
);
const CategoryUpdate = React.lazy(() =>
  import("./module/category/CategoryUpdate")
);
const DashboardLayout = React.lazy(() =>
  import("./module/dashboard/DashboardLayout")
);

function App() {
  return (
    <div>
      <AuthProvieder>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            <Route
              path="/category/:slug"
              element={<CategoryPage></CategoryPage>}
            ></Route>{" "}
            <Route
              path="/:slug"
              element={<PostDetailsPage></PostDetailsPage>}
            ></Route>
            <Route element={<DashboardLayout></DashboardLayout>}>
              <Route
                path="/dashboard"
                element={<DashboardPage></DashboardPage>}
              ></Route>
              <Route
                path="/manage/post"
                element={<PostManage></PostManage>}
              ></Route>
              <Route
                path="/manage/add-post"
                element={<PostAddNew></PostAddNew>}
              ></Route>
              <Route
                path="/manage/update-post"
                element={<PostUpdate></PostUpdate>}
              ></Route>
              <Route
                path="/manage/category"
                element={<CategoryManage></CategoryManage>}
              ></Route>
              <Route
                path="/manage/uppdate-category"
                element={<CategoryUpdate></CategoryUpdate>}
              ></Route>
              <Route
                path="/manage/add-category"
                element={<CategoryAddNew></CategoryAddNew>}
              ></Route>
              <Route
                path="/manage/user"
                element={<UserManage></UserManage>}
              ></Route>
              <Route
                path="/manage/add-user"
                element={<UserAddNew></UserAddNew>}
              ></Route>
              <Route
                path="/manage/update-user"
                element={<UserUpdate></UserUpdate>}
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </AuthProvieder>
    </div>
  );
}

export default App;

import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, initAuthData } from "@/entities/User";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { AppRouter } from "./providers/router";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/shared/ui/deprecated/PageLoader/PageLoader";
import { ToggleFeatures } from "@/shared/lib/features";
import { MainLayout } from "@/shared/layouts/MainLayout";

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }
  //   return (
  //     <div className={classNames("app_redesigned", {}, [theme])}>
  //       <Suspense fallback="">
  //         <Navbar />
  //         <div className="content-page">
  //           <Sidebar />
  //           {inited && <AppRouter />}
  //         </div>
  //       </Suspense>
  //     </div>
  //   );
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div className={classNames("app", {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div className={classNames("app_redesigned", {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>123</div>}
            ></MainLayout>
          </Suspense>
        </div>
      }
    />
  );
}

export default App;

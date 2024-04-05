import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { getRouteForbiddenPage, getRouteMain } from '@/shared/const/router';
import { UserRole } from '@/entities/User/model/consts/UserRole';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles?.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, []);

    if (!auth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }
    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbiddenPage()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}

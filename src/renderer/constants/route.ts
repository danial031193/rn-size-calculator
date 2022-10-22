const ROUTE = {
  HOME: '/',
  SETTINGS: '/settings',
} as const;

export type RouteKey = keyof typeof ROUTE;

export type RouteValue = typeof ROUTE[RouteKey];

export default ROUTE;

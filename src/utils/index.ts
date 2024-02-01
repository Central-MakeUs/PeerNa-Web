export function extractIdFromUrl() {
  const pathname = window.location.pathname;
  const segments = pathname.split('/');
  const id = segments[2];
  return id;
}

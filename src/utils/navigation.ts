export function goTo(url: string): void {
  window.location.href = url
}

export function goBack(): void {
  window.history.back()
}

export function goToResponsivePage(mobileUrl: string, desktopUrl: string): void {
  const isMobile = !window.matchMedia('(min-width: 768px)').matches
  window.location.href = isMobile ? mobileUrl : desktopUrl
}

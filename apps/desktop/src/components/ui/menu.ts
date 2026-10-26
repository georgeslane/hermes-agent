// The one floating-list look. DropdownMenu, Select, and every Popover + cmdk
// picker (`<PopoverContent variant="menu">` + `<Command variant="menu">`) paint
// through these, so a list reads the same wherever it opens. Change the menu
// here, never per call site.

// `dt-portal-scrollbar` reproduces the thin themed scrollbar from
// `.scrollbar-dt` for portaled overlays (Radix renders under document.body,
// outside #root's scope). See styles.css.
export const menuSurfaceClass =
  'dt-portal-scrollbar rounded-xl border border-(--ui-stroke-secondary) bg-[color-mix(in_srgb,var(--ui-bg-elevated)_88%,transparent)] p-[0.3125rem] text-[length:var(--conversation-text-font-size)] text-popover-foreground shadow-md backdrop-blur-xl backdrop-saturate-[1.8]'

export const menuMotionClass =
  'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'

// Row shape only. Each primitive adds its own highlight/disabled selectors:
// Radix rows take real focus (`focus:`), cmdk rows stay behind the input and
// mark `data-selected="true"`.
export const menuItemClass =
  "relative flex items-center gap-2 rounded-(--radius-menu-item) px-2 py-1 text-xs outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"

// The highlight colors themselves are one unlayered rule in styles.css (it
// also covers cmdk rows and reverses a row's secondary text under an accent
// highlight); this keeps the utility-level fallback in step with it.
export const menuItemFocusClass =
  'focus:bg-(--ui-menu-highlight-background) focus:text-(--ui-menu-highlight-foreground)'

export const menuLabelClass = 'px-2 py-1 text-xs font-medium text-(--ui-text-tertiary)'

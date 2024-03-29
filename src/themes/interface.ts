import { transparentizeHex } from "../lib/color";
import { TerraSemanticColors } from "../typings/colors";
import { VscInterfaceColors } from "../typings/interface";

export const buildInterfaceColors = (
    semantics: TerraSemanticColors,
    overrides?: VscInterfaceColors
): VscInterfaceColors => {
    const { shadow, fg, bg, border, ansi, vcs } = semantics;

    const defaultInterfaceColors: VscInterfaceColors = {
        foreground: fg.main,
        disabledForeground: fg.inactive,
        errorForeground: fg.error,
        descriptionForeground: fg.neutral,
        focusBorder: border.dark,
        "sash.hoverBorder": border.active,
        "selection.background": bg.selection,

        // Activity Bar
        "activityBar.activeBackground": bg.main,
        "activityBar.background": bg.dark,
        "activityBar.border": border.dark,
        "activityBar.foreground": fg.active,
        "activityBar.inactiveForeground": fg.inactive,
        "activityBarBadge.background": bg.active,
        "activityBarBadge.foreground": fg.invert,

        // Sidebar
        "sideBar.background": bg.dark,
        "sideBar.border": border.main,
        "sideBar.dropBackground": bg.main,
        "sideBar.foreground": fg.dark,
        "sideBarSectionHeader.background": bg.main,
        "sideBarSectionHeader.border": border.main,
        "sideBarSectionHeader.foreground": fg.main,
        "sideBarTitle.foreground": fg.dark,

        // Lists
        "list.activeSelectionBackground": bg.main,
        "list.activeSelectionForeground": fg.active,
        "list.inactiveSelectionBackground": bg.main,
        "list.inactiveSelectionForeground": fg.active,
        "list.dropBackground": bg.hover,
        "list.focusBackground": bg.main,
        "list.focusForeground": fg.active,
        "list.highlightForeground": fg.active,
        "list.hoverBackground": bg.main,
        "list.hoverForeground": fg.active,
        "listFilterWidget.background": bg.light,
        "listFilterWidget.noMatchesOutline": border.light,
        "listFilterWidget.outline": border.main,
        "tree.indentGuidesStroke": border.main,

        // Status Bar
        "statusBar.background": bg.dark,
        "statusBar.debuggingBackground": bg.active,
        "statusBar.debuggingForeground": fg.invert,
        "statusBar.foreground": fg.inactive,
        "statusBar.noFolderBackground": bg.light,
        "statusBar.noFolderForeground": fg.invert,
        "statusBarItem.activeBackground": bg.active,
        "statusBarItem.hoverBackground": bg.light,
        "statusBarItem.remoteBackground": bg.active,
        "statusBarItem.remoteForeground": fg.invert,

        // Title Bar
        "titleBar.activeBackground": bg.dark,
        "titleBar.activeForeground": fg.main,
        "titleBar.inactiveBackground": bg.dark,
        "titleBar.inactiveForeground": fg.light,
        "titleBar.border": border.dark,

        // Menu (Quick Fix Menu)
        "menu.background": bg.main,
        "menu.border": border.main,
        "menu.foreground": fg.main,
        "menu.selectionBackground": bg.light,
        "menu.selectionBorder": border.active,
        "menu.selectionForeground": fg.active,
        "menu.separatorBackground": bg.light,
        "menubar.selectionBackground": bg.light,
        "menubar.selectionForeground": fg.active,

        // Button
        "button.background": bg.main,
        "button.foreground": fg.main,
        "button.hoverBackground": bg.light,
        "button.secondaryBackground": bg.light,
        "button.secondaryForeground": fg.light,
        "button.secondaryHoverBackground": bg.hover,

        // Editor
        "editor.background": bg.main,
        "editor.foreground": fg.main,

        "editorCursor.background": bg.main,
        "editorCursor.foreground": fg.active,

        "editorLineNumber.activeForeground": fg.active,
        "editorLineNumber.foreground": fg.neutral,

        "editor.findMatchBackground": bg.selection,
        "editor.findMatchBorder": border.selection,

        "editor.findMatchHighlightBackground": bg.selection,
        "editor.findMatchHighlightBorder": border.main,

        "editor.findRangeHighlightBackground": bg.main,
        "editor.findRangeHighlightBorder": border.transparent,

        "editor.foldBackground": bg.light,

        "editor.hoverHighlightBackground": bg.hover,

        "editor.inactiveSelectionBackground": bg.selection,

        "editor.lineHighlightBackground": bg.transparent,
        "editor.lineHighlightBorder": border.main,

        "editor.rangeHighlightBackground": bg.transparent,
        "editor.rangeHighlightBorder": bg.transparent,

        "editorStickyScroll.background": bg.main,
        "editorStickyScrollHover.background": bg.light,

        "editor.selectionBackground": bg.selection,
        "editor.selectionHighlightBackground": bg.selection,
        "editor.selectionHighlightBorder": border.main,

        "editor.wordHighlightBackground": bg.selection,
        "editor.wordHighlightStrongBackground": bg.selection,

        "editorBracketMatch.background": bg.main,
        "editorBracketMatch.border": border.main,

        "editorCodeLens.foreground": fg.dark,

        "editorError.background": bg.error,
        "editorError.border": border.transparent,
        "editorError.foreground": fg.error,

        "editorWarning.background": bg.warning,
        "editorWarning.border": bg.main,
        "editorWarning.foreground": fg.warning,

        "editorInfo.background": bg.info,
        "editorInfo.border": border.main,
        "editorInfo.foreground": fg.info,

        "editorGroup.border": border.dark,
        "editorGroup.emptyBackground": bg.dark,
        "editorGroupHeader.tabsBackground": bg.dark,
        "editorGroupHeader.tabsBorder": border.dark,

        "editorGutter.addedBackground": vcs.added,
        "editorGutter.deletedBackground": vcs.deleted,
        "editorGutter.modifiedBackground": vcs.modded,
        "editorGutter.background": bg.main,
        "editorGutter.commentRangeForeground": fg.neutral,
        "editorGutter.foldingControlForeground": fg.dark,

        "editorHoverWidget.background": bg.light,
        "editorHoverWidget.border": border.light,
        "editorHoverWidget.foreground": fg.main,

        "editorIndentGuide.activeBackground": bg.active,
        "editorIndentGuide.background": bg.light,

        "editorInlayHint.background": bg.main,
        "editorInlayHint.foreground": fg.main,
        "editorInlayHint.typeBackground": bg.main,
        "editorInlayHint.typeForeground": fg.main,
        "editorInlayHint.parameterBackground": bg.main,
        "editorInlayHint.parameterForeground": fg.main,

        "editorLink.activeForeground": fg.active,

        "editorMarkerNavigation.background": bg.dark,
        "editorMarkerNavigationError.background": bg.error,
        "editorMarkerNavigationInfo.background": bg.info,
        "editorMarkerNavigationWarning.background": bg.warning,
        "editorMarkerNavigationError.headerBackground": bg.error,
        "editorMarkerNavigationInfo.headerBackground": bg.info,
        "editorMarkerNavigationWarning.headerBackground": bg.warning,

        "editorOverviewRuler.background": bg.dark,
        "editorOverviewRuler.border": border.main,
        "editorRuler.foreground": fg.dark,

        "quickInput.background": bg.dark,
        "quickInput.foreground": fg.main,
        "quickInputList.focusBackground": bg.light,
        "quickInputList.focusForeground": fg.active,
        "quickInputList.focusIconForeground": fg.active,
        "quickInputTitle.background": bg.dark,

        // Quick Find Window
        "editorWidget.background": bg.main,
        "editorWidget.foreground": fg.main,
        "editorWidget.border": border.main,
        "editorWidget.resizeBorder": border.active,

        "editorSuggestWidget.background": bg.main,
        "editorSuggestWidget.border": border.main,
        "editorSuggestWidget.foreground": fg.main,
        "editorSuggestWidget.highlightForeground": fg.active,
        "editorSuggestWidget.selectedBackground": bg.light,

        // Git & Diff
        "diffEditor.border": border.main,
        "diffEditor.insertedTextBackground": transparentizeHex(vcs.added, 0.1),
        "diffEditor.removedTextBackground": transparentizeHex(vcs.deleted, 0.1),

        "gitDecoration.addedResourceForeground": vcs.added,
        "gitDecoration.conflictingResourceForeground": vcs.conflict,
        "gitDecoration.deletedResourceForeground": vcs.deleted,
        "gitDecoration.ignoredResourceForeground": vcs.neutral,
        "gitDecoration.modifiedResourceForeground": vcs.modded,
        "gitDecoration.stageDeletedResourceForeground": vcs.deleted,
        "gitDecoration.stageModifiedResourceForeground": vcs.modded,
        "gitDecoration.submoduleResourceForeground": vcs.neutral,
        "gitDecoration.untrackedResourceForeground": vcs.added,

        "merge.commonContentBackground": bg.dark,
        "merge.commonHeaderBackground": bg.main,
        "merge.currentContentBackground": transparentizeHex(vcs.current, 0.25),
        "merge.currentHeaderBackground": transparentizeHex(vcs.current, 1),
        "merge.incomingContentBackground": transparentizeHex(vcs.incoming, 0.25),
        "merge.incomingHeaderBackground": transparentizeHex(vcs.incoming, 1),

        // Panel
        "panel.background": bg.main,
        "panel.border": border.main,
        "panelSection.border": border.main,
        "panelTitle.activeBorder": fg.active,
        "panelTitle.activeForeground": fg.active,
        "panelTitle.inactiveForeground": fg.inactive,

        // Badge
        "badge.background": bg.main,
        "badge.foreground": fg.main,

        // Terminal
        "terminal.ansiBrightBlack": ansi.darkGray,
        "terminal.ansiBrightBlue": ansi.blue,
        "terminal.ansiBrightCyan": ansi.cyan,
        "terminal.ansiBrightGreen": ansi.green,
        "terminal.ansiBrightMagenta": ansi.magenta,
        "terminal.ansiBrightRed": ansi.red,
        "terminal.ansiBrightWhite": ansi.white,
        "terminal.ansiBrightYellow": ansi.yellow,
        "terminal.ansiBlack": ansi.black,
        "terminal.ansiBlue": ansi.darkBlue,
        "terminal.ansiCyan": ansi.darkCyan,
        "terminal.ansiGreen": ansi.darkGreen,
        "terminal.ansiMagenta": ansi.darkMagenta,
        "terminal.ansiRed": ansi.darkRed,
        "terminal.ansiWhite": ansi.white,
        "terminal.ansiYellow": ansi.darkYellow,
        "terminal.border": border.main,
        "terminal.foreground": fg.main,
        "terminal.selectionBackground": bg.selection,
        "terminalCursor.background": bg.main,
        "terminalCursor.foreground": fg.active,

        // Breadcrumbs
        "breadcrumb.activeSelectionForeground": fg.active,
        "breadcrumb.background": bg.dark,
        "breadcrumb.focusForeground": fg.active,
        "breadcrumb.foreground": fg.dark,

        // Tabs
        "tab.activeBackground": bg.main,
        "tab.activeBorder": border.transparent,
        "tab.activeBorderTop": border.active,
        "tab.activeForeground": fg.active,
        "tab.border": border.dark,
        "tab.inactiveBackground": bg.dark,
        "tab.inactiveForeground": fg.inactive,

        // Scrollbar
        "scrollbar.shadow": shadow,
        "scrollbarSlider.activeBackground": transparentizeHex(bg.light, 0.5),
        "scrollbarSlider.background": transparentizeHex(bg.dark, 0.75),
        "scrollbarSlider.hoverBackground": transparentizeHex(bg.light, 0.75),

        // Notifications
        "notificationCenter.border": border.main,
        "notificationCenterHeader.background": bg.dark,
        "notificationCenterHeader.foreground": fg.main,
        "notificationToast.border": border.main,
        "notifications.background": border.dark,
        "notifications.border": border.main,
        "notifications.foreground": fg.main,
        "notificationsErrorIcon.foreground": fg.error,
        "notificationsInfoIcon.foreground": fg.info,
        "notificationsWarningIcon.foreground": fg.warning,

        "pickerGroup.border": border.main,
        "pickerGroup.foreground": fg.main,

        "keybindingLabel.background": bg.light,
        "keybindingLabel.border": bg.light,
        "keybindingLabel.foreground": fg.info,

        // Debug
        "debugExceptionWidget.background": bg.dark,
        "debugExceptionWidget.border": border.dark,
        "debugToolBar.background": bg.dark,
        "debugToolBar.border": border.main,

        // Peek View
        "peekView.border": border.dark,
        "peekViewTitle.background": bg.neutral,
        "peekViewTitleDescription.foreground": fg.dark,
        "peekViewTitleLabel.foreground": fg.main,
        "peekViewEditor.background": transparentizeHex(bg.dark, 0.5),
        "peekViewEditor.matchHighlightBackground": bg.selection,
        "peekViewEditor.matchHighlightBorder": border.transparent,
        "peekViewEditorGutter.background": bg.dark,
        "peekViewResult.background": bg.dark,
        "peekViewResult.fileForeground": fg.main,
        "peekViewResult.lineForeground": fg.main,
        "peekViewResult.matchHighlightBackground": bg.selection,
        "peekViewResult.selectionBackground": bg.light,
        "peekViewResult.selectionForeground": fg.active,

        // Settings
        "settings.headerForeground": fg.dark,
        "settings.focusedRowBackground": bg.dark,

        // Checkbox
        "checkbox.background": bg.dark,
        "checkbox.border": border.main,
        "checkbox.foreground": fg.main,

        // Dropdown
        "dropdown.background": bg.dark,
        "dropdown.border": border.main,
        "dropdown.foreground": fg.main,

        // Input
        "input.background": bg.dark,
        "input.border": border.main,
        "input.foreground": fg.main,
        "input.placeholderForeground": fg.inactive,

        // Input Options
        "inputOption.activeBackground": bg.light,
        "inputOption.activeBorder": border.active,
        "inputOption.activeForeground": fg.active,

        // Minimap
        "minimap.background": bg.dark,
        "minimap.errorHighlight": bg.error,
        "minimap.findMatchHighlight": bg.selection,
        "minimap.selectionHighlight": bg.active,
        "minimap.warningHighlight": bg.warning,
        "minimapGutter.addedBackground": vcs.added,
        "minimapGutter.deletedBackground": vcs.deleted,
        "minimapGutter.modifiedBackground": vcs.modded,

        // Other
        "progressBar.background": bg.active,
        "widget.shadow": shadow,
        "icon.foreground": fg.main,
        "textLink.foreground": fg.active,
        "walkThrough.embeddedEditorBackground": bg.main
    };

    return Object.assign(defaultInterfaceColors, overrides);
};

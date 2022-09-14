import { HexColor } from "./colors";

interface VscInterfaceColors {
    /** CONTRAST COLORS
     *  The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.
     *  @see https://code.visualstudio.com/api/references/theme-color#contrast-colors
     **/

    /**
     * An extra border around active elements to separate them from others for greater contrast.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#contrast-colors
     **/
    contrastActiveBorder?: HexColor;

    /**
     * An extra border around elements to separate them from others for greater contrast.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#contrast-colors
     **/
    contrastBorder?: HexColor;

    /** BASE COLORS
     *  @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/

    /**
     * Overall border color for focused elements. This color is only used if not overridden by a component.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    focusBorder?: HexColor;

    /**
     * Overall foreground color. This color is only used if not overridden by a component.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    foreground?: HexColor;

    /**
     * Overall foreground for disabled elements. This color is only used if not overridden by a component.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    disabledForeground?: HexColor;

    /**
     * Shadow color of widgets such as Find/Replace inside the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    "widget.shadow"?: HexColor;

    /**
     * Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    "selection.background"?: HexColor;

    /**
     * Foreground color for description text providing additional information, for example for a label.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    descriptionForeground?: HexColor;

    /**
     * Overall foreground color for error messages (this color is only used if not overridden by a component).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    errorForeground?: HexColor;

    /**
     * The default color for icons in the workbench.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    "icon.foreground"?: HexColor;

    /**
     * The hover border color for draggable sashes.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#base-colors
     **/
    "sash.hoverBorder"?: HexColor;

    /** WINDOW BORDER
     *  The theme colors for VS Code window border.
     *  @see https://code.visualstudio.com/api/references/theme-color#window-border
     **/

    /**
     * Border color for the active (focused) window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#window-border
     **/
    "window.activeBorder"?: HexColor;

    /**
     * Border color for the inactive (unfocused) windows.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#window-border
     **/
    "window.inactiveBorder"?: HexColor;

    /** TEXT COLORS
     *  Colors inside a text document, such as the welcome page.
     *  @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/

    /**
     * Background color for block quotes in text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textBlockQuote.background"?: HexColor;

    /**
     * Border color for block quotes in text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textBlockQuote.border"?: HexColor;

    /**
     * Background color for code blocks in text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textCodeBlock.background"?: HexColor;

    /**
     * Foreground color for links in text when clicked on and on mouse hover.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textLink.activeForeground"?: HexColor;

    /**
     * Foreground color for links in text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textLink.foreground"?: HexColor;

    /**
     * Foreground color for preformatted text segments.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textPreformat.foreground"?: HexColor;

    /**
     * Color for text separators.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#text-colors
     **/
    "textSeparator.foreground"?: HexColor;

    /** ACTION COLORS
     *  A set of colors to control the interactions with actions across the workbench.
     *  @see https://code.visualstudio.com/api/references/theme-color#action-colors
     **/

    /**
     * Toolbar background when hovering over actions using the mouse
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#action-colors
     **/
    "toolbar.hoverBackground"?: HexColor;

    /**
     * Toolbar outline when hovering over actions using the mouse
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#action-colors
     **/
    "toolbar.hoverOutline"?: HexColor;

    /**
     * Toolbar background when holding the mouse over actions
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#action-colors
     **/
    "toolbar.activeBackground"?: HexColor;

    /** BUTTON CONTROL
     *  A set of colors for button widgets such as **Open Folder** button in the Explorer of a new window.
     *  @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/

    /**
     * Button background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.background"?: HexColor;

    /**
     * Button foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.foreground"?: HexColor;

    /**
     * Button border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.border"?: HexColor;

    /**
     * Button separator color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.separator"?: HexColor;

    /**
     * Button background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.hoverBackground"?: HexColor;

    /**
     * Secondary button foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.secondaryForeground"?: HexColor;

    /**
     * Secondary button background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.secondaryBackground"?: HexColor;

    /**
     * Secondary button background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "button.secondaryHoverBackground"?: HexColor;

    /**
     * Background color of checkbox widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "checkbox.background"?: HexColor;

    /**
     * Foreground color of checkbox widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "checkbox.foreground"?: HexColor;

    /**
     * Border color of checkbox widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#button-control
     **/
    "checkbox.border"?: HexColor;

    /** DROPDOWN CONTROL
     *  A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
     *  @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
     **/

    /**
     * Dropdown background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
     **/
    "dropdown.background"?: HexColor;

    /**
     * Dropdown list background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
     **/
    "dropdown.listBackground"?: HexColor;

    /**
     * Dropdown border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
     **/
    "dropdown.border"?: HexColor;

    /**
     * Dropdown foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#dropdown-control
     **/
    "dropdown.foreground"?: HexColor;

    /** INPUT CONTROL
     *  Colors for input controls such as in the Search view or the Find/Replace dialog.
     *  @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/

    /**
     * Input box background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "input.background"?: HexColor;

    /**
     * Input box border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "input.border"?: HexColor;

    /**
     * Input box foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "input.foreground"?: HexColor;

    /**
     * Input box foreground color for placeholder text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "input.placeholderForeground"?: HexColor;

    /**
     * Background color of activated options in input fields.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputOption.activeBackground"?: HexColor;

    /**
     * Border color of activated options in input fields.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputOption.activeBorder"?: HexColor;

    /**
     * Foreground color of activated options in input fields.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputOption.activeForeground"?: HexColor;

    /**
     * Background color of activated options in input fields.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputOption.hoverBackground"?: HexColor;

    /**
     * Input validation background color for error severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.errorBackground"?: HexColor;

    /**
     * Input validation foreground color for error severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.errorForeground"?: HexColor;

    /**
     * Input validation border color for error severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.errorBorder"?: HexColor;

    /**
     * Input validation background color for information severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.infoBackground"?: HexColor;

    /**
     * Input validation foreground color for information severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.infoForeground"?: HexColor;

    /**
     * Input validation border color for information severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.infoBorder"?: HexColor;

    /**
     * Input validation background color for information warning.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.warningBackground"?: HexColor;

    /**
     * Input validation foreground color for warning severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.warningForeground"?: HexColor;

    /**
     * Input validation border color for warning severity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "inputValidation.warningBorder"?: HexColor;

    /**
     * Scrollbar slider shadow to indicate that the view is scrolled.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "scrollbar.shadow"?: HexColor;

    /**
     * Scrollbar slider background color when clicked on.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "scrollbarSlider.activeBackground"?: HexColor;

    /**
     * Scrollbar slider background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "scrollbarSlider.background"?: HexColor;

    /**
     * Scrollbar slider background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#input-control
     **/
    "scrollbarSlider.hoverBackground"?: HexColor;

    /** BADGE
     *  Badges are small information labels, for example, search results count.
     *  @see https://code.visualstudio.com/api/references/theme-color#badge
     **/

    /**
     * Badge foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#badge
     **/
    "badge.foreground"?: HexColor;

    /**
     * Badge background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#badge
     **/
    "badge.background"?: HexColor;

    /** PROGRESS BAR * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#progress-bar
     **/

    /**
     * Background color of the progress bar shown for long running operations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#progress-bar
     **/
    "progressBar.background"?: HexColor;

    /** LISTS AND TREES
     *  Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
     *  @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/

    /**
     * List/Tree background color for the selected item when the list/tree is active.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.activeSelectionBackground"?: HexColor;

    /**
     * List/Tree foreground color for the selected item when the list/tree is active.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.activeSelectionForeground"?: HexColor;

    /**
     * List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.activeSelectionIconForeground"?: HexColor;

    /**
     * List/Tree drag and drop background when moving items around using the mouse.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.dropBackground"?: HexColor;

    /**
     * List/Tree background color for the focused item when the list/tree is active.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.focusBackground"?: HexColor;

    /**
     * List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.focusForeground"?: HexColor;

    /**
     * List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.focusHighlightForeground"?: HexColor;

    /**
     * List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.focusOutline"?: HexColor;

    /**
     * List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.focusAndSelectionOutline"?: HexColor;

    /**
     * List/Tree foreground color of the match highlights when searching inside the list/tree.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.highlightForeground"?: HexColor;

    /**
     * List/Tree background when hovering over items using the mouse.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.hoverBackground"?: HexColor;

    /**
     * List/Tree foreground when hovering over items using the mouse.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.hoverForeground"?: HexColor;

    /**
     * List/Tree background color for the selected item when the list/tree is inactive.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.inactiveSelectionBackground"?: HexColor;

    /**
     * List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.inactiveSelectionForeground"?: HexColor;

    /**
     * List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.inactiveSelectionIconForeground"?: HexColor;

    /**
     * List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.inactiveFocusBackground"?: HexColor;

    /**
     * List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.inactiveFocusOutline"?: HexColor;

    /**
     * List/Tree foreground color for invalid items, for example an unresolved root in explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.invalidItemForeground"?: HexColor;

    /**
     * Foreground color of list items containing errors.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.errorForeground"?: HexColor;

    /**
     * Foreground color of list items containing warnings.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.warningForeground"?: HexColor;

    /**
     * List/Tree Filter background color of typed text when searching inside the list/tree.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "listFilterWidget.background"?: HexColor;

    /**
     * List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "listFilterWidget.outline"?: HexColor;

    /**
     * List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "listFilterWidget.noMatchesOutline"?: HexColor;

    /**
     * Background color of the filtered matches in lists and trees.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.filterMatchBackground"?: HexColor;

    /**
     * Border color of the filtered matches in lists and trees.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.filterMatchBorder"?: HexColor;

    /**
     * List/Tree foreground color for items that are deemphasized.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "list.deemphasizedForeground"?: HexColor;

    /**
     * Tree Widget's stroke color for indent guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "tree.indentGuidesStroke"?: HexColor;

    /**
     * Tree stroke color for the indentation guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "tree.tableColumnsBorder"?: HexColor;

    /**
     * Background color for odd table rows.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#lists-and-trees
     **/
    "tree.tableOddRowsBackground"?: HexColor;

    /** ACTIVITY BAR
     *  The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
     *  @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/

    /**
     * Activity Bar background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.background"?: HexColor;

    /**
     * Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.dropBorder"?: HexColor;

    /**
     * Activity Bar foreground color (for example used for the icons).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.foreground"?: HexColor;

    /**
     * Activity Bar item foreground color when it is inactive.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.inactiveForeground"?: HexColor;

    /**
     * Activity Bar border color with the Side Bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.border"?: HexColor;

    /**
     * Activity notification badge background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBarBadge.background"?: HexColor;

    /**
     * Activity notification badge foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBarBadge.foreground"?: HexColor;

    /**
     * Activity Bar active indicator border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.activeBorder"?: HexColor;

    /**
     * Activity Bar optional background color for the active element.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.activeBackground"?: HexColor;

    /**
     * Activity bar focus border color for the active item.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#activity-bar
     **/
    "activityBar.activeFocusBorder"?: HexColor;

    /** SIDE BAR
     *  The Side Bar contains views like the Explorer and Search.
     *  @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/

    /**
     * Side Bar background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBar.background"?: HexColor;

    /**
     * Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBar.foreground"?: HexColor;

    /**
     * Side Bar border color on the side separating the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBar.border"?: HexColor;

    /**
     * Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBar.dropBackground"?: HexColor;

    /**
     * Side Bar title foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBarTitle.foreground"?: HexColor;

    /**
     * Side Bar section header background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBarSectionHeader.background"?: HexColor;

    /**
     * Side Bar section header foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBarSectionHeader.foreground"?: HexColor;

    /**
     * Side bar section header border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#side-bar
     **/
    "sideBarSectionHeader.border"?: HexColor;

    /** MINIMAP
     *  The Minimap shows a minified version of the current file.
     *  @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/

    /**
     * Highlight color for matches from search within files.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.findMatchHighlight"?: HexColor;

    /**
     * Highlight color for the editor selection.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.selectionHighlight"?: HexColor;

    /**
     * Highlight color for errors within the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.errorHighlight"?: HexColor;

    /**
     * Highlight color for warnings within the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.warningHighlight"?: HexColor;

    /**
     * Minimap background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.background"?: HexColor;

    /**
     * Minimap marker color for repeating editor selections.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.selectionOccurrenceHighlight"?: HexColor;

    /**
     * Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimap.foregroundOpacity"?: HexColor;

    /**
     * Minimap slider background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapSlider.background"?: HexColor;

    /**
     * Minimap slider background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapSlider.hoverBackground"?: HexColor;

    /**
     * Minimap slider background color when clicked on.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapSlider.activeBackground"?: HexColor;

    /**
     * Minimap gutter color for added content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapGutter.addedBackground"?: HexColor;

    /**
     * Minimap gutter color for modified content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapGutter.modifiedBackground"?: HexColor;

    /**
     * Minimap gutter color for deleted content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#minimap
     **/
    "minimapGutter.deletedBackground"?: HexColor;

    /** EDITOR GROUPS & TABS
     *  Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
     *  @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/

    /**
     * Color to separate multiple editor groups from each other.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.border"?: HexColor;

    /**
     * Background color when dragging editors around.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.dropBackground"?: HexColor;

    /**
     * Background color of the editor group title header when Tabs are disabled (set `"workbench.editor.showTabs"?: false`).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroupHeader.noTabsBackground"?: HexColor;

    /**
     * Background color of the Tabs container.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroupHeader.tabsBackground"?: HexColor;

    /**
     * Border color below the editor tabs control when tabs are enabled.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroupHeader.tabsBorder"?: HexColor;

    /**
     * Border color between editor group header and editor (below breadcrumbs if enabled).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroupHeader.border"?: HexColor;

    /**
     * Background color of an empty editor group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.emptyBackground"?: HexColor;

    /**
     * Border color of an empty editor group that is focused.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.focusedEmptyBorder"?: HexColor;

    /**
     * Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.dropIntoPromptForeground"?: HexColor;

    /**
     * Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.dropIntoPromptBackground"?: HexColor;

    /**
     * Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorGroup.dropIntoPromptBorder"?: HexColor;

    /**
     * Active Tab background color in an active group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.activeBackground"?: HexColor;

    /**
     * Active Tab background color in an inactive editor group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedActiveBackground"?: HexColor;

    /**
     * Active Tab foreground color in an active group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.activeForeground"?: HexColor;

    /**
     * Border to separate Tabs from each other.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.border"?: HexColor;

    /**
     * Bottom border for the active tab.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.activeBorder"?: HexColor;

    /**
     * Bottom border for the active tab in an inactive editor group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedActiveBorder"?: HexColor;

    /**
     * Top border for the active tab.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.activeBorderTop"?: HexColor;

    /**
     * Top border for the active tab in an inactive editor group
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedActiveBorderTop"?: HexColor;

    /**
     * Border on the right of the last pinned editor to separate from unpinned editors.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.lastPinnedBorder"?: HexColor;

    /**
     * Inactive Tab background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.inactiveBackground"?: HexColor;

    /**
     * Inactive Tab background color in an unfocused group
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedInactiveBackground"?: HexColor;

    /**
     * Inactive Tab foreground color in an active group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.inactiveForeground"?: HexColor;

    /**
     * Active tab foreground color in an inactive editor group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedActiveForeground"?: HexColor;

    /**
     * Inactive tab foreground color in an inactive editor group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedInactiveForeground"?: HexColor;

    /**
     * Tab background color when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.hoverBackground"?: HexColor;

    /**
     * Tab background color in an unfocused group when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedHoverBackground"?: HexColor;

    /**
     * Tab foreground color when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.hoverForeground"?: HexColor;

    /**
     * Tab foreground color in an unfocused group when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedHoverForeground"?: HexColor;

    /**
     * Border to highlight tabs when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.hoverBorder"?: HexColor;

    /**
     * Border to highlight tabs in an unfocused group when hovering
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedHoverBorder"?: HexColor;

    /**
     * Border on the top of modified (dirty) active tabs in an active group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.activeModifiedBorder"?: HexColor;

    /**
     * Border on the top of modified (dirty) inactive tabs in an active group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.inactiveModifiedBorder"?: HexColor;

    /**
     * Border on the top of modified (dirty) active tabs in an unfocused group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedActiveModifiedBorder"?: HexColor;

    /**
     * Border on the top of modified (dirty) inactive tabs in an unfocused group.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "tab.unfocusedInactiveModifiedBorder"?: HexColor;

    /**
     * Background color of the editor pane visible on the left and right side of the centered editor layout.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "editorPane.background"?: HexColor;

    /**
     * Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "sideBySideEditor.horizontalBorder"?: HexColor;

    /**
     * Color to separate two editors from each other when shown side by side in an editor group from left to right.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
     **/
    "sideBySideEditor.verticalBorder"?: HexColor;

    /** EDITOR COLORS
      *  The most prominent editor colors are the token colors used for syntax
      highlighting and are based on the language grammar installed. These colors
      are defined by the Color Theme but can also be customized with the
      `editor.tokenColorCustomizations` setting. See [Customizing a Color
      Theme](@see https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme)
      for details on updating a Color Theme and the available token types.
      *  @see https://code.visualstudio.com/api/references/theme-color#editor-colors
      **/

    /**
     * Editor background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.background"?: HexColor;

    /**
     * Editor default foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.foreground"?: HexColor;

    /**
     * Color of editor line numbers.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorLineNumber.foreground"?: HexColor;

    /**
     * Color of the active editor line number.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorLineNumber.activeForeground"?: HexColor;

    /**
     * The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCursor.background"?: HexColor;

    /**
     * Color of the editor cursor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCursor.foreground"?: HexColor;

    /**
     * Color of the editor selection.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.selectionBackground"?: HexColor;

    /**
     * Color of the selected text for high contrast.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.selectionForeground"?: HexColor;

    /**
     * Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.inactiveSelectionBackground"?: HexColor;

    /**
     * Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.selectionHighlightBackground"?: HexColor;

    /**
     * Border color for regions with the same content as the selection.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.selectionHighlightBorder"?: HexColor;

    /**
     * Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.wordHighlightBackground"?: HexColor;

    /**
     * Border color of a symbol during read-access, for example when reading a variable.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.wordHighlightBorder"?: HexColor;

    /**
     * Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.wordHighlightStrongBackground"?: HexColor;

    /**
     * Border color of a symbol during write-access, for example when writing to a variable.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.wordHighlightStrongBorder"?: HexColor;

    /**
     * Color of the current search match.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findMatchBackground"?: HexColor;

    /**
     * Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findMatchHighlightBackground"?: HexColor;

    /**
     * Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findRangeHighlightBackground"?: HexColor;

    /**
     * Border color of the current search match.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findMatchBorder"?: HexColor;

    /**
     * Border color of the other search matches.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findMatchHighlightBorder"?: HexColor;

    /**
     * Border color the range limiting the search (Enable 'Find in Selection' in the find widget).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.findRangeHighlightBorder"?: HexColor;

    /**
     * Color of the editor's results.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "searchEditor.findMatchBackground"?: HexColor;

    /**
     * Border color of the editor's results.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "searchEditor.findMatchBorder"?: HexColor;

    /**
     * Search editor text input box border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "searchEditor.textInputBorder"?: HexColor;

    /**
     * Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.hoverHighlightBackground"?: HexColor;

    /**
     * Background color for the highlight of line at the cursor position.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.lineHighlightBackground"?: HexColor;

    /**
     * Background color for the border around the line at the cursor position.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.lineHighlightBorder"?: HexColor;

    /**
     * Border color used to highlight unicode characters.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorUnicodeHighlight.border"?: HexColor;

    /**
     * Background color used to highlight unicode characters.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorUnicodeHighlight.background"?: HexColor;

    /**
     * Color of active links.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorLink.activeForeground"?: HexColor;

    /**
     * Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.rangeHighlightBackground"?: HexColor;

    /**
     * Background color of the border around highlighted ranges.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.rangeHighlightBorder"?: HexColor;

    /**
     * Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.symbolHighlightBackground"?: HexColor;

    /**
     * Background color of the border around highlighted symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.symbolHighlightBorder"?: HexColor;

    /**
     * Color of whitespace characters in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorWhitespace.foreground"?: HexColor;

    /**
     * Color of the editor indentation guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorIndentGuide.background"?: HexColor;

    /**
     * Color of the active editor indentation guide.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorIndentGuide.activeBackground"?: HexColor;

    /**
     * Background color of inline hints.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.background"?: HexColor;

    /**
     * Foreground color of inline hints.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.foreground"?: HexColor;

    /**
     * Foreground color of inline hints for types
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.typeForeground"?: HexColor;

    /**
     * Background color of inline hints for types
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.typeBackground"?: HexColor;

    /**
     * Foreground color of inline hints for parameters
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.parameterForeground"?: HexColor;

    /**
     * Background color of inline hints for parameters
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInlayHint.parameterBackground"?: HexColor;

    /**
     * Color of the editor rulers.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorRuler.foreground"?: HexColor;

    /**
     * Background color when the editor is in linked editing mode.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.linkedEditingBackground"?: HexColor;

    /**
     * Foreground color of an editor CodeLens.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCodeLens.foreground"?: HexColor;

    /**
     * The color used for the lightbulb actions icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorLightBulb.foreground"?: HexColor;

    /**
     * The color used for the lightbulb auto fix actions icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorLightBulbAutoFix.foreground"?: HexColor;

    /**
     * Background color behind matching brackets.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketMatch.background"?: HexColor;

    /**
     * Color for matching brackets boxes.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketMatch.border"?: HexColor;

    /**
     * Foreground color of brackets (1). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground1"?: HexColor;

    /**
     * Foreground color of brackets (2). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground2"?: HexColor;

    /**
     * Foreground color of brackets (3). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground3"?: HexColor;

    /**
     * Foreground color of brackets (4). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground4"?: HexColor;

    /**
     * Foreground color of brackets (5). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground5"?: HexColor;

    /**
     * Foreground color of brackets (6). Requires enabling bracket pair colorization.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.foreground6"?: HexColor;

    /**
     * Foreground color of unexpected brackets.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketHighlight.unexpectedBracket.foreground"?: HexColor;

    /**
     * Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground1"?: HexColor;

    /**
     * Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground2"?: HexColor;

    /**
     * Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground3"?: HexColor;

    /**
     * Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground4"?: HexColor;

    /**
     * Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground5"?: HexColor;

    /**
     * Background color of active bracket pair guides (6). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.activeBackground6"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background1"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background2"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background3"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background4"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background5"?: HexColor;

    /**
     * Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorBracketPairGuide.background6"?: HexColor;

    /**
     * Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editor.foldBackground"?: HexColor;

    /**
     * Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.background"?: HexColor;

    /**
     * Color of the overview ruler border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.border"?: HexColor;

    /**
     * Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.findMatchForeground"?: HexColor;

    /**
     * Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.rangeHighlightForeground"?: HexColor;

    /**
     * Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.selectionHighlightForeground"?: HexColor;

    /**
     * Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.wordHighlightForeground"?: HexColor;

    /**
     * Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.wordHighlightStrongForeground"?: HexColor;

    /**
     * Overview ruler marker color for modified content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.modifiedForeground"?: HexColor;

    /**
     * Overview ruler marker color for added content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.addedForeground"?: HexColor;

    /**
     * Overview ruler marker color for deleted content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.deletedForeground"?: HexColor;

    /**
     * Overview ruler marker color for errors.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.errorForeground"?: HexColor;

    /**
     * Overview ruler marker color for warnings.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.warningForeground"?: HexColor;

    /**
     * Overview ruler marker color for infos.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.infoForeground"?: HexColor;

    /**
     * Overview ruler marker color for matching brackets.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorOverviewRuler.bracketMatchForeground"?: HexColor;

    /**
     * Foreground color of error squiggles in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorError.foreground"?: HexColor;

    /**
     * Border color of error boxes in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorError.border"?: HexColor;

    /**
     * Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorError.background"?: HexColor;

    /**
     * Foreground color of warning squiggles in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorWarning.foreground"?: HexColor;

    /**
     * Border color of warning boxes in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorWarning.border"?: HexColor;

    /**
     * Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorWarning.background"?: HexColor;

    /**
     * Foreground color of info squiggles in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInfo.foreground"?: HexColor;

    /**
     * Border color of info boxes in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInfo.border"?: HexColor;

    /**
     * Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorInfo.background"?: HexColor;

    /**
     * Foreground color of hints in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorHint.foreground"?: HexColor;

    /**
     * Border color of hint boxes in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorHint.border"?: HexColor;

    /**
     * The color used for the problems error icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "problemsErrorIcon.foreground"?: HexColor;

    /**
     * The color used for the problems warning icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "problemsWarningIcon.foreground"?: HexColor;

    /**
     * The color used for the problems info icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "problemsInfoIcon.foreground"?: HexColor;

    /**
     * Border color of unnecessary (unused) source code in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorUnnecessaryCode.border"?: HexColor;

    /**
     * Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorUnnecessaryCode.opacity"?: HexColor;

    /**
     * Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.background"?: HexColor;

    /**
     * Editor gutter background color for lines that are modified.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.modifiedBackground"?: HexColor;

    /**
     * Editor gutter background color for lines that are added.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.addedBackground"?: HexColor;

    /**
     * Editor gutter background color for lines that are deleted.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.deletedBackground"?: HexColor;

    /**
     * Editor gutter decoration color for commenting ranges.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.commentRangeForeground"?: HexColor;

    /**
     * Color of the folding control in the editor gutter.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorGutter.foldingControlForeground"?: HexColor;

    /**
     * Color of borders and arrow for resolved comments.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.resolvedBorder"?: HexColor;

    /**
     * Color of borders and arrow for unresolved comments.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.unresolvedBorder"?: HexColor;

    /**
     * Color of background for comment ranges.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.rangeBackground"?: HexColor;

    /**
     * Color of border for comment ranges.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.rangeBorder"?: HexColor;

    /**
     * Color of background for currently selected or hovered comment range.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.rangeActiveBackground"?: HexColor;

    /**
     * Color of border for currently selected or hovered comment range.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#editor-colors
     **/
    "editorCommentsWidget.rangeActiveBorder"?: HexColor;

    /** DIFF EDITOR COLORS
     *  For coloring inserted and removed text, use either a background or a border color but not both.
     *  @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/

    /**
     * Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.insertedTextBackground"?: HexColor;

    /**
     * Outline color for the text that got inserted.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.insertedTextBorder"?: HexColor;

    /**
     * Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.removedTextBackground"?: HexColor;

    /**
     * Outline color for text that got removed.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.removedTextBorder"?: HexColor;

    /**
     * Border color between the two text editors.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.border"?: HexColor;

    /**
     * Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.diagonalFill"?: HexColor;

    /**
     * Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.insertedLineBackground"?: HexColor;

    /**
     * Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditor.removedLineBackground"?: HexColor;

    /**
     * Background color for the margin where lines got inserted.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditorGutter.insertedLineBackground"?: HexColor;

    /**
     * Background color for the margin where lines got removed.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditorGutter.removedLineBackground"?: HexColor;

    /**
     * Diff overview ruler foreground for inserted content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditorOverview.insertedForeground"?: HexColor;

    /**
     * Diff overview ruler foreground for removed content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "diffEditorOverview.removedForeground"?: HexColor;

    /**
     * Foreground color of editor widgets, such as find/replace.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorWidget.foreground"?: HexColor;

    /**
     * Background color of editor widgets, such as Find/Replace.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorWidget.background"?: HexColor;

    /**
     * Border color of the editor widget unless the widget does not contain a border or defines its own border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorWidget.border"?: HexColor;

    /**
     * Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorWidget.resizeBorder"?: HexColor;

    /**
     * Background color of the suggestion widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.background"?: HexColor;

    /**
     * Border color of the suggestion widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.border"?: HexColor;

    /**
     * Foreground color of the suggestion widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.foreground"?: HexColor;

    /**
     * Color of the match highlights in the suggest widget when an item is focused.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.focusHighlightForeground"?: HexColor;

    /**
     * Color of the match highlights in the suggestion widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.highlightForeground"?: HexColor;

    /**
     * Background color of the selected entry in the suggestion widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.selectedBackground"?: HexColor;

    /**
     * Foreground color of the selected entry in the suggest widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.selectedForeground"?: HexColor;

    /**
     * Icon foreground color of the selected entry in the suggest widget.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidget.selectedIconForeground"?: HexColor;

    /**
     * Foreground color of the suggest widget status.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorSuggestWidgetStatus.foreground"?: HexColor;

    /**
     * Foreground color of the editor hover.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorHoverWidget.foreground"?: HexColor;

    /**
     * Background color of the editor hover.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorHoverWidget.background"?: HexColor;

    /**
     * Border color of the editor hover.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorHoverWidget.border"?: HexColor;

    /**
     * Foreground color of the active item in the parameter hint.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorHoverWidget.highlightForeground"?: HexColor;

    /**
     * Background color of the editor hover status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorHoverWidget.statusBarBackground"?: HexColor;

    /**
     * Border color of the ghost text shown by inline completion providers and the suggest preview.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorGhostText.border"?: HexColor;

    /**
     * Background color of the ghost text in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorGhostText.background"?: HexColor;

    /**
     * Foreground color of the ghost text shown by inline completion providers and the suggest preview.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorGhostText.foreground"?: HexColor;

    /**
     * Editor sticky scroll background color
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorStickyScroll.background"?: HexColor;

    /**
     * Editor sticky scroll on hover background color
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorStickyScrollHover.background"?: HexColor;

    /**
     * Exception widget background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "debugExceptionWidget.background"?: HexColor;

    /**
     * Exception widget border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "debugExceptionWidget.border"?: HexColor;

    /**
     * Editor marker navigation widget background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigation.background"?: HexColor;

    /**
     * Editor marker navigation widget error color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationError.background"?: HexColor;

    /**
     * Editor marker navigation widget warning color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationWarning.background"?: HexColor;

    /**
     * Editor marker navigation widget info color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationInfo.background"?: HexColor;

    /**
     * Editor marker navigation widget error heading background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationError.headerBackground"?: HexColor;

    /**
     * Editor marker navigation widget warning heading background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationWarning.headerBackground"?: HexColor;

    /**
     * Editor marker navigation widget info heading background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
     **/
    "editorMarkerNavigationInfo.headerBackground"?: HexColor;

    /** PEEK VIEW COLORS
     *  Peek views are used to show references and declarations as a view inside the editor.
     *  @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/

    /**
     * Color of the peek view borders and arrow.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekView.border"?: HexColor;

    /**
     * Background color of the peek view editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewEditor.background"?: HexColor;

    /**
     * Background color of the gutter in the peek view editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewEditorGutter.background"?: HexColor;

    /**
     * Match highlight color in the peek view editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewEditor.matchHighlightBackground"?: HexColor;

    /**
     * Match highlight border color in the peek view editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewEditor.matchHighlightBorder"?: HexColor;

    /**
     * Background color of the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.background"?: HexColor;

    /**
     * Foreground color for file nodes in the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.fileForeground"?: HexColor;

    /**
     * Foreground color for line nodes in the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.lineForeground"?: HexColor;

    /**
     * Match highlight color in the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.matchHighlightBackground"?: HexColor;

    /**
     * Background color of the selected entry in the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.selectionBackground"?: HexColor;

    /**
     * Foreground color of the selected entry in the peek view result list.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewResult.selectionForeground"?: HexColor;

    /**
     * Background color of the peek view title area.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewTitle.background"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewTitleDescription.foreground"?: HexColor;

    /**
     * Color of the peek view title.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#peek-view-colors
     **/
    "peekViewTitleLabel.foreground"?: HexColor;

    /** MERGE CONFLICTS COLORS
     *  Merge conflict decorations are shown when the editor contains special diff ranges.
     *  @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/

    /**
     * Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.currentHeaderBackground"?: HexColor;

    /**
     * Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.currentContentBackground"?: HexColor;

    /**
     * Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.incomingHeaderBackground"?: HexColor;

    /**
     * Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.incomingContentBackground"?: HexColor;

    /**
     * Border color on headers and the splitter in inline merge conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.border"?: HexColor;

    /**
     * Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.commonContentBackground"?: HexColor;

    /**
     * Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "merge.commonHeaderBackground"?: HexColor;

    /**
     * Current overview ruler foreground for inline merge conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "editorOverviewRuler.currentContentForeground"?: HexColor;

    /**
     * Incoming overview ruler foreground for inline merge conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "editorOverviewRuler.incomingContentForeground"?: HexColor;

    /**
     * Common ancestor overview ruler foreground for inline merge conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "editorOverviewRuler.commonContentForeground"?: HexColor;

    /**
     * The background color for changes.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.change.background"?: HexColor;

    /**
     * The background color for word changes.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.change.word.background"?: HexColor;

    /**
     * The border color of unhandled unfocused conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.unhandledUnfocused.border"?: HexColor;

    /**
     * The border color of unhandled focused conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.unhandledFocused.border"?: HexColor;

    /**
     * The border color of handled unfocused conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.handledUnfocused.border"?: HexColor;

    /**
     * The border color of handled focused conflicts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.handledFocused.border"?: HexColor;

    /**
     * The foreground color for changes in input 1.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.handled.minimapOverViewRuler"?: HexColor;

    /**
     * The foreground color for changes in input 1.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
     **/
    "mergeEditor.conflict.unhandled.minimapOverViewRuler"?: HexColor;

    /** PANEL COLORS
     *  Panels are shown below the editor area and contain views like Output and Integrated Terminal.
     *  @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/

    /**
     * Panel background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panel.background"?: HexColor;

    /**
     * Panel border color to separate the panel from the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panel.border"?: HexColor;

    /**
     * Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panel.dropBorder"?: HexColor;

    /**
     * Border color for the active panel title.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelTitle.activeBorder"?: HexColor;

    /**
     * Title color for the active panel.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelTitle.activeForeground"?: HexColor;

    /**
     * Title color for the inactive panel.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelTitle.inactiveForeground"?: HexColor;

    /**
     * Input box border for inputs in the panel.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelInput.border"?: HexColor;

    /**
     * Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelSection.border"?: HexColor;

    /**
     * Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelSection.dropBackground"?: HexColor;

    /**
     * Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelSectionHeader.background"?: HexColor;

    /**
     * Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelSectionHeader.foreground"?: HexColor;

    /**
     * Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#panel-colors
     **/
    "panelSectionHeader.border"?: HexColor;

    /** STATUS BAR COLORS
     *  The Status Bar is shown in the bottom of the workbench.
     *  @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/

    /**
     * Standard Status Bar background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.background"?: HexColor;

    /**
     * Status Bar foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.foreground"?: HexColor;

    /**
     * Status Bar border color separating the Status Bar and editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.border"?: HexColor;

    /**
     * Status Bar background color when a program is being debugged.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.debuggingBackground"?: HexColor;

    /**
     * Status Bar foreground color when a program is being debugged.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.debuggingForeground"?: HexColor;

    /**
     * Status Bar border color separating the Status Bar and editor when a program is being debugged.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.debuggingBorder"?: HexColor;

    /**
     * Status Bar foreground color when no folder is opened.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.noFolderForeground"?: HexColor;

    /**
     * Status Bar background color when no folder is opened.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.noFolderBackground"?: HexColor;

    /**
     * Status Bar border color separating the Status Bar and editor when no folder is opened.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.noFolderBorder"?: HexColor;

    /**
     * Status Bar item background color when clicking.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.activeBackground"?: HexColor;

    /**
     * Status Bar item background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.hoverBackground"?: HexColor;

    /**
     * Status Bar prominent items foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.prominentForeground"?: HexColor;

    /**
     * Status Bar prominent items background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.prominentBackground"?: HexColor;

    /**
     * Status Bar prominent items background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.prominentHoverBackground"?: HexColor;

    /**
     * Background color for the remote indicator on the status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.remoteBackground"?: HexColor;

    /**
     * Foreground color for the remote indicator on the status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.remoteForeground"?: HexColor;

    /**
     * Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.errorBackground"?: HexColor;

    /**
     * Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.errorForeground"?: HexColor;

    /**
     * Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.warningBackground"?: HexColor;

    /**
     * Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.warningForeground"?: HexColor;

    /**
     * Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.compactHoverBackground"?: HexColor;

    /**
     * Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.focusBorder"?: HexColor;

    /**
     * Foreground color for the settings profile entry on the status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.settingsProfilesForeground"?: HexColor;

    /**
     * Background color for the settings profile entry on the status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBarItem.settingsProfilesBackground"?: HexColor;

    /**
     * Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#status-bar-colors
     **/
    "statusBar.focusBorder"?: HexColor;

    /** TITLE BAR COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/

    /**
     * Title Bar background when the window is active.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "titleBar.activeBackground"?: HexColor;

    /**
     * Title Bar foreground when the window is active.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "titleBar.activeForeground"?: HexColor;

    /**
     * Title Bar background when the window is inactive.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "titleBar.inactiveBackground"?: HexColor;

    /**
     * Title Bar foreground when the window is inactive.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "titleBar.inactiveForeground"?: HexColor;

    /**
     * Title bar border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "titleBar.border"?: HexColor;

    /**
     * Foreground color of the selected menu item in the menubar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menubar.selectionForeground"?: HexColor;

    /**
     * Background color of the selected menu item in the menubar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menubar.selectionBackground"?: HexColor;

    /**
     * Border color of the selected menu item in the menubar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menubar.selectionBorder"?: HexColor;

    /**
     * Foreground color of menu items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.foreground"?: HexColor;

    /**
     * Background color of menu items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.background"?: HexColor;

    /**
     * Foreground color of the selected menu item in menus.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.selectionForeground"?: HexColor;

    /**
     * Background color of the selected menu item in menus.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.selectionBackground"?: HexColor;

    /**
     * Border color of the selected menu item in menus.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.selectionBorder"?: HexColor;

    /**
     * Color of a separator menu item in menus.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.separatorBackground"?: HexColor;

    /**
     * Border color of menus.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#title-bar-colors
     **/
    "menu.border"?: HexColor;

    /** COMMAND CENTER COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/

    /**
     * Foreground color of the command center
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/
    "commandCenter.foreground"?: HexColor;

    /**
     * Active foreground color of the command center
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/
    "commandCenter.activeForeground"?: HexColor;

    /**
     * Background color of the command center
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/
    "commandCenter.background"?: HexColor;

    /**
     * Active background color of the command center
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/
    "commandCenter.activeBackground"?: HexColor;

    /**
     * Border color of the command center
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#command-center-colors
     **/
    "commandCenter.border"?: HexColor;

    /** NOTIFICATION COLORS
     *  Notification toasts slide up from the bottom-right of the workbench.
     *  @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/

    /**
     * Notification Center border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationCenter.border"?: HexColor;

    /**
     * Notification Center header foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationCenterHeader.foreground"?: HexColor;

    /**
     * Notification Center header background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationCenterHeader.background"?: HexColor;

    /**
     * Notification toast border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationToast.border"?: HexColor;

    /**
     * Notification foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notifications.foreground"?: HexColor;

    /**
     * Notification background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notifications.background"?: HexColor;

    /**
     * Notification border color separating from other notifications in the Notification Center.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notifications.border"?: HexColor;

    /**
     * Notification links foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationLink.foreground"?: HexColor;

    /**
     * The color used for the notification error icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationsErrorIcon.foreground"?: HexColor;

    /**
     * The color used for the notification warning icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationsWarningIcon.foreground"?: HexColor;

    /**
     * The color used for the notification info icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "notificationsInfoIcon.foreground"?: HexColor;

    /**
     * Banner background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "banner.background"?: HexColor;

    /**
     * Banner foreground color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "banner.foreground"?: HexColor;

    /**
     * Color for the icon in front of the banner text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notification-colors
     **/
    "banner.iconForeground"?: HexColor;

    /** EXTENSIONS COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/

    /**
     * Extension view button foreground color (for example **Install** button).
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionButton.prominentForeground"?: HexColor;

    /**
     * Extension view button background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionButton.prominentBackground"?: HexColor;

    /**
     * Extension view button background hover color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionButton.prominentHoverBackground"?: HexColor;

    /**
     * Background color for the remote badge in the extensions view.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionBadge.remoteBackground"?: HexColor;

    /**
     * Foreground color for the remote badge in the extensions view.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionBadge.remoteForeground"?: HexColor;

    /**
     * The icon color for extension ratings.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionIcon.starForeground"?: HexColor;

    /**
     * The icon color for extension verified publisher.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionIcon.verifiedForeground"?: HexColor;

    /**
     * The icon color for pre-release extension.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionIcon.preReleaseForeground"?: HexColor;

    /**
     * The icon color for extension sponsor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#extensions-colors
     **/
    "extensionIcon.sponsorForeground"?: HexColor;

    /** QUICK PICKER COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/

    /**
     * Quick picker (Quick Open) color for grouping borders.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "pickerGroup.border"?: HexColor;

    /**
     * Quick picker (Quick Open) color for grouping labels.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "pickerGroup.foreground"?: HexColor;

    /**
     * Quick input background color. The quick input widget is the container for views like the color theme picker.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInput.background"?: HexColor;

    /**
     * Quick input foreground color. The quick input widget is the container for views like the color theme picker.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInput.foreground"?: HexColor;

    /**
     * Quick picker background color for the focused item.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInputList.focusBackground"?: HexColor;

    /**
     * Quick picker foreground color for the focused item.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInputList.focusForeground"?: HexColor;

    /**
     * Quick picker icon foreground color for the focused item.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInputList.focusIconForeground"?: HexColor;

    /**
     * Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
     **/
    "quickInputTitle.background"?: HexColor;

    /** KEYBINDING LABEL COLORS
     *  Keybinding labels are shown when there is a keybinding associated with a command. An example of the keybinding label can be seen in the Command Palette:
     *
     *  Usages of the keybinding label include (but are not limited to):
     *
     *  - The Command Palette
     *  - The Keyboard Shortcuts editor
     *  - The Keyboard Shortcuts recorder modal
     *  - The "feature contribution" section of an extension's marketplace page
     *
     *  The following customizations are available:
     *
     *  - `keybindingLabel.background`
     *  - `keybindingLabel.foreground`
     *  - `keybindingLabel.border`
     *  - `keybindingLabel.bottomBorder`
     *
     *  @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingLabel.background"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingLabel.foreground"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingLabel.border"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingLabel.bottomBorder"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingTable.headerBackground"?: HexColor;

    /**
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#keybinding-label-colors
     **/
    "keybindingTable.rowsBackground"?: HexColor;

    /** INTEGRATED TERMINAL COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/

    /**
     * The background of the Integrated Terminal's viewport.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.background"?: HexColor;

    /**
     * The color of the border that separates split panes within the terminal. This defaults to panel.border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.border"?: HexColor;

    /**
     * The default foreground color of the Integrated Terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.foreground"?: HexColor;

    /**
     * 'Black' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBlack"?: HexColor;

    /**
     * 'Blue' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBlue"?: HexColor;

    /**
     * 'BrightBlack' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightBlack"?: HexColor;

    /**
     * 'BrightBlue' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightBlue"?: HexColor;

    /**
     * 'BrightCyan' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightCyan"?: HexColor;

    /**
     * 'BrightGreen' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightGreen"?: HexColor;

    /**
     * 'BrightMagenta' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightMagenta"?: HexColor;

    /**
     * 'BrightRed' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightRed"?: HexColor;

    /**
     * 'BrightWhite' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightWhite"?: HexColor;

    /**
     * 'BrightYellow' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiBrightYellow"?: HexColor;

    /**
     * 'Cyan' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiCyan"?: HexColor;

    /**
     * 'Green' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiGreen"?: HexColor;

    /**
     * 'Magenta' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiMagenta"?: HexColor;

    /**
     * 'Red' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiRed"?: HexColor;

    /**
     * 'White' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiWhite"?: HexColor;

    /**
     * 'Yellow' ANSI color in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.ansiYellow"?: HexColor;

    /**
     * The selection background color of the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.selectionBackground"?: HexColor;

    /**
     * The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.selectionForeground"?: HexColor;

    /**
     * Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.findMatchBackground"?: HexColor;

    /**
     * Border color of the current search match in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.findMatchBorder"?: HexColor;

    /**
     * Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.findMatchHighlightBackground"?: HexColor;

    /**
     * Border color of the other search matches in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.findMatchHighlightBorder"?: HexColor;

    /**
     * The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalCursor.background"?: HexColor;

    /**
     * The foreground color of the terminal cursor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalCursor.foreground"?: HexColor;

    /**
     * The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.dropBackground"?: HexColor;

    /**
     * Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminal.tab.activeBorder"?: HexColor;

    /**
     * The default terminal command decoration background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalCommandDecoration.defaultBackground"?: HexColor;

    /**
     * The terminal command decoration background color for successful commands.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalCommandDecoration.successBackground"?: HexColor;

    /**
     * The terminal command decoration background color for error commands.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalCommandDecoration.errorBackground"?: HexColor;

    /**
     * The overview ruler cursor color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalOverviewRuler.cursorForeground"?: HexColor;

    /**
     * Overview ruler marker color for find matches in the terminal.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
     **/
    "terminalOverviewRuler.findMatchForeground"?: HexColor;

    /** DEBUG COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/

    /**
     * Debug toolbar background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugToolBar.background"?: HexColor;

    /**
     * Debug toolbar border color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugToolBar.border"?: HexColor;

    /**
     * Background color of the top stack frame highlight in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "editor.stackFrameHighlightBackground"?: HexColor;

    /**
     * Background color of the focused stack frame highlight in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "editor.focusedStackFrameHighlightBackground"?: HexColor;

    /**
     * Color for the debug inline value text.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "editor.inlineValuesForeground"?: HexColor;

    /**
     * Color for the debug inline value background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "editor.inlineValuesBackground"?: HexColor;

    /**
     * Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugView.exceptionLabelForeground"?: HexColor;

    /**
     * Background color for a label shown in the CALL STACK view when the debugger breaks on an exception
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugView.exceptionLabelBackground"?: HexColor;

    /**
     * Foreground color for a label in the CALL STACK view showing the current session's or thread's state
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugView.stateLabelForeground"?: HexColor;

    /**
     * Background color for a label in the CALL STACK view showing the current session's or thread's state
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugView.stateLabelBackground"?: HexColor;

    /**
     * Color used to highlight value changes in the debug views (ie. in the Variables view)
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugView.valueChangedHighlight"?: HexColor;

    /**
     * Foreground color for the token names shown in debug views (ie. the Variables or Watch view)
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.name"?: HexColor;

    /**
     * Foreground color for the token values shown in debug views
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.value"?: HexColor;

    /**
     * Foreground color for strings in debug views
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.string"?: HexColor;

    /**
     * Foreground color for booleans in debug views
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.boolean"?: HexColor;

    /**
     * Foreground color for numbers in debug views
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.number"?: HexColor;

    /**
     * Foreground color for expression errors in debug views
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-colors
     **/
    "debugTokenExpression.error"?: HexColor;

    /** TESTING COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/

    /**
     * Color for the 'failed' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconFailed"?: HexColor;

    /**
     * Color for the 'Errored' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconErrored"?: HexColor;

    /**
     * Color for the 'passed' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconPassed"?: HexColor;

    /**
     * Color for 'run' icons in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.runAction"?: HexColor;

    /**
     * Color for the 'Queued' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconQueued"?: HexColor;

    /**
     * Color for the 'Unset' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconUnset"?: HexColor;

    /**
     * Color for the 'Skipped' icon in the test explorer.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.iconSkipped"?: HexColor;

    /**
     * Color of the peek view borders and arrow.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.peekBorder"?: HexColor;

    /**
     * Color of the peek view borders and arrow.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.peekHeaderBackground"?: HexColor;

    /**
     * Text color of test error messages shown inline in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.message.error.decorationForeground"?: HexColor;

    /**
     * Margin color beside error messages shown inline in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.message.error.lineBackground"?: HexColor;

    /**
     * Text color of test info messages shown inline in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.message.info.decorationForeground"?: HexColor;

    /**
     * Margin color beside info messages shown inline in the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#testing-colors
     **/
    "testing.message.info.lineBackground"?: HexColor;

    /** WELCOME PAGE COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/

    /**
     * Background color for the Welcome page.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.background"?: HexColor;

    /**
     * Foreground color for the Welcome page progress bars.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.progress.background"?: HexColor;

    /**
     * Background color for the Welcome page progress bars.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.progress.foreground"?: HexColor;

    /**
     * Background color for the tiles on the Get Started page.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.tileBackground"?: HexColor;

    /**
     * Hover background color for the tiles on the Get Started.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.tileHoverBackground"?: HexColor;

    /**
     * Shadow color for the Welcome page walkthrough category buttons.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "welcomePage.tileShadow"?: HexColor;

    /**
     * Background color for the embedded editors on the Interactive Playground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
     **/
    "walkThrough.embeddedEditorBackground"?: HexColor;

    /** SOURCE CONTROL COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#source-control-colors
     **/

    /**
     * SCM Provider separator border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#source-control-colors
     **/
    "scm.providerBorder"?: HexColor;

    /** GIT COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/

    /**
     * Color for added Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.addedResourceForeground"?: HexColor;

    /**
     * Color for modified Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.modifiedResourceForeground"?: HexColor;

    /**
     * Color for deleted Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.deletedResourceForeground"?: HexColor;

    /**
     * Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.renamedResourceForeground"?: HexColor;

    /**
     * Color for staged modifications git decorations. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.stageModifiedResourceForeground"?: HexColor;

    /**
     * Color for staged deletions git decorations. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.stageDeletedResourceForeground"?: HexColor;

    /**
     * Color for untracked Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.untrackedResourceForeground"?: HexColor;

    /**
     * Color for ignored Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.ignoredResourceForeground"?: HexColor;

    /**
     * Color for conflicting Git resources. Used for file labels and the SCM viewlet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.conflictingResourceForeground"?: HexColor;

    /**
     * Color for submodule resources.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#git-colors
     **/
    "gitDecoration.submoduleResourceForeground"?: HexColor;

    /** SETTINGS EDITOR COLORS
     *  **Note:** These colors are for the GUI settings editor which can be opened with the `Preferences?: Open Settings (UI)` command.
     *  @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/

    /**
     * The foreground color for a section header or active title.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.headerForeground"?: HexColor;

    /**
     * The line that indicates a modified setting.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.modifiedItemIndicator"?: HexColor;

    /**
     * Dropdown background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.dropdownBackground"?: HexColor;

    /**
     * Dropdown foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.dropdownForeground"?: HexColor;

    /**
     * Dropdown border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.dropdownBorder"?: HexColor;

    /**
     * Dropdown list border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.dropdownListBorder"?: HexColor;

    /**
     * Checkbox background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.checkboxBackground"?: HexColor;

    /**
     * Checkbox foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.checkboxForeground"?: HexColor;

    /**
     * Checkbox border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.checkboxBorder"?: HexColor;

    /**
     * The background color of a settings row when hovered.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.rowHoverBackground"?: HexColor;

    /**
     * Text input box background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.textInputBackground"?: HexColor;

    /**
     * Text input box foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.textInputForeground"?: HexColor;

    /**
     * Text input box border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.textInputBorder"?: HexColor;

    /**
     * Number input box background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.numberInputBackground"?: HexColor;

    /**
     * Number input box foreground.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.numberInputForeground"?: HexColor;

    /**
     * Number input box border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.numberInputBorder"?: HexColor;

    /**
     * Background color of a focused setting row.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.focusedRowBackground"?: HexColor;

    /**
     * The color of the row's top and bottom border when the row is focused.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.focusedRowBorder"?: HexColor;

    /**
     * The color of the header container border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.headerBorder"?: HexColor;

    /**
     * The color of the Settings editor splitview sash border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "settings.sashBorder"?: HexColor;

    /**
     * Color of breadcrumb items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "breadcrumb.foreground"?: HexColor;

    /**
     * Background color of breadcrumb items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "breadcrumb.background"?: HexColor;

    /**
     * Color of focused breadcrumb items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "breadcrumb.focusForeground"?: HexColor;

    /**
     * Color of selected breadcrumb items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "breadcrumb.activeSelectionForeground"?: HexColor;

    /**
     * Background color of breadcrumb item picker.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#settings-editor-colors
     **/
    "breadcrumbPicker.background"?: HexColor;

    /** SNIPPETS COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#snippets-colors
     **/

    /**
     * Highlight background color of a snippet tabstop.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#snippets-colors
     **/
    "editor.snippetTabstopHighlightBackground"?: HexColor;

    /**
     * Highlight border color of a snippet tabstop.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#snippets-colors
     **/
    "editor.snippetTabstopHighlightBorder"?: HexColor;

    /**
     * Highlight background color of the final tabstop of a snippet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#snippets-colors
     **/
    "editor.snippetFinalTabstopHighlightBackground"?: HexColor;

    /**
     * Highlight border color of the final tabstop of a snippet.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#snippets-colors
     **/
    "editor.snippetFinalTabstopHighlightBorder"?: HexColor;

    /** SYMBOL ICONS COLORS
     *  The theme colors for symbol icons that appears in the Outline view, breadcrumb navigation, and suggest widget:
     *  @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/

    /**
     * The foreground color for array symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.arrayForeground"?: HexColor;

    /**
     * The foreground color for boolean symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.booleanForeground"?: HexColor;

    /**
     * The foreground color for class symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.classForeground"?: HexColor;

    /**
     * The foreground color for color symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.colorForeground"?: HexColor;

    /**
     * The foreground color for constant symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.constantForeground"?: HexColor;

    /**
     * The foreground color for constructor symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.constructorForeground"?: HexColor;

    /**
     * The foreground color for enumerator symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.enumeratorForeground"?: HexColor;

    /**
     * The foreground color for enumerator member symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.enumeratorMemberForeground"?: HexColor;

    /**
     * The foreground color for event symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.eventForeground"?: HexColor;

    /**
     * The foreground color for field symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.fieldForeground"?: HexColor;

    /**
     * The foreground color for file symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.fileForeground"?: HexColor;

    /**
     * The foreground color for folder symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.folderForeground"?: HexColor;

    /**
     * The foreground color for function symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.functionForeground"?: HexColor;

    /**
     * The foreground color for interface symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.interfaceForeground"?: HexColor;

    /**
     * The foreground color for key symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.keyForeground"?: HexColor;

    /**
     * The foreground color for keyword symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.keywordForeground"?: HexColor;

    /**
     * The foreground color for method symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.methodForeground"?: HexColor;

    /**
     * The foreground color for module symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.moduleForeground"?: HexColor;

    /**
     * The foreground color for namespace symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.namespaceForeground"?: HexColor;

    /**
     * The foreground color for null symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.nullForeground"?: HexColor;

    /**
     * The foreground color for number symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.numberForeground"?: HexColor;

    /**
     * The foreground color for object symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.objectForeground"?: HexColor;

    /**
     * The foreground color for operator symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.operatorForeground"?: HexColor;

    /**
     * The foreground color for package symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.packageForeground"?: HexColor;

    /**
     * The foreground color for property symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.propertyForeground"?: HexColor;

    /**
     * The foreground color for reference symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.referenceForeground"?: HexColor;

    /**
     * The foreground color for snippet symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.snippetForeground"?: HexColor;

    /**
     * The foreground color for string symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.stringForeground"?: HexColor;

    /**
     * The foreground color for struct symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.structForeground"?: HexColor;

    /**
     * The foreground color for text symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.textForeground"?: HexColor;

    /**
     * The foreground color for type parameter symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.typeParameterForeground"?: HexColor;

    /**
     * The foreground color for unit symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.unitForeground"?: HexColor;

    /**
     * The foreground color for variable symbols.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
     **/
    "symbolIcon.variableForeground"?: HexColor;

    /** DEBUG ICONS COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/

    /**
     * Icon color for breakpoints.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.breakpointForeground"?: HexColor;

    /**
     * Icon color for disabled breakpoints.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.breakpointDisabledForeground"?: HexColor;

    /**
     * Icon color for unverified breakpoints.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.breakpointUnverifiedForeground"?: HexColor;

    /**
     * Icon color for the current breakpoint stack frame.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.breakpointCurrentStackframeForeground"?: HexColor;

    /**
     * Icon color for all breakpoint stack frames.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.breakpointStackframeForeground"?: HexColor;

    /**
     * Debug toolbar icon for start debugging.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.startForeground"?: HexColor;

    /**
     * Debug toolbar icon for pause.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.pauseForeground"?: HexColor;

    /**
     * Debug toolbar icon for stop.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.stopForeground"?: HexColor;

    /**
     * Debug toolbar icon for disconnect.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.disconnectForeground"?: HexColor;

    /**
     * Debug toolbar icon for restart.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.restartForeground"?: HexColor;

    /**
     * Debug toolbar icon for step over.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.stepOverForeground"?: HexColor;

    /**
     * Debug toolbar icon for step into.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.stepIntoForeground"?: HexColor;

    /**
     * Debug toolbar icon for step over.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.stepOutForeground"?: HexColor;

    /**
     * Debug toolbar icon for continue.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.continueForeground"?: HexColor;

    /**
     * Debug toolbar icon for step back.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugIcon.stepBackForeground"?: HexColor;

    /**
     * Foreground color for info messages in debug REPL console.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugConsole.infoForeground"?: HexColor;

    /**
     * Foreground color for warning messages in debug REPL console.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugConsole.warningForeground"?: HexColor;

    /**
     * Foreground color for error messages in debug REPL console.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugConsole.errorForeground"?: HexColor;

    /**
     * Foreground color for source filenames in debug REPL console.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugConsole.sourceForeground"?: HexColor;

    /**
     * Foreground color for debug console input marker icon.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
     **/
    "debugConsoleInputIcon.foreground"?: HexColor;

    /** NOTEBOOK COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/

    /**
     * Notebook background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.editorBackground"?: HexColor;

    /**
     * The border color for notebook cells.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellBorderColor"?: HexColor;

    /**
     * The background color of a cell when the cell is hovered.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellHoverBackground"?: HexColor;

    /**
     * The color of the notebook cell insertion indicator.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellInsertionIndicator"?: HexColor;

    /**
     * The background color of notebook cell status bar items.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellStatusBarItemHoverBackground"?: HexColor;

    /**
     * The color of the separator in the cell bottom toolbar
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellToolbarSeparator"?: HexColor;

    /**
     * The color of the notebook cell editor background
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.cellEditorBackground"?: HexColor;

    /**
     * The background color of a cell when the cell is focused.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.focusedCellBackground"?: HexColor;

    /**
     * The color of the cell's focus indicator borders when the cell is focused..
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.focusedCellBorder"?: HexColor;

    /**
     * The color of the notebook cell editor border.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.focusedEditorBorder"?: HexColor;

    /**
     * The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.inactiveFocusedCellBorder"?: HexColor;

    /**
     * The color of the cell's borders when multiple cells are selected.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.inactiveSelectedCellBorder"?: HexColor;

    /**
     * The Color of the notebook output container background.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.outputContainerBackgroundColor"?: HexColor;

    /**
     * The border color of the notebook output container.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.outputContainerBorderColor"?: HexColor;

    /**
     * The background color of a cell when the cell is selected.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.selectedCellBackground"?: HexColor;

    /**
     * The color of the cell's top and bottom border when the cell is selected but not focused.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.selectedCellBorder"?: HexColor;

    /**
     * Background color of highlighted cell
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebook.symbolHighlightBackground"?: HexColor;

    /**
     * Notebook scrollbar slider background color when clicked on.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookScrollbarSlider.activeBackground"?: HexColor;

    /**
     * Notebook scrollbar slider background color.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookScrollbarSlider.background"?: HexColor;

    /**
     * Notebook scrollbar slider background color when hovering.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookScrollbarSlider.hoverBackground"?: HexColor;

    /**
     * The error icon color of notebook cells in the cell status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookStatusErrorIcon.foreground"?: HexColor;

    /**
     * The running icon color of notebook cells in the cell status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookStatusRunningIcon.foreground"?: HexColor;

    /**
     * The success icon color of notebook cells in the cell status bar.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#notebook-colors
     **/
    "notebookStatusSuccessIcon.foreground"?: HexColor;

    /** CHART COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/

    /**
     * Contrast color for text in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.foreground"?: HexColor;

    /**
     * Color for lines in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.lines"?: HexColor;

    /**
     * Color for red elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.red"?: HexColor;

    /**
     * Color for blue elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.blue"?: HexColor;

    /**
     * Color for yellow elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.yellow"?: HexColor;

    /**
     * Color for orange elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.orange"?: HexColor;

    /**
     * Color for green elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.green"?: HexColor;

    /**
     * Color for purple elements in charts.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#chart-colors
     **/
    "charts.purple"?: HexColor;

    /** PORTS COLORS * DESCRIPTION
     *  @see https://code.visualstudio.com/api/references/theme-color#ports-colors
     **/

    /**
     * The color of the icon for a port that has an associated running process.
     * @type HexColor
     * @see https://code.visualstudio.com/api/references/theme-color#ports-colors
     **/
    "ports.iconRunningProcessForeground"?: HexColor;
}

export default VscInterfaceColors;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Mapping of Material symbol names to their module names. Used as a fallback if
 * we didn't manage to resolve the module name of a symbol using the type checker.
 */
export const materialSymbolMap: Record<string, string> = {
  'AUTOCOMPLETE_OPTION_HEIGHT': 'autocomplete',
  'AUTOCOMPLETE_PANEL_HEIGHT': 'autocomplete',
  'getMatAutocompleteMissingPanelError': 'autocomplete',
  'MAT_AUTOCOMPLETE_DEFAULT_OPTIONS': 'autocomplete',
  'MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY': 'autocomplete',
  'MAT_AUTOCOMPLETE_SCROLL_STRATEGY': 'autocomplete',
  'MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY': 'autocomplete',
  'MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER': 'autocomplete',
  'MAT_AUTOCOMPLETE_VALUE_ACCESSOR': 'autocomplete',
  'MatAutocomplete': 'autocomplete',
  'MatAutocompleteDefaultOptions': 'autocomplete',
  'MatAutocompleteModule': 'autocomplete',
  'MatAutocompleteOrigin': 'autocomplete',
  'MatAutocompleteSelectedEvent': 'autocomplete',
  'MatAutocompleteTrigger': 'autocomplete',
  'MatBadge': 'badge',
  'MatBadgeModule': 'badge',
  'MatBadgePosition': 'badge',
  'MatBadgeSize': 'badge',
  'MAT_BOTTOM_SHEET_DATA': 'bottom-sheet',
  'MAT_BOTTOM_SHEET_DEFAULT_OPTIONS': 'bottom-sheet',
  'MatBottomSheet': 'bottom-sheet',
  'matBottomSheetAnimations': 'bottom-sheet',
  'MatBottomSheetConfig': 'bottom-sheet',
  'MatBottomSheetContainer': 'bottom-sheet',
  'MatBottomSheetModule': 'bottom-sheet',
  'MatBottomSheetRef': 'bottom-sheet',
  'MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS': 'button-toggle',
  'MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR': 'button-toggle',
  'MatButtonToggle': 'button-toggle',
  'MatButtonToggleAppearance': 'button-toggle',
  'MatButtonToggleChange': 'button-toggle',
  'MatButtonToggleDefaultOptions': 'button-toggle',
  'MatButtonToggleGroup': 'button-toggle',
  'MatButtonToggleGroupMultiple': 'button-toggle',
  'MatButtonToggleModule': 'button-toggle',
  'ToggleType': 'button-toggle',
  'MatAnchor': 'button',
  'MatButton': 'button',
  'MatButtonModule': 'button',
  'MatCard': 'card',
  'MatCardActions': 'card',
  'MatCardAvatar': 'card',
  'MatCardContent': 'card',
  'MatCardFooter': 'card',
  'MatCardHeader': 'card',
  'MatCardImage': 'card',
  'MatCardLgImage': 'card',
  'MatCardMdImage': 'card',
  'MatCardModule': 'card',
  'MatCardSmImage': 'card',
  'MatCardSubtitle': 'card',
  'MatCardTitle': 'card',
  'MatCardTitleGroup': 'card',
  'MatCardXlImage': 'card',
  '_MatCheckboxRequiredValidatorModule': 'checkbox',
  'MAT_CHECKBOX_CLICK_ACTION': 'checkbox',
  'MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR': 'checkbox',
  'MAT_CHECKBOX_REQUIRED_VALIDATOR': 'checkbox',
  'MatCheckbox': 'checkbox',
  'MatCheckboxChange': 'checkbox',
  'MatCheckboxClickAction': 'checkbox',
  'MatCheckboxModule': 'checkbox',
  'MatCheckboxRequiredValidator': 'checkbox',
  'TransitionCheckState': 'checkbox',
  'MAT_CHIPS_DEFAULT_OPTIONS': 'chips',
  'MatChip': 'chips',
  'MatChipAvatar': 'chips',
  'MatChipEvent': 'chips',
  'MatChipInput': 'chips',
  'MatChipInputEvent': 'chips',
  'MatChipList': 'chips',
  'MatChipListChange': 'chips',
  'MatChipRemove': 'chips',
  'MatChipsDefaultOptions': 'chips',
  'MatChipSelectionChange': 'chips',
  'MatChipsModule': 'chips',
  'MatChipTrailingIcon': 'chips',
  '_countGroupLabelsBeforeOption': 'core',
  '_getOptionScrollPosition': 'core',
  'AnimationCurves': 'core',
  'AnimationDurations': 'core',
  'JAN': 'core',
  'FEB': 'core',
  'MAR': 'core',
  'APR': 'core',
  'MAY': 'core',
  'JUN': 'core',
  'JUL': 'core',
  'AUG': 'core',
  'SEP': 'core',
  'OCT': 'core',
  'NOV': 'core',
  'DEC': 'core',
  'CanColor': 'core',
  'CanColorCtor': 'core',
  'CanDisable': 'core',
  'CanDisableCtor': 'core',
  'CanDisableRipple': 'core',
  'CanDisableRippleCtor': 'core',
  'CanUpdateErrorState': 'core',
  'CanUpdateErrorStateCtor': 'core',
  'DateAdapter': 'core',
  'defaultRippleAnimationConfig': 'core',
  'ErrorStateMatcher': 'core',
  'FloatLabelType': 'core',
  'GestureConfig': 'core',
  'HammerInput': 'core',
  'HammerInstance': 'core',
  'HammerManager': 'core',
  'HammerOptions': 'core',
  'HammerStatic': 'core',
  'HasInitialized': 'core',
  'HasInitializedCtor': 'core',
  'HasTabIndex': 'core',
  'HasTabIndexCtor': 'core',
  'LabelOptions': 'core',
  'MAT_DATE_FORMATS': 'core',
  'MAT_DATE_LOCALE': 'core',
  'MAT_DATE_LOCALE_FACTORY': 'core',
  'MAT_DATE_LOCALE_PROVIDER': 'core',
  'MAT_HAMMER_OPTIONS': 'core',
  'MAT_LABEL_GLOBAL_OPTIONS': 'core',
  'MAT_NATIVE_DATE_FORMATS': 'core',
  'MAT_OPTION_PARENT_COMPONENT': 'core',
  'MAT_RIPPLE_GLOBAL_OPTIONS': 'core',
  'MatCommonModule': 'core',
  'MatDateFormats': 'core',
  'MATERIAL_SANITY_CHECKS': 'core',
  'MatLine': 'core',
  'MatLineModule': 'core',
  'MatLineSetter': 'core',
  'MatNativeDateModule': 'core',
  'MatOptgroup': 'core',
  'MatOption': 'core',
  'MatOptionModule': 'core',
  'MatOptionParentComponent': 'core',
  'MatOptionSelectionChange': 'core',
  'MatPseudoCheckbox': 'core',
  'MatPseudoCheckboxModule': 'core',
  'MatPseudoCheckboxState': 'core',
  'MatRipple': 'core',
  'MatRippleModule': 'core',
  'mixinColor': 'core',
  'mixinDisabled': 'core',
  'mixinDisableRipple': 'core',
  'mixinErrorState': 'core',
  'mixinInitialized': 'core',
  'mixinTabIndex': 'core',
  'NativeDateAdapter': 'core',
  'NativeDateModule': 'core',
  'Recognizer': 'core',
  'RecognizerStatic': 'core',
  'RippleAnimationConfig': 'core',
  'RippleConfig': 'core',
  'RippleGlobalOptions': 'core',
  'RippleRef': 'core',
  'RippleRenderer': 'core',
  'RippleState': 'core',
  'RippleTarget': 'core',
  'setLines': 'core',
  'ShowOnDirtyErrorStateMatcher': 'core',
  'ThemePalette': 'core',
  'VERSION': 'core',
  'MAT_DATEPICKER_SCROLL_STRATEGY': 'datepicker',
  'MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY': 'datepicker',
  'MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER': 'datepicker',
  'MAT_DATEPICKER_VALIDATORS': 'datepicker',
  'MAT_DATEPICKER_VALUE_ACCESSOR': 'datepicker',
  'MatCalendar': 'datepicker',
  'MatCalendarBody': 'datepicker',
  'MatCalendarCell': 'datepicker',
  'MatCalendarCellCssClasses': 'datepicker',
  'MatCalendarHeader': 'datepicker',
  'MatCalendarView': 'datepicker',
  'MatDatepicker': 'datepicker',
  'matDatepickerAnimations': 'datepicker',
  'MatDatepickerContent': 'datepicker',
  'MatDatepickerInput': 'datepicker',
  'MatDatepickerInputEvent': 'datepicker',
  'MatDatepickerIntl': 'datepicker',
  'MatDatepickerModule': 'datepicker',
  'MatDatepickerToggle': 'datepicker',
  'MatDatepickerToggleIcon': 'datepicker',
  'MatMonthView': 'datepicker',
  'MatMultiYearView': 'datepicker',
  'MatYearView': 'datepicker',
  'yearsPerPage': 'datepicker',
  'yearsPerRow': 'datepicker',
  'DialogPosition': 'dialog',
  'DialogRole': 'dialog',
  'MAT_DIALOG_DATA': 'dialog',
  'MAT_DIALOG_DEFAULT_OPTIONS': 'dialog',
  'MAT_DIALOG_SCROLL_STRATEGY': 'dialog',
  'MAT_DIALOG_SCROLL_STRATEGY_FACTORY': 'dialog',
  'MAT_DIALOG_SCROLL_STRATEGY_PROVIDER': 'dialog',
  'MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY': 'dialog',
  'MatDialog': 'dialog',
  'MatDialogActions': 'dialog',
  'matDialogAnimations': 'dialog',
  'MatDialogClose': 'dialog',
  'MatDialogConfig': 'dialog',
  'MatDialogContainer': 'dialog',
  'MatDialogContent': 'dialog',
  'MatDialogModule': 'dialog',
  'MatDialogRef': 'dialog',
  'MatDialogState': 'dialog',
  'MatDialogTitle': 'dialog',
  'throwMatDialogContentAlreadyAttachedError': 'dialog',
  'MatDivider': 'divider',
  'MatDividerModule': 'divider',
  'EXPANSION_PANEL_ANIMATION_TIMING': 'expansion',
  'MAT_ACCORDION': 'expansion',
  'MAT_EXPANSION_PANEL_DEFAULT_OPTIONS': 'expansion',
  'MatAccordion': 'expansion',
  'MatAccordionBase': 'expansion',
  'MatAccordionDisplayMode': 'expansion',
  'MatAccordionTogglePosition': 'expansion',
  'matExpansionAnimations': 'expansion',
  'MatExpansionModule': 'expansion',
  'MatExpansionPanel': 'expansion',
  'MatExpansionPanelActionRow': 'expansion',
  'MatExpansionPanelContent': 'expansion',
  'MatExpansionPanelDefaultOptions': 'expansion',
  'MatExpansionPanelDescription': 'expansion',
  'MatExpansionPanelHeader': 'expansion',
  'MatExpansionPanelState': 'expansion',
  'MatExpansionPanelTitle': 'expansion',
  'getMatFormFieldDuplicatedHintError': 'form-field',
  'getMatFormFieldMissingControlError': 'form-field',
  'getMatFormFieldPlaceholderConflictError': 'form-field',
  'MAT_FORM_FIELD_DEFAULT_OPTIONS': 'form-field',
  'MatError': 'form-field',
  'MatFormField': 'form-field',
  'matFormFieldAnimations': 'form-field',
  'MatFormFieldAppearance': 'form-field',
  'MatFormFieldControl': 'form-field',
  'MatFormFieldDefaultOptions': 'form-field',
  'MatFormFieldModule': 'form-field',
  'MatHint': 'form-field',
  'MatLabel': 'form-field',
  'MatPlaceholder': 'form-field',
  'MatPrefix': 'form-field',
  'MatSuffix': 'form-field',
  'MatGridAvatarCssMatStyler': 'grid-list',
  'MatGridList': 'grid-list',
  'MatGridListModule': 'grid-list',
  'MatGridTile': 'grid-list',
  'MatGridTileFooterCssMatStyler': 'grid-list',
  'MatGridTileHeaderCssMatStyler': 'grid-list',
  'MatGridTileText': 'grid-list',
  'getMatIconFailedToSanitizeLiteralError': 'icon',
  'getMatIconFailedToSanitizeUrlError': 'icon',
  'getMatIconNameNotFoundError': 'icon',
  'getMatIconNoHttpProviderError': 'icon',
  'ICON_REGISTRY_PROVIDER': 'icon',
  'ICON_REGISTRY_PROVIDER_FACTORY': 'icon',
  'IconOptions': 'icon',
  'MAT_ICON_LOCATION': 'icon',
  'MAT_ICON_LOCATION_FACTORY': 'icon',
  'MatIcon': 'icon',
  'MatIconLocation': 'icon',
  'MatIconModule': 'icon',
  'MatIconRegistry': 'icon',
  'getMatInputUnsupportedTypeError': 'input',
  'MAT_INPUT_VALUE_ACCESSOR': 'input',
  'MatInput': 'input',
  'MatInputModule': 'input',
  'MatTextareaAutosize': 'input',
  'MAT_SELECTION_LIST_VALUE_ACCESSOR': 'list',
  'MatList': 'list',
  'MatListAvatarCssMatStyler': 'list',
  'MatListIconCssMatStyler': 'list',
  'MatListItem': 'list',
  'MatListModule': 'list',
  'MatListOption': 'list',
  'MatListSubheaderCssMatStyler': 'list',
  'MatNavList': 'list',
  'MatSelectionList': 'list',
  'MatSelectionListChange': 'list',
  '_MatMenu': 'menu',
  '_MatMenuBase': 'menu',
  '_MatMenuDirectivesModule': 'menu',
  'fadeInItems': 'menu',
  'MAT_MENU_DEFAULT_OPTIONS': 'menu',
  'MAT_MENU_PANEL': 'menu',
  'MAT_MENU_SCROLL_STRATEGY': 'menu',
  'MatMenu': 'menu',
  'matMenuAnimations': 'menu',
  'MatMenuContent': 'menu',
  'MatMenuDefaultOptions': 'menu',
  'MatMenuItem': 'menu',
  'MatMenuModule': 'menu',
  'MatMenuPanel': 'menu',
  'MatMenuTrigger': 'menu',
  'MenuPositionX': 'menu',
  'MenuPositionY': 'menu',
  'transformMenu': 'menu',
  'MAT_PAGINATOR_INTL_PROVIDER': 'paginator',
  'MAT_PAGINATOR_INTL_PROVIDER_FACTORY': 'paginator',
  'MatPaginator': 'paginator',
  'MatPaginatorIntl': 'paginator',
  'MatPaginatorModule': 'paginator',
  'PageEvent': 'paginator',
  'MAT_PROGRESS_BAR_LOCATION': 'progress-bar',
  'MAT_PROGRESS_BAR_LOCATION_FACTORY': 'progress-bar',
  'MatProgressBar': 'progress-bar',
  'MatProgressBarLocation': 'progress-bar',
  'MatProgressBarModule': 'progress-bar',
  'ProgressAnimationEnd': 'progress-bar',
  'MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS': 'progress-spinner',
  'MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY': 'progress-spinner',
  'MatProgressSpinner': 'progress-spinner',
  'MatProgressSpinnerDefaultOptions': 'progress-spinner',
  'MatProgressSpinnerModule': 'progress-spinner',
  'MatSpinner': 'progress-spinner',
  'ProgressSpinnerMode': 'progress-spinner',
  'MAT_RADIO_DEFAULT_OPTIONS': 'radio',
  'MAT_RADIO_DEFAULT_OPTIONS_FACTORY': 'radio',
  'MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR': 'radio',
  'MatRadioButton': 'radio',
  'MatRadioChange': 'radio',
  'MatRadioDefaultOptions': 'radio',
  'MatRadioGroup': 'radio',
  'MatRadioModule': 'radio',
  'fadeInContent': 'select',
  'MAT_SELECT_SCROLL_STRATEGY': 'select',
  'MAT_SELECT_SCROLL_STRATEGY_PROVIDER': 'select',
  'MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY': 'select',
  'MatSelect': 'select',
  'matSelectAnimations': 'select',
  'MatSelectChange': 'select',
  'MatSelectModule': 'select',
  'MatSelectTrigger': 'select',
  'SELECT_ITEM_HEIGHT_EM': 'select',
  'SELECT_MULTIPLE_PANEL_PADDING_X': 'select',
  'SELECT_PANEL_INDENT_PADDING_X': 'select',
  'SELECT_PANEL_MAX_HEIGHT': 'select',
  'SELECT_PANEL_PADDING_X': 'select',
  'SELECT_PANEL_VIEWPORT_PADDING': 'select',
  'transformPanel': 'select',
  'MAT_DRAWER_DEFAULT_AUTOSIZE': 'sidenav',
  'MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY': 'sidenav',
  'MatDrawer': 'sidenav',
  'matDrawerAnimations': 'sidenav',
  'MatDrawerContainer': 'sidenav',
  'MatDrawerContent': 'sidenav',
  'MatDrawerToggleResult': 'sidenav',
  'MatSidenav': 'sidenav',
  'MatSidenavContainer': 'sidenav',
  'MatSidenavContent': 'sidenav',
  'MatSidenavModule': 'sidenav',
  'throwMatDuplicatedDrawerError': 'sidenav',
  '_MatSlideToggleRequiredValidatorModule': 'slide-toggle',
  'MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS': 'slide-toggle',
  'MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR': 'slide-toggle',
  'MAT_SLIDE_TOGGLE_VALUE_ACCESSOR': 'slide-toggle',
  'MatSlideToggle': 'slide-toggle',
  'MatSlideToggleChange': 'slide-toggle',
  'MatSlideToggleDefaultOptions': 'slide-toggle',
  'MatSlideToggleModule': 'slide-toggle',
  'MatSlideToggleRequiredValidator': 'slide-toggle',
  'MAT_SLIDER_VALUE_ACCESSOR': 'slider',
  'MatSlider': 'slider',
  'MatSliderChange': 'slider',
  'MatSliderModule': 'slider',
  'MAT_SNACK_BAR_DATA': 'snack-bar',
  'MAT_SNACK_BAR_DEFAULT_OPTIONS': 'snack-bar',
  'MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY': 'snack-bar',
  'MatSnackBar': 'snack-bar',
  'matSnackBarAnimations': 'snack-bar',
  'MatSnackBarConfig': 'snack-bar',
  'MatSnackBarContainer': 'snack-bar',
  'MatSnackBarDismiss': 'snack-bar',
  'MatSnackBarHorizontalPosition': 'snack-bar',
  'MatSnackBarModule': 'snack-bar',
  'MatSnackBarRef': 'snack-bar',
  'MatSnackBarVerticalPosition': 'snack-bar',
  'SimpleSnackBar': 'snack-bar',
  'ArrowViewState': 'sort',
  'ArrowViewStateTransition': 'sort',
  'MAT_SORT_HEADER_INTL_PROVIDER': 'sort',
  'MAT_SORT_HEADER_INTL_PROVIDER_FACTORY': 'sort',
  'MatSort': 'sort',
  'MatSortable': 'sort',
  'matSortAnimations': 'sort',
  'MatSortHeader': 'sort',
  'MatSortHeaderIntl': 'sort',
  'MatSortModule': 'sort',
  'Sort': 'sort',
  'SortDirection': 'sort',
  'MAT_STEPPER_INTL_PROVIDER': 'stepper',
  'MAT_STEPPER_INTL_PROVIDER_FACTORY': 'stepper',
  'MatHorizontalStepper': 'stepper',
  'MatStep': 'stepper',
  'MatStepHeader': 'stepper',
  'MatStepLabel': 'stepper',
  'MatStepper': 'stepper',
  'matStepperAnimations': 'stepper',
  'MatStepperIcon': 'stepper',
  'MatStepperIconContext': 'stepper',
  'MatStepperIntl': 'stepper',
  'MatStepperModule': 'stepper',
  'MatStepperNext': 'stepper',
  'MatStepperPrevious': 'stepper',
  'MatVerticalStepper': 'stepper',
  'MatCell': 'table',
  'MatCellDef': 'table',
  'MatColumnDef': 'table',
  'MatFooterCell': 'table',
  'MatFooterCellDef': 'table',
  'MatFooterRow': 'table',
  'MatFooterRowDef': 'table',
  'MatHeaderCell': 'table',
  'MatHeaderCellDef': 'table',
  'MatHeaderRow': 'table',
  'MatHeaderRowDef': 'table',
  'MatRow': 'table',
  'MatRowDef': 'table',
  'MatTable': 'table',
  'MatTableDataSource': 'table',
  'MatTableModule': 'table',
  'MatTextColumn': 'table',
  '_MAT_INK_BAR_POSITIONER': 'tabs',
  '_MatInkBarPositioner': 'tabs',
  '_MatTabBodyBase': 'tabs',
  '_MatTabGroupBase': 'tabs',
  '_MatTabHeaderBase': 'tabs',
  '_MatTabLinkBase': 'tabs',
  '_MatTabNavBase': 'tabs',
  'MAT_TABS_CONFIG': 'tabs',
  'MatInkBar': 'tabs',
  'MatTab': 'tabs',
  'MatTabBody': 'tabs',
  'MatTabBodyOriginState': 'tabs',
  'MatTabBodyPortal': 'tabs',
  'MatTabBodyPositionState': 'tabs',
  'MatTabChangeEvent': 'tabs',
  'MatTabContent': 'tabs',
  'MatTabGroup': 'tabs',
  'MatTabHeader': 'tabs',
  'MatTabHeaderPosition': 'tabs',
  'MatTabLabel': 'tabs',
  'MatTabLabelWrapper': 'tabs',
  'MatTabLink': 'tabs',
  'MatTabNav': 'tabs',
  'matTabsAnimations': 'tabs',
  'MatTabsConfig': 'tabs',
  'MatTabsModule': 'tabs',
  'ScrollDirection': 'tabs',
  'MatToolbar': 'toolbar',
  'MatToolbarModule': 'toolbar',
  'MatToolbarRow': 'toolbar',
  'throwToolbarMixedModesError': 'toolbar',
  'getMatTooltipInvalidPositionError': 'tooltip',
  'MAT_TOOLTIP_DEFAULT_OPTIONS': 'tooltip',
  'MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY': 'tooltip',
  'MAT_TOOLTIP_SCROLL_STRATEGY': 'tooltip',
  'MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY': 'tooltip',
  'MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER': 'tooltip',
  'MatTooltip': 'tooltip',
  'matTooltipAnimations': 'tooltip',
  'MatTooltipDefaultOptions': 'tooltip',
  'MatTooltipModule': 'tooltip',
  'SCROLL_THROTTLE_MS': 'tooltip',
  'TOOLTIP_PANEL_CLASS': 'tooltip',
  'TooltipComponent': 'tooltip',
  'TooltipPosition': 'tooltip',
  'TooltipVisibility': 'tooltip',
  'MatNestedTreeNode': 'tree',
  'MatTree': 'tree',
  'MatTreeFlatDataSource': 'tree',
  'MatTreeFlattener': 'tree',
  'MatTreeModule': 'tree',
  'MatTreeNestedDataSource': 'tree',
  'MatTreeNode': 'tree',
  'MatTreeNodeDef': 'tree',
  'MatTreeNodeOutlet': 'tree',
  'MatTreeNodePadding': 'tree',
  'MatTreeNodeToggle': 'tree',
};
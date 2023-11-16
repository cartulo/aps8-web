import {NgModule} from '@angular/core';

// FORM
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {KnobModule} from 'primeng/knob';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';

// BUTTON
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';

// DATA
// import {FullCalendarModule} from '@fullcalendar/angular';
import {DataViewModule} from 'primeng/dataview';
import {GMapModule} from 'primeng/gmap';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {PaginatorModule} from 'primeng/paginator';
import {PickListModule} from 'primeng/picklist';
import {TableModule} from 'primeng/table';
import {TimelineModule} from 'primeng/timeline';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

// PANEL
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SplitterModule} from 'primeng/splitter';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';

// OVERLAY
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';

// FILE
import {FileUploadModule} from 'primeng/fileupload';

// MENU
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';

// CHART
import {ChartModule} from 'primeng/chart';

// MESSAGES
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';

// MEDIA
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';

// DRAGDROP
import {DragDropModule} from 'primeng/dragdrop';

// MISC
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BlockUIModule} from 'primeng/blockui';
import {ChipModule} from 'primeng/chip';
import {InplaceModule} from 'primeng/inplace';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SkeletonModule} from 'primeng/skeleton';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';

// DIRECTIVES
import {DeferModule} from 'primeng/defer';
import {FocusTrapModule} from 'primeng/focustrap';
import {RippleModule} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';

const importsForm = [
    AutoCompleteModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    StyleClassModule
];

const importButton = [
    ButtonModule,
    SplitButtonModule
];

const importData = [
    DataViewModule,
    // FullCalendarModule,
    GMapModule,
    OrderListModule,
    OrganizationChartModule,
    PaginatorModule,
    PickListModule,
    TableModule,
    TimelineModule,
    TreeModule,
    TreeTableModule,
    VirtualScrollerModule
];

const importPanel = [
    AccordionModule,
    CardModule,
    DividerModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    TabViewModule,
    ToolbarModule
];

const importOverlay = [
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    OverlayPanelModule,
    SidebarModule,
    TooltipModule
];

const importFile = [
    FileUploadModule
];

const importMenu = [
    BreadcrumbModule,
    ContextMenuModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    SlideMenuModule,
    StepsModule,
    TabMenuModule,
    TieredMenuModule
];

const importChart = [
    ChartModule
];

const importMessages = [
    MessagesModule,
    MessageModule,
    ToastModule
];

const importMedia = [
    CarouselModule,
    GalleriaModule,
    ImageModule
];

const importDragDrop = [
    DragDropModule
];

const importMisc = [
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    BlockUIModule,
    ChipModule,
    InplaceModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ScrollTopModule,
    SkeletonModule,
    TagModule,
    TerminalModule
];

const importDirectives = [
    DeferModule,
    FocusTrapModule,
    RippleModule
];

// FullCalendarModule.registerPlugins([
//     dayGridPlugin,
//     timeGridPlugin,
//     interactionPlugin
// ]);

@NgModule({
    imports: [
        ...importsForm,
        ...importButton,
        ...importData,
        ...importPanel,
        ...importOverlay,
        ...importFile,
        ...importMenu,
        ...importChart,
        ...importMessages,
        ...importMedia,
        ...importDragDrop,
        ...importMisc,
        ...importDirectives
    ],
    providers: [
        ConfirmationService,
        DialogService,
        MessageService
    ],
    exports: [
        ...importsForm,
        ...importButton,
        ...importData,
        ...importPanel,
        ...importOverlay,
        ...importFile,
        ...importMenu,
        ...importChart,
        ...importMessages,
        ...importMedia,
        ...importDragDrop,
        ...importMisc,
        ...importDirectives
    ]
})
export class PrimeNGModule {
}

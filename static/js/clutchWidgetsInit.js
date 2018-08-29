/*------------------------------------------------------------
    CLUTCH WIDGETS INIT
    [Please read documentation for additional Information] 
--------------------------------------------------------------*/

function clutchWidgetsInit(){

    // Panels Init
    if($('.cpanel').length){
        $('.cpanel').clutchWidgets({

            //Default Title
            title: '',

            //Make structure
            makeStructure: true,

            //Make Draggable
            makeDraggable: true,

            //Ajax Content Loading
            ajaxContent: true,

            //Local Storage Support
            localStorage: true,

            //Class of storage clear(Global)
            clearStorageClass: 'clear-cw',

            //Storage Key
            storageKey: 'naveet',

            //Title Edit Popover
            editTitle: true,

            //BG Transition after title acceptance
            editTransitionColor: '#95A5A6',

            //Popover Placement
            editPlace: 'bottom',

            //Highlight Popover
            highlightBtn: true,

            //Icon Class
            highlightBtnClass: 'fa fa-filter',

            //Highlight Label
            highlightBtnLabel: 'Highlight',

            //Highlight Label Placement
            highlightLabelPlace: 'bottom',

            //Highlight Popover Placement
            highlightPopoverPlace: 'left',

            //Toogle Button
            toggleBtn: true,

            //Icon Class
            toggleBtnClass: 'fa fa-chevron-up fa-chevron-down',

            //Toggle Label
            toggleBtnLabel: 'Toggle',

            //Toggle Label Placement
            toggleLabelPlace: 'bottom',

            //Toggle Speed
            toggleSpeed: 200,

            //Remove Button
            removeBtn: true,

            //Icon Class
            removeBtnClass: "fa fa-times",

            //Remove Label
            removeBtnLabel: 'Remove',

            //Remove Label Placement
            removeLabelPlace: 'bottom',

            //Remove Speed
            removeSpeed: 200,

            //Clear Button
            clearBtn: true,

            //icon Class
            clearBtnClass: "fa fa-power-off",

            //Clear Label
            clearBtnLabel: 'Clear storage',

            //Clear Label Placement
            clearLabelPlace: 'left',

            //Colors Array (Order Dependent)
            colors: 'sky-blue dark-blue brown red grey black light-green green yellow orange pink purple default',
            
            //Color Button
            colorBtn: true,

            //Icon Class
            colorClass: 'fa fa-gears',

            //Color Label
            colorBtnLabel: 'Color',

            //Color Label Placement
            colorLabelPlace: 'left',

            //Global theme modal
            modalLocation: '#theme-modal',

            //Modal Button
            modalBtn: true,

            //Icon Class
            modalBtnClass: "fa fa-credit-card",

            //Modal Label
            modalBtnLabel: 'Modal',

            //Modal Label Placement
            modalLabelPlace: 'bottom',

            //Modal Content Location
            modalContentLocation: '#theme-modal-content',

            //Expand Button
            expandBtn: true,

            //Icon Class
            expandBtnClass: 'fa fa-expand fa-collapse',

            //Expand Label
            expandBtnLabel: '최대화',

            //Expand Label Placement
            expandLabelPlace: 'bottom',

            //Refresh Button
            refreshBtn: true,

            //Icon Class
            refreshBtnClass: 'fa fa-refresh',

            //Refresh Label
            refreshBtnLabel: 'Refresh',

            //Refresh Label Placement
            refreshLabelPlace: 'bottom',

            //Button Order
            buttonOrder: 'process refresh modal color highlight fullscreen clear toggle remove',

            //Show Process Icon
            showProcess: true,

            //Process icon class
            processClass: 'fa fa-gear fa-spin',

            //Process icon duration
            processTime: 1000
        });
    }

    //Handler
    $('#switch-style').click(function(e){
        e.preventDefault();
        $(this).closest('.cpanel').find('.cpanel-head-button .nav').toggleClass('nav-tabs nav-pills');
    });

    $('#left-right').click(function(e){
        e.preventDefault();
        $(this).closest('.cpanel').toggleClass('cpanel-tabs-left');
    });

    // tooltips
    $('body [data-toggle=tooltip]').tooltip();

    //popovers
    $('body [data-toggle=popover]').popover();
    $('body [data-toggle=popover-hover]').popover({
        trigger : "hover"
    });
}

$(document).ready(function() {
    //Widgets Init
    clutchWidgetsInit();
});
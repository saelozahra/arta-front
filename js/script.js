$(document).ready(function ($) {

    if ($('.hotel_rooms_wrapper').length) {
        $('.hotel_rooms_wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: true,
            arrows: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 799,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    var to, from;
    to = $("#dp_to").persianDatepicker({
        // inline: true,
        // altField: '.range-to-example-alt',
        format: 'dddd DD MMMM',
        // altFormat: 'LLLL',
        initialValue: false,
        onSelect: function (unix) {
            to.touched = true;
            if (from && from.options && from.options.maxDate != unix) {
                var cachedValue = from.getState().selected.unixDate;
                from.options = {maxDate: unix};
                if (from.touched) {
                    from.setDate(cachedValue);
                }
            }
        }
    });

    from = $("#dp_from").persianDatepicker({
        // inline: true,
        // altField: '.range-from-example-alt',
        format: 'dddd DD MMMM',
        // altFormat: 'LLLL',
        initialValue: false,
        onSelect: function (unix) {
            from.touched = true;
            if (to && to.options && to.options.minDate != unix) {
                var cachedValue = to.getState().selected.unixDate;
                to.options = {minDate: unix};
                if (to.touched) {
                    to.setDate(cachedValue);
                }
            }
        }
    });

})


/** ================================================================================
 *                               GALLERY TAB CONTROL
 ===================================================================================*/
 const GalleryTabs = document.querySelectorAll('.gallery_tab')
 const GalleryContents = document.querySelectorAll('.gallery_content')
 GalleryTabs.forEach(tab => {
    let target = tab.attributes['data-tab'].nodeValue
    tab.onclick = () => {
        GalleryTabs.forEach(t => {
            if(t === tab) {
                t.classList.add('active')
            } else {
                t.classList.remove('active')
            }
        })
        GalleryContents.forEach(c => {
            if(c.attributes['data-content'].nodeValue === target) {
                c.classList.add('active')
            } else {
                c.classList.remove('active')
            }
        })
    }
})
// Initial active tab
GalleryTabs[0].click()


/** Mobile Menu */
function showMenu() {
    document.querySelector(".sm_menu_frame").style.display = 'block';
}

function hideMenu() {
    document.querySelector(".sm_menu_frame").style.display = 'none';
}
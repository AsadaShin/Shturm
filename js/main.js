$(document).ready(function () {
    // SLIDER (SLICK)
    $('.portfolio-slider__list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // MODAL
    $('.js-open-modal').click(function (event) {
        event.preventDefault();

        var modalName = $(this).attr('data-modal');
        var modal = $('.js-modal[data-modal="' + modalName + '"]');
        modal.addClass('is-show');
        $('.overlay').addClass('is-show');
        $('body').css('overflow', 'hidden')
    });

    $('.js-close-modal').click(function () {
        $(this).parent('.js-modal').removeClass('is-show');
        $('.overlay').removeClass('is-show');
        $('body').css('overflow', '')
    });

    $('.overlay').click(function () {
        $('.js-modal.is-show').removeClass('is-show');
        $(this).removeClass('is-show');
        $('body').css('overflow', '')
    });

    // TABS
    $('.js-tab-trigger').click(function (event) {
        event.preventDefault();

        var tabName = $(this).attr('data-tab');
        var tab = $('.js-tab-content[data-tab="' + tabName + '"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');

        tab.addClass('active')
    });

    $('.js-tab-trigger:first').click();

    // RAITING
    const raitingItemsList = $('.raiting__item');
    const raitingItemsArray = Array.prototype.slice.call(raitingItemsList);

    raitingItemsArray.forEach(item =>
        item.addEventListener('click', () => {
            const {
                itemValue
            } = item.dataset;
            item.parentNode.dataset.totalValue = item.dataset.itemValue;
        })
    )
});

$(function() {

    // ----- �������� -----
    var $tabs = $('.tab');

    $tabs.on('click', function(e) {
        // �� ������������ ������� �� �������� ��������
        if (this.classList.contains('active-tab')) return;

        // �������� �������� ������� � �� �����
        var $activeTab = $('.active-tab');
        var ti = $activeTab.attr('data-tab-index');

        // ������� �� ���������� � �������� �����
        $('.tab-body[data-tab-index="'+ti+'"]').slideToggle();
        $('.active-tab').removeClass('active-tab');

        // ������� �������� ������� �������
        $activeTab = $(this);
        $activeTab.addClass('active-tab');

        ti = $activeTab.attr('data-tab-index');
        $('.tab-body[data-tab-index="'+ti+'"]').slideToggle();

        e.preventDefault();
    });

    // ----- ��������� -----
    var $form = $('.form');
    var $formFS = $form.find('.fieldset');

    $formFS.on('focusin mouseenter', 'input', function(e) {
        $('.hint').stop(true, true);
        var $hint = $(this.parentNode).find('.hint');
        $hint.fadeIn();
    });

    $formFS.on('focusout mouseleave', 'input', function(e) {
        // ���� ������� � ������ - �� ������� ���������
        if (this === document.activeElement) return;

        var $hint = $(this.parentNode).find('.hint');
        $hint.stop(true, true).fadeOut();
    });

    $form.on('click', '#show-help',function(e) {
        $('.hint').stop(true, true).fadeIn();
    });
});

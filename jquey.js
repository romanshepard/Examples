$(document).ready(function(){
  
    $(".burger-menu").on("click",function(){
        $('.menu').slideToggle();
         /*slideToggle() является функцией jQuery, которая плавно скрывает или отображает элемент, используя анимацию с раздвижением вверх или вниз (эффект скольжения).

Когда функция slideToggle() вызывается на элементе, который скрыт, она делает его видимым с плавным раздвижением вниз (если его высота не равна 0) или вверх (если высота равна 0). Если элемент видим, slideToggle() скроет его с плавным раздвижением вверх.*/
    });

// Плавный скролл к элементу по data-scroll атрибуту
$('[data-scroll]').on('click', function(event) {
    const targetId = $(this).data('scroll');
    console.log(targetId);
    const targetElement = $('[data-scroll-target="' + targetId + '"]');
  
    if (targetElement.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 1000);
    }
  });


/*tabs (accordion)*/
  $('[data-toggle="tab"]').click(function() {
    const targetId = $(this).data('target');
    $('#' + targetId).toggleClass('show');
  });



  /*filter*/
  $('.filter').on('click', 'button', function() {
    const category = $(this).data('category');
  
    if (category === 'all') {
      $('.item').show(); // Показать все элементы если выбран 'All'
    } else {
      $('.item').hide(); // Скрыть все элементы
      $(`.item[data-category="${category}"]`).show(); // Показать элементы выбранной категории
    }
  });

/**search к input */
/*
  $('#searchInput').on('input', function() {
    const searchText = $(this).val().toLowerCase();

    $('.item').each(function() {
      const itemText = $(this).text().toLowerCase();
      if (itemText.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
  */

  /**search к input button*/
  $('.button__').on('click', function() {
    const searchText = $("#searchInput").val().toLowerCase();

    $('.item').each(function() {
      const itemText = $(this).text().toLowerCase();
      if (itemText.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

});


  
  
  
  


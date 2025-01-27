// При клике на кнопку гамбургера добавляем/удаляем класс active для показа/скрытия меню
document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Включаем или выключаем класс active у меню
    document.querySelector('.nav_meniu').classList.toggle('active');
  });
  
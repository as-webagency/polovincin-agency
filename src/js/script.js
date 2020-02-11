$(document).ready(function(){//страница загрузилась
    $('.works-block__type').hover(function(){	//при наведении на элемент:
        var helptext = $(this).attr('data') 	//текст подсказки
        $('.works-block__tooltip').html(helptext).show();	//размещаем текст подсказки в блок тултипа и делаем его видимым
        //далее устанавливаем тултипу значения позиции с помощью абсолютного позиционирования:
        //позиция элемента сверху + высота элемента -> $(this).offset().top+$(this).height()
        //позиция элемента слева -> $(this).offset().left
        $('.works-block__tooltip').offset({top:$(this).offset().top+$(this).height(),left:$(this).offset().left});
    },function(){
        $('.works-block__tooltip').hide();	//скрываем тултип 
    });
});
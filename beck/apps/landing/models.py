from django.db import models

class Banner(models.Model):
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    subtitle = models.TextField(verbose_name="Подзаголовок", blank=True, null=True)
    image = models.ImageField(upload_to="banners/", verbose_name="Картинка")
    button_text = models.CharField(max_length=100, verbose_name="Текст кнопки", blank=True, null=True)

    class Meta:
        verbose_name = "Баннер"
        verbose_name_plural = "Баннеры"

    def __str__(self):
        return self.title


class About(models.Model):
    title = models.CharField(max_length=255, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    image = models.ImageField(upload_to="about/", verbose_name="Картинка")

    class Meta:
        verbose_name = "О нас (блок)"
        verbose_name_plural = "О нас"

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название услуги")
    description = models.TextField(verbose_name="Описание")
    icon = models.ImageField(upload_to="services/icons/", verbose_name="Иконка (картинка)", blank=True, null=True)

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"

    def __str__(self):
        return self.title


class Stage(models.Model):
    step_number = models.PositiveIntegerField(verbose_name="Номер этапа")
    title = models.CharField(max_length=255, verbose_name="Название этапа")
    description = models.TextField(verbose_name="Описание")

    class Meta:
        verbose_name = "Этап работы"
        verbose_name_plural = "Этапы работы"
        ordering = ['step_number']

    def __str__(self):
        return f"{self.step_number}. {self.title}"


class Portfolio(models.Model):
    title = models.CharField(max_length=255, verbose_name="Название проекта")
    image = models.ImageField(upload_to="portfolio/", verbose_name="Картинка")
    link = models.URLField(verbose_name="Ссылка на проект", blank=True, null=True)

    class Meta:
        verbose_name = "Проект портфолио"
        verbose_name_plural = "Портфолио"

    def __str__(self):
        return self.title


class Team(models.Model):
    name = models.CharField(max_length=255, verbose_name="Имя")
    position = models.CharField(max_length=255, verbose_name="Должность")
    photo = models.ImageField(upload_to="team/", verbose_name="Фото")

    class Meta:
        verbose_name = "Член команды"
        verbose_name_plural = "Команда"

    def __str__(self):
        return self.name


class Review(models.Model):
    author = models.CharField(max_length=255, verbose_name="Имя автора")
    text = models.TextField(verbose_name="Текст отзыва")
    avatar = models.ImageField(upload_to="reviews/avatars/", verbose_name="Фото автора", blank=True, null=True)
    rating = models.PositiveSmallIntegerField(verbose_name="Оценка (1-5)", default=5)

    class Meta:
        verbose_name = "Отзыв"
        verbose_name_plural = "Отзывы"

    def __str__(self):
        return f"{self.author} - {self.rating}/5"


class Forum(models.Model):
    question = models.CharField(max_length=500, verbose_name="Вопрос (тема)")
    answer = models.TextField(verbose_name="Ответ")

    class Meta:
        verbose_name = "Вопрос-ответ (Форум)"
        verbose_name_plural = "Вопросы-ответы (Форум)"

    def __str__(self):
        return self.question

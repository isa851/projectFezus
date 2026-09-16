from django.db import models

class HeaderFooter(models.Model):
    logo = models.ImageField(upload_to='logo', verbose_name="Логотип")
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    contact_number = models.CharField(max_length=20, verbose_name="Номер телефона")
    contact_email = models.EmailField(verbose_name="Email")
    

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Шапка и подвал"
        verbose_name_plural = "Шапка и подвал"

class MetaTags(models.Model):
    title_why_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Почему Fezus\" ")
    description_why_fezus = models.TextField(verbose_name="Описание \"Почему Fezus\" ")

    title_service_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Услуги\" ")
    description_service_fezus = models.TextField(verbose_name="Описание \"Услуги\" ")

    title_stages_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Этапы\" ")
    description_stages_fezus = models.TextField(verbose_name="Описание \"Этапы\" ")

    title_technology_stack_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Технологический стек\" ")
    description_technology_stack_fezus = models.TextField(verbose_name="Описание \"Технологический стек\" ")

    title_team_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Команда\" ")
    description_team_fezus = models.TextField(verbose_name="Описание \"Команда\" ")

    title_forum_fezus = models.CharField(max_length=100, verbose_name="Заголовок \"Форум\" ")
    description_forum_fezus = models.TextField(verbose_name="Описание \"Форум\" ")




    def __str__(self):
        return "Мета теги"

    class Meta:
        verbose_name = "Мета теги"
        verbose_name_plural = "Мета теги"


class Banner(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    image = models.ImageField(upload_to='banner', verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Баннер"
        verbose_name_plural = "Баннеры"


class WhyFezus(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Почему Fezus"
        verbose_name_plural = "Почему Fezus"


class AboutFezus(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description1 = models.TextField(verbose_name="Описание 1")
    description2 = models.TextField(verbose_name="Описание 2")
    image = models.ImageField(upload_to='about-fezus', verbose_name="Изображение")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "О нас"
        verbose_name_plural = "О нас"
        

class ServicesFezus(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"


class StagesFezus(models.Model):
    title = models.CharField(max_length=100, verbose_name="Заголовок")
    description = models.TextField(verbose_name="Описание")
    number = models.IntegerField(verbose_name="Номер")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Этап"
        verbose_name_plural = "Этапы"


class TechnologyStackFezus(models.Model):
    category = models.CharField(max_length=100, verbose_name="Категория (Например: Фронтенд)", default="")
    icon_name = models.CharField(max_length=100, verbose_name="Название иконки (Lucide)", default="")
    skills = models.TextField(verbose_name="Навыки (через запятую)", default="")

    def __str__(self):
        return self.category

    class Meta:
        verbose_name = "Технологический стек"
        verbose_name_plural = "Технологический стек"


class TeamsFezus(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    role = models.CharField(max_length=100, verbose_name="Роль")
    image = models.ImageField(upload_to='teams-fezus', verbose_name="Изображение")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Команда"
        verbose_name_plural = "Команда"


class ForumFezus(models.Model):
    telegram = models.CharField(max_length=100, verbose_name="Telegram", blank=True, default="")
    company_name = models.CharField(max_length=100, verbose_name="Название компании", blank=True, default="")
    description = models.TextField(verbose_name="Описание задачи", blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания", null=True, blank=True)

    def __str__(self):
        return f"{self.telegram} - {self.company_name}"

    class Meta:
        verbose_name = "Заявка с форума"
        verbose_name_plural = "Заявки с форума"
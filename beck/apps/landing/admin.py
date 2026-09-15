from django.contrib import admin
from .models import Banner, About, Service, Stage, Portfolio, Team, Review, Forum

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ('title', 'button_text')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title',)

@admin.register(Stage)
class StageAdmin(admin.ModelAdmin):
    list_display = ('step_number', 'title')
    ordering = ('step_number',)

@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'link')

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('author', 'rating')

@admin.register(Forum)
class ForumAdmin(admin.ModelAdmin):
    list_display = ('question',)

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    HeaderFooterViewSet, MetaTagsViewSet, BannerViewSet, WhyFezusViewSet, 
    AboutFezusViewSet, ServicesFezusViewSet, StagesFezusViewSet, 
    TechnologyStackFezusViewSet, TeamsFezusViewSet, ForumFezusViewSet
)

router = DefaultRouter()
router.register(r'header-footer', HeaderFooterViewSet)
router.register(r'meta-tags', MetaTagsViewSet)
router.register(r'banners', BannerViewSet)
router.register(r'why-fezus', WhyFezusViewSet)
router.register(r'about-fezus', AboutFezusViewSet)
router.register(r'services-fezus', ServicesFezusViewSet)
router.register(r'stages-fezus', StagesFezusViewSet)
router.register(r'technology-stack', TechnologyStackFezusViewSet)
router.register(r'teams', TeamsFezusViewSet)
router.register(r'forums', ForumFezusViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

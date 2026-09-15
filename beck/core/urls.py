from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static
from django.urls import include, path, re_path



urlpatterns = [
    path('admin/', admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += (
        static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + 
        static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    )
else:
    urlpatterns += [
        re_path(r'^back_media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    ]
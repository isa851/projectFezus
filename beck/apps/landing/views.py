import os
import urllib.request
import urllib.parse
from dotenv import load_dotenv

load_dotenv()

from rest_framework import viewsets
from .models import (
    HeaderFooter, MetaTags, Banner, WhyFezus, AboutFezus, 
    ServicesFezus, StagesFezus, TechnologyStackFezus, TeamsFezus, ForumFezus
)
from .serializers import (
    HeaderFooterSerializer, MetaTagsSerializer, BannerSerializer, WhyFezusSerializer, 
    AboutFezusSerializer, ServicesFezusSerializer, StagesFezusSerializer, 
    TechnologyStackFezusSerializer, TeamsFezusSerializer, ForumFezusSerializer
)

class HeaderFooterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeaderFooter.objects.all()
    serializer_class = HeaderFooterSerializer

class MetaTagsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MetaTags.objects.all()
    serializer_class = MetaTagsSerializer

class BannerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

class WhyFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = WhyFezus.objects.all()
    serializer_class = WhyFezusSerializer

class AboutFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutFezus.objects.all()
    serializer_class = AboutFezusSerializer

class ServicesFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ServicesFezus.objects.all()
    serializer_class = ServicesFezusSerializer

class StagesFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StagesFezus.objects.all()
    serializer_class = StagesFezusSerializer

class TechnologyStackFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TechnologyStackFezus.objects.all()
    serializer_class = TechnologyStackFezusSerializer

class TeamsFezusViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamsFezus.objects.all()
    serializer_class = TeamsFezusSerializer

class ForumFezusViewSet(viewsets.ModelViewSet):
    queryset = ForumFezus.objects.all()
    serializer_class = ForumFezusSerializer
    http_method_names = ['get', 'post']

    def perform_create(self, serializer):
        instance = serializer.save()
        tg_api_key = os.environ.get("TG_API_KEY")
        id_tg = os.environ.get("ID_TG_")
        if tg_api_key and id_tg:
            text = f"🔥 Новая заявка!\n\nTelegram: {instance.telegram}\nКомпания: {instance.company_name}\nОписание: {instance.description}"
            url = f"https://api.telegram.org/bot{tg_api_key}/sendMessage"
            data = urllib.parse.urlencode({"chat_id": id_tg, "text": text}).encode("utf-8")
            try:
                req = urllib.request.Request(url, data=data)
                urllib.request.urlopen(req)
            except Exception as e:
                print("Telegram sending error:", e)

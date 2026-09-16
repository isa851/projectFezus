from rest_framework import serializers
from .models import (
    HeaderFooter, MetaTags, Banner, WhyFezus, AboutFezus, 
    ServicesFezus, StagesFezus, TechnologyStackFezus, TeamsFezus, ForumFezus
)

class HeaderFooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeaderFooter
        fields = ['logo','title', 'description', 'contact_number', 'contact_email']

class MetaTagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetaTags
        fields = ['title_why_fezus', 'description_why_fezus', 'title_service_fezus', 'description_service_fezus',  'title_stages_fezus', 'description_stages_fezus', 'title_technology_stack_fezus', 'description_technology_stack_fezus', 'title_team_fezus', 'description_team_fezus', 'title_forum_fezus', 'description_forum_fezus']

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['title', 'description', 'image']

class WhyFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyFezus
        fields = ['title', 'description']

class AboutFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutFezus
        fields = ['title', 'description1', 'description2', 'image']

class ServicesFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesFezus
        fields = ['title', 'description']

class StagesFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = StagesFezus
        fields = ['title', 'description', 'number']

class TechnologyStackFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologyStackFezus
        fields = ['id', 'category', 'icon_name', 'skills']

class TeamsFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamsFezus
        fields = ['name', 'role', 'image']

class ForumFezusSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumFezus
        fields = ['id', 'telegram', 'company_name', 'description', 'created_at']

from django.contrib import admin
from .models import (
    HeaderFooter, MetaTags, Banner, WhyFezus, AboutFezus, 
    ServicesFezus, StagesFezus, TechnologyStackFezus, TeamsFezus, ForumFezus
)

admin.site.register(HeaderFooter)
admin.site.register(MetaTags)
admin.site.register(Banner)
admin.site.register(WhyFezus)
admin.site.register(AboutFezus)
admin.site.register(ServicesFezus)
admin.site.register(StagesFezus)
admin.site.register(TechnologyStackFezus)
admin.site.register(TeamsFezus)
admin.site.register(ForumFezus)

from django.conf.urls import include, url
from rest_framework import routers

from .api import CardViewSet

router = routers.DefaultRouter()
router.register('cards', CardViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
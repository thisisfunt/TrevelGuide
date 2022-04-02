from django.contrib import admin
from django.urls import path, include
from locations.views import *

urlpatterns = [
    path('location/searchvitiesbypart', SearchCitiesByPart.as_view())
]

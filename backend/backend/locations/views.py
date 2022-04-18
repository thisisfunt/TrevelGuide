from rest_framework.response import Response
from rest_framework.views import APIView
from locations.models import City, Location
from django.core import serializers


class SearchCitiesByPart(APIView):
	def get(self, request):
		if not ("string" in request.GET.keys()):
			return Response("{\"error\": \"not param string in request\", \"status\": 1}")
		cities = City.objects.filter(name__contains=request.GET["string"])
		return Response(serializers.serialize("json", cities))


class GetLocationsByCityId(APIView):
	def get(self, request):
		if not ("id" in request.GET.keys()):
			return Response("{\"error\": \"not param id in request\", \"status\": 1}")
		locations = Location.objects.filter(city__id=request.GET["id"])
		return Response(serializers.serialize("json", locations))

class GetLocationById(APIView):
	def get(self, request):
		if not ("id" in request.GET.keys()):
			return Response("{\"error\": \"not param id in request\", \"status\": 1}")
		locations = Location.objects.filter(id=request.GET["id"])
		if len(locations) == 0:
			return Response("{\"error\": \"not found\", \"status\": 1}")
		return Response(serializers.serialize("json", locations))

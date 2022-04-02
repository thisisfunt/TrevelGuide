from rest_framework.response import Response
from rest_framework.views import APIView
from locations.models import City
from django.core import serializers


class SearchCitiesByPart(APIView):
	def get(self, request):
		if not ("string" in request.GET.keys()):
			return Response({"error":"not param 'string' in request"})
		cities = City.objects.filter(name__contains=request.GET["string"])
		return Response(serializers.serialize("json", cities))

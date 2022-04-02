from django.db import models


class Country(models.Model):
	name = models.CharField(max_length=255)
	discription = models.TextField(default="")

	def __str__(self):
		return self.name

class City(models.Model):
	name = models.CharField(max_length=255)
	discription = models.TextField(default="")
	password = models.CharField(max_length=255)
	county = models.ForeignKey(Country, on_delete=models.CASCADE)

	def __str__(self):
		return self.name


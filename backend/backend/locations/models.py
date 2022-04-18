from django.db import models


class Country(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField(default="")

	def __str__(self):
		return self.name

class City(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField(default="")
	county = models.ForeignKey(Country, on_delete=models.CASCADE)

	def __str__(self):
		return self.name


class Location(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField(default="")
	price = models.IntegerField(default=None)
	image = models.ImageField(upload_to='images/locations/')
	city = models.ForeignKey(City, on_delete=models.CASCADE)

	def __str__(self):
		return self.name
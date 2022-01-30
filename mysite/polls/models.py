from django.db import models
from taggit.managers import TaggableManager

# Create your models here.
class Profile(models.Model):
    image = models.ImageField(upload_to ='uploads/')
    name = models.CharField(max_length=200)
    tagline = models.CharField(max_length=500)
    role = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    bio = models.TextField()
    skills = TaggableManager()
    interests = models.TextField()
    twitter = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    portfolio = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    email = models.EmailField()
    company = models.URLField(blank=True)
    
    def __str__(self):
        return self.name
    
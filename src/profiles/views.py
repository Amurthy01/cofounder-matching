from django.shortcuts import render, redirect
from .models import Profile
from django.contrib.auth.forms import UserCreationForm, authenticate, login, logout
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from curses.ascii import HT
from dataclasses import dataclass
from genericpath import exists
import re
from django.http import JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import HttpResponse

# Create your views here.

def profile_view(request):
    profile_objects = Profile.objects.all()
    context = {
        'profile_objects': profile_objects
    }
    return render(request, "/templates/index.html", context)

def index(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'GET':
        return render(request, signup.html)
    else:
        name = request.POST.get('name')
        email = request.POST.get('email')
        location = request.POST.get('location')
        imageName = request.POST.get('image')
        request.FILES = ('imageName')
        tagline = request.POST.get('tagline')
        bio = request.POST.get('bio')
        role = request.POST.get('role')
        skills = request.POST.get('skills')
        interests = request.POST.get('interests')
        instagram = request.POST.get('instagram')
        twitter = request.POST.get('twitter')
        linkedin = request.POST.get('linkedin')
        company = request.POST.get('company')
        portfolio = request.POST.get('portfolio')
        
        
        user = new User()
class ReactView(APIView):
    serializer_class = ReactSerializer
    def get(self, request):
        info = [{"image": info.image, "name":info.name, "location":info.location, "role": info.role, "interests": info.interests, "instagram": info.instagram, "email": info.email}]
        for info in React.objects.all():
            return response(info)
    
    def post(self, request):
        serializer = ReactSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

def signup(request):
    if (request.method == "POST"):
        name = request.POST.get('first_name')
        email = request.POST.get('email')
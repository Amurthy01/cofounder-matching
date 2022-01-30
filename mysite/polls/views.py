from django.shortcuts import render
from django.http import HttpResponse
from .models import Profile

def profile_list_view(request):
    profile_objects = Profile.objects.all()
    context = {
        'profile_objects': profile_objects
    }
    return render(request, "index.html", context)

# Create your views here.

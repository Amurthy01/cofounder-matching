from django.shortcuts import render
from .models import Profile

# Create your views here.

def profile_view(request):
    profile_objects = Profile.objects.all()
    context = {
        'profile_objects': profile_objects
    }
    return render(request, "/templates/index.html", context)
from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['image', 'name', 'location', 'role', 'interests', 'instagram', 'email']
        

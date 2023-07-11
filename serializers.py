from rest_framework import serializers
from .models import TimeClock
class TimeClockSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeClock
        fields =['id','location',current_time]